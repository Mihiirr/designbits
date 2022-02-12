import { Prisma } from "@prisma/client"
import { json } from "remix"
import { ERROR_CODES, ERROR_MESSAGES, IS_PRODUCTION } from "./constants"

export default function errorHandler(error: any) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return json(
      {
        error: {
          code: ERROR_CODES.DATABASE_ERROR,
          prismaErrorCode: error.code,
          message: error.message,
        },
      },
      {
        status: 500,
      },
    )
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    return json(
      {
        error: {
          code: ERROR_CODES.DATABASE_ERROR,
          prismaError: error,
          message: ERROR_MESSAGES.DATABASE_ERROR,
        },
      },
      {
        status: 500,
      },
    )
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    // default to 500 server error
    // TODO - SEND EMAIL TO DEV Team
    console.log(error)
    return json(
      {
        error: {
          code: ERROR_CODES.DATABASE_ERROR,
          prismaError: error,
          message: ERROR_MESSAGES.DATABASE_ERROR,
        },
      },
      {
        status: 400,
      },
    )
  } else if (error instanceof Prisma.PrismaClientRustPanicError) {
    // TODO - SEND EMAIL TO DEVOPS Team
    return json(
      {
        error: {
          code: ERROR_CODES.DATABASE_ERROR,
          message: "Something is wrong! Please contact admin",
        },
      },
      {
        status: 500,
      },
    )
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
