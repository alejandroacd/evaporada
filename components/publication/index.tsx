"use client"

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Share, 
  Printer, 
  Mail, 
  Plus, 
  X,
  ZoomIn
} from "lucide-react";
import { Publication } from "@/types/publication";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function PublicationContent({ publication }: { publication: Publication }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use provided images, otherwise fall back to Picsum placeholders
  const images: string[] = (publication.images && publication.images.length > 0)
    ? publication.images
    : Array.from({ length: 4 }).map((_, i) => {
        const seed = (publication.id ?? publication.title ?? "publication").toString().replace(/\s+/g, "-");
        return `https://picsum.photos/seed/${encodeURIComponent(seed)}-${i}/900/1200`;
      });

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImageModal = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImageModal = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-4 group">
                <Image
                  src={images[selectedImageIndex]}
                  alt={publication.title}
                  fill
                  className="object-cover cursor-zoom-in"
                  priority
                  onClick={() => openModal(selectedImageIndex)}
                />

                {/* Zoom button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => openModal(selectedImageIndex)}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>

                {images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>

                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-background/80 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedImageIndex + 1} / {images.length}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative aspect-[3/4] rounded-md cursor-pointer border-2 transition-all group ${
                        index === selectedImageIndex
                          ? "border-primary"
                          : "border-transparent hover:border-muted-foreground"
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={image}
                        alt={`${publication.title} ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                      />
                      {/* Overlay for zoom on thumbnails */}
                      <div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(index);
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Info section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">{publication.title}</h1>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">by {publication.author}</h2>
          </div>

          <div className="space-y-2">
            <p className="text-foreground leading-relaxed">{publication.description}</p>
          </div>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Andrei Gusiano Albaqir is a freelance photographer from Spain. For the past ten years Andrei has been documenting the architecture and urban life of numerous European and Asian cities, and his works has been featured on many publications and exhibitions.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3 pt-4 ml-auto justify-end">
            <Button variant="outline" className="gap-2">
              <Share className="h-4 w-4" />
              Share
            </Button>

            <Button variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>

            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Button>
          </div>
        </div>
      </div>

      {/* Modal para imagen expandida */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-background/80 hover:bg-background"
              onClick={closeModal}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background z-50"
                  onClick={prevImageModal}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background z-50"
                  onClick={nextImageModal}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-background/80 px-4 py-2 rounded-full text-sm font-medium">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              </div>
            )}

            {/* Main image in modal */}
            <div className="relative w-full h-full max-w-4xl max-h-full">
              <Image
                src={images[selectedImageIndex]}
                alt={publication.title}
                fill
                className="object-contain p-4"
                quality={90}
              />
            </div>

            {/* Thumbnails in modal */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="flex gap-2 bg-background/80 p-2 rounded-lg">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative w-16 h-16 rounded cursor-pointer border-2 transition-all ${
                        index === selectedImageIndex
                          ? "border-primary"
                          : "border-transparent hover:border-white"
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={image}
                        alt={`${publication.title} ${index + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PublicationContent;