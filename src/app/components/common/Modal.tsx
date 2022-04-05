import { Dialog } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"
import { useRootContext } from "~/context/root"
import { H3, H4 } from "../Typography"
import AuthForm from "../auth/AuthForm"

type ModalProps = {
  isOpen?: boolean
  setIsOpen: (isAuthModalOpen: boolean) => void
}

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  const {
    closeAuthModal,
    rootState: { postSlug },
  } = useRootContext()
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
                className="inline-block h-1/2 overflow-hidden rounded-lg bg-white p-1 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
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
                  <AuthForm redirectTo={`/interaction/${postSlug}`} />
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
