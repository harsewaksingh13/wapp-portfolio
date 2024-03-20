

import { Page, PageContent, PageListContent } from "~/pages"
import { CardItem, Header, Text } from "~/components"
import { MetaFunction } from "@remix-run/node";
import { ListHorizontal } from "~/components/Listing/ListHorizontal/ListHorizontal";


export const meta: MetaFunction = () => {
    return [
        { title: "The portfolio - Articles" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function ArticlesPage() {
    const items = [
        {
          title: 'Portfolio project',
          children: <CardItem title={"Portfolio project"}></CardItem>
        },
        {
          title: 'Portfolio project',
          children: <CardItem title={"Portfolio project"}></CardItem>
        },
        {
          title: 'Portfolio project',
          children: <CardItem title={"Portfolio project"}></CardItem>
        }]
    return (
        <Page>
            <PageListContent title="Articles" items={[]}>
                
                     <ListHorizontal items={
                      [...items, ...items, ...items]}></ListHorizontal>
                
            </PageListContent>
        </Page>
    )
}