
'use client';

import { useState } from 'react';
import { CharacterCard } from './CharacterCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const characters = [
  { icon: '🧠', name: 'Filósofo de Microondas' },
  { icon: '🤡', name: 'Payaso de Guerra' },
  { icon: '🧛', name: 'Vampiro de Redes Sociales' },
  {
    name: 'Despertador Existencial',
    imageUrl: '/despertador-existencial.png',
    'data-ai-hint': 'alarm clock illustration',
    phrase: '¡Levántate a cuestionar tu propósito!',
    description: 'Un despertador filosófico que no solo suena, sino que hace preguntas incómodas sobre la vida.',
    attacks: ['Zumbido de Realidad', 'Repetición Infinita'],
  },
  {
    name: 'Espada de Fideos',
    imageUrl: '/espada-fideos.png',
    'data-ai-hint': 'noodle sword',
    phrase: '¡Al dente!',
    description: "Un arma hecha de tallarines que se endurecen al gritar '¡al dente!'.",
    attacks: ["Golpe Rigatoni", "Estocada de Espagueti"]
  },
  {
    name: 'Buzon Cobrador',
    imageUrl: '/buzon-cobrador.png',
    'data-ai-hint': 'mailbox monster',
    phrase: "¡Paga tus cartas!",
    description: "Un buzón hostil que guarda deudas emocionales y facturas vencidas.",
    attacks: ["Factura Letal", "Interés Compuesto"]
  }
];

export function AbsurdGallery() {
  const [rotation, setRotation] = useState(0);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const angle = 360 / characters.length;
  const tz = Math.round( ( 220 / 2 ) / Math.tan( Math.PI / characters.length ) );

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
  
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="carousel-container h-[320px] w-full">
        <div className="carousel" style={{ transform: `rotateY(${rotation}deg)` }}>
          {characters.map((char, index) => (
            <div
              key={index}
              className="carousel-card"
              style={{
                transform: `rotateY(${index * angle}deg) translateZ(${tz}px)`,
              }}
            >
              <CharacterCard
                {...char}
                isFlipped={flippedCardIndex === index}
                onFlip={() => handleCardFlip(index)}
              />
            </div>
          ))}
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
