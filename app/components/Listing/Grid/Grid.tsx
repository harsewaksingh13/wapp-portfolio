

import { Text, ItemProps } from "~/components"


export interface GridProps<I extends ItemProps> {
    itemsTitle?: string
    items: I[]
}

export const Grid = <I extends ItemProps,>(props: GridProps<I>) => {
    return (
        <ul key={"list"} className="flex flex-wrap -mb-4 -mx-2">
            {props.itemsTitle && <div className="mx-auto max-w-1xl pb-6">
                    <Text>{props.itemsTitle}</Text>
                </div>}
            {
                props.items.map((item) => {
                    return (<div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2"
                    key={item.title} >
                        {item.children}
                    </div>)
                })
            }
        </ul>
    )
}