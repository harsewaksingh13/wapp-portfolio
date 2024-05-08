import { CardItem, Hero, Section, Tags } from "~/components"
import { HomeSection } from "./_app"
import { useLoaderData, useLocation } from "@remix-run/react"
import { scrollTo } from "~/utils"
import { PageContent } from "~/pages"
import { ListHorizontal } from "~/components/Listing/ListHorizontal/ListHorizontal"
import { getHomeContent } from "~/utils/services"
import { LoaderFunctionArgs } from "@remix-run/node"

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  return getHomeContent()
};


export default function Home() {
  let data = useLoaderData<typeof loader>();
  const { items } = data
  const location = useLocation()
  const { hash } = location
  setTimeout(() => {
    scrollTo(hash)
  }, 300);

  const sectionContent = (section: HomeSection) => {
    const listItems = section.items?.map((item) => {
      return {
        title: item.title,
        children: <CardItem {...item}></CardItem>
      }
    }) || []
    switch (section.view_type) {
      case 'hero': return <Hero {...section.items?.[0]}></Hero>
      case 'tags': return <Tags tags={section.items}></Tags>
      case 'list': return <ListHorizontal items={listItems}></ListHorizontal>
    }
    return <h1 className="text-primaryText"> No data to show</h1>
  }

  return (
    <PageContent >
      {
        items.map((section) => (
          <Section id={section.id} title={section.title} href={section.href}>
            {sectionContent(section)}
          </Section>
        ))
      }
    </PageContent>
  )
}


