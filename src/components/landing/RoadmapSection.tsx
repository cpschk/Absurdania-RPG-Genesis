type RoadmapItemProps = {
  version: string;
  title: string;
  features: string[];
  gradient: string;
};

function RoadmapItem({ version, title, features, gradient }: RoadmapItemProps) {
  return (
    <div className="mb-8 relative pt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-11/12">
          <div className="p-4 rounded-xl bg-gray-600/70 backdrop-blur-md border border-gray-500/50 shadow-lg">
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text text-center`}>
              {version} – {title}
              </h3>
          </div>
      </div>
      <div className="p-6 pt-16 rounded-xl border border-purple-500/30 bg-gray-900/50">
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
    <div className="max-w-2xl mx-auto p-8 bg-gray-700/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Roadmap Visual
      </h2>
      {roadmapData.map((item, index) => (
        <RoadmapItem key={index} {...item} />
      ))}
    </div>
  );
}
