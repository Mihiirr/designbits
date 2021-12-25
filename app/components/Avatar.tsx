/* This example requires Tailwind CSS v2.0+ */
export default function Avatar() {
  return (
    <a href="#" className="flex-shrink-0 group block">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-gray-800 group-hover:text-gray-900">
            Leslie
          </p>
          <p className="text-xs text-gray-500 group-hover:text-gray-700">
            96 followers
          </p>
        </div>
      </div>
    </a>
  )
}
