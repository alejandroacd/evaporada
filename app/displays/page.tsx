import { GridLayout } from "@/components/grid-layout";
import { GridBox } from "@/components/grid-box";
import { SectionTitle } from "@/components/section-title";

const displays = [{
    title: "Display One",
    image: "https://picsum.photos/600/400?random=1",
    href: "/displays/di"
},
{
    title: "Display Two",
    image: "https://picsum.photos/600/400?random=2",
    href: "/displays/do"
},
{
    title: "Display Three",
    image: "https://picsum.photos/600/400?random=3",
    href: "/displays/da"
}
]
export default async function DisplaysPage() {
    return <section>
        <SectionTitle sectionTitle="Displays" />
        <GridLayout>
            {displays.map((item) => (
                <GridBox key={item.title} {...item} />
            ))}
        </GridLayout>
    </section>
}