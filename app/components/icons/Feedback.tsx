import React from "react";

const FeedbackIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
                d="M14 6.996a1 1 0 011-1h1a5 5 0 110 10H7.414l2.293 2.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414l-2.293 2.293H16a3 3 0 000-6h-1a1 1 0 01-1-1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default React.memo(FeedbackIcon);