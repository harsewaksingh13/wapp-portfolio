import { Text, ItemProps } from "~/components"


export interface ListProps<I extends ItemProps> {
    itemsTitle?: string
    items: I[]
}

export const List = <I extends ItemProps,>(props: ListProps<I>) => {
    return (
        <ul key={"list"}>
            {props.itemsTitle && <div className="mx-auto max-w-1xl pb-6">
                    <Text>{props.itemsTitle}</Text>
                </div>}
            {
                props.items.map((item) => {
                    return (<li key={item.title} className="m-4">
                        {item.children}
                    </li>)
                })
            }
        </ul>
    )
}