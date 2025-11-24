import { GridBox } from "@/components/grid-box";
import { GridLayout } from "@/components/grid-layout";
import { SectionTitle } from "@/components/section-title";


const books = [{
    title: "Color Palette",
    image: "https://picsum.photos/600/400?random=1",
    href: "/publications/li"
}, {
    title: "Secrets",
    image: "https://picsum.photos/600/400?random=2",
    href: "/publications/lo"
}, {
    title: "Lucky Mistakes",
    image: "https://picsum.photos/600/400?random=3",
    href: "/publications/la"
}]
export default async function PublicationsPage() {
    return <section>
        <SectionTitle sectionTitle="Publications" />
        <GridLayout>
            {books.map((item) => (
                <GridBox key={item.title} {...item} />
            ))}
        </GridLayout>
    </section>
}