import type { User } from "db-client"
import { markdownToHtmlDocument } from "./markdown.server"
import sendGridSender from "@sendgrid/mail"
import { RequireAtLeastOne } from "type-fest"
import invariant from "tiny-invariant"

if (process.env.SENDGRID_API_KEY) {
  sendGridSender.setApiKey(process.env.SENDGRID_API_KEY)
} else if (process.env.NODE_ENV === "production") {
  throw new Error("SENDGRID_API_KEY is required")
}

type MailData = RequireAtLeastOne<
  {
    to: string
    from: string
    subject: string
    text: string
    html: string
  },
  "text" | "html"
>

async function sendEmail({ to, from, subject, text, html }: MailData) {
  // if they didn't specify it and it's not
  if (html === undefined) {
    invariant(text, "Text is required for email if HTML is not provided")
    html = await markdownToHtmlDocument(text)
  }

  await sendGridSender
    .send({
      to,
      from,
      subject,
      text,
      html,
    })
    .catch(e => console.log(e))
    .finally(() => console.log("sent email"))
}

async function sendMagicLinkEmail({
  email,
  magicLink,
  user,
  domainUrl,
}: {
  email: string
  magicLink: string
  user?: User | null
  domainUrl: string
}) {
  const sender = `DesignBits Team <contact@tirth.dev>`
  const { hostname } = new URL(domainUrl)
  const userExists = Boolean(user)

  const text = `
    Here's your sign-in link for ${hostname}:

    ${magicLink}

${
  userExists
    ? `Welcome back ${email}!`
    : `
      Clicking the link above will create a *new* account on ${hostname} with the email ${email}. Welcome!
      If you'd instead like to change your email address for an existing account, please send an email to team+email-change@kentcdodds.com from the original email address.
    `.trim()
}

        Thanks!

        – The KCD Team

        P.S. If you did not request this email, you can safely ignore it.
  `.trim()

  const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <style type="text/css">
      @font-face {
        font-family: 'Matter';
        src: url('https://kcd-img.netlify.app/Matter-Medium.woff2') format('woff2'),
          url('https://kcd-img.netlify.app/Matter-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Matter';
        src: url('https://kcd-img.netlify.app/Matter-Regular.woff2') format('woff2'),
          url('https://kcd-img.netlify.app/Matter-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    </style>
  </head>
  <body style="font-family:Matter, sans-serif;">
    <div style="margin: 0 auto; max-width: 450px;">

      <h2 style="text-align: center">${
        user
          ? `Hey ${user.name}! Welcome back to ${hostname}!`
          : `Hey ${email}! Welcome to ${hostname}`
      }</h2>

      
      <h3 style="text-align: center">Click the button below to login to ${hostname}</h3>

      <a href="${magicLink}" style="display: block; margin: 0 auto; width: 80%; padding: 1.5rem; background: #A6DEE4; border-radius: 7px; border-width: 0; font-size: 1.1rem; text-align: center; font-family: sans-serif; text-decoration: none; color: black">
        ${userExists ? "Login" : "Create Account"}
      </a>

      <div style="text-align: center; margin-top: 1rem; font-size: .9rem">
        <div style="color: grey">This link is valid for 30 minutes.</div>
        <a href="${domainUrl}/auth/login" style="margin-top: .4rem; display: block">Click here to request a new link.</a>
      </div>
        
      <hr style="width: 20%; height: 0px; border: 1px solid lightgrey; margin-top: 2rem; margin-bottom: 2rem">
        
      <div style="text-align: center; color: grey; font-size: .8rem; line-height: 1.2rem">
        You received this because your email address was used to sign up for an account on
        <a href="${domainUrl}" style="color: grey">${hostname}</a>. If you didn't sign up for an account,
        feel free to disregard this email.
      </div>
    </div>
  </body>
</html>
  `

  const message = {
    from: sender,
    to: email,
    subject: `Here's your Magic ✨ sign-in link for DesignBits.io`,
    text,
    html,
  }

  await sendEmail(message)
}

export { sendEmail, sendMagicLinkEmail }
