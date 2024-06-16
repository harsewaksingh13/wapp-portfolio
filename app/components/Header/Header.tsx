import { Item, ListProps } from ".."
import { Button } from "../Button/Button"
import { Icon } from "../Icon"
import { Link } from "../Link"
import { useLocation, useMatches, useNavigate } from "@remix-run/react"

export type HeaderItem = {
    href?: string | null //navigate to link
    content_id?: string//scroll to id
} & Item

export interface HeaderProps extends ListProps<HeaderItem> {
    svg?: string
    title?: string
}

export const Header = (props: HeaderProps) => {

    let navigator = useNavigate()

    const matches = useMatches();
    let { pathname } = matches.length > 2 ? matches[2] : { pathname: "/" }
    const location = useLocation()
    const { hash } = location
    const selectedLink = pathname == '/' ? pathname + hash : pathname


    return (
        <header className="mb-2 sticky border-b-[0.3px] top-0 md:sticky md:top-0 bg-white dark:bg-gray-800">
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden py-2 md:py-4 md:mx-auto md:flex-row">
                <a href="/" className="px-4 flex items-center whitespace-nowrap text-2xl font-black">
                    <Icon className="mr-4" width={100} svg={props.svg} />
                    <span className="text-primary">{props.title}</span>
                </a>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label id="navbar-logo" className="absolute top-3 right-2 cursor-pointer md:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:mt-2 peer-checked:overflow-x-scroll peer-checked:max-h-52 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:pr-8 md:max-h-full md:flex-row md:items-start">
                    <ul className="flex flex-rows items-center space-x-4 space-y-0 md:ml-auto md:flex-row md:space-y-0 md:space-x-4">
                        {
                            props.items.map((item) => {
                                return <li key={item.content_id || item.href}>
                                    {item.href ?
                                        <Link selected={selectedLink == item.href} to={item.href}>{item.title}</Link>
                                        :
                                        <Button onClick={() => {
                                            if (item.content_id) {
                                                navigator(item.content_id)
                                            } else if (item.href) {
                                                navigator(item.href)
                                            }
                                        }}>{item.title}</Button>
                                    }
                                </li>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}