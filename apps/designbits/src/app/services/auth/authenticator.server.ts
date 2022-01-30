import { GoogleStrategy } from "remix-auth-google"
import { Authenticator } from "remix-auth"
import type { User } from "database"
import { db } from "~/services/db/client.server"
import { sessionStorage } from "./session.server"
import { getRequiredServerEnvVar } from "~/utils/env"

export let authenticator = new Authenticator<User | null>(sessionStorage)

let googleStrategy = new GoogleStrategy(
  {
    clientID: getRequiredServerEnvVar("GOOGLE_AUTH_CLIENT_ID"),
    clientSecret: getRequiredServerEnvVar("GOOGLE_AUTH_CLIENT_SECRET"),
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    // return User.findOrCreate({ email: profile.emails[0].value })
    const user = await db.user.findUnique({
      where: {
        email: profile.emails[0].value,
      },
    })

    console.log({ user, emails: profile.emails })

    if (!user) {
      console.log("creating user")
      try {
        const createdUser = await db.user.create({
          data: {
            email: profile.emails[0].value,
            profileSlug: profile.id,
            name: profile.displayName,
            profilePicture: profile.photos[0].value,
          },
        })
        console.log({ createdUser })
      } catch (error) {
        console.log(error)
      }

      return null
    }
    return user
  },
)

authenticator.use(googleStrategy)
