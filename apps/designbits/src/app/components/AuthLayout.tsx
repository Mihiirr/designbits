import { motion } from "framer-motion"
import { H2, Paragraph } from "./Typography"

interface Props {
  subtitle: string | React.ReactElement
  authForm: React.ReactElement
  title: string | React.ReactElement
}

const childVariants = {
  initial: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const AuthLayout: React.FC<Props> = ({ title, authForm, subtitle }) => {
  return (
    <>
      <div className="flex w-full min-h-full">
        <div className="flex flex-col flex-1 justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <motion.div
              className="flex flex-col flex-auto"
              initial="initial"
              animate="visible"
              variants={{
                initial: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.div variants={childVariants}>
                <H2 as="h2">{title}</H2>
              </motion.div>

              {subtitle ? (
                <motion.div variants={childVariants}>
                  <H2 as="p" variant="secondary" className="mt-3">
                    {subtitle}
                  </H2>
                </motion.div>
              ) : null}
              {authForm ? (
                <motion.div
                  variants={childVariants}
                  className="flex flex-col mt-14 space-y-4"
                >
                  {authForm}
                </motion.div>
              ) : null}
              <motion.div
                variants={childVariants}
                className="flex flex-col mt-14 space-y-4"
              >
                <Paragraph
                  className="col-span-full mb-10 md:col-span-4"
                  prose={false}
                >
                  {`
              To sign in to your account or to create a new one fill in your
              email above and we'll send you an email with a magic link to get
              you started.
            `}
                </Paragraph>
              </motion.div>
            </motion.div>
          </div>{" "}
        </div>
        <div className="hidden relative flex-1 w-0 lg:block">
          <img
            className="object-cover absolute inset-0 w-full h-full"
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_1800,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_blue"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default AuthLayout
