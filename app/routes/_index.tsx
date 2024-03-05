import type { MetaFunction } from "@remix-run/node";
import { Text } from "~/components";
import { Page } from "~/pages";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
]


export default function Index() {
  return (
    <Page>
      <nav className="flex justify-center space-x-4">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="font-medium px-3 py-2  dark:text-white text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
            {item.name}
          </a>
        ))}
      </nav>
    </Page>
  );
}
