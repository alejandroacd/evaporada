import { GridLayout } from "@/components/grid-layout";
import { GridBox } from "@/components/grid-box";
import { SectionTitle } from "@/components/section-title";
import { supabaseServer } from "@/lib/supabase/server";
import { Display } from "@/types/display";

export const revalidate = 60;

export default async function DisplaysPage() {
    const supabase = supabaseServer();

    const { data: displays, error } = await supabase
        .from('displays')
        .select('*')
        .order('order', { ascending: true, nullsFirst: false }) 
        .order('created_at', { ascending: false }); 

    if (error) {
        console.error("Error fetching displays:", error);
        
        const { data: fallbackData } = await supabase
            .from('displays')
            .select('*')
            .order('created_at', { ascending: false });
        
        return (
            <section>
                <SectionTitle sectionTitle="Displays" />
                <GridLayout>
                    {fallbackData && fallbackData.map((display: Display) => (
                        <GridBox
                            key={display.id}
                            title={display.title}
                            description={display.description} 
                            image={display.images[0]}
                            id={display.id}
                            section="displays"
                        />
                    ))}
                </GridLayout>
            </section>
        );
    }

    return (
        <section>
            <SectionTitle sectionTitle="Displays" />
            <GridLayout>
                {displays && displays.map((display: Display) => (
                    <GridBox
                        key={display.id}
                        title={display.title}
                        image={display.images[0]}
                        id={display.id}
                        section="displays"
                    />
                ))}
            </GridLayout>
        </section>
    );
}