import { GridLayout } from "@/components/grid-layout";
import { GridBox } from "@/components/grid-box";
import { SectionTitle } from "@/components/section-title";
import { supabaseServer } from "@/lib/supabase/server";
import { Display } from "@/types/display";
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
    const supabase = supabaseServer()

    const { data: displays, error } = await supabase
        .from('displays')
        .select('*')
        .order('created_at', { ascending: false })

        console.log()
    return <section>
        <SectionTitle sectionTitle="Displays" />
        <GridLayout>
            {displays && displays.map((display: Display) => (
                <GridBox key={display.id}
                title={display.title}
                image={display.images[0]}
                id={display.id}
                section="displays"
                />
            ))}
        </GridLayout>
    </section>
}