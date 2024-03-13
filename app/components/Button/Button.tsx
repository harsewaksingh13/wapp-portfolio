import { TextProps } from ".."

export interface ButtonProps extends TextProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

/**
 * 
 * @param props 
 * @returns Text Button
 */
export const Button = (props: ButtonProps) => {
    return (
        <button {...props} className="text-primaryText active:text-primaryLight hover:text-primary">{props.children}</button>
    )
}

/**
 * 
 * @param props 
 * @returns Round edges bg-primary button 
 */
export const ButtonPrimary = (props: ButtonProps) => {
    return <button id="button-primary" className="rounded-md bg-primary px-6 py-1 font-medium text-white transition-colors hover:bg-primary active:bg-primaryLight hover:text-white">{props.children}</button>
}