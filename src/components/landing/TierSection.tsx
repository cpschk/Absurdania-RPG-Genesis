
'use client';

import { useState, useRef, useEffect } from 'react';
import { TierCard } from './TierCard';
import { useInView } from '@/hooks/use-in-view';
import Image from 'next/image';

const tiers = [
  { price: 5, reward: 'Nombre en el mural del caos', description: 'Tu nombre quedará inmortalizado en una sección especial de los créditos como uno de los primeros creyentes en esta locura.' },
  { price: 15, reward: 'NPC con tu frase absurda', description: 'Diseñaremos un personaje no jugable (NPC) que dirá una frase memorable de tu elección cada vez que un jugador interactúe con él.' },
  { price: 30, reward: 'Enemigo IA generado', description: 'Colabora con nosotros para crear un enemigo único. Tú nos das la idea, y nuestra IA le dará vida con comportamientos y diálogos absurdos.' },
  { price: 50, reward: 'Mini-jefe con historia', description: 'Conviértete en un mini-jefe. Trabajaremos contigo para crear su historia, motivaciones y ataques especiales. ¡Serás un desafío memorable!' },
  { price: 100, reward: 'Misión secundaria personalizada', description: 'Diseña una misión secundaria completa. Tú propones el objetivo, los personajes involucrados y la recompensa. Tu creatividad será parte del juego.' },
  { price: 250, reward: 'Jefe con voz, historia y sprite', description: 'Aparece como un jefe principal. Crearemos un sprite (personaje visual) basado en ti, grabaremos tu voz para sus diálogos y serás una pieza clave de la trama.' },
  { price: 500, reward: 'Personaje jugable + NFT opcional', description: 'Conviértete en un personaje jugable desbloqueable. Además, te ofrecemos la opción de acuñar tu personaje como un NFT único como prueba de co-creación.' },
  { price: 1000, reward: 'Culto, zona o final secreto. Eres co-creador.', description: 'Tu influencia será legendaria. Diseña una facción entera, una zona secreta en el mapa o incluso un final alternativo para el juego. Eres un co-creador oficial.' },
];

export function TierSection() {
  const [openTierIndex, setOpenTierIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false });

  useEffect(() => {
    if (!isInView) {
      setOpenTierIndex(null);
    }
  }, [isInView]);

  const handleToggle = (index: number) => {
    setOpenTierIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative">
        <div className="absolute inset-0 z-0">
        <Image
            src="https://placehold.co/1920x1080.png"
            alt="Background for Tiers section"
            fill={true}
            className="opacity-20 object-cover"
            data-ai-hint="treasure chest"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        <section id="tiers" ref={sectionRef} className="relative z-10 py-20 sm:py-32">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="p-8 bg-gray-700/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                    🤝 Tiers de Apoyo
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {tiers.map((tier, index) => (
                    <TierCard
                        key={index}
                        price={tier.price}
                        reward={tier.reward}
                        description={tier.description}
                        isOpen={openTierIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                    ))}
                </div>
                </div>
            </div>
        </section>
    </div>
  );
}
