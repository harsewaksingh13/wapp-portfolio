import ReactMarkdown from "react-markdown"
import { CodeBlock } from "~/components"
import { PageContent } from "."
//used for mdx tables
import remarkGfm from "remark-gfm";

export type Article = {
    body: string
} & Attributes

export type Attributes = {
    title: string
    tags: string[]
    publishDate: string
    description: string
}

export interface PageMarkdownProps {
    article: Article
}

export const PageMarkdown = (props: PageMarkdownProps) => {
    let { title, tags, body } = props.article
    console.log("title", title)
    return (
        <PageContent title={title}>

            <article className="text-primaryText lg:px-32">
                <ReactMarkdown className="markdown"
                    remarkPlugins={[remarkGfm]}
                    components={
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
                                    style={{ marginLeft: "auto", marginRight: "auto", display: "block", maxHeight: 480, minWidth: "60%" }} />
                            ),
                        }
                    } >{body}</ReactMarkdown>
            </article>

        </PageContent>
    )
}
