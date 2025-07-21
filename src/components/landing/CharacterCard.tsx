
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CharacterCardProps = {
  icon?: string;
  name: string;
  imageUrl?: string;
  "data-ai-hint"?: string;
  isFlipped: boolean;
  onFlip: () => void;
  isMainCard: boolean;
  phrase?: string;
  description?: string;
  attacks?: string[];
  type?: string;
};

export function CharacterCard({ 
  icon, 
  name, 
  imageUrl, 
  "data-ai-hint": dataAiHint, 
  isFlipped, 
  onFlip,
  isMainCard,
  phrase,
  description,
  attacks,
  type
}: CharacterCardProps) {
  
  const getBadgeVariant = (type?: string) => {
    switch (type) {
      case 'Enemigo':
        return 'destructive';
      case 'Objeto':
        return 'secondary';
      case 'NPC':
        return 'default';
      default:
        return 'outline';
    }
  };

  const isScaledCharacter = name === 'Despertador Existencial' || name === 'Espada de Fideos' || name === 'Buzon Cobrador';

  return (
    <div className="perspective w-full h-full" onClick={onFlip}>
      <div
        className={cn(
          "relative w-full h-full preserve-3d transition-transform duration-700 cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
        style={{ minHeight: '200px' }}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className={cn(
              "relative bg-gray-900/50 border-purple-500/20 text-center transition-all duration-300 hover:-translate-y-2 w-full h-full flex flex-col justify-center",
              isMainCard && "border-purple-500 shadow-2xl shadow-purple-500/20"
            )}>
            {type && (
              <Badge 
                variant={getBadgeVariant(type)} 
                className="absolute top-1 left-1/2 -translate-x-1/2 z-10 w-3/4 py-1 text-base justify-center"
              >
                {type}
              </Badge>
            )}
            <CardHeader className="pt-4">
              {imageUrl ? (
                <div className="flex-grow flex items-center justify-center">
                  <Image
                    src={imageUrl}
                    alt={name}
                    width={160}
                    height={160}
                    className={cn(
                      "object-contain mx-auto h-24 w-24 md:h-40 md:w-40 mb-2 md:mb-4",
                      isScaledCharacter && "scale-125"
                    )}
                    data-ai-hint={dataAiHint}
                  />
                </div>
              ) : (
                <div className="text-6xl mx-auto my-auto">{icon}</div>
              )}
              <CardTitle className="text-lg font-bold text-white pt-2">{name}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="bg-gray-900/50 border-purple-500/20 w-full h-full flex flex-col justify-center items-center">
             <CardContent className="text-center text-gray-300 p-4 space-y-2">
               {phrase && description && attacks ? (
                 <>
                   <p className="text-sm italic">"{phrase}"</p>
                   <p className="text-xs">{description}</p>
                   {attacks.length > 0 && (
                     <div>
                       <h4 className="font-bold text-sm mt-2 mb-1">Ataques:</h4>
                       <ul className="text-xs list-none p-0">
                         {attacks.map((attack, i) => <li key={i}>{attack}</li>)}
                       </ul>
                     </div>
                   )}
                 </>
               ) : (
                 <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                 </p>
               )}
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
