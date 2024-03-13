import { Section } from "~/components"
import { items } from "./_app"
import { useLocation } from "@remix-run/react"
import { scrollTo } from "~/utils"
export default function Home() {
  const location = useLocation()
  const { hash } = location

  setTimeout(() => {
    scrollTo(hash)
  }, 200);

  return (
    <div className="">
      {
        items.map((item) => (
          <Section id={item.id} title={item.title}>
          </Section>
        ))
      }
    </div>
  )
}