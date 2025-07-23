
'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

type FeatureStatus = 'Done' | 'In Progress' | 'Pending';

type Feature = {
  name: string;
  status: FeatureStatus;
  description: string;
};

type Phase = {
  icon: string;
  title: string;
  subtitle: string;
  features: Feature[];
};

const roadmapPhases: Phase[] = [
  {
    icon: '🌀',
    title: 'Fase 1 – Versión 1.0: “El Caos Despierta”',
    subtitle: '🧠 Primera inmersión en el absurdo: narrativa emergente, decisiones y exploración IA.',
    features: [
      { name: 'Exploración libre por texto (comandos)', status: 'Done', description: 'Puedes recorrer zonas y tomar decisiones narrativas.' },
      { name: 'Generación narrativa con IA absurda', status: 'Done', description: 'Cada escena es única, impredecible y deliciosamente ridícula.' },
      { name: 'Sistema de sesiones por jugador', status: 'Done', description: 'Cada jugador tiene su mundo propio, aislado y persistente.' },
      { name: 'Comando !comenzar funcional', status: 'Done', description: 'Inicia tu viaje absurdo en Discord.' },
      { name: 'Combate clásico y PPJ activado', status: 'In Progress', description: 'El sistema de combate por turnos con lógica absurda está en testeo.' },
      { name: 'IA contextual según zona/subzona', status: 'In Progress', description: 'El sistema reconoce dónde estás y ajusta el mundo a ello.' },
      { name: 'Testers activos / feedback de usuarios', status: 'In Progress', description: 'Comienza la era de los beta locos.' },
      { name: 'Misiones desbloqueables', status: 'Pending', description: 'Pronto podrás aceptar encargos ridículos con recompensas inciertas.' },
      { name: 'Sistema básico de objetos y uso', status: 'Pending', description: '¿Un megáfono psíquico? ¡Pronto podrás usarlo!' },
    ]
  },
  {
    icon: '🕳️',
    title: 'Fase 2 – Versión 2.0: “Zonas Secretas”',
    subtitle: '🔎 Profundizamos la locura: narrativa más rica, emociones y progresión real.',
    features: [
      { name: 'Motor visual de emociones narrativas', status: 'Pending', description: 'Las decisiones afectarán cómo reacciona el mundo y sus NPCs.' },
      { name: 'Mapa interactivo de zonas y subzonas', status: 'Pending', description: 'Pronto podrás visualizar tu progresión por territorios ridículos.' },
      { name: 'Guardado y carga de partida', status: 'Pending', description: 'Tu progreso no se perderá ni en el Multiverso del Queso.' },
      { name: 'Puzzles con lógica IA contextual', status: 'Pending', description: 'Resolverás acertijos que se adaptan a tus decisiones previas.' },
      { name: 'Logros desbloqueables y progresión', status: 'Pending', description: 'Desde “Pisó su primer charco de baba” hasta “Dios del Ridículo”.' },
    ]
  },
  {
    icon: '🔗',
    title: 'Fase 3 – Versión 3.0: “Multicaos Cooperativo”',
    subtitle: '🤝 El absurdo se comparte: multijugador, comunidad y eventos globales.',
    features: [
      { name: 'Modo multijugador cooperativo', status: 'Pending', description: 'Dos jugadores, un destino, una cabra parlante que decidirá.' },
      { name: 'Clanes y gremios de lo absurdo', status: 'Pending', description: 'Únete a los cultistas del huevo cuadrado o crea tu clan.' },
      { name: 'Misiones compartidas entre jugadores', status: 'Pending', description: 'Objetivos narrativos donde la sinergia es caótica.' },
      { name: 'Eventos en vivo absurdos', status: 'Pending', description: 'Desde invasiones mágicas hasta elecciones del Rey Rana.' },
      { name: 'Comunidad integrada y recompensas sociales', status: 'Pending', description: 'Los que más jueguen, más influyen en el lore global.' },
    ]
  }
];

function StatusBadge({ status }: { status: FeatureStatus }) {
  const baseClasses = "px-3 py-1 text-xs font-bold rounded-full inline-block whitespace-nowrap";
  switch (status) {
    case 'Done':
      return <span className={cn(baseClasses, "bg-green-600 text-white")}>✅ Hecho</span>;
    case 'In Progress':
      return <span className={cn(baseClasses, "bg-yellow-400 text-black animate-pulse")}>🟡 En progreso</span>;
    case 'Pending':
      return <span className={cn(baseClasses, "bg-gray-500 text-white")}>⬜️ Pendiente</span>;
    default:
      return null;
  }
}

function PhaseTable({ phase }: { phase: Phase }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
        <span className="mr-2">{phase.icon}</span>
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          {phase.title}
        </span>
      </h3>
      <p className="text-center text-gray-300 mb-6 italic">{phase.subtitle}</p>
      <div className="overflow-hidden rounded-lg border border-purple-500/20 bg-gray-900/50">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b-purple-500/20">
                <TableHead className="text-white font-semibold w-[30%]">Funcionalidad</TableHead>
                <TableHead className="text-white font-semibold w-[15%] text-center">Estado</TableHead>
                <TableHead className="text-white font-semibold w-[55%]">Descripción breve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {phase.features.map((feature, index) => (
                <TableRow key={index} className="border-b-purple-500/10 last:border-b-0">
                  <TableCell className="font-medium text-gray-200">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    <StatusBadge status={feature.status} />
                  </TableCell>
                  <TableCell className="text-gray-400 text-sm">{feature.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}


export function RoadmapSection() {
  return (
    <div className="p-4 sm:p-8 bg-gray-700/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Roadmap Visual
      </h2>
      <div className="space-y-16">
        {roadmapPhases.map((phase, index) => (
          <PhaseTable key={index} phase={phase} />
        ))}
      </div>
    </div>
  );
}
