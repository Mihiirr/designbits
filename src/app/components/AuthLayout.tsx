interface Props {
  heading: React.ReactElement
  authForm: React.ReactElement
}

const AuthLayout: React.FC<Props> = ({ heading, authForm }) => {
  return (
    <>
      <div className="min-h-full flex w-full">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {heading}
            <div className="mt-8">
              <div className="mt-6">{authForm}</div>
            </div>
          </div>{" "}
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default AuthLayout
