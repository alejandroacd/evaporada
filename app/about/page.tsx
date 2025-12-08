import { GoBackButton } from "@/components/go-back";
import { supabaseServer } from "@/lib/supabase/server";
import ReactMarkdown from "react-markdown";

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const supabase = supabaseServer();

  // Check what columns exist in your table
  const { data: allRows } = await supabase
    .from("about")
    .select("*")
    .order('id', { ascending: false }); // Order by ID instead


  if (!allRows || allRows.length === 0) {
    return (
      <section className="container py-8 max-w-3xl mx-auto">
        <GoBackButton label="Back to Home" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6"></h1>
          
        </div>
      </section>
    );
  }

  // Get the row with the highest ID (most recent)
  const about = allRows[1];

  return (
    <section className="container py-8 max-w-3xl mx-auto">
      <GoBackButton label="Back to Home" />
      
      
      <article className="p-6">
        <div className="prose prose-neutral dark:prose-invert leading-relaxed max-w-none">
          <ReactMarkdown>{about.content}</ReactMarkdown>
        </div>
      </article>
    </section>
  );
}