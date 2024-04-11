import ReactMarkdown from "react-markdown"
import { CodeBlock } from "~/components"
import { PageContent, PageProps } from "."

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
                                style={{ maxHeight: 480, width: "100%", objectFit: "cover" }} />
                        ),
                    }
                } >{body}</ReactMarkdown>
            </article>

        </PageContent>
    )
}
