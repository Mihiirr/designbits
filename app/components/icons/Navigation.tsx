import React from "react";

const NavigationIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
                d="M7.586 4.578A2 2 0 019 3.993h10a1 1 0 01.707.292l2 2a1 1 0 010 1.415l-2 2a1 1 0 01-.707.293H9a2 2 0 01-2-2v-2a2 2 0 01.586-1.415zm11 1.415H9v2h9.586l1-1-1-1zM5.293 12.3A1 1 0 016 12.007h7a2 2 0 012 2v2a2 2 0 01-2 2H6a1 1 0 01-.707-.292l-2-2a1 1 0 010-1.415l2-2zm1.121 1.707l-1 1 1 1H13v-2H6.414z"
                clipRule="evenodd"
            ></path>
            <path
                fillRule="evenodd"
                d="M12 15.992a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zM12 8a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zM12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default React.memo(NavigationIcon);
