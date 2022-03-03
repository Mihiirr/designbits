export const ASSETS_CDN_LINK = "https://d33dtx48sf6a61.cloudfront.net/"

export enum ERROR_CODES {
  // Auth related
  NOT_AUTHENTICATED = "NOT_AUTHENTICATED",
  ACTION_NOT_ALLOWED = "ACTION_NOT_ALLOWED",
  // Food entries
  MEAL_LIMIT_REACHED = "MEAL_LIMIT_REACHED",
  // General
  BAD_INPUT = "BAD_INPUT",
  USER_EXISTS = "USER_EXISTS",
  HTTP_METHOD_NOT_IMPLEMENTED = "HTTP_METHOD_NOT_IMPLEMENTED",
  SERVER_FAULT = "SERVER_FAULT",
  DATABASE_ERROR = "DATABASE_ERROR",
  // Admin
  USER_DOES_NOT_EXIST = "USER_DOES_NOT_EXIST",
  USER_DELETED = "USER_DELETED",
  USER_BLOCKED = "USER_BLOCKED",
}

export const ERROR_MESSAGES: Record<`${ERROR_CODES}`, string> = {
  HTTP_METHOD_NOT_IMPLEMENTED:
    "Please check the API request, method is not implemented!",
  ACTION_NOT_ALLOWED: "You are not allowed to perform this action!",
  MEAL_LIMIT_REACHED: "You have reached limit to add food items to this meal!",
  NOT_AUTHENTICATED: "You are not authenticated, Please log in again!",
  USER_DOES_NOT_EXIST: "USER_DOES_NOT_EXIST",
  BAD_INPUT: "The input is not valid, Please check again!",
  USER_EXISTS: "A user with that data already exists!",
  SERVER_FAULT: "Something went wrong!",
  DATABASE_ERROR: "Something went wrong! DATABASE_ERROR",
  USER_DELETED: "Account has been deleted, Please contact admin!",
  USER_BLOCKED: "Account has been blocked, Please contact admin!",
}

export enum CARD_ACTIONS {
  LIKE = "like",
  UNDO_LIKE = "undo_like",
  COMMENT = "comment",
}

export enum COMMENT_ACTIONS {
  CREATE_COMMENT = "CREATE_COMMENT",
  DELETE_COMMENT = "DELETE_COMMENT",
  UPDATE_COMMENT = "UPDATE_COMMENT",
}

export const IS_PRODUCTION = process.env.NODE_ENV === "production"
