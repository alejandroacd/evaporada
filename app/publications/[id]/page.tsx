import { Publication } from "@/types/publication";
import { PublicationContent } from "@/components/publication";
import { GoBackButton } from "@/components/go-back";
import { supabaseServer } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 60;
export default async function PublicationPage({ params }: Props) {
  const { id } = await params;
  const supabase = supabaseServer();

  const { data: publication, error } = await supabase
    .from("publications")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !publication) {
    notFound();
  }

  return (
    <div className="container max-w-6xl ">
      <GoBackButton label="Back to Publications" />
      <PublicationContent publication={publication as Publication} />
    </div>
  );
}
