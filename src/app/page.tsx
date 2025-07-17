import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { FeatureCard } from '@/components/landing/FeatureCard';
import { RoadmapSection } from '@/components/landing/RoadmapSection';
import { TierCard } from '@/components/landing/TierCard';
import { CharacterCard } from '@/components/landing/CharacterCard';
import { CTAButton } from '@/components/landing/CTAButton';
import { Footer } from '@/components/landing/Footer';
import { ScrollToTop } from '@/components/landing/ScrollToTop';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const features = [
  { icon: '🦀', title: 'Combate tipo Piedra-Papel-Jaiba con dado20' },
  { icon: '🤖', title: 'Narrativa generada por IA' },
  { icon: '👾', title: 'Enemigos con historia propia' },
  { icon: '📜', title: 'Misiones y desbloqueos' },
  { icon: '🗺️', title: 'Zonas interconectadas' },
  { icon: '⚙️', title: 'Backend modular ya funcional' },
  { icon: '🧪', title: 'Testers activos ya jugando' },
];

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

const characters = [
  { icon: '🧠', name: 'Filósofo de Microondas' },
  { icon: '🤡', name: 'Payaso de Guerra' },
  { icon: '🧛', name: 'Vampiro de Redes Sociales' },
  { icon: '🔮', name: 'Oráculo de Lo Ridículo' },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />

        <section id="about" className="py-20 sm:py-32 bg-gray-900">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              ¿Qué es Absurdania?
            </h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              Absurdania RPG es una experiencia narrativa absurda impulsada por IA. Despiertas con un nabo en la frente. Tus decisiones alteran una historia viva y caótica. Cada escena es única. Cada enemigo tiene lógica absurda. Todo lo que haces queda registrado en el lore eterno del caos.
            </p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              ¿Con qué cuenta ya el juego?
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1 h-full">
                      <FeatureCard icon={feature.icon} title={feature.title} className="h-full" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>

        <section id="roadmap" className="py-20 sm:py-32 bg-gray-800">
           <div className="container mx-auto max-w-6xl px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                Roadmap Visual
              </h2>
              <RoadmapSection />
           </div>
        </section>

        <section id="tiers" className="py-20 sm:py-32 bg-gray-900">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              🤝 Tiers de Apoyo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {tiers.map((tier, index) => (
                <TierCard key={index} price={tier.price} reward={tier.reward} />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 sm:py-32 bg-gray-800">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Galería Absurda
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {characters.map((char, index) => (
                <CharacterCard key={index} icon={char.icon} name={char.name} />
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 sm:py-32 bg-gradient-to-t from-gray-900 to-gray-800">
          <div className="container mx-auto max-w-4xl px-4 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              📣 Último llamado
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Tienes dos caminos: ignorar esta locura, o ser parte de ella. ¡Haz historia absurda con nosotros!
            </p>
            <CTAButton>
              Conviértete en Fundador
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
