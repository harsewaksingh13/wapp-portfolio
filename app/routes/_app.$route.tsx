import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CardItem } from "~/components";
import { Grid } from "~/components/Listing/Grid/Grid";
import { Attributes, Page, PageListContent } from "~/pages";
import { fetchContents, fetchFileContents, fetchFiles } from "~/utils";
import parseFrontMatter from 'front-matter';
import { fetchAndProcessFiles } from "~/utils/services";

//Dynamically display content  as list of route  
//http://localhost:3000/articles
// http://localhost:3000/projects

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { route } = params 
    
    const items = await fetchAndProcessFiles(route || '');
    return { title: route, items };

};


function capitalize(str?: string) {
    return str && str.replace(/^./, str[0].toUpperCase());
}
export default function ListPage() {
    let data = useLoaderData<typeof loader>();
    const { title, items } = data
    console.log('====data list page======', data)
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