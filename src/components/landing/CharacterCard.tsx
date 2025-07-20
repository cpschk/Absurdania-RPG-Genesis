
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
          <Card className="bg-gray-900/50 border-purple-500/20 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 w-full h-full flex flex-col justify-center">
            <CardHeader className="pt-4">
              {type && (
                <Badge variant={getBadgeVariant(type)} className="mx-auto mb-2 w-fit">
                  {type}
                </Badge>
              )}
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={name}
                  width={100}
                  height={100}
                  className={cn("object-contain mx-auto mb-2 h-24 w-24", isScaledCharacter && "scale-125")}
                  data-ai-hint={dataAiHint}
                />
              ) : (
                <div className="text-6xl mx-auto mb-4">{icon}</div>
              )}
              <CardTitle className="text-lg font-bold text-white">{name}</CardTitle>
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
                   <div>
                     <h4 className="font-bold text-sm mt-2 mb-1">Ataques:</h4>
                     <ul className="text-xs list-none p-0">
                       {attacks.map((attack, i) => <li key={i}>{attack}</li>)}
                     </ul>
                   </div>
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
