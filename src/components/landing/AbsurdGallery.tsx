
'use client';

import { useState, TouchEvent as ReactTouchEvent, MouseEvent, useEffect } from 'react';
import { CharacterCard } from './CharacterCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const characters = [
  { icon: '🧠', name: 'Filósofo de Microondas', type: 'NPC' },
  { icon: '🤡', name: 'Payaso de Guerra', type: 'NPC' },
  { icon: '🧛', name: 'Vampiro de Redes Sociales', type: 'NPC' },
  {
    name: 'Despertador Existencial',
    imageUrl: '/despertador-existencial.png',
    'data-ai-hint': 'alarm clock illustration',
    phrase: '¡Levántate a cuestionar tu propósito!',
    description: 'Un despertador filosófico que no solo suena, sino que hace preguntas incómodas sobre la vida.',
    attacks: ['Zumbido de Realidad', 'Repetición Infinita'],
    type: 'Enemigo',
  },
  {
    name: 'Espada de Fideos',
    imageUrl: '/espada-fideos.png',
    'data-ai-hint': 'noodle sword',
    phrase: '¡Al dente!',
    description: "Un arma hecha de tallarines que se endurecen al gritar '¡al dente!'.",
    attacks: ["Golpe Rigatoni", "Estocada de Espagueti"],
    type: 'Objeto',
  },
  {
    name: 'Buzon Cobrador',
    imageUrl: '/buzon-cobrador.png',
    'data-ai-hint': 'mailbox monster',
    phrase: "¡Paga tus cartas!",
    description: "Un buzón hostil que guarda deudas emocionales y facturas vencidas.",
    attacks: ["Factura Letal", "Interés Compuesto"],
    type: 'Enemigo',
  }
];

export function AbsurdGallery() {
  const [rotation, setRotation] = useState(0);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const [carouselWidth, setCarouselWidth] = useState(450);

  useEffect(() => {
    setCarouselWidth(isMobile ? 220 : 450);
  }, [isMobile]);

  const angle = 360 / characters.length;
  const tz = Math.round( ( carouselWidth / 2 ) / Math.tan( Math.PI / characters.length ) );

  const handleNext = () => {
    setRotation(rotation - angle);
    setFlippedCardIndex(null); 
  };

  const handlePrev = () => {
    setRotation(rotation + angle);
    setFlippedCardIndex(null); 
  };

  const handleCardFlip = (index: number) => {
    setFlippedCardIndex(prevIndex => (prevIndex === index ? null : index));
  };
  
  const totalCards = characters.length;
  const currentCardIndex = (Math.round(-rotation / angle) % totalCards + totalCards) % totalCards;

  const handleCardClick = (index: number) => {
    if (index === currentCardIndex) {
      handleCardFlip(index);
    }
  };

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    e.preventDefault(); 
  };

  const handleTouchEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > 50) { // Swipe threshold
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div 
        className="carousel-container h-[320px] w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel" style={{ transform: `rotateY(${rotation}deg)` }}>
          {characters.map((char, index) => {
            const isMainCard = index === currentCardIndex;
            const scale = isMainCard ? 1 : 0.8;
            const cardTransform = `rotateY(${index * angle}deg) translateZ(${tz}px) scale(${scale})`;
            
            return (
              <div
                key={index}
                className="carousel-card"
                style={{
                  transform: cardTransform,
                }}
              >
                <CharacterCard
                  {...char}
                  isFlipped={flippedCardIndex === index}
                  onFlip={() => handleCardClick(index)}
                  isMainCard={isMainCard}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex space-x-4">
        <Button onClick={handlePrev} variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button onClick={handleNext} variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700">
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
