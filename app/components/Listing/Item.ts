import { BaseProps } from "~/components";

export interface Item {
    title?: string
    href?: string
    subtitle?:string
    description?: string
    image?: string//url
    icon?: string//svg
}
export interface ItemProps extends Item, BaseProps {

}