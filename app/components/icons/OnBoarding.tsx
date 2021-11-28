import React from "react";

const OnBoardingIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M11.293 2.293a1 1 0 011.414 0l9 9A1 1 0 0121 13h-2a1 1 0 01-.35-1.937L12 4.414l-6.65 6.65A1 1 0 015 13H3a1 1 0 01-.707-1.707l9-9z"
                clipRule="evenodd"
            ></path>
            <path
                fillRule="evenodd"
                d="M5 11a1 1 0 011 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 112 0v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7a1 1 0 011-1z"
                clipRule="evenodd"
            ></path>
            <path
                fillRule="evenodd"
                d="M11 14.007a1 1 0 00-1 1v6a1 1 0 11-2 0v-6a3 3 0 013-3h2a3 3 0 013 3v6a1 1 0 11-2 0v-6a1 1 0 00-1-1h-2z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default React.memo(OnBoardingIcon);
