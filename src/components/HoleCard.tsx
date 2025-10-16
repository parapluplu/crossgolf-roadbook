import { Hole } from "@/data/holes";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface HoleCardProps {
  hole: Hole;
  onClick: () => void;
}

export const HoleCard = ({ hole, onClick }: HoleCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className="overflow-hidden cursor-pointer transition-all hover:shadow-card-hover active:scale-[0.98] bg-gradient-card border-border"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={hole.images[0].src} 
          alt={hole.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <div className="bg-primary text-primary-foreground font-bold text-lg px-3 py-1 rounded-full">
            {hole.id}
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="font-semibold">
            {hole.game_mode}
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground line-clamp-1">
          {hole.title}
        </h3>
      </div>
    </Card>
  );
};
