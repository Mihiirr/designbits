import type { RemixLinkProps } from "@remix-run/react/components"
import { Link as RemixLink } from "remix"

const Link = ({ children, ...props }: RemixLinkProps & React.RefAttributes<HTMLAnchorElement>) => {
    return (
        <RemixLink {...props}>
            {children}

        </RemixLink>
    )
}

export default Link
