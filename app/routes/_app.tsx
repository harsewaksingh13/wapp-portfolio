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

export type HomeSection = {
  id: string,
  title: string,
  header_title: string,
  header_href: string,
  type: string,
  href?: string,
  items?: HomeItem[]
}

export type HomeItem = {
  image?: string
  title?: string
  subTitle?: string
  description?: string
}

export const items :HomeSection[] = [{
  id: '#home',
  title: '',
  header_title: 'Home',
  header_href:'/',
  type: 'hero',
  href: '/#home-projects',
},
{
  id: '#home-skills',
  title: 'Skills',
  header_title: 'Skills',
  header_href: '/#home-skills',
  href:'/#home-skills',
  type: 'skills',
  items: [
    {
      title: 'The portofilio - Techniers',
      description: 'Let the world know who you are',
      image: ''
    }
  ]
},
{
  id: '#home-projects',
  title: 'Projects',
  header_title: 'Projects',
  header_href:'/#home-projects',
  href:'/projects',
  type: 'projects',
  items: [
    {
      title: 'The portofilio - Techniers',
      description: 'Let the world know who you are',
      image: 'https://private-user-images.githubusercontent.com/34924186/306881840-ce60199f-2f0a-412f-a368-2cf961ff3e1e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA3MzA2NDYsIm5iZiI6MTcxMDczMDM0NiwicGF0aCI6Ii8zNDkyNDE4Ni8zMDY4ODE4NDAtY2U2MDE5OWYtMmYwYS00MTJmLWEzNjgtMmNmOTYxZmYzZTFlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE4VDAyNTIyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3MmQ0ODc4OWFiMTMyMjAxMjlhNDBlNzM5YjAwYTIyNWViYjZiYmU5MTEzOGNkMzNhYTJhZmNjZWVkM2JmNGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1OQf8fXMtbfe9mle0AuaoxscTqM_LFsZHNTyTdoNYq4'
    }
  ]
},
// {
//   id: '#home-clients',
//   title: 'Clients',
//   header_title: 'Clients',
//   other_cta: 'View all',
//   href:'/#home-clients',
//   type: 'clients',
//   items: [
//     {
//       title: 'The portofilio - Techniers',
//       description: 'Let the world know who you are',
//       image: ''
//     }
//   ]
// }
]



export default function Layout() {
  var headerItems: HeaderItem[] = items.map(({ header_title, href, header_href, id }) => {
    return { title: header_title, href: header_href, content_id: id }
  })
  headerItems.push({ title: 'Articles', href: '/articles' })

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