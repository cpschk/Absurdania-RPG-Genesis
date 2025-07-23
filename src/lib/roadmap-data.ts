
export type FeatureStatus = 'Done' | 'In Progress' | 'Pending';

export type Feature = {
  name: string;
  status: FeatureStatus;
  description: string;
  icon?: string;
};

export type Phase = {
  icon: string;
  title: string;
  subtitle: string;
  features: Feature[];
};

export const roadmapPhases: Phase[] = [
    {
      icon: '🌀',
      title: 'Fase 1 – Versión 1.0: “El Caos Despierta”',
      subtitle: '🧠 Primera inmersión en el absurdo: narrativa emergente, decisiones y exploración IA.',
      features: [
        { name: 'Exploración libre por texto (comandos)', status: 'Done', description: 'Puedes recorrer zonas y tomar decisiones narrativas.', icon: '🗺️' },
        { name: 'Generación narrativa con IA absurda', status: 'Done', description: 'Cada escena es única, impredecible y deliciosamente ridícula.', icon: '🤖' },
        { name: 'Sistema de sesiones por jugador', status: 'Done', description: 'Cada jugador tiene su mundo propio, aislado y persistente.', icon: '⚙️' },
        { name: 'Comando !comenzar funcional', status: 'Done', description: 'Inicia tu viaje absurdo en Discord.', icon: '🚀' },
        { name: 'Combate clásico y PPJ activado', status: 'In Progress', description: 'El sistema de combate por turnos con lógica absurda está en testeo.', icon: '✊✋✌️' },
        { name: 'IA contextual según zona/subzona', status: 'In Progress', description: 'El sistema reconoce dónde estás y ajusta el mundo a ello.', icon: '👾' },
        { name: 'Testers activos / feedback de usuarios', status: 'In Progress', description: 'Comienza la era de los beta locos.', icon: '🧪' },
        { name: 'Misiones desbloqueables', status: 'Pending', description: 'Pronto podrás aceptar encargos ridículos con recompensas inciertas.', icon: '📜' },
        { name: 'Sistema básico de objetos y uso', status: 'Pending', description: '¿Un megáfono psíquico? ¡Pronto podrás usarlo!', icon: '🎒' },
      ]
    },
    {
      icon: '🕳️',
      title: 'Fase 2 – Versión 2.0: “Zonas Secretas”',
      subtitle: '🔎 Profundizamos la locura: narrativa más rica, emociones y progresión real.',
      features: [
        { name: 'Motor visual de emociones narrativas', status: 'Pending', description: 'Las decisiones afectarán cómo reacciona el mundo y sus NPCs.', icon: '🎭' },
        { name: 'Mapa interactivo de zonas y subzonas', status: 'Pending', description: 'Pronto podrás visualizar tu progresión por territorios ridículos.', icon: '🗺️' },
        { name: 'Guardado y carga de partida', status: 'Pending', description: 'Tu progreso no se perderá ni en el Multiverso del Queso.', icon: '💾' },
        { name: 'Puzzles con lógica IA contextual', status: 'Pending', description: 'Resolverás acertijos que se adaptan a tus decisiones previas.', icon: '🧩' },
        { name: 'Logros desbloqueables y progresión', status: 'Pending', description: 'Desde “Pisó su primer charco de baba” hasta “Dios del Ridículo”.', icon: '🏆' },
      ]
    },
    {
      icon: '🔗',
      title: 'Fase 3 – Versión 3.0: “Multicaos Cooperativo”',
      subtitle: '🤝 El absurdo se comparte: multijugador, comunidad y eventos globales.',
      features: [
        { name: 'Modo multijugador cooperativo', status: 'Pending', description: 'Dos jugadores, un destino, una cabra parlante que decidirá.', icon: '👥' },
        { name: 'Clanes y gremios de lo absurdo', status: 'Pending', description: 'Únete a los cultistas del huevo cuadrado o crea tu clan.', icon: '🏰' },
        { name: 'Misiones compartidas entre jugadores', status: 'Pending', description: 'Objetivos narrativos donde la sinergia es caótica.', icon: '🤝' },
        { name: 'Eventos en vivo absurdos', status: 'Pending', description: 'Desde invasiones mágicas hasta elecciones del Rey Rana.', icon: '🎉' },
        { name: 'Comunidad integrada y recompensas sociales', status: 'Pending', description: 'Los que más jueguen, más influyen en el lore global.', icon: '💬' },
      ]
    }
  ];
