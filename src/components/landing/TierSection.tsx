
'use client';

import { useState, useRef, useEffect } from 'react';
import { TierCard } from './TierCard';
import { useInView } from '@/hooks/use-in-view';

const tiers = [
  { price: 5, reward: 'Nombre en el mural del caos' },
  { price: 15, reward: 'NPC con tu frase absurda' },
  { price: 30, reward: 'Enemigo IA generado' },
  { price: 50, reward: 'Mini-jefe con historia' },
  { price: 100, reward: 'Misión secundaria personalizada' },
  { price: 250, reward: 'Jefe con voz, historia y sprite' },
  { price: 500, reward: 'Personaje jugable + NFT opcional' },
  { price: 1000, reward: 'Culto, zona o final secreto. Eres co-creador.' },
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
    <section id="tiers" ref={sectionRef} className="py-20 sm:py-32 bg-gray-900">
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
                isOpen={openTierIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
