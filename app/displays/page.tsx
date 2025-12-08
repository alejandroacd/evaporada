import { GridLayout } from "@/components/grid-layout";
import { GridBox } from "@/components/grid-box";
import { SectionTitle } from "@/components/section-title";
import { supabaseServer } from "@/lib/supabase/server";
import { Display } from "@/types/display";

export const revalidate = 60
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