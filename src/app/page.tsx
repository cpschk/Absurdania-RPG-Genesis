
'use client';

import { useState } from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { FeatureCarousel } from '@/components/landing/FeatureCarousel';
import { RoadmapSection } from '@/components/landing/RoadmapSection';
import { TierSection } from '@/components/landing/TierSection';
import { CharacterCard } from '@/components/landing/CharacterCard';
import { CTAButton } from '@/components/landing/CTAButton';
import { Footer } from '@/components/landing/Footer';
import { ScrollToTop } from '@/components/landing/ScrollToTop';

const features = [
  { icon: '✊✋✌️', title: 'Combate tipo Piedra-Papel-Tijera con dado20' },
  { icon: '🤖', title: 'Narrativa generada por IA' },
  { icon: '👾', title: 'Enemigos con historia propia' },
  { icon: '📜', title: 'Misiones y desbloqueos' },
  { icon: '🗺️', title: 'Zonas interconectadas' },
  { icon: '⚙️', title: 'Backend modular ya funcional' },
  { icon: '🧪', title: 'Testers activos ya jugando' },
];

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


export default function Home() {
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const handleCardFlip = (index: number) => {
    setFlippedCardIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-grow">
        <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-900/30 via-pink-900/10 to-gray-900 animate-[shimmer_20s_ease-in-out_infinite] bg-[size:200%_200%]" />
            <div className="absolute inset-0 z-10 bg-black">
                <div className="relative z-20 px-4 h-full flex flex-col items-center justify-center bg-black mix-blend-screen">
                    <div className="p-8">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse tracking-wider">
                                Absurdania
                            </span>{' '}
                            <span className="animate-heartbeat inline-block">RPG</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                            El juego donde el caos piensa y el absurdo tiene reglas
                        </p>
                        <CTAButton>
                            <span className="flex flex-col items-center">
                                <span>¡Únete al caos creativo!</span>
                                <span className="text-sm font-normal opacity-80">En Discord... por ahora!</span>
                            </span>
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>

        <section id="about" className="py-20 sm:py-32 bg-gray-900">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="p-8 bg-gray-700/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                ¿Qué es Absurdania?
              </h2>
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                Absurdania RPG es una experiencia narrativa absurda impulsada por IA. Despiertas con un nabo en la frente. Tus decisiones alteran una historia viva y caótica. Cada escena es única. Cada enemigo tiene lógica absurda. Todo lo que haces queda registrado en el lore eterno del caos.
              </p>
            </div>
          </div>
        </section>

        <section id="why" className="py-20 sm:py-32 bg-gray-800">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              ¿Por qué apoyar ahora?
            </h2>
            <ul className="space-y-6 text-center text-lg text-gray-300 max-w-2xl mx-auto">
              <li className="p-4 bg-gray-900/50 rounded-lg shadow-md transition-transform hover:scale-105">✔️ Ya es jugable</li>
              <li className="p-4 bg-gray-900/50 rounded-lg shadow-md transition-transform hover:scale-105">👑 Puedes aparecer como personaje, enemigo o jefe</li>
              <li className="p-4 bg-gray-900/50 rounded-lg shadow-md transition-transform hover:scale-105">🚀 Ayudas a expandirlo a app, multijugador y más</li>
              <li className="p-4 bg-gray-900/50 rounded-lg shadow-md transition-transform hover:scale-105">✨ Es un proyecto único en su especie</li>
              <li className="p-4 bg-gray-900/50 rounded-lg shadow-md transition-transform hover:scale-105">📜 Solo los primeros formarán parte del lore fundacional</li>
            </ul>
          </div>
        </section>

        <section id="features" className="py-20 sm:py-32 bg-gray-900">
          <div className="container mx-auto max-w-5xl px-4">
            <FeatureCarousel features={features} />
          </div>
        </section>

        <section id="roadmap" className="py-20 sm:py-32 bg-gray-800">
           <div className="container mx-auto max-w-2xl px-4">
              <RoadmapSection />
           </div>
        </section>

        <TierSection />

        <section id="gallery" className="py-20 sm:py-32 bg-gray-800">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Galería Absurda
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              {characters.map((char, index) => (
                <CharacterCard 
                  key={index}
                  {...char}
                  isFlipped={flippedCardIndex === index}
                  onFlip={() => handleCardFlip(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 sm:py-32 bg-gradient-to-t from-gray-900 to-gray-800">
          <div className="container mx-auto max-w-4xl px-4 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wider">
              📣 Último llamado
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Tienes dos caminos: ignorar esta locura, o ser parte de ella. ¡Haz historia absurda con nosotros!
            </p>
            <CTAButton>
              Conviértete en co-Fundador
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
