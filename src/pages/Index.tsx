import { useState, useEffect } from "react";
import { holes } from "@/data/holes";
import { HoleCard } from "@/components/HoleCard";
import { HoleDetail } from "@/components/HoleDetail";

const Index = () => {
  const [selectedHoleId, setSelectedHoleId] = useState<number | null>(null);

  useEffect(() => {
    holes.forEach(hole => {
      hole.images.forEach(image => {
        const img = new Image();
        img.src = image.src;
      });
    });
  }, []);

  const selectedHole = holes.find(h => h.id === selectedHoleId) || null;
  const selectedIndex = holes.findIndex(h => h.id === selectedHoleId);

  const handlePrevious = () => {
    if (selectedIndex === -1) return;
    const newIndex = (selectedIndex - 1 + holes.length) % holes.length;
    setSelectedHoleId(holes[newIndex].id);
  };

  const handleNext = () => {
    if (selectedIndex === -1) return;
    const newIndex = (selectedIndex + 1) % holes.length;
    setSelectedHoleId(holes[newIndex].id);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-gradient-hero text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">Krosser Karl IX - Roadbook</h1>
          <p className="text-center mt-1"><a href="https://www.google.com/maps/d/viewer?mid=1X68aQAtVFoDazYB1jET5jOKv-UgDFKo&usp=sharing" className="underline hover:text-blue-600 dark:hover:text-blue-400" target="_blank">Google Maps Bahnenübersicht</a></p>
          <p className="text-center mt-1"><a href="https://docs.google.com/document/d/1RmE6HcEb3fy5kiikWNynmfIYCg1ZLds6E5KzjVClWhg/edit?usp=sharing" className="underline hover:text-blue-600 dark:hover:text-blue-400" target="_blank">Regeln</a></p>
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
        hasPrevious={holes.length > 1}
        hasNext={holes.length > 1}
      />
    </div>
  );
};

export default Index;
