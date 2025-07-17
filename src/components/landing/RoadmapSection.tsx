type RoadmapItemProps = {
  version: string;
  title: string;
  features: string[];
  gradient: string;
};

function RoadmapItem({ version, title, features, gradient }: RoadmapItemProps) {
  return (
    <div className="mb-8">
      <div className="p-4 rounded-xl mb-4 bg-gray-700/30 backdrop-blur-md border border-gray-500/50 shadow-lg">
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text text-center`}>
          {version} – {title}
        </h3>
      </div>
      <div className="p-6 rounded-xl border border-purple-500/30 bg-gray-900/50">
        <ul className="space-y-3 text-gray-300 list-disc list-inside pl-2">
            {features.map((feature, i) => <li key={i}>{feature}</li>)}
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
    <div className="max-w-2xl mx-auto">
      {roadmapData.map((item, index) => (
        <RoadmapItem key={index} {...item} />
      ))}
    </div>
  );
}