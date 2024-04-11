import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Attributes } from "react";
import invariant from "tiny-invariant";
import { Article, PageMarkdown } from "~/pages";
import { fetchMarkdownFile, readPost } from "~/utils";
import parseFrontMatter from 'front-matter';

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    console.log('oarams', params)
    invariant(params.slug, "params.article is required");
    const markdown = await fetchMarkdownFile(`${params.slug}.mdx`);
    if (!markdown) {
        throw new Response('Not Found', { status: 404 });
    }
    // "attributes" contains the parsed frontmatter
    // "body" contains the Markdown string without the frontmatter
    const { attributes, body } = parseFrontMatter<Attributes>(markdown);
    return { ...attributes, body }
};

export default function ProjectPage() {
    let article = useLoaderData<Article>();
    return (
        <PageMarkdown article={article} ></PageMarkdown>
    )
}