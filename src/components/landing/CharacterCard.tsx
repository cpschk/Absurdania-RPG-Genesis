"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CharacterCardProps = {
  icon?: string;
  name: string;
  imageUrl?: string;
  "data-ai-hint"?: string;
};

export function CharacterCard({ icon, name, imageUrl, "data-ai-hint": dataAiHint }: CharacterCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective w-full h-full" onClick={handleFlip}>
      <div
        className={cn(
          "relative w-full h-full preserve-3d transition-transform duration-700 cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
        style={{ minHeight: '200px' }}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="bg-gray-900/50 border-purple-500/20 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 w-full h-full flex flex-col justify-center">
            <CardHeader>
              {imageUrl ? (
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500/50">
                  <Image
                    src={`https://placehold.co/100x100.png`}
                    alt={name}
                    width={100}
                    height={100}
                    className="object-cover"
                    data-ai-hint={dataAiHint}
                  />
                </div>
              ) : (
                <div className="text-6xl mx-auto mb-4">{icon}</div>
              )}
              <CardTitle className="text-lg font-bold text-white">{name}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="bg-[#fdf3d9] border-[#c8bda4] text-gray-800 w-full h-full flex flex-col justify-center p-4">
             <CardContent className="text-center pt-6">
               <p className="text-sm italic font-serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
               </p>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
