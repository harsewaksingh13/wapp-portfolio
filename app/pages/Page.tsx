import { ReactNode } from "react"

export interface PageProps {
    children: ReactNode
}

/* 
* Page a simple div container with some default margin and paddings
*/
export const Page = (props: PageProps) => {
    return (
        <div className="bg-white dark:bg-gray-800 min-h-screen  ">
            {props.children}
        </div>
    )
}