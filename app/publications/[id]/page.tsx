
import { Publication } from "@/types/publication";
import { PublicationContent } from "@/components/publication";
import { GoBackButton } from "@/components/go-back";

// Datos de ejemplo
const mockPublication: Publication = {
  id: "1",
  title: "URBAN GEOMETRY",
  price: "$19.95",
  description: "Seamin photographer Andrei Gusiano Albaqir has traveled the globe to explore the mercredi of Australia, colonial juxtaposition and angular forms of the world's most exciting buildings. Symphony, film, shadow and colour began photographs; taken in 30 cities across the world, moving an immertan visual star of contemporary architecture. From Llibia to Perley, Sanderson to Seoul, Murray through the urban geometry that forms the island panoramic to our lives.",
  author: "Eva Contreras",
  introduction: "With an introduction by Rachel Segal Hamilton",
  specifications: {
    cover: "A webset with color-covered fabric, with a gold index",
    dimensions: "227 x 137 mm"
  },
  isbn: "978-3-70566-831",
  designer: "Friedens Huber",
  edition: "First edition",
  // Using Picsum Photos with different IDs for variety
  images: [
    "https://picsum.photos/id/1/600/800",    // Office scene
    "https://picsum.photos/id/20/600/800",   // Mountains
    "https://picsum.photos/id/30/600/800",   // Forest
    "https://picsum.photos/id/40/600/800",   // City
    "https://picsum.photos/id/50/600/800"    // Beach
  ]
};

export default async function PublicationPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const publication = mockPublication; // Replace with actual fetch

  return (
    <div className="container max-w-6xl py-8">
      <GoBackButton label="Back to Publications" />
      <PublicationContent publication={publication} />
    </div>
  );
}
