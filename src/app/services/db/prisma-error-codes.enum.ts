/**
 * Prisma query engine Error Codes enum
 * based on:
 * @link https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/error-reference/#error-codes
 * @link https://github.com/prisma/specs/tree/master/errors#error-codes
 * @link https://github.com/prisma/specs/tree/master/prisma-client-js#2-prismaclientknownrequesterror
 * @link https://github.com/prisma/prisma-engines/blob/0dbe427d49898ff86eb9ed21661c07ac78ede981/libs/user-facing-errors/src/query_engine.rs
 */
export enum PrismaErrorCodesEnum {
  InputValueTooLong = "P2000",
  RecordNotFound = "P2001",
  UniqueKeyViolation = "P2002",
  ForeignKeyViolation = "P2003",
  ConstraintViolation = "P2004",
  StoredValueIsInvalid = "P2005",
  TypeMismatch = "P2006",
  TypeMismatchInvalidCustomType = "P2007",
  QueryParsingFailed = "P2008",
  QueryValidationFailed = "P2009",
  RawQueryFailed = "P2010",
  NullConstraintViolation = "P2011",
  MissingRequiredValue = "P2012",
  MissingRequiredArgument = "P2013",
  RelationViolation = "P2014",
  RelatedRecordNotFound = "P2015",
  InterpretationError = "P2016",
  RecordsNotConnected = "P2017",
  ConnectedRecordsNotFound = "P2018",
  InputError = "P2019",
  ValueOutOfRange = "P2020",
  TableDoesNotExist = "P2021",
  ColumnDoesNotExist = "P2022",
  InconsistentColumnData = "P2023",
  DBConnectionTimeout = "P2024",
  DependedRecordsNotFound = "P2025",
}
