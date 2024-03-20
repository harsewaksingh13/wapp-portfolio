import { Text, ItemProps, ListProps } from "~/components"

export interface ListHorizontalProps<I extends ItemProps> extends ListProps<I> { }


export const ListHorizontal = <I extends ItemProps,>(props: ListHorizontalProps<I>) => {
    return (
        <div>
            <ul className="flex flex-wrap lg:flex-nowrap overflow-y-auto">
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

export const ListHorizontalFixed = <I extends ItemProps,>(props: ListHorizontalProps<I>) => {
    return (
        <div className="p-4">
            {props.itemsTitle && <div className="mx-auto max-w-1xl pb-6">
                <Text>{props.itemsTitle}</Text>
            </div>}
            <ul className="flex min-w-80 flex-none overflow-y-hidden">

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