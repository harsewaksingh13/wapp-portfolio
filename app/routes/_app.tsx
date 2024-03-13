import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Footer, Header, HeaderItem, Section, Text } from "~/components";
import { Page } from "~/pages";

export const meta: MetaFunction = () => {
  return [
    { title: "The portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const items = [{
  id: '#home',
  title: 'Welcome to the portfolio',
  header_title: 'Home',
  type: 'hero',
  href: "/",
  items: [
    {
      image: ''
    }
  ]
}, {
  id: '#home-projects',
  title: 'Projects',
  header_title: 'Projects',
  other_cta: 'View all',
  href:'/#home-projects',
  type: 'projects',
  items: [
    {
      title: 'The portofilio - Techniers',
      description: 'Let the world know who you are',
      image: ''
    }
  ]
},
{
  id: '#home-features',
  title: 'Features',
  header_title: 'Features',
  other_cta: 'View all',
  href:'/#home-features',
  type: 'features',
  items: [
    {
      title: 'The portofilio - Techniers',
      description: 'Let the world know who you are',
      image: ''
    }
  ]
}
]



export default function Layout() {
  var headerItems: HeaderItem[] = items.map(({ header_title, href, id }) => {
    return { title: header_title, href, content_id: id }
  })
  headerItems.push({ title: 'About', href: '/about' })
  return (
    <Page>

      <Header items={headerItems} />
      <Outlet />
      <Footer />
    </Page>
  );
}

//use for tabs
{/* <nav className="flex justify-center space-x-4 sticky top-0">
        {navigation.map((item) => (
          <button
            onClick={() => {
              scrollTo(item.href)
            }}
            key={item.name} className="font-medium px-3 py-2  dark:text-white text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            {item.name}
          </button>
        ))}
      </nav> */}