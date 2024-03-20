

import { Page, PageContent, PageListContent } from "~/pages"
import { Header, Text } from "~/components"
import { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
    return [
        { title: "The portfolio - Projects" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function ProjectsPage() {
    return (
        <Page>
            <PageListContent title="Projects" items={[]}>
                <Text> Page About Contents </Text>
            </PageListContent>
        </Page>
    )
}