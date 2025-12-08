import { GoBackButton } from "@/components/go-back";
import { supabaseServer } from "@/lib/supabase/server";
import ReactMarkdown from "react-markdown";

export default async function AboutPage() {
  const supabase = await supabaseServer();

  const { data: about, error } = await supabase
    .from("about")
    .select("title, content")
    .single();

  if (error || !about) {
    return (
      <section className="container py-8 max-w-3xl mx-auto">
        <GoBackButton label="Back to Home" />
        <p className="mt-6 text-muted-foreground">
          Unable to load content.
        </p>
      </section>
    );
  }

  return (
    <section className="container py-8 max-w-3xl mx-auto">
      <GoBackButton label="Back to Home" />

      <article className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          {about.title}
        </h1>

        <div className="prose prose-neutral dark:prose-invert leading-relaxed max-w-none">
          <ReactMarkdown>
            {about.content}
          </ReactMarkdown>
        </div>
      </article>
    </section>
  );
}
