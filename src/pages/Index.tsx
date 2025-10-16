import { useState } from "react";
import { holes } from "@/data/holes";
import { HoleCard } from "@/components/HoleCard";
import { HoleDetail } from "@/components/HoleDetail";

const Index = () => {
  const [selectedHoleId, setSelectedHoleId] = useState<number | null>(null);

  const selectedHole = holes.find(h => h.id === selectedHoleId) || null;
  const selectedIndex = holes.findIndex(h => h.id === selectedHoleId);

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedHoleId(holes[selectedIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (selectedIndex < holes.length - 1) {
      setSelectedHoleId(holes[selectedIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-gradient-hero text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">Crossgolf Roadbook</h1>
          <p className="text-center text-primary-foreground/90 mt-1">13 Bahnen</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in">
          {holes.map((hole) => (
            <HoleCard 
              key={hole.id} 
              hole={hole} 
              onClick={() => setSelectedHoleId(hole.id)}
            />
          ))}
        </div>
      </main>

      <HoleDetail
        hole={selectedHole}
        isOpen={selectedHoleId !== null}
        onClose={() => setSelectedHoleId(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedIndex > 0}
        hasNext={selectedIndex < holes.length - 1}
      />
    </div>
  );
};

export default Index;
