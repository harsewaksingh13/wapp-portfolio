import { Link, TextProps } from ".."


export interface ErrorProps extends TextProps {

}

/**
 * 
 * @param props 
 * @returns a basic error component
 */
export const Error = (props: ErrorProps) => {

    return (
        <div>{props.children}</div>
    )
}

export const ErrorNotFound = (props: ErrorProps) => {
    return (
        <div className="flex flex-grow items-center justify-center">
            <div className="rounded-lg p-8 text-center">
                <h1 className="mb-4 text-6xl text-primary font-bold">404</h1>
                <h3 className="m-4 text-primaryText text-2xl">You have found a secerat place!</h3>
                <p className="m-4 text-secondaryText">Oops! The page you are looking for could not be found.</p>
                <div className="m-8">
                <Link to="/"> Go back to Home </Link>
                </div>
            </div>
        </div>
    )
}