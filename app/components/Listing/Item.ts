import { BaseProps } from "~/components";

export interface Item {
    title: string
    href?: string
    subtitle?:string
    description?: string
}
export interface ItemProps extends Item, BaseProps {

}