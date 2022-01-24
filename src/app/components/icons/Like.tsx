const LikeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 5.00745C12.7348 5.00745 12.4804 5.1128 12.2929 5.30034C12.1054 5.48788 12 5.74223 12 6.00745V7.00745C12 8.33353 11.4732 9.6053 10.5355 10.543C9.83715 11.2414 8.95344 11.7118 8 11.9064V17.0074C8 17.5379 8.21071 18.0466 8.58579 18.4217C8.96086 18.7967 9.46957 19.0074 10 19.0074H17C17.0283 19.0074 17.0566 19.0086 17.0848 19.011C17.1715 19.0184 17.323 18.9939 17.5155 18.8013C17.7146 18.6022 17.911 18.2612 18.0229 17.7941L18.9966 12.9253C18.9773 12.6902 18.8752 12.4684 18.7071 12.3003C18.5196 12.1128 18.2652 12.0074 18 12.0074H15C14.4477 12.0074 14 11.5597 14 11.0074V6.00745C14 5.74223 13.8946 5.48788 13.7071 5.30034C13.5196 5.1128 13.2652 5.00745 13 5.00745ZM7.6 20.2075C7.54354 20.2827 7.48152 20.3544 7.41421 20.4217C7.03914 20.7967 6.53043 21.0074 6 21.0074H4C3.46957 21.0074 2.96086 20.7967 2.58579 20.4217C2.21071 20.0466 2 19.5379 2 19.0074V12.0074C2 11.477 2.21071 10.9683 2.58579 10.5932C2.96086 10.2182 3.46957 10.0074 4 10.0074H7C7.79565 10.0074 8.55871 9.69138 9.12132 9.12877C9.68393 8.56616 10 7.8031 10 7.00745V6.00745C10 5.2118 10.3161 4.44873 10.8787 3.88613C11.4413 3.32352 12.2044 3.00745 13 3.00745C13.7956 3.00745 14.5587 3.32352 15.1213 3.88613C15.6839 4.44873 16 5.2118 16 6.00745V10.0074H18C18.7957 10.0074 19.5587 10.3235 20.1213 10.8861C20.6839 11.4487 21 12.2118 21 13.0074C21 13.0733 20.9935 13.139 20.9806 13.2036L19.9806 18.2036C19.9784 18.2143 19.9761 18.225 19.9736 18.2357C19.7973 18.9879 19.45 19.6953 18.9298 20.2155C18.4118 20.7335 17.7232 21.0566 16.9633 21.0074H10C9.12953 21.0074 8.28831 20.7237 7.6 20.2075ZM6 12.0074H4V19.0074H6V12.0074Z"
      />
    </svg>
  )
}

export default LikeIcon