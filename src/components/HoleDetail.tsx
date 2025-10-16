import { useState, useEffect } from "react";
import { Hole } from "@/data/holes";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface HoleDetailProps {
  hole: Hole | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const HoleDetail = ({ 
  hole, 
  isOpen, 
  onClose, 
  onPrevious, 
  onNext,
  hasPrevious,
  hasNext 
}: HoleDetailProps) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "ArrowLeft" && hasPrevious) {
        onPrevious();
      } else if (e.key === "ArrowRight" && hasNext) {
        onNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, hasPrevious, hasNext, onPrevious, onNext, onClose]);

  if (!hole) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-4xl h-[90vh] flex flex-col p-0 gap-0"
      >
        <div className="flex items-center gap-3 p-4 border-b bg-card">
          <div className="bg-primary text-primary-foreground font-bold text-xl px-4 py-2 rounded-full">
            {hole.id}
          </div>
          <div>
            <h2 className="font-bold text-xl text-foreground">{hole.title}</h2>
            <Badge variant="secondary" className="mt-1">
              {hole.game_mode}
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground">Beschreibung</h3>
          <p className="text-foreground leading-relaxed">{hole.description}</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <Carousel key={hole.id} className="w-full">
            <CarouselContent>
              {hole.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="space-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                      <img 
                        src={image.src} 
                        alt={image.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center font-medium">
                      {image.caption}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {hole.images.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
        </div>

        <div className="flex gap-2 p-4 border-t bg-card">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="flex-1"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Vorherige
          </Button>
          <Button
            variant="outline"
            onClick={onNext}
            disabled={!hasNext}
            className="flex-1"
          >
            Nächste
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
