
"use client";

import Image from "next/image";
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
  
  const getBorderColorClass = (type?: string) => {
    switch (type) {
      case 'Enemigo':
        return 'from-red-500 via-red-500 to-red-500';
      case 'Objeto':
        return 'from-blue-500 via-blue-500 to-blue-500';
      case 'NPC':
        return 'from-green-500 via-green-500 to-green-500';
      default:
        return 'from-purple-500 via-pink-500 to-purple-500';
    }
  };

  const getTypePillClass = (type?: string) => {
    switch (type) {
      case 'Enemigo':
        return 'bg-red-900/50 text-red-300 border-red-500/50 shadow-red-500/50';
      case 'Objeto':
        return 'bg-blue-900/50 text-blue-300 border-blue-500/50 shadow-blue-500/50';
      case 'NPC':
        return 'bg-green-900/50 text-green-300 border-green-500/50 shadow-green-500/50';
      default:
        return 'bg-purple-900/50 text-purple-300 border-purple-500/50 shadow-purple-500/50';
    }
  };

  const getGlowColorClass = (type?: string) => {
     switch (type) {
      case 'Enemigo':
        return 'shadow-red-500/40';
      case 'Objeto':
        return 'shadow-blue-500/40';
      case 'NPC':
        return 'shadow-green-500/40';
      default:
        return 'shadow-purple-500/40';
    }
  }

  const getImageGlowClass = (type?: string) => {
    switch (type) {
      case 'Enemigo':
        return 'drop-shadow-glow-red';
      case 'Objeto':
        return 'drop-shadow-glow-blue';
      case 'NPC':
        return 'drop-shadow-glow-green';
      default:
        return 'drop-shadow-glow-purple';
    }
  }

  return (
    <div className="perspective w-full h-full" onClick={onFlip}>
      <div
        className={cn(
          "relative w-full h-full preserve-3d transition-transform duration-700 cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden">
          <div className={cn(
            "relative w-full h-full rounded-2xl p-[2px] transition-all duration-300",
            isMainCard ? `bg-gradient-to-br ${getBorderColorClass(type)} shadow-2xl ${getGlowColorClass(type)}` : 'bg-gray-800'
          )}>
            <div className="relative w-full h-full bg-gray-900 rounded-[14px] flex flex-col justify-center items-center text-center p-4">
              {type && (
                <div className={cn("absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full border text-xs font-bold uppercase tracking-widest shadow-lg z-10", getTypePillClass(type))}>
                   {type}
                </div>
              )}
              
              <div className="flex-grow flex items-center justify-center w-full h-full">
                 {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className={cn(
                      "object-contain mx-auto scale-90",
                      getImageGlowClass(type)
                    )}
                    data-ai-hint={dataAiHint}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className={cn("text-8xl mx-auto my-auto", getImageGlowClass(type))}>{icon}</div>
                )}
              </div>

              <h3 className="absolute bottom-4 left-0 right-0 font-headline text-3xl text-white text-outline drop-shadow-glow-purple tracking-wider z-10">{name}</h3>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className={cn(
            "relative w-full h-full rounded-2xl p-[2px] transition-all duration-300",
            isMainCard ? `bg-gradient-to-br ${getBorderColorClass(type)} shadow-2xl ${getGlowColorClass(type)}` : 'bg-gray-800'
          )}>
            <div className="relative w-full h-full bg-gray-900 rounded-[14px] flex flex-col justify-center items-center text-center p-4">
               <div className="text-center text-white p-4 space-y-2">
                 {phrase && description && attacks ? (
                   <>
                     <p className="text-md italic text-yellow-300">"{phrase}"</p>
                     <p className="text-sm text-gray-300">{description}</p>
                     {attacks.length > 0 && (
                       <div>
                         <h4 className="font-bold text-md mt-2 mb-1 text-red-400 uppercase tracking-wider">Ataques:</h4>
                         <ul className="text-sm list-none p-0 text-gray-200">
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
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
