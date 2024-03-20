import { CardItem, Hero, Section } from "~/components"
import { HomeSection, items } from "./_app"
import { useLocation } from "@remix-run/react"
import { scrollTo } from "~/utils"
import { Page, PageContent } from "~/pages"
import { ReactNode } from "react"
import { ListHorizontal } from "~/components/Listing/ListHorizontal/ListHorizontal"
export default function Home() {
  const location = useLocation()
  const { hash } = location

const projects = [
  {
    title: 'Portfolio project',
    children: <CardItem title={"Portfolio project"}></CardItem>
  },
  {
    title: 'Portfolio project',
    children: <CardItem title={"Portfolio project"}></CardItem>
  },
  {
    title: 'Portfolio project',
    children: <CardItem title={"Portfolio project"}></CardItem>
  }
]

  setTimeout(() => {
    scrollTo(hash)
  }, 200);

  const sectionContent = (section: HomeSection) => {
    switch (section.type) {
      case 'hero': return <Hero title='Welcome' href={section.href}></Hero>
      case 'skills': return <Tags tags={
        [{ title: 'Tyescript' }, { title: 'Java' },
        { title: 'C++' }, { title: 'Swift' },
        { title: 'Kotlin' }, { title: 'Javascript' }, { title: 'Kmm' },
        { title: 'React Native' }, { title: 'Mongodb' }, { title: 'Nodejs' },
        { title: 'android' }, { title: 'iOS' }, { title: 'Html' },
        { title: 'Css' }, { title: 'remix' }, { title: 'swiftui' }, { title: 'compose' },
        { title: 'rxjava' }, { title: 'di' }
        ]}></Tags>
      case 'projects': return <ListHorizontal items={projects}></ListHorizontal>
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

type Tag = {
  icon?: string | undefined
  title: string
}

export type TagsProps = {
  tags: Tag[]
}

const Tags = (props: TagsProps) => {
  return (
    <div className="flex-1">
      {props.tags.map(t => {
        return <SkillTag>{t.title}</SkillTag>
      })}
    </div>
  )
}

export interface SkillTagProps {
  children: ReactNode
}

const SkillTag = (props: SkillTagProps) => {
  return <div
    className="m-2 inline-flex items-center font-bold leading-sm px-3 p-4 pr-5 bg-orange-200 text-orange-700 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-activity mr-2"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
    {props.children}
  </div>
}