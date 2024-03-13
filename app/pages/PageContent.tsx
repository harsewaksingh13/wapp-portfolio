import { Text } from "~/components";
import { Page, PageProps } from ".";
import { ReactNode } from "react";


export interface PageContentProps extends PageProps {
    title?: string | "Page Title"
}

export const PageContent = (props: PageContentProps) => {
    return (
        <Page>
            <header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Text>{props.title}</Text>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 min-h-screen">
                    {props.children}
                </div>
            </main>
        </Page>
    )
}