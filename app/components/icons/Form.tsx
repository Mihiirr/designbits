import React from "react";

const FormIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#1F2937"
                fillRule="evenodd"
                d="M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H7zM4 5a3 3 0 013-3h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#1F2937"
                fillRule="evenodd"
                d="M8 7.007a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM8 10.992a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM8 15a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default React.memo(FormIcon);
