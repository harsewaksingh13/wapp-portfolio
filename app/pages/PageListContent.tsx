import { DropList } from "~/components/DropList"
import { Page, PageContent, PageContentProps } from "."
import { Item, ItemProps, List, ListProps, Text } from "~/components"
import { ListHorizontalFixed } from "~/components/Listing/ListHorizontal/ListHorizontal"

export interface PageListContentProps<I extends ItemProps> extends PageContentProps, ListProps<I> {

}

export const PageListContent = <I extends ItemProps,>(props: PageListContentProps<I>) => {

    return (
        <PageContent>
            <div className="grid grid-cols-8 sm:grid-cols-10">
                <div className="sm:hidden">
                    {/* {props.items.map((i) => <div className="flex">{i.children}</div>)} */}
                    <ListHorizontalFixed {...props} items={props.items}/>
                </div>


                {props.items.length > 0 && <div className="col-span-2 hidden sm:block">
                    <div className="fixed pr-20 pt-4">
                        <List {...props} items={
                            props.items
                        }></List>
                    </div>
                </div>}

                <div className="col-span-8 overflow-y-hidden">
                    <PageContent {...props}>
                        {props.children}
                    </PageContent>
                </div>
            </div>
        </PageContent>
    )
}

/* 
* Right side list
*/
export const PageContentList = <I extends ItemProps,>(props: PageListContentProps<I>) => {

    return (
        <PageContent>
            <div className="grid grid-cols-8 sm:grid-cols-10">
                <div className="sm:hidden">
                    <DropList items={props.items}></DropList>
                </div>


                <div className="col-span-8 overflow-y-hidden">
                    <PageContent {...props}>
                        {props.children}
                    </PageContent>
                </div>
                <div className="col-span-2 hidden sm:block">
                    <div className="fixed pl-20 pt-4">
                        <List {...props} items={
                            props.items
                        }></List>
                    </div>
                </div>
            </div>
        </PageContent>
    )
}