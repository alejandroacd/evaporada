import { Display } from "@/types/display";
import DisplayContent from "@/components/display";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import { GoBackButton } from "@/components/go-back";
// Datos de ejemplo
const mockDisplay: Display = {
  id: "1",
  title: "Only Love",
  description: "Everything is at play when I put together a personalized series: my impression of the other person, my impression of myself, how they affect my energy, what they inspire in me, my mood, how to say something I have been wanting to say using someone’s home as a museum.. ",
  images: [
    "https://picsum.photos/id/1/600/800",    // Office scene
    "https://picsum.photos/id/20/600/800",   // Mountains
    "https://picsum.photos/id/30/600/800",   // Forest
    "https://picsum.photos/id/40/600/800",   // City
    "https://picsum.photos/id/50/600/800"    // Beach
  ]
};

export default async function DisplayPage({ params }: { params: { id: string } }) {
  const { id } = await params;

    const supabase = supabaseServer();
    const { data: display, error } = await supabase
      .from("displays")
      .select("*")
      .eq("id", id)
      .single();
  
 
  return (
    <div className="container  py-8">
      <DisplayContent display={display} />
    </div>
  );
}
