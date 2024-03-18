

import { Page, PageContent, PageListContent } from "~/pages"
import { Header, Text } from "~/components"
import { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
    return [
        { title: "The portfolio - Articles" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function ArticlesPage() {
    return (
        <Page>
            <PageListContent title="Articles">
                <Text> Page About Contents </Text>
            </PageListContent>
        </Page>
    )
}