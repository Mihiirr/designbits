import * as z from "zod"
import type { Session } from "../../dist/prisma"
import { CompleteUser, RelatedUserModel } from "./index"

export const SessionModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  userId: z.string(),
  expirationDate: z.date(),
})

export interface CompleteSession extends Session {
  User: CompleteUser
}

/**
 * RelatedSessionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSessionModel: z.ZodSchema<CompleteSession> = z.lazy(() => SessionModel.extend({
  User: RelatedUserModel,
}))
