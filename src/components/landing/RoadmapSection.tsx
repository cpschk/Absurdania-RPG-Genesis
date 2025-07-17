type RoadmapItemProps = {
  version: string;
  title: string;
  features: string[];
  gradient: string;
};

function RoadmapItem({ version, title, features, gradient }: RoadmapItemProps) {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>
        {version} – {title}
      </h3>
      <ul className="space-y-2 text-gray-300 list-disc list-inside pl-4">
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
    <div className="max-w-2xl mx-auto">
      {roadmapData.map((item, index) => (
        <RoadmapItem key={index} {...item} />
      ))}
    </div>
  );
}
