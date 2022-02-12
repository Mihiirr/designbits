import { json } from "remix"

export function successResponse(data: any) {
  return json(
    {
      ok: true,
      ...data,
    },
    {
      status: 200,
    },
  )
}

export function unAuthorizedResponse(data: any) {
  return json(
    {
      ok: false,
      ...data,
    },
    {
      status: 403,
    },
  )
}

export function unAuthenticatedResponse(data: any) {
  return json(
    {
      ok: false,
      ...data,
    },
    {
      status: 401,
    },
  )
}
