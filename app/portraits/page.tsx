import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const mockPortraits = [
  { id: 1, src: "https://picsum.photos/id/1005/400/600", aspect: "portrait" },
  { id: 2, src: "https://picsum.photos/id/1011/600/400", aspect: "landscape" },
  { id: 3, src: "https://picsum.photos/id/1012/400/500", aspect: "portrait" },
  { id: 4, src: "https://picsum.photos/id/1015/500/400", aspect: "landscape" },
  { id: 5, src: "https://picsum.photos/id/1018/400/700", aspect: "portrait" },
  { id: 6, src: "https://picsum.photos/id/1025/600/500", aspect: "landscape" },
];

export default async function PortraitsPage() {
  const portraits = mockPortraits;

  return (
    <section className="min-h-screen py-8">
      <SectionTitle sectionTitle="Portraits" />
      
      {/* Masonry-like Grid */}
      <div className="container mx-auto px-4 mt-8">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {portraits.map((portrait) => (
            <Card 
              key={portrait.id} 
              className="break-inside-avoid mb-4 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={portrait.src}
                    alt={`Portrait ${portrait.id}`}
                    width={portrait.aspect === "portrait" ? 400 : 600}
                    height={portrait.aspect === "portrait" ? 600 : 400}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}