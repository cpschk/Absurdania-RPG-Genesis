
'use client';

import { useState, TouchEvent as ReactTouchEvent, MouseEvent, useEffect, useRef } from 'react';
import { CharacterCard } from './CharacterCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const characters = [
  {
    name: 'La Rana Oraculo',
    imageUrl: '/rana-oraculo-2.png',
    'data-ai-hint': 'the oracle frog',
    phrase: "¡Croac! El bosque escucha... pero no responde. ¿Has traído la llave que abre sin tocar?, La lechuga habla solo si tú callas.",
    description: 'Una rana con túnica que responde enigmas saltando en código binario.',
    attacks: [],
    type: 'NPC',
  },
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
  },
  {
    name: 'Abuelo Griton',
    imageUrl: '/abuelo-griton.png',
    'data-ai-hint': 'shouting old man',
    phrase: "¡LAS CABRAS NO USAN RELOJ!, ¡TU NABO ES EL DESTINO!, ¡MIRA A LA IZQUIERDA Y PÁRATE EN UNA PATA!",
    description: "Un anciano que solo se comunica gritando refranes que nadie entiende.",
    attacks: [],
    type: 'NPC',
  },
  {
    name: 'Hongos Llorones',
    imageUrl: '/hongo-lloron.png',
    'data-ai-hint': 'weeping mushrooms',
    phrase: "Nunca pedí ser comestible...",
    description: "Crecen en la tristeza y se marchitan con la empatía. No los subestimes.",
    attacks: ["Lágrimas Ácidas", "Esporas Emotivas"],
    type: 'Enemigo',
  },
  {
    name: 'Zanahoria Sagrada',
    imageUrl: '/zanahoria-sagrada.png',
    'data-ai-hint': 'sacred carrot',
    phrase: '¡Levantate a trabajar!',
    description: "Revive al jugador con 50 HP si es derrotado.",
    attacks: [],
    type: 'Objeto',
  },
  {
    name: 'Ardillas Metafisicas',
    imageUrl: '/ardillas-metafisicas.png',
    'data-ai-hint': 'metaphysical squirrels',
    phrase: "¿Y si somos solo pensamientos en forma de roedor?",
    description: "Estas ardillas no solo recolectan nueces, sino también dudas existenciales.",
    attacks: ["Lluvia de Dudas", "Salto Cuántico"],
    type: 'Enemigo',
  },
  {
    name: 'Dragón de la Deuda',
    imageUrl: '/dragon-de-la-deuda.png',
    'data-ai-hint': 'Debt Dragon',
    phrase: "Te devoraré con mi fuego fiscal.",
    description: "Un dragón colosal cubierto de facturas impagas y escamas que representan tasas de interés variables.",
    attacks: ["Fuego Fiscal", "Interés Exponencial", "Multa Inesperada"],
    type: 'Enemigo',
  },
];

export function AbsurdGallery() {
  const [rotation, setRotation] = useState(0);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const [carouselWidth, setCarouselWidth] = useState(450);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCarouselWidth(isMobile ? 220 : 450);
  }, [isMobile]);

  const angle = 360 / characters.length;
  const tz = Math.round((carouselWidth / 2) / Math.tan(Math.PI / characters.length));

  const handleNext = () => {
    setRotation(rotation - angle);
    setFlippedCardIndex(null);
  };

  const handlePrev = () => {
    setRotation(rotation + angle);
    setFlippedCardIndex(null);
  };
  
  const stopAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
    if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
    }
  };
  
  const startAutoplay = () => {
    stopAutoplay();
    autoplayIntervalRef.current = setInterval(() => {
        handleNext();
    }, 4000);
  };

  const handleInteraction = (action: () => void) => {
    stopAutoplay();
    action();
    interactionTimeoutRef.current = setTimeout(startAutoplay, 5000); // Resume autoplay after 5 seconds of inactivity
  };


  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [rotation]);


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
    stopAutoplay();
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
        handleInteraction(handlePrev);
      } else {
        handleInteraction(handleNext);
      }
    }
    setTouchStartX(null);
    interactionTimeoutRef.current = setTimeout(startAutoplay, 5000);
  };
  
  return (
    <div className="flex flex-col items-center space-y-8 md:space-y-16">
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
        <Button onClick={() => handleInteraction(handlePrev)} variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button onClick={() => handleInteraction(handleNext)} variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700">
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
