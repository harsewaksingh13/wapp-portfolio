import { scrollTo } from "~/utils"
import { BaseProps, Item, ListProps } from ".."
import { Button, ButtonPrimary } from "../Button/Button"
import { Link } from "../Link"
import { redirect, useLocation, useMatches, useNavigate } from "@remix-run/react"

export type HeaderItem = {
    href?: string | null //navigate to link
    content_id?: string//scroll to id
} & Item

export interface HeaderProps extends ListProps<HeaderItem> { }

export const Header = (props: HeaderProps) => {

    let navigator = useNavigate()

    // const matches = useMatches();
    // console.log("matches", matches)
    // let { pathname } = matches.length > 2 ? matches[2] : { pathname: "/" }
    // console.log("pathname", pathname)
   
    return (
        <header className="mb-2 sticky border-b-[0.3px] top-0 md:sticky md:top-0 bg-white dark:bg-gray-800">
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden py-2 md:py-4 md:mx-auto md:flex-row">
                <a href="/" className="px-4 flex items-center whitespace-nowrap text-2xl font-black">
                    <svg fill="currentColor" className="mr-4 text-primary" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 324.146 324.146">
                        <path d="M230.645,324.146H25.365c-4.418,0-8-3.582-8-8V69.811c0-4.418,3.582-8,8-8h205.279c4.418,0,8,3.582,8,8v15.766h20.236
                                    c4.418,0,8,3.582,8,8s-3.582,8-8,8h-20.236v20.614h10.01c4.418,0,8,3.582,8,8s-3.582,8-8,8h-10.01v20.615h20.236
                                    c4.418,0,8,3.582,8,8s-3.582,8-8,8h-20.236v20.613h10.01c4.418,0,8,3.582,8,8s-3.582,8-8,8h-10.01v104.727
                                    C238.645,320.564,235.063,324.146,230.645,324.146z M33.365,308.146h189.279V77.811H33.365V308.146z M166.297,293.237
                                    c-20.576,0-37.316-16.739-37.316-37.314s16.74-37.314,37.316-37.314c20.574,0,37.313,16.739,37.313,37.314
                                    S186.871,293.237,166.297,293.237z M166.297,234.609c-11.754,0-21.316,9.562-21.316,21.314s9.562,21.314,21.316,21.314
                                    c11.752,0,21.313-9.562,21.313-21.314S178.049,234.609,166.297,234.609z M298.781,262.335h-36.605c-4.418,0-8-3.582-8-8s3.582-8,8-8
                                    h28.605V16H101.502v25.307c0,4.418-3.582,8-8,8s-8-3.582-8-8V8c0-4.418,3.582-8,8-8h205.278c4.418,0,8,3.582,8,8v246.335
                                    C306.781,258.753,303.198,262.335,298.781,262.335z M105.182,235.255H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h38.967
                                    c4.418,0,8,3.582,8,8S109.6,235.255,105.182,235.255z M189.795,199.842H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h123.58
                                    c4.418,0,8,3.582,8,8S194.213,199.842,189.795,199.842z M189.795,164.429H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h123.58
                                    c4.418,0,8,3.582,8,8S194.213,164.429,189.795,164.429z M105.182,129.016H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h38.967
                                    c4.418,0,8,3.582,8,8S109.6,129.016,105.182,129.016z"/>
                    </svg>
                    <span className="text-primary">The portfolio</span>
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
                                return <li key={item.content_id}>
                                    {item.href ?
                                        <Link to={item.href}>{item.title}</Link>
                                        :
                                        <Button onClick={() => {
                                            if (item.content_id) {
                                                // if (!scrollTo(item.content_id)) {
                                                    // navigator('/')
                                                // } else {
                                                    navigator(item.content_id)
                                                // }
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