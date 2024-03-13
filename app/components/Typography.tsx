import { ReactNode } from "react"


export interface BaseProps {
    children?: ReactNode
}

/* 
*
* Define all typography styles
* Text -  Regular, Medium, Bold, Semi-Bold
* Body - 
*/

export enum TextSize {
    T1, T2, T3, T4, T5, T6
}

export enum TextFont {
    Regular, Medium, Bold, SemiBold
}

export interface TextProps {
    ts?: TextSize
    tf?: TextFont
    children?: ReactNode
}

export const Text = (props: TextProps) => {
    const ts = props.ts || TextSize.T4
    const tf = props.ts || TextFont.Regular

    return (
        <h6 className="leading-none tracking-tight text-primaryText md:text-1xl lg:text-4xl">
            {props.children}
        </h6>
        // <p className=" text-gray-900 dark:text-white">
        //     {props.children}
        // </p>
    )
}