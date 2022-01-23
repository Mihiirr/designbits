import { decrypt, encrypt } from "../utils/encryption.server"

export const linkExpirationTime = 1000 * 60 * 30
const magicLinkSearchParam = "kodyKey"

type MagicLinkPayload = {
  emailAddress: string
  creationDate: string
  validateSessionMagicLink: boolean
}

export function getMagicLink({
  emailAddress,
  validateSessionMagicLink,
  domainUrl,
}: {
  emailAddress: string
  validateSessionMagicLink: boolean
  domainUrl: string
}) {
  const payload: MagicLinkPayload = {
    emailAddress,
    validateSessionMagicLink,
    creationDate: new Date().toISOString(),
  }
  const stringToEncrypt = JSON.stringify(payload)
  const encryptedString = encrypt(stringToEncrypt)
  const url = new URL(domainUrl)
  url.pathname = "auth/verify-magic"
  url.searchParams.set(magicLinkSearchParam, encryptedString)
  return url.toString()
}

function getMagicLinkCode(link: string) {
  try {
    const url = new URL(link)
    return url.searchParams.get(magicLinkSearchParam) ?? ""
  } catch {
    return ""
  }
}

export async function validateMagicLink(
  link: string,
  sessionMagicLink?: string,
) {
  const linkCode = getMagicLinkCode(link)
  const sessionLinkCode = sessionMagicLink
    ? getMagicLinkCode(sessionMagicLink)
    : null
  let emailAddress, linkCreationDateString, validateSessionMagicLink
  try {
    const decryptedString = decrypt(linkCode)
    const payload = JSON.parse(decryptedString) as MagicLinkPayload
    emailAddress = payload.emailAddress
    linkCreationDateString = payload.creationDate
    validateSessionMagicLink = payload.validateSessionMagicLink
  } catch (error: unknown) {
    console.error(error)
    throw new Error("Sign in link invalid. Please request a new one.")
  }

  if (typeof emailAddress !== "string") {
    console.error(`Email is not a string. Maybe wasn't set in the session?`)
    throw new Error("Sign in link invalid. Please request a new one.")
  }

  if (validateSessionMagicLink) {
    if (!sessionLinkCode) {
      console.error(
        "Must validate session magic link but no session link provided",
      )
      throw new Error("Sign in link invalid. Please request a new one.")
    }
    if (linkCode !== sessionLinkCode) {
      console.error(`Magic link does not match sessionMagicLink`)
      throw new Error(
        `You must open the magic link on the same device it was created from for security reasons. Please request a new link.`,
      )
    }
  }

  if (typeof linkCreationDateString !== "string") {
    console.error("Link expiration is not a string.")
    throw new Error("Sign in link invalid. Please request a new one.")
  }

  const linkCreationDate = new Date(linkCreationDateString)
  const expirationTime = linkCreationDate.getTime() + linkExpirationTime
  if (Date.now() > expirationTime) {
    throw new Error("Magic link expired. Please request a new one.")
  }
  return emailAddress
}
