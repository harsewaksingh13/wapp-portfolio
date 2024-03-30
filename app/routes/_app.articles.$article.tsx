import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// import { TableContents } from "~/components/TableContents/TableContents";
import { PageContent } from "~/pages";
import { readPost } from "~/utils";
import parseFrontMatter from 'front-matter';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from "~/components";
import invariant from "tiny-invariant";

type Article = {
    title: string
    publishDate: string
    meta: ArticleMeta
}
type ArticleMeta = {
    title: string
    publishDate: string
    description: string
}

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    console.log('oarams', params)
    invariant(params.article, "params.article is required");
    const markdown = await readPost(`${params.article}.mdx`);
    if (!markdown) {
        throw new Response('Not Found', { status: 404 });
    }
    // "attributes" contains the parsed frontmatter
    // "body" contains the Markdown string without the frontmatter
    const { attributes, body } = parseFrontMatter<Article>(markdown);
    return { attributes, body };
};

export default function ArticlePage() {
    let { attributes, body } = useLoaderData<typeof loader>();

    return (
        <PageContent title={attributes.title}>

            <article className="text-primaryText lg:px-32">
                <ReactMarkdown className="markdown" components={
                    {
                        pre({ node, children, ...props }) {
                            return <CodeBlock {...props}>{children}</CodeBlock>;
                        },
                        img: ({
                            alt,
                            src,
                            title,
                        }: {
                            alt?: string;
                            src?: string;
                            title?: string;
                        }) => (
                            <img 
                                alt={alt} 
                                src={src} 
                                title={title} 
                                style={{ maxHeight: 480, width: "100%", objectFit:"cover" }}  />
                        ),
                    }
                } >{body}</ReactMarkdown>
            </article>

        </PageContent>
    )
}
