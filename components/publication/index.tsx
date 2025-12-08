"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Share,
  X,
  ZoomIn
} from "lucide-react";
import { Publication } from "@/types/publication";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";
import TipTapContent from "../tip-tap-renderer";

export function PublicationContent({
  publication,
}: {
  publication: Publication;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images =
    publication.images && publication.images.length > 0
      ? publication.images
      : [];

  const nextImage = () =>
    setSelectedImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const prevImage = () =>
    setSelectedImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  /* ======================
      SHARE HANDLER
  ====================== */
  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: publication.title,
          text: publication.description?.slice(0, 120),
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard");
      }
    } catch (error) {
      toast.error("Unable to share");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-6">
        {/* LEFT / IMAGES */}
        <div className="space-y-3 lg:sticky lg:top-6">
          <Card>
            <CardContent className="p-3">
              {/* Main image */}
              <div className="relative aspect-[21/9] max-h-[80vh] rounded-lg overflow-hidden bg-muted mb-3 group">
                <Image
                  src={images[selectedImageIndex]}
                  alt={publication.title}
                  fill
                  className="object-cover cursor-zoom-in"
                  priority
                  onClick={() => openModal(selectedImageIndex)}
                />

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 opacity-0 group-hover:opacity-100 transition"
                  onClick={() => openModal(selectedImageIndex)}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>

                {images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-[4/3] rounded-md cursor-pointer border-2 transition ${
                        index === selectedImageIndex
                          ? "border-primary"
                          : "border-transparent hover:border-muted-foreground"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${publication.title} ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* RIGHT / INFO */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {publication.title}
          </h1>

          <div className="leading-relaxed text-foreground">
            <TipTapContent content={publication.description} />
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              className="gap-2"
              onClick={handleShare}
            >
              <Share className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] w-full h-[92vh] p-0 bg-black/95 border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-background/80"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            <div className="relative w-full h-full max-w-7xl">
              <Image
                src={images[selectedImageIndex]}
                alt={publication.title}
                fill
                className="object-contain p-6"
                quality={95}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PublicationContent;
