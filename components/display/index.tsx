"use client"

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZoomIn, X, ChevronLeft, ChevronRight} from "lucide-react";
import { Display } from "@/types/display";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GoBackButton } from "../go-back";

export function DisplayContent({ display }: { display: Display }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images: string[] = display.images || [];

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

  // Prevenir clic derecho
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Prevenir arrastrar imagen
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mb-6">
        <GoBackButton label="Back to Displays"/>
      </div>

      {/* Title and Description */}
      <div className="space-y-6 mb-8 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          {display.title}
        </h1>
        
        <p className="text-foreground leading-relaxed text-lg whitespace-pre-line">
          {display.description}
        </p>
      </div>

      {/* Images Grid */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden bg-muted group cursor-zoom-in"
                onClick={() => openModal(index)}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
              >
                <Image
                  src={image}
                  alt={`${display.title} ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 select-none"
                  draggable={false}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                />
                
                {/* Zoom overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onContextMenu={handleContextMenu}
          >
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-background/80 hover:bg-background"
              onClick={closeModal}
            >
              <X className="h-4 w-4" />
            </Button>

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

                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
                  <div className="bg-background/80 px-4 py-2 rounded-full text-sm font-medium">
                    {selectedImageIndex + 1} / {images.length}
                  </div>
                </div>
              </>
            )}

            <div className="relative w-full h-full max-w-4xl max-h-full">
              <Image
                src={images[selectedImageIndex]}
                alt={display.title}
                fill
                className="object-contain p-4 select-none"
                quality={90}
                draggable={false}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
              />
            </div>

            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="flex gap-2 bg-background/80 p-2 rounded-lg">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative w-16 h-16 rounded cursor-pointer border-2 ${
                        index === selectedImageIndex
                          ? "border-primary"
                          : "border-transparent hover:border-white"
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                      onContextMenu={handleContextMenu}
                    >
                      <Image
                        src={image}
                        alt={`${display.title} ${index + 1}`}
                        fill
                        className="object-cover rounded select-none"
                        draggable={false}
                        onContextMenu={handleContextMenu}
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

export default DisplayContent;