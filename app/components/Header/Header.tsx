import { Button, ButtonPrimary } from "../Button/Button"
import { Link } from "../Link"

export const Header = () => {
    return (
        <header className="shadow mb-2">
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row">
                <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black">
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
                <label id="navbar-logo" className="absolute top-5 right-2 cursor-pointer md:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li className="md:mr-8 ">
                            <Link selected={true} to="/">Home</Link>
                        </li>
                        <li className="md:mr-8 ">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="md:mr-8 ">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-primaryText md:mr-8 active:text-primaryLight hover:text-primary"><a href="#">Pricing</a></li>
                        <li className="md:mr-8 ">
                            <ButtonPrimary>Login</ButtonPrimary>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}