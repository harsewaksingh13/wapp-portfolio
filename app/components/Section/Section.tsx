import { BaseProps } from ".."
import { Text } from ".."

export interface SectionProps extends BaseProps {
    id?: string
    title: string
}

export const Section = (props: SectionProps) => {
    console.log("section ", props)
    return (
        <div id={props.id}>
            <header>
                <div className="bg-green-800 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Text>{props.title}</Text>
                </div>
            </header>
            <main>
                <div className="mx-auto lg:py-4 sm:py-1 sm:px-1 lg:px-4 min-h-80">
                    {props.children}
                </div>
            </main>
        </div>
    )
}