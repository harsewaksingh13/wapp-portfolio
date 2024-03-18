import { Item, LinkButtonPrimary, LinkButtonPrimaryMedium } from "~/components"

export type CardItemProps = {

} & Item


/*
* Basic card to display item with 
* title, subtitle, descriptoin, image
*/
export const CardItem = (props: CardItemProps) => {
    return (
        <div className="max-w-4xl">
            <div className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 dark:border-gray-400 rounded-lg max-w-3xl mb-5">
                <a href="#">
                    <img className="rounded-t-lg max-h-85 w-full" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="text-primaryText font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="font-normal text-secondaryText mb-6">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <LinkButtonPrimaryMedium to="#">
                        See more
                    </LinkButtonPrimaryMedium>
                </div>
            </div>
        </div>
    )
}