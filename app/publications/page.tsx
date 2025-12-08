import { GridBox } from "@/components/grid-box";
import { GridLayout } from "@/components/grid-layout";
import { SectionTitle } from "@/components/section-title";
import { supabaseServer } from "@/lib/supabase/server";
import { Publication } from "@/types/publication";

export const revalidate = 60
export default async function PublicationsPage() {
    const supabase = supabaseServer()

    const { data: publications, error } = await supabase
        .from('publications')
        .select('*')
        .order('created_at', { ascending: false })

    return <section>
        <SectionTitle sectionTitle="Publications" />
        <GridLayout>
            {publications && publications.map((publication: Publication) => (
                <GridBox
                    key={publication.id}
                    title={publication.title}
                    image={publication.images[0]}
                    id={publication.id}
                    section="publications"
                />
            ))}
        </GridLayout>
    </section>
}