import { Item, ItemProps } from "~/components"

export interface ListHorizontalProps<I extends ItemProps> {
    items: I[]
}


export const ListHorizontal = <I extends ItemProps,>(props: ListHorizontalProps<I>) => {
    return (
        <div>
            <ul className="flex flex-wrap lg:flex-nowrap items-center justify-center">
                {
                    props.items.map((item) => {
                        return (<li className="mr-4" key={item.title} >
                            {item.children}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}