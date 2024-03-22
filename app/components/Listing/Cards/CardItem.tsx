import { Item, LinkButtonPrimary, LinkButtonPrimaryMedium } from "~/components"

export type CardItemProps = {
} & Item


/*
* Basic card to display item with 
* title, subtitle, descriptoin, image
*/
export const CardItem = (props: CardItemProps) => {
    const {title, href, description} = props
    //https://unsplash.com/blog/content/images/2024/02/Hour-for-Earth--Blog-.gif
    return (
        <div className="max-w-4xl">
            <div className="bg-white dark:bg-slate-800 shadow-md border border-gray-200 dark:border-gray-400 rounded-lg max-w-3xl mb-5">
                <a href={href || '#'}>
                    <img className="object-cover rounded-t-lg max-h-72 w-full" src="https://source.unsplash.com/random?sig=" alt="" />
                </a>
                <div className="p-5 min-w-72">
                    <a href={href || '#'}>
                        <h5 className="text-primaryText font-bold text-2xl tracking-tight mb-2">{title}</h5>
                    </a>
                    <p className="font-normal text-secondaryText mb-6">{description}</p>
                    <LinkButtonPrimaryMedium to={href || '#'}>
                        See more
                    </LinkButtonPrimaryMedium>
                </div>
            </div>
        </div>
    )
}