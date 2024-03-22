import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// import { TableContents } from "~/components/TableContents/TableContents";
import { PageContent } from "~/pages";


export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    //invariant(params.slug, "params.slug is required");
    console.log("article params", params)
    //const post = await getPost(params.slug);
    // invariant(post, `Post not found: ${params.slug}`);
    let file = new File([], "README.md")

    const article = {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
        // content: marked("#  Techniers web\n`dev` – start dev server").toString(),
    }
    // const html = marked(post.markdown);
    return json(article);
};

export default function ArticlePage() {
    console.log("article dynamic page")
    let article = useLoaderData<typeof loader>();


    return (
        <PageContent title={article.title}>

            <div>
                Article details
            </div>

        </PageContent>
    )
}