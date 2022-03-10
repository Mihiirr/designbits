import errorHandler from "./error-handler.server"
import { ERROR_CODES, ERROR_MESSAGES } from "./constants"
import {
  ActionFunction,
  AppData,
  AppLoadContext,
  json,
  LoaderFunction,
} from "remix"
import { Params } from "react-router"
import { User, UserRole } from "@prisma/client"
import { getLoggedInUser } from "~/services/auth/session.server"
import {
  NotAllowedException,
  NotAuthenticatedException,
} from "./response-helpers.server"

enum HTTP_METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type RemixHandlers = ActionFunction | LoaderFunction

interface ProtectedRouteHandlerConfig extends RouteHandlerConfig {
  handler: ProtectedActionFunction
  protect: true
  allowedRoles: UserRole[]
}

interface RouteHandlerConfig {
  handler: RemixHandlers | ProtectedActionFunction
  protect: boolean
  allowedRoles: UserRole[]
}

const isProtectedRouteHandler = (
  handler: ProtectedRouteHandlerConfig | RouteHandlerConfig,
): handler is ProtectedRouteHandlerConfig => {
  return handler.protect
}

export function apiHandler(
  handlers: Partial<
    Record<
      HTTP_METHODS,
      | {
          handler: RemixHandlers
          protect: false
          allowedRoles: UserRole[]
        }
      | {
          handler: ProtectedActionFunction
          protect: true
          allowedRoles: UserRole[]
        }
    >
  >,
): ActionFunction | LoaderFunction {
  return async ({ request, params, context }) => {
    const method = request.method?.toUpperCase()! as HTTP_METHODS

    const routeHandler = handlers[method]

    // check handler supports HTTP method
    if (!routeHandler) {
      return json(
        {
          error: {
            code: ERROR_CODES.HTTP_METHOD_NOT_IMPLEMENTED,
            message: "Unsupported route!",
          },
        },
        {
          status: 405,
        },
      )
    }

    try {
      // route handler
      if (!isProtectedRouteHandler(routeHandler)) {
        return routeHandler.handler({ request, params, context })
      }

      return protectAPIRoute(
        routeHandler.handler,
        routeHandler.allowedRoles,
      )({ request, params, context })
    } catch (err) {
      // global error handler
      return errorHandler(err)
    }
  }
}

interface DataFunctionArgs {
  request: Request
  context: AppLoadContext
  params: Params
}

type ProtectedActionArgs = DataFunctionArgs & {
  user: User
}

export interface ProtectedActionFunction {
  (args: ProtectedActionArgs):
    | Promise<Response>
    | Response
    | Promise<AppData>
    | AppData
}

function isUserAllowed(user: User, allowedRoles: UserRole[] = []): boolean {
  return [...allowedRoles, UserRole.ADMIN].includes(user.role)
}

export function protectAPIRoute(
  callback: ProtectedActionFunction,
  allowedRoles: UserRole[] = [],
): ActionFunction {
  return async ({ request, params, context }: DataFunctionArgs) => {
    const user = await getLoggedInUser(request)
    if (!user) {
      return NotAuthenticatedException({
        data: null,
        errors: {
          type: ERROR_CODES.NOT_AUTHENTICATED,
          message: ERROR_MESSAGES.NOT_AUTHENTICATED,
        },
      })
    }

    if (!isUserAllowed(user, allowedRoles)) {
      return NotAllowedException({
        data: null,
        errors: {
          type: ERROR_CODES.ACTION_NOT_ALLOWED,
          message: ERROR_MESSAGES.ACTION_NOT_ALLOWED,
        },
      })
    }
    return callback({ request, params, context, user })
  }
}
