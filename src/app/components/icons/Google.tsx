const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <path fill="#4285F4" d="M24 12v-2H12v5h7l-3 3v3h4c2-2 4-5 4-9Z" />
      <path
        fill="#34A853"
        d="M12 24c3 0 6-1 8-3l-4-3a7 7 0 0 1-10-4H2v3c2 4 6 7 10 7Z"
      />
      <path fill="#FBBC05" d="M6 14a7 7 0 0 1 0-4V7H2a12 12 0 0 0 0 10l4-3Z" />
      <path
        fill="#EA4335"
        d="M12 5c2 0 4 0 5 2l3-4c-2-2-5-3-8-3C8 0 4 3 2 7l4 3c0-3 3-5 6-5Z"
      />
      <script type="text/javascript" />
    </svg>
  )
}

export default GoogleIcon
