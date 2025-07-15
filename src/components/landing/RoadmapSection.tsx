type RoadmapItemProps = {
  version: string;
  title: string;
  features: string[];
  gradient: string;
};

function RoadmapItem({ version, title, features, gradient }: RoadmapItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700 h-full">
      <div className={`text-2xl font-bold mb-4 bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>
        {version}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400 text-sm flex-grow">
        {features.map((feature, i) => <li key={i}>{feature}</li>)}
      </ul>
    </div>
  );
}


export function RoadmapSection() {
    const roadmapData = [
    {
      version: 'Versión 1.0',
      title: 'El Caos Despierta',
      features: [
        'Exploración libre',
        'Combates funcionales (clásico y PPJ)',
        'Misiones y narrativa IA',
        'Testers activos'
      ],
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      version: 'Versión 2.0',
      title: 'Zonas Secretas',
      features: [
        'Motor visual de emociones',
        'Mapa interactivo',
        'Guardado y carga',
        'Primer puzzle con IA'
      ],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      version: 'Versión 3.0',
      title: 'Multicaos Cooperativo',
      features: [
        'Modo multijugador',
        'Clanes y misiones compartidas',
        'Eventos sociales absurdos',
        'Integración con comunidad'
      ],
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block" />
      <div className="grid md:grid-cols-3 gap-12">
        {roadmapData.map((item, index) => (
          <div key={index} className="relative transition-transform transform hover:scale-105">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 border-2 border-gray-900 hidden md:block" />
            <RoadmapItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
