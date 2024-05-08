import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Footer, Header, HeaderItem, Section, Text } from "~/components";
import { Attributes, Page } from "~/pages";
import { readPost } from "~/utils";
import { getHeader } from "~/utils/services";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.meta.title },
    { name: "description", content: data?.meta.description },
  ];
};

export type HomeSection = {
  id: string,
  title: string,
  header_title: string,
  header_href: string,
  type: string,
  view_type:  string
  href?: string,
  items?: HomeItem[]
}

export type HomeItem = {
  image?: string
  title?: string
  subTitle?: string
  description?: string
  href?: string
}


export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  return getHeader()
};

export default function Layout() {
  let data = useLoaderData<typeof loader>();
  const { title, svg, items } = data
  return (
    <Page>
      <Header title={title} svg={svg} items={items} />
      <Outlet />
      <Footer />
    </Page>
  );
}