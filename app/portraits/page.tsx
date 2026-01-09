import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { supabaseServer } from "@/lib/supabase/server";

interface Portrait {
  id: string | number;
  image_url: string;
  order?: number;
  created_at: string;
}

export const revalidate = 60;

export default async function PortraitsPage() {
  const supabase = supabaseServer();
  
  // Ordenar por 'order' si existe, sino por created_at
  const { data: portraits, error } = await supabase
    .from('portraits')
    .select('*')
    .order('order', { ascending: true, nullsFirst: false }) // Primero por order
    .order('created_at', { ascending: false }); // Luego por fecha
  
  if (error) {
    console.error("Error fetching portraits:", error);
    
    // Fallback al orden anterior
    const { data: fallbackData } = await supabase
      .from('portraits')
      .select('*')
      .order('created_at', { ascending: false });
    
    return (
      <section className="min-h-screen py-8">
        <SectionTitle sectionTitle="Portraits" />
        <div className="container mx-auto px-4 mt-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {fallbackData && fallbackData.map((portrait: Portrait) => (
              <Card
                key={portrait.id}
                className="break-inside-avoid bg-transparent border-none mb-4 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={portrait.image_url}
                      alt={`Portrait ${portrait.id}`}
                      width={600}
                      height={600}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-8">
      <SectionTitle sectionTitle="Portraits" />

      {/* Masonry-like Grid */}
      <div className="container mx-auto px-4 mt-8">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {portraits && portraits.map((portrait: Portrait) => (
            <Card
              key={portrait.id}
              className="break-inside-avoid bg-transparent border-none mb-4 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={portrait.image_url}
                    alt={`Portrait ${portrait.id}`}
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}