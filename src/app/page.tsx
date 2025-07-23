
'use client';

import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { FeatureCarousel } from '@/components/landing/FeatureCarousel';
import { RoadmapSection } from '@/components/landing/RoadmapSection';
import { TierSection } from '@/components/landing/TierSection';
import { AbsurdGallery } from '@/components/landing/AbsurdGallery';
import { CTAButton } from '@/components/landing/CTAButton';
import { Footer } from '@/components/landing/Footer';
import { ScrollToTop } from '@/components/landing/ScrollToTop';
import Image from 'next/image';
import GlitchText from '@/components/landing/GlitchText';
import Link from 'next/link';

const features = [
  { icon: '✊✋✌️', title: 'Combate tipo Piedra-Papel-Tijera con dado20' },
  { icon: '🤖', title: 'Narrativa generada por IA' },
  { icon: '👾', title: 'Enemigos con historia propia' },
  { icon: '📜', title: 'Misiones y desbloqueos' },
  { icon: '🗺️', title: 'Zonas interconectadas' },
  { icon: '⚙️', title: 'Backend modular ya funcional' },
  { icon: '🧪', title: 'Testers activos ya jugando' },
];

export default function Home() {
  const absurdaniaText = "Absurdania".split('').map((char, index) => {
    const rotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];
    return (
      <span key={index} className={`inline-block transition-transform hover:scale-110 ${rotations[index % rotations.length]}`}>
        {char}
      </span>
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                 <Image
                  src="/background/background_illustration_hero.png"
                  alt="Absurdania RPG Hero Background"
                  fill={true}                  
                  className="opacity-40"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/10 to-gray-900 animate-[shimmer_20s_ease-in-out_infinite] bg-[size:200%_200%]" />
            </div>
            <div className="relative z-10 px-4 pt-20 sm:pt-0">
                <div className="p-8">
                    <h1 className="flex flex-col sm:flex-row items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-wider">
                        <GlitchText
                            speed={1}
                            enableShadows={true}
                            enableOnHover={false}
                            className="inline-block"
                            gradientClassName="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-shimmer bg-[length:200%_100%]"
                            dataText="Absurdania"
                        >
                            {absurdaniaText}
                        </GlitchText>
                        <span className="animate-heartbeat inline-block -mt-6 sm:mt-0 sm:ml-4">RPG</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        El juego donde el caos piensa y el absurdo tiene reglas.
                        Un mundo tan incoherente… que tiene todo el sentido.
                    </p>
                    <Link href="https://discord.gg/NHGNScvS" target="_blank" rel="noopener noreferrer">
                      <CTAButton>
                          <span className="flex flex-col items-center">
                              <span>¡Testea la Demo!</span>
                              <span className="text-sm font-normal opacity-80">Funcional en  Discord...</span>
                          </span>
                      </CTAButton>
                    </Link>
                </div>
            </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Background for About section"
              fill={true}              
              className="opacity-20"
              data-ai-hint="abstract background"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>
          <section id="about" className="relative z-10 py-20 sm:py-32">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="p-8 bg-gray-700/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-2xl space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                    <span>🧙‍♂️ </span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                      ¿Qué es Absurdania?
                    </span>
                  </h3>
                  <p className="text-lg text-gray-300 text-center leading-relaxed max-w-2xl mx-auto">
                    Absurdania es un juego de rol narrativo jugado desde Discord, donde cada escena, decisión o combate es creado por inteligencia artificial en tiempo real.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                    <span>🤯 </span>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                      ¿Qué lo hace único?
                    </span>
                  </h3>
                  <ul className="text-lg text-gray-300 text-center leading-relaxed max-w-2xl mx-auto space-y-2 list-inside">
                    <li>- Juegas escribiendo. Vives una historia nueva cada vez.</li>
                    <li>- Puedes combatir con papel higiénico mental o negociar con un cuervo comunista.</li>
                    <li>- Todo es posible. En serio.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="relative">
           <div className="absolute inset-0 z-0">
            <Image
              src="/background/background_illustration_features.png"
              alt="Background for Why section"
              fill={true}              
              className="opacity-80"
              data-ai-hint="glowing runes"
            />
            <div className="absolute inset-0 bg-gray-800/70"></div>
          </div>
          <section id="why" className="relative z-10 py-20 sm:py-32">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                ¿Por qué apoyar ahora?
              </h2>
              <div className="space-y-8 max-w-2xl mx-auto text-gray-300">
                <div className="p-6 bg-gray-900/50 rounded-lg shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">🎮 Si eres jugador curioso...</h3>
                  <p>Descubrirás una historia imposible, jugable en 5 minutos, gratis y desde tu celular.</p>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-lg shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">🧙‍♀️ Si eres amante del rol...</h3>
                  <p>Este proyecto mezcla IA, combates por turnos y decisiones absurdamente narrativas. No hay dos partidas iguales.</p>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-lg shadow-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-xl mb-2">💰 Si quieres apoyar algo único...</h3>
                  <p>Tu apoyo financia directamente el desarrollo. Recibirás beneficios exclusivos y serás parte del lore.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="relative">
           <div className="absolute inset-0 z-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Background for Features section"
              fill={true}              
              className="opacity-20"
              data-ai-hint="game elements"
            />
            <div className="absolute inset-0 bg-gray-900/70"></div>
          </div>
          <section id="features" className="relative z-10 py-20 sm:py-32">
            <div className="container mx-auto max-w-5xl px-4">
              <FeatureCarousel features={features} />
            </div>
          </section>
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/background/background_illustration_roadmap.png"
              alt="Absurdania RPG Roadmap Background"
              fill={true}              
              className="hidden sm:block opacity-95"
            />
             <Image
              src="/background/movil_background_illustration_roadmap.png"
              alt="Absurdania RPG Roadmap Background for mobile"
              fill={true}              
              className="block sm:hidden opacity-95"
            />
            <div className="absolute inset-0 bg-gray-800/70"></div>
          </div>
          <section id="roadmap" className="relative z-10 py-20 sm:py-32">
             <div className="container mx-auto max-w-2xl px-4">
                <RoadmapSection />
             </div>
          </section>
        </div>

        <TierSection />

        <div className="relative overflow-x-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/background/background_illustration_absurd_gallery.png"
              alt="Background for Absurd Gallery section"
              fill={true}              
              className="opacity-100"
            />
            <div className="absolute inset-0 bg-gray-800/70"></div>
          </div>
          <section id="gallery" className="relative z-10 py-20 sm:py-32">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl sm:text-4xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Galería Absurda
              </h2>
              <AbsurdGallery />
            </div>
          </section>
        </div>


        <div className="relative">
          <div className="absolute inset-0 z-0">
             <Image
              src="https://placehold.co/1920x1080.png"
              alt="Background for CTA section"
              fill={true}              
              className="opacity-20"
              data-ai-hint="dramatic landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800 opacity-90"></div>
          </div>
          <section id="cta" className="relative z-10 py-20 sm:py-32">
            <div className="container mx-auto max-w-4xl px-4 text-center">
               <h2 className="text-4xl sm:text-4xl font-bold text-white mb-6 tracking-wider">
                📣 Último llamado
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Tienes dos caminos: ignorar esta locura, o ser parte de ella. ¡Haz historia absurda con nosotros!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://discord.gg/NHGNScvS" target="_blank" rel="noopener noreferrer">
                  <CTAButton>
                      <span className="flex flex-col items-center">
                          <span>¡Testea la Demo!</span>
                          <span className="text-sm font-normal opacity-80">Funcional en  Discord...</span>
                      </span>
                  </CTAButton>
                </Link>
                <Link href="#tiers">
                  <CTAButton>
                    Conviértete en co-Fundador
                  </CTAButton>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
