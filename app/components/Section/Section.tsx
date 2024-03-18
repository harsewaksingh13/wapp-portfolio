import { BaseProps, LinkText } from ".."
import { Text } from ".."

export interface SectionProps extends BaseProps {
    id?: string
    title: string
    href?: string
}

export const Section = (props: SectionProps) => {
    console.log("section ", props)
    return (
        <div id={props.id}>
            <header>
                {props.title && <div className="mx-auto max-w-7xl p-2 md:p-4 lg:p-6">
                   
                        <LinkText to={props.href || `${props.id}`}>{props.title}</LinkText>
                   
                </div>}
            </header>
            <main>
                <div className=" mx-auto p-2 md:p-4 lg:p-6 min-h-80">
                    {props.children}
                </div>
            </main>
        </div>
    )
}