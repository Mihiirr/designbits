import { Prisma } from "@prisma/client"
import { json } from "remix"
import { ERROR_CODES, IS_PRODUCTION } from "./constants"
import { PrismaErrorCodesEnum } from "~/services/db/prisma-error-codes.enum"
import {
  BadRequestException,
  ConflictException,
  GoneException,
  InternalServerErrorException,
  NotFoundException,
} from "./response-helpers.server"
import { EnumValues } from "enum-values"

const isPrismaKnownException = (
  err: unknown,
): err is Prisma.PrismaClientKnownRequestError =>
  err instanceof Prisma.PrismaClientKnownRequestError

const isPrismaClientValidationException = (
  err: unknown,
): err is Prisma.PrismaClientValidationError =>
  err instanceof Prisma.PrismaClientValidationError

const handlePrismaClientValidationError = (
  error: Prisma.PrismaClientValidationError,
) => {
  const exceptionArguments = {
    data: null,
    errors: {
      type: ERROR_CODES.DATABASE_ERROR,
      message: error.message,
    },
  }
  return BadRequestException(exceptionArguments)
}

const handlePrismaKnownError = (
  error: Prisma.PrismaClientKnownRequestError,
) => {
  const exceptionArguments = {
    data: null,
    errors: {
      type: ERROR_CODES.DATABASE_ERROR,
      name: EnumValues.getNameFromValue(PrismaErrorCodesEnum, error.code),
      code: error.code,
      message: error.message,
      meta: error.meta,
    },
  }

  switch (error.code as PrismaErrorCodesEnum) {
    case PrismaErrorCodesEnum.RecordNotFound:
    case PrismaErrorCodesEnum.ConnectedRecordsNotFound:
    case PrismaErrorCodesEnum.RelatedRecordNotFound:
    case PrismaErrorCodesEnum.DependedRecordsNotFound:
      return NotFoundException(exceptionArguments)
    case PrismaErrorCodesEnum.InputValueTooLong:
    case PrismaErrorCodesEnum.StoredValueIsInvalid:
    case PrismaErrorCodesEnum.TypeMismatch:
    case PrismaErrorCodesEnum.TypeMismatchInvalidCustomType:
    case PrismaErrorCodesEnum.InconsistentColumnData:
      return BadRequestException(exceptionArguments)
    case PrismaErrorCodesEnum.UniqueKeyViolation:
    case PrismaErrorCodesEnum.ForeignKeyViolation:
    case PrismaErrorCodesEnum.ConstraintViolation:
    case PrismaErrorCodesEnum.NullConstraintViolation:
    case PrismaErrorCodesEnum.RelationViolation:
      return ConflictException(exceptionArguments)
    case PrismaErrorCodesEnum.TableDoesNotExist:
    case PrismaErrorCodesEnum.ColumnDoesNotExist:
      return GoneException(exceptionArguments)
    default:
      return InternalServerErrorException(exceptionArguments)
  }
}

export default function errorHandler(error: any) {
  const isPrismaInternalError =
    error instanceof Prisma.PrismaClientUnknownRequestError ||
    error instanceof Prisma.PrismaClientRustPanicError ||
    error instanceof Prisma.PrismaClientInitializationError

  if (isPrismaKnownException(error)) {
    return handlePrismaKnownError(error)
  } else if (isPrismaClientValidationException(error)) {
    // default to 500 server error
    // TODO - SEND EMAIL TO DEV Team
    return handlePrismaClientValidationError(error)
  } else if (isPrismaInternalError) {
    return InternalServerErrorException({
      data: null,
      errors: {
        type: ERROR_CODES.DATABASE_ERROR,
        message: error.message,
      },
    })
  }

  console.error("[UNCAUGHT ERROR]:", error)

  return json(
    {
      error: {
        code: ERROR_CODES.SERVER_FAULT,
        ...(!IS_PRODUCTION && { originalError: error }),
        message: "Something is wrong! Please contact admin",
      },
    },
    {
      status: 500,
    },
  )
}
