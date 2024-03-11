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
    const selectedClass = "rounded-md bg-primary px-2 py-1 font-medium text-white transition-colors hover:bg-primary active:bg-primaryLight hover:text-white"
    const normalClass = "text-primaryText active:text-primaryLight hover:text-primary"
    return <RemixLink className={props.selected == true ? selectedClass : normalClass} {...props}>{props.children}</RemixLink>
}