import DisplayContent from "@/components/display";
import { supabaseServer } from "@/lib/supabase/server";

export const revalidate = 60
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
