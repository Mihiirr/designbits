import { GoogleStrategy } from "remix-auth-google"
import { Authenticator } from "remix-auth"
import type { Prisma, User } from "@prisma/client"
import { db } from "~/services/db/client.server"
import { sessionStorage } from "./session.server"
import { getRequiredServerEnvVar } from "~/utils/env"
// import { EmailLinkStrategy } from "remix-auth-email-link"
import { getUserByEmail } from "~/services/db/queries/query-db.server"
// import { sendMagicLinkEmail } from "../email/email.server"

export let authenticator = new Authenticator<User | null>(sessionStorage)

async function findOrCreateUser({
  email,
  profileSlug,
  name,
  profilePicture,
}: Prisma.UserCreateInput): Promise<User> {
  const user = await getUserByEmail(email)

  if (!user) {
    const createdUser = await db.user.create({
      data: {
        email,
        profileSlug,
        name,
        profilePicture,
      },
    })
    return createdUser
  }
  return user
}

const googleStrategy = new GoogleStrategy(
  {
    clientID: getRequiredServerEnvVar("GOOGLE_AUTH_CLIENT_ID"),
    clientSecret: getRequiredServerEnvVar("GOOGLE_AUTH_CLIENT_SECRET"),
    callbackURL: `${getRequiredServerEnvVar("DOMAIN_URL")}auth/google/callback`,
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    // return User.findOrCreate({ email: profile.emails[0].value })
    const user = await findOrCreateUser({
      email: profile.emails[0].value,
      profileSlug: profile.id,
      name: profile.displayName,
      profilePicture: profile.photos[0].value,
    })
    return user
  },
)

// const magicLinkStrategy = new EmailLinkStrategy(
//   { sendEmail: sendMagicLinkEmail, secret, callbackURL: "/magic" },
//   // In the verify callback you will only receive the email address and you
//   // should return the user instance
//   async ({ email }: Pick<User, "email">) => {
//     let user = await findOrCreateUser({
//       email,
//       profileSlug: email.split("@")[0],
//     })
//     return user
//   },
// )

// authenticator.use(magicLinkStrategy)
authenticator.use(googleStrategy)
