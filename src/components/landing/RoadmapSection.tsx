
import { CheckSquare, Square } from 'lucide-react';

type Feature = {
  text: string;
  completed: boolean;
};

type RoadmapItemProps = {
  version: string;
  title: string;
  features: Feature[];
  gradient: string;
};

function RoadmapItem({ version, title, features, gradient }: RoadmapItemProps) {
  return (
    <div className="mb-8 relative">
      <div className="relative z-10 p-4 rounded-xl bg-gray-800/80 backdrop-blur-md border border-gray-600/60 shadow-lg">
        <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text text-center`}>
          {version} – {title}
        </h3>
      </div>
      <div className="p-6 pt-8 -mt-4 rounded-xl border border-purple-500/30 bg-gray-900/50 mx-5">
        <ul className="space-y-3 text-gray-300">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              {feature.completed ? (
                <CheckSquare className="h-5 w-5 text-green-400 flex-shrink-0" />
              ) : (
                <Square className="h-5 w-5 text-gray-500 flex-shrink-0" />
              )}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function RoadmapSection() {
    const roadmapData = [
    {
      version: 'Versión 1.0',
      title: 'El Caos Despierta',
      features: [
        { text: 'Misiones y narrativa IA', completed: true },
        { text: 'Testers activos', completed: true },
        { text: 'Exploración libre', completed: true },
        { text: 'Combates funcionales (clásico y PPJ)', completed: false },
      ],
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      version: 'Versión 2.0',
      title: 'Zonas Secretas',
      features: [
        { text: 'Motor visual de emociones', completed: false },
        { text: 'Mapa interactivo', completed: false },
        { text: 'Guardado y carga', completed: false },
        { text: 'Primer puzzle con IA', completed: false },
      ],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      version: 'Versión 3.0',
      title: 'Multicaos Cooperativo',
      features: [
        { text: 'Modo multijugador', completed: false },
        { text: 'Clanes y misiones compartidas', completed: false },
        { text: 'Eventos sociales absurdos', completed: false },
        { text: 'Integración con comunidad', completed: false },
      ],
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-700/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Roadmap Visual
      </h2>
      {roadmapData.map((item, index) => (
        <RoadmapItem key={index} {...item} />
      ))}
    </div>
  );
}
