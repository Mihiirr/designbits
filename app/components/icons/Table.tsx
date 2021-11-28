import React from "react";

const TableIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
                d="M6 5.007a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-12a1 1 0 00-1-1H6zm-3 1a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3v-12z"
                clipRule="evenodd"
            ></path>
            <path
                fillRule="evenodd"
                d="M3 10.007a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
            ></path>
            <path
                fillRule="evenodd"
                d="M10 3.007a1 1 0 011 1v16a1 1 0 11-2 0v-16a1 1 0 011-1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default React.memo(TableIcon);
