import { PageContent } from "~/pages"
import { Text } from "~/components"

export default function AboutPage() {
    console.log("About page")
    return (
        <PageContent title="About">
            <Text> Page About Contents </Text>
        </PageContent>
    )
}