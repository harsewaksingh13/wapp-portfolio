import { PageContent, PageContentProps } from "."
import { ItemProps, List, ListProps, ListHorizontalFixed, DropList } from "~/components"


export interface PageListContentProps<I extends ItemProps> extends PageContentProps, ListProps<I> {

}

export const PageListContent = <I extends ItemProps,>(props: PageListContentProps<I>) => {
    const hasItems = props.items && props.items.length > 0
    return (
        <PageContent>
            <div className="grid grid-cols-8 sm:grid-cols-10">
                <div className="sm:hidden">
                    {/* {props.items.map((i) => <div className="flex">{i.children}</div>)} */}
                    <ListHorizontalFixed {...props} items={props.items}/>
                </div>


                {hasItems && <div className="col-span-2 hidden sm:block">
                    <div className="fixed pr-20 pt-4">
                        <List {...props} items={
                            props.items
                        }></List>
                    </div>
                </div>}
                
                <div className={`${hasItems ? 'col-span-8': 'col-span-10'} overflow-y-hidden`}>
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