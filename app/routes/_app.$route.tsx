import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CardItem } from "~/components";
import { Grid } from "~/components/Listing/Grid/Grid";
import { Page, PageListContent } from "~/pages";

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    const { route } = params
    const items = [
        {
            title: 'How to markdown',
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
            href: "/articles/article-markdown"
        }]
    return { title: route, items: items }
};


function capitalize(str?: string) {
    return str && str.replace(/^./, str[0].toUpperCase());
}
export default function ListPage() {
    let data = useLoaderData<typeof loader>();
    const { title, items } = data
    const gridItems = items.map((item) => {
        return {
            title: item.title,
            children: <CardItem {...item}></CardItem>
        }
    })
    return (
        <Page>
            <PageListContent title={capitalize(title)} items={[]}>

                <Grid items={[...gridItems]} ></Grid>

            </PageListContent>
        </Page>
    )
}