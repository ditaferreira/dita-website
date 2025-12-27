export interface Expertise {
  title: string
  description: string
}

export interface Organization {
  name: string
  role: string
  description: string
  link?: string
}

export interface Project {
  title: string
  category: string
  description: string
  impact: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  type: 'personal' | 'cultural' | 'political' | 'award' | 'education'
}

export interface OdsObjective {
  number: number
  description: string
  color: string
}

export interface LeadershipHighlight {
  title: string
  subtitle: string
  description: string
  year: string
  type: 'march' | 'cultural' | 'community' | 'political' | 'environmental' | 'education'
}

export interface GuardioesDaTerra {
  name: string
  type: string
  description: string
  sede: string
  ong: {
    name: string
    fullName: string
    type: string
    description: string
  }
  activities: string[]
}

export interface KintalDaDita {
  name: string
  location: string
  type: string
  description: string
  historicSite: {
    name: string
    description: string
    features: string[]
  }
  museum: {
    description: string
    collections: string[]
  }
  agroecology: string[]
  workshops: string[]
}

export interface AgroecologyTraining {
  title: string
  description: string
  activities: string[]
  currentCourse: {
    name: string
    institution: string
    role: string
  }
}

export interface NanciData {
  personal: {
    name: string
    nickname: string
    age: number
    location: string
    title: string
    bio: string
    quote: string
  }
  guardioesDaTerra: GuardioesDaTerra
  kintalDaDita: KintalDaDita
  agroecology: AgroecologyTraining
  expertise: Expertise[]
  organizations: Organization[]
  projects: Project[]
  timeline: TimelineEvent[]
  ods: OdsObjective[]
  leadership: {
    title: string
    highlights: LeadershipHighlight[]
  }
  activism: string[]
  folkCulture: string[]
  events: string[]
}

export const nanciData: NanciData = {
  personal: {
    name: 'Nanci Ferreira',
    nickname: 'Dita',
    age: 73,
    location: 'Cascata, Águas da Prata - SP',
    title: 'Anciã, Visionária e Guardiã da Terra',
    bio: 'Nanci Ferreira, conhecida como "Dita", é uma mulher negra de 73 anos, nascida e criada na comunidade rural da Cascata, em Águas da Prata. Neta de parteira e filha de líder comunitário e vereador, cresceu com as mãos na terra — trabalho que mantém até hoje. Viveu anos como hippie, percorrendo a Bahia, Amazônia, Peru e o Sul do Brasil. Hoje é guardiã de dois Pontos de Cultura, escritora de biografia em desenvolvimento e referência em saberes tradicionais.',
    quote: 'A terra é nossa mãe. Cada semente plantada é um ato de resistência e esperança.',
  },

  guardioesDaTerra: {
    name: 'Guardiões da Terra',
    type: 'Ponto de Cultura',
    description: 'Ponto de Cultura dedicado à arte, educação ambiental e formação de jovens. Atua há mais de 11 anos na preservação cultural e ambiental da região.',
    sede: 'ONG SOS Águas da Prata',
    ong: {
      name: 'ONG SOS Águas da Prata',
      fullName: 'Serviço de Obras Sociais de Águas da Prata',
      type: 'Pontão de Cultura em Credenciamento',
      description: 'Organização de assistência social que sedia o Ponto de Cultura Guardiões da Terra, promovendo ações de cidadania, cultura e meio ambiente.',
    },
    activities: [
      'Oficinas de arte e cultura popular',
      'Educação ambiental para jovens',
      'Formação em práticas sustentáveis',
      'Eventos culturais comunitários',
      'Preservação de saberes tradicionais',
    ],
  },

  kintalDaDita: {
    name: 'Kintal da Dita',
    location: 'Cascata, Águas da Prata - SP',
    type: 'Coletivo Artístico e Agroecológico',
    description: 'Espaço de arte, memória e resistência aberto à comunidade local (carente e vulnerável). Oferece contação de histórias, cursos, oficinas de arte, agroecologia e conhecimentos tradicionais.',
    historicSite: {
      name: 'Marco da Revolta de 32',
      description: 'O Kintal está situado onde reside o obelisco do Marco da Revolução Constitucionalista de 1932, fronteira histórica entre São Paulo e Minas Gerais.',
      features: [
        'Obelisco histórico da Revolução de 32',
        'Mapas e documentos da disputa SP x MG',
        'Acervo documental da época',
        'Área de visitação e memória',
      ],
    },
    museum: {
      description: 'Museu tradicional com obras e artesanatos produzidos com matérias-primas naturais da Mata Atlântica.',
      collections: [
        'Biojoias artesanais',
        'Artesanato em materiais naturais',
        'Obras de arte local',
        'Acervo de cultura popular',
      ],
    },
    agroecology: [
      'Horta agroecológica',
      'Plantas medicinais',
      'Sementes crioulas',
      'Práticas de permacultura',
    ],
    workshops: [
      'Contação de histórias',
      'Oficinas de Biojoias',
      'Artesanato sustentável',
      'Cursos de agroecologia',
      'Saberes tradicionais',
      'Formação de jovens artesãos',
    ],
  },

  agroecology: {
    title: 'Agroecologia Aplicada',
    description: 'Nanci atua no aconselhamento e treinamento de biólogos e professores em práticas de agroecologia aplicada, compartilhando décadas de conhecimento tradicional.',
    activities: [
      'Treinamento de biólogos em práticas tradicionais',
      'Capacitação de professores em agroecologia',
      'Consultoria em plantio sustentável',
      'Transmissão de saberes ancestrais',
    ],
    currentCourse: {
      name: 'Curso para Mulheres',
      institution: 'IF São João da Boa Vista',
      role: 'Aluna e Facilitadora',
    },
  },

  expertise: [
    { title: 'Agricultora e Guardiã', description: 'Plantio sustentável e conexão com a terra. Décadas de prática na roça.' },
    { title: 'Artesã de Biojoias', description: 'Criação de joias e artesanatos com matérias-primas naturais da Mata Atlântica.' },
    { title: 'Formadora em Agroecologia', description: 'Treina biólogos e professores em práticas de agroecologia aplicada.' },
  ],

  organizations: [
    { name: 'Guardiões da Terra', role: 'Líder e Oficineira', description: 'Coletivo Ponto de Cultura ligado à ONG internacional Earth Guardians, que oferece suporte a jovens ativistas do mundo inteiro. Arte, educação ambiental e formação há 11+ anos.', link: 'https://www.earthguardians.org/' },
    { name: 'ONG SOS Águas da Prata', role: 'Pontão de Cultura em Credenciamento', description: 'Serviço de Obras Sociais que sedia o Ponto de Cultura Guardiões da Terra.' },
    { name: 'Kintal da Dita', role: 'Guardiã e Artesã', description: 'Coletivo artístico e agroecológico aberto à comunidade. Contação de histórias, oficinas de arte, cursos de agroecologia e saberes tradicionais.' },
    { name: 'Associação Sociocultural da Estação da Cascata', role: 'Co-fundadora', description: 'Associação cultural fundada com Malala, renomada professora e diretora do Conservatório de Poços de Caldas.' },
    { name: 'Bhumisparsha School', role: 'Parceira', description: 'Escola de música, audiovisual e arte que provê estrutura técnica para shows e eventos do SOS e Guardiões da Terra.' },
    { name: 'Culturando na Montanha', role: 'Parceira', description: 'Ponto de Cultura premiado em São Tomé das Letras. Intervenções artísticas, shows e oficinas em eventos culturais.', link: 'https://www.instagram.com/cultureando/' },
    { name: 'Baque Mulher', role: 'Figura Ilustre', description: 'Maracatu interestadual celebrando a força das mulheres negras.', link: 'https://www.instagram.com/baquemulher/' },
    { name: 'IF São João da Boa Vista', role: 'Aluna e Facilitadora', description: 'Curso para mulheres em agroecologia e práticas sustentáveis.' },
    { name: 'Conselho do Idoso', role: 'Conselheira', description: 'Defesa dos direitos da população idosa.' },
    { name: 'Movimento Antinuclear', role: 'Ativista', description: 'Luta ambiental contra exploração nuclear na região.' },
  ],

  projects: [
    { title: 'Guardiões da Terra', category: 'Pontão de Cultura', description: 'Ponto de Cultura em credenciamento sediado na ONG SOS Águas da Prata. Educação ambiental, arte e formação de jovens.', impact: 'Mais de 11 anos de atuação cultural e ambiental.' },
    { title: 'Kintal da Dita', category: 'Coletivo Cultural', description: 'Espaço artístico, agroecológico e museu tradicional no Marco da Revolta de 32.', impact: 'Preservação histórica e cultural da região.' },
    { title: 'Oficinas de Biojoias', category: 'Artesanato', description: 'Formação em criação de joias com sementes, fibras e materiais naturais da Mata Atlântica.', impact: 'Geração de renda e valorização de recursos locais.' },
    { title: 'Prata Ativa', category: 'Documentário', description: 'Co-direção do documentário sobre água e mineração no Planalto Alcalino (2024).', impact: 'Conscientização sobre recursos hídricos.' },
    { title: 'Virada Climática', category: 'Evento', description: 'Organização do evento anual de conscientização ambiental e cultural.', impact: 'Mobilização regional desde 2024.' },
  ],

  timeline: [
    { year: '1951', title: 'Nascimento', description: 'Nasce em Cascata, comunidade rural de Águas da Prata.', type: 'personal' },
    { year: '1970s', title: 'Jornada Hippie', description: 'Anos viajando pela Bahia, Amazônia, Peru e Sul do Brasil.', type: 'personal' },
    { year: '2013', title: 'Guardiões da Terra', description: 'Inicia liderança no Ponto de Cultura.', type: 'cultural' },
    { year: '2024', title: 'Documentário Prata Ativa', description: 'Co-direção do filme sobre água e mineração.', type: 'cultural' },
    { year: '2024', title: 'Premiação Cultural', description: 'Paulo Gustavo/Aldir Blanc pelo trabalho no Ponto de Cultura.', type: 'award' },
    { year: '2025', title: 'Curso IF', description: 'Aluna e facilitadora no curso para mulheres do IF São João da Boa Vista.', type: 'education' },
    { year: '2025', title: 'Marcha das Mulheres Negras', description: 'Participação como liderança anciã.', type: 'political' },
  ],

  ods: [
    { number: 4, description: 'Educação - oficinas e formação em agroecologia', color: '#C5192D' },
    { number: 5, description: 'Igualdade de gênero - curso para mulheres IF', color: '#FF3A21' },
    { number: 8, description: 'Trabalho decente - biojoias e artesanato', color: '#A21942' },
    { number: 11, description: 'Comunidades sustentáveis - Kintal da Dita', color: '#FD9D24' },
    { number: 13, description: 'Ação climática - Virada Climática', color: '#3F7E44' },
    { number: 15, description: 'Vida terrestre - preservação Mata Atlântica', color: '#56C02B' },
  ],

  leadership: {
    title: 'Liderança Negra Anciã',
    highlights: [
      { title: 'Marcha das Mulheres Negras 2025', subtitle: 'Liderança Anciã', description: 'Representando mulheres negras do interior paulista.', year: '2025', type: 'march' },
      { title: 'Formadora em Agroecologia', subtitle: 'Consultora', description: 'Treinamento de biólogos e professores em práticas sustentáveis.', year: 'Atual', type: 'education' },
      { title: 'Curso IF São João', subtitle: 'Aluna e Facilitadora', description: 'Curso para mulheres em agroecologia aplicada.', year: '2025', type: 'education' },
      { title: 'Kintal da Dita', subtitle: 'Guardiã', description: 'Preservação do Marco da Revolta de 32 e museu artístico.', year: 'Atual', type: 'cultural' },
      { title: 'Virada Climática', subtitle: 'Organizadora', description: 'Evento anual de conscientização ambiental.', year: '2024-2025', type: 'environmental' },
    ],
  },

  activism: ['Agroecologia', 'Pautas Feministas', 'Movimento Antinuclear', 'Recursos Hídricos', 'Direitos dos Idosos'],

  folkCulture: ['Congo', 'Folia de Reis', 'Dança de São Gonçalo', 'Maracatu', 'Tradições Afro-brasileiras'],

  events: ['Virada Climática 2024/2025', 'Marcha das Mulheres Negras 2025', 'Curso IF São João da Boa Vista', 'Oficinas de Biojoias', 'Festivais Regionais'],
}

export const galleryImages = Array.from({ length: 80 }, (_, i) => ({
  src: `/dita-website/dita (${i + 10}).webp`,
  alt: `Dita foto ${i + 10}`,
}))

export function getImagePath(path: string): string {
  return `/dita-website${path}`
}
