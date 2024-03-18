import { Item } from "~/components"


export interface ListProps<I extends Item> {
    items: I[]
}

export const List = <I extends Item,>(props: ListProps<I>) => {
    return (
        <ul key={"list"}>
            {
                props.items.map((item) => {
                    return (<li key={item.title} className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition text-black dark:text-white hover:border-l-green-700 hover:text-green-700">
                        {item.title}
                    </li>)
                })
            }
        </ul>
    )
}