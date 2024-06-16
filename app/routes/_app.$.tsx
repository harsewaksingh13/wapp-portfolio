import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Attributes } from "react";
import { fetchFileContents } from "~/utils";
import parseFrontMatter from 'front-matter';
import { Article, PageMarkdown } from "~/pages";
//content  details page to fetch file content from given file
export const loader = async ({ params }: LoaderFunctionArgs) => {
   
      console.log('route params:', params);
      let path = params["*"] || '';
      console.log('original path:', path);
  
      // Add .mdx extension if not already present
      if (!path.endsWith('.mdx')) {
        path += '.mdx';
      }
      console.log('final path with .mdx extension:', path);
  
      // Fetch file contents
      const markdown = await fetchFileContents(path);
      if (!markdown) {
        throw new Response('File Not Found', { status: 404 });
      }
      console.log('fetched markdown:', markdown);
  
      // Parse frontmatter and body
      const { attributes, body } = parseFrontMatter<Attributes>(markdown);
      console.log('parsed attributes:', attributes);
  
      // Return the parsed attributes and body
      return { ...attributes, body };
  

  };
  
export default function ContentPage() {
    let article = useLoaderData<Article>();
    return (
        <PageMarkdown article={article} ></PageMarkdown>
    )
}