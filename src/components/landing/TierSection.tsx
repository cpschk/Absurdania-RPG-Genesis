
'use client';

import { TierCard } from './TierCard';
import Image from 'next/image';
import { Gem, Gift, Heart, Megaphone, Shield, Skull, Star, Zap } from "lucide-react";

const tiersData = {
  creyente: [
    { icon: <Heart size={40} />, tierName: 'Creyente del Caos', price: 5, reward: 'Nombre en el mural del caos', description: 'Tu nombre quedará inmortalizado en una sección especial de los créditos como uno de los primeros creyentes en esta locura.' },
    { icon: <Megaphone size={40} />, tierName: 'Tu Frase, Tu NPC', price: 15, reward: 'NPC con tu frase absurda', description: 'Diseñaremos un personaje no jugable (NPC) que dirá una frase memorable de tu elección cada vez que un jugador interactúe con él.' },
  ],
  colaborador: [
    { icon: <Skull size={40} />, tierName: 'Invocador de Problemas', price: 30, reward: 'Enemigo IA generado', description: 'Colabora con nosotros para crear un enemigo único. Tú nos das la idea, y nuestra IA le dará vida con comportamientos y diálogos absurdos.' },
    { icon: <Shield size={40} />, tierName: 'Mini-Jefe de Leyenda', price: 50, reward: 'Mini-jefe con historia', description: 'Conviértete en un mini-jefe. Trabajaremos contigo para crear su historia, motivaciones y ataques especiales. ¡Serás un desafío memorable!' },
    { icon: <Zap size={40} />, tierName: 'Arquitecto de Misiones', price: 100, reward: 'Misión secundaria personalizada', description: 'Diseña una misión secundaria completa. Tú propones el objetivo, los personajes involucrados y la recompensa. Tu creatividad será parte del juego.' },
  ],
  creador: [
    { icon: <Star size={40} />, tierName: 'Jefe Final de la Realidad', price: 250, reward: 'Jefe con voz, historia y sprite', description: 'Aparece como un jefe principal. Crearemos un sprite (personaje visual) basado en ti, grabaremos tu voz para sus diálogos y serás una pieza clave de la trama.' },
    { icon: <Gift size={40} />, tierName: 'Héroe Desbloqueable', price: 500, reward: 'Personaje jugable + NFT opcional', description: 'Conviértete en un personaje jugable desbloqueable. Además, te ofrecemos la opción de acuñar tu personaje como un NFT único como prueba de co-creación.' },
    { icon: <Gem size={40} />, tierName: 'Co-Creador Divino', price: 1000, reward: 'Culto, zona o final secreto', description: 'Tu influencia será legendaria. Diseña una facción entera, una zona secreta en el mapa o incluso un final alternativo para el juego. Eres un co-creador oficial.' },
  ],
};


export function TierSection() {
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
        <section id="tiers" className="relative z-10 py-20 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                        Elige tu Nivel de Locura
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Todos los caminos te convierten en parte del juego. Tu apoyo no es solo una donación, es una co-creación.
                    </p>
                </div>
                
                {/* Creyente Fundador */}
                <div className="mb-20">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-purple-300">
                        🔮 Creyente Fundador
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {tiersData.creyente.map((tier) => (
                        <TierCard
                            key={tier.price}
                            icon={tier.icon}
                            tierName={tier.tierName}
                            price={tier.price}
                            reward={tier.reward}
                            description={tier.description}
                            category="creyente"
                        />
                        ))}
                    </div>
                </div>

                {/* Colaborador del Caos */}
                <div className="mb-20">
                     <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-cyan-300">
                        🛠️ Colaborador del Caos
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tiersData.colaborador.map((tier) => (
                        <TierCard
                           key={tier.price}
                           icon={tier.icon}
                           tierName={tier.tierName}
                           price={tier.price}
                           reward={tier.reward}
                           description={tier.description}
                           category="colaborador"
                        />
                        ))}
                    </div>
                </div>

                {/* Creador Legendario */}
                <div>
                     <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-yellow-300">
                        🏆 Creador Legendario
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tiersData.creador.map((tier) => (
                        <TierCard
                           key={tier.price}
                           icon={tier.icon}
                           tierName={tier.tierName}
                           price={tier.price}
                           reward={tier.reward}
                           description={tier.description}
                           category="creador"
                        />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
