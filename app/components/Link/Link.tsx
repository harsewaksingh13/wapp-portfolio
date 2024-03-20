import { TextProps } from ".."
import { LinkProps as RemixLinkProps } from "@remix-run/react"
import { Link as RemixLink } from "@remix-run/react"

export interface LinkProps extends TextProps, RemixLinkProps {
    to: string
    selected?: Boolean | false
}

/**
 * 
 * @param props 
 * @returns a basic link wrapper
 */
export const Link = (props: LinkProps) => {
    const selectedClass = "font-medium text-primary border-b-text-primary transition-colors active:text-primaryLight"
    const normalClass = "text-primaryText active:text-primaryLight hover:text-primary"
    return <RemixLink className={props.selected == true ? selectedClass : normalClass} {...props}>{props.children}</RemixLink>
}


export const LinkButtonPrimary = (props: LinkProps) => {
    return <RemixLink  className="text-3xl rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary active:bg-primaryLight hover:text-primaryLight" {...props}>{props.children}</RemixLink>
}

export const LinkButtonPrimaryMedium = (props: LinkProps) => {
    return <RemixLink  className="text-1xl rounded-md bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-primary active:bg-primaryLight hover:text-primaryLight" {...props}>{props.children}</RemixLink>
}

export const LinkText = (props: LinkProps) => {
    return <RemixLink  className="leading-none font-semibold text-primaryText text-2xl md:text-3xl lg:text-4xl" {...props}>{props.children}</RemixLink>
}
{/* <h6 className="leading-none font-semibold text-primaryText text-2xl md:text-3xl lg:text-4xl"></h6> */}