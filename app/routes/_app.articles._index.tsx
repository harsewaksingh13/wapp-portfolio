

import { Page, PageContent, PageListContent } from "~/pages"
import { CardItem, Header, Text } from "~/components"
import { MetaFunction } from "@remix-run/node";
import { ListHorizontal } from "~/components/Listing/ListHorizontal/ListHorizontal";
import { Grid } from "~/components/Listing/Grid/Grid";


export const meta: MetaFunction = () => {
    return [
        { title: "The portfolio - Articles" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function ArticlesPage() {
    const items = [
        {
          title: 'Why remix run',
          children: <CardItem title="Why remix run" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available" href="/articles/article-why-i-switched-remix-run"></CardItem>
        },
        {
          title: 'Why remix run',
          children: <CardItem title={"Why remix run"} description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available" href="/articles/article-why-i-switched-remix-run"></CardItem>
        },
        {
          title: 'How to markdown',
          children: <CardItem title={"How to markdown"} description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available" href="/articles/article-markdown"></CardItem>
        }]
    return (
        <Page>
            <PageListContent title="Articles" items={[]}>
                
                     <Grid items={
                      [...items, ...items, ...items]}></Grid>
                
            </PageListContent>
        </Page>
    )
}