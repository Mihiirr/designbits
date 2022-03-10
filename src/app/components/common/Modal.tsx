import { Dialog } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Form, useSearchParams } from "remix"
import { useRootContext } from "~/context/root-context"
import { LoginSchema } from "~/services/validations/client-action-schemas"
import Button from "../Button"
import { Label, Input, InputError } from "../form-elements"
import GoogleIcon from "../icons/Google"
import { H3, H4 } from "../Typography"

type ModalProps = {
  isOpen?: boolean
  setIsOpen: (isAuthModalOpen: boolean) => void
}

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    redirectTo: "",
  })
  const { closeAuthModal } = useRootContext()
  const [searchParams] = useSearchParams()
  const childVariants = {
    initial: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          as="div"
          className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
        >
          <div className="flex flex-col py-8 px-4 text-center">
            <Dialog.Overlay />
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <motion.div
              className="z-10 flex min-h-screen w-96 items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}
            >
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div
                className="stext-left inline-block h-1/2 overflow-hidden rounded-lg bg-white p-1 align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="flex h-4 w-full justify-end">
                  <button
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 bg-white font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => closeAuthModal()}
                  >
                    X
                  </button>
                </div>

                <div className="p-7">
                  <div className="mb-4 text-left">
                    <motion.div variants={childVariants}>
                      <H3 as="h2">Log in to your account.</H3>
                    </motion.div>
                    <motion.div variants={childVariants}>
                      <H4 as="p" variant="secondary" className="mt-3">
                        Or sign up for an account.
                      </H4>
                    </motion.div>
                  </div>
                  <Form
                    onChange={event => {
                      const form = event.currentTarget
                      setFormValues({
                        email: form.email.value,
                        redirectTo: form.redirectTo.value,
                      })
                    }}
                    onSubmit={() => setSubmitted(true)}
                    action="/auth/login"
                    method="post"
                    className="mb-10 lg:mb-12"
                  >
                    <div className="hidden">
                      <Label htmlFor="redirect-to">redirect to</Label>
                      <Input
                        id="redirect-to"
                        name="redirectTo"
                        type="text"
                        readOnly
                        defaultValue={searchParams.get("redirectTo") || ""}
                      />
                    </div>
                    <div className="mb-6">
                      <div className="mb-4 flex flex-wrap items-baseline justify-between">
                        <Label htmlFor="email-address">Email address</Label>
                      </div>
                      <Input
                        ref={inputRef}
                        autoFocus
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        defaultValue={formValues.email}
                        required
                        placeholder="Email address"
                      />
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button type="submit" disabled={submitted}>
                        Email a login link
                      </Button>
                    </div>
                  </Form>
                  <Form action="/auth/google" method="post">
                    <Button variant="secondary" type="submit">
                      <GoogleIcon />
                      <span className="pl-2">Login with Google</span>
                    </Button>
                  </Form>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
