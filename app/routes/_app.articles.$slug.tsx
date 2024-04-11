import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// import { TableContents } from "~/components/TableContents/TableContents";
import { Article, Attributes, PageContent, PageMarkdown } from "~/pages";
import { readPost } from "~/utils";
import parseFrontMatter from 'front-matter';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from "~/components";
import invariant from "tiny-invariant";



export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    console.log('oarams', params)
    invariant(params.slug, "params.article is required");
    const markdown = await readPost(`${params.slug}.mdx`);
    if (!markdown) {
        throw new Response('Not Found', { status: 404 });
    }
    // "attributes" contains the parsed frontmatter
    // "body" contains the Markdown string without the frontmatter
    const { attributes, body } = parseFrontMatter<Attributes>(markdown);
    return { ...attributes, body }
};

export default function ArticlePage() {
    let article = useLoaderData<Article>();
    return (
        <PageMarkdown article={article} ></PageMarkdown>
    )
}
