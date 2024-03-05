import { DropList } from "~/components/DropList"
import { Page, PageContent, PageContentProps } from "."
import { List, Text } from "~/components"

export interface PageListContentProps extends PageContentProps {

}

export const PageListContent = (props: PageListContentProps) => {
    const items = [
        { title: "Project 1" },
        { title: "Project 2" },]
    return (
        <PageContent {...props}>
            <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">

                {/* <div className="relative my-4 w-56 sm:hidden items-center">
                    <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
                    <label htmlFor="select-1" className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-primary dark:text-white ring-blue-700 peer-checked:ring">Accounts </label>
                    <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-primary dark:text-white transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white dark:text-white">Accounts</li>
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white dark:text-white">Team</li>
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white dark:text-white">Others</li>
                    </ul>
                </div> */}
                <div className="sm:hidden">
                    <DropList items={items}></DropList>
                </div>
                <div className="col-span-2 hidden sm:block">
                    <List items={
                        items
                    }></List>
                </div>

                <div className="col-span-8 p-4 text-black dark:text-white">
                    <label>Contents HERE</label>
                </div>
            </div>
        </PageContent>
    )
}