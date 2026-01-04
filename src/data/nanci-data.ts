export interface Expertise {
  title: string
  description: string
  icon: string
}

export interface Organization {
  name: string
  role: string
  description: string
  link?: string
  icon: string
  color: string
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
  icon: string
  color: string
}

export interface GuardioesDaTerra {
  name: string
  type: string
  description: string
  sede: string
  link?: string
  ong: {
    name: string
    fullName: string
    type: string
    description: string
    link?: string
  }
  activities: string[]
}

export interface KintalDaDita {
  name: string
  location: string
  type: string
  description: string
  link?: string
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

export interface Event {
  name: string;
  icon: string;
}

export interface Tourism {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkLabel: string;
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
  events: Event[]
  tourism: Tourism
}

export const nanciData: NanciData = {
  personal: {
    name: 'Nanci Ferreira',
    nickname: 'Dita',
    age: 73,
    location: 'Cascata, Águas da Prata - SP',
    title: 'Anciã, Visionária e Guardiã da Terra',
    bio: `Nanci Ferreira, Dita, é uma força da natureza. Aos 73 anos é erveira, artista e artesã, consolidou-se uma referência cultural em sua região. Idealizadora do Kintal da Dita, um espaço de arte e resistência na Cascata, divisa entre MG e SP, ela dedica a vida à defesa da terra e ao resgate de saberes ancestrais.

Filha de líder comunitário e neta de curandeira, Dita carrega em seu sangue a força da ancestralidade. 

Em sua jornada percorreu o Brasil e a América do Sul, e hoje ela é a "Conselheira da Sabedoria" no Ponto de Cultura premiado Guardiões da Terra.

É voz ativa na luta pela preservação ambiental, cultural e antinuclear, representando diversos coletivos e associações em sua região.`,
    quote: 'O simples é poderoso',
  },

  guardioesDaTerra: {
    name: 'Guardiões da Terra',
    type: 'Ponto de Cultura',
    description: 'Ponto de Cultura dedicado à arte, educação ambiental e a formação em práticas sustentáveis. Atua há mais de 11 anos na preservação cultural e ambiental da região.',
    sede: 'ONG SOS Águas da Prata',
    link: 'https://www.instagram.com/earthguardians_br/',
    ong: {
      name: 'ONG SOS Águas da Prata',
      fullName: 'Serviço de Obras Sociais de Águas da Prata',
      type: 'Pontão de Cultura em Credenciamento',
      description: 'Organização de assistência social existente desde 1968, promovendo ações de cidadania, cultura e meio ambiente.',
      link: 'https://aguasdapratasos.wixstudio.com/2025',
    },
    activities: [
      'Oficinas semanais de Agroecologia',
      'Oficinas semanais de Música e Audiovisual',
      'Oficinas de Escrita e Envio de Projetos Culturais',
      'Eventos e atividades culturais',
      'Preservação e difusão de saberes tradicionais',
    ],
  },

  kintalDaDita: {
    name: 'Kintal da Dita',
    location: 'Cascata, Águas da Prata - SP',
    type: 'Coletivo Artístico e Agroecológico',
    description: 'Espaço de arte, memória e resistência aberto à comunidade. Oferece contação de histórias, cursos, oficinas de arte, agroecologia e conhecimentos tradicionais.',
    link: 'https://www.instagram.com/nanciferreira_oficial',
    historicSite: {
      name: 'Marco da Revolta de 32',
      description: 'O Kintal está situado próximo ao obelisco, Marco da Revolução Constitucionalista de 1932, fronteira histórica entre São Paulo e Minas Gerais.',
      features: [
        'Caminhada com histórias até o Obelisco',
        'Mapas e documentos da disputa SP x MG',
        'Acervo documental da época',
        'Artefatos e objetos históricos',
      ],
    },
    museum: {
      description: 'Museu artístico com obras e artesanatos feitos com matérias-primas naturais da Mata Atlântica.',
      collections: [
        'Biojoias artesanais',
        'Artesanato em materiais naturais',
        'Obras de arte local',
        'Acervo de cultura popular',
      ],
    },
    agroecology: [
      'Horta',
      'Plantas medicinais',
      'Sementes',
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
    description: 'Nanci atua no aconselhamento e treinamento de biólogos e professores em práticas de agroecologia e arte, compartilhando décadas de conhecimento tradicional.',
    activities: [
      'Treinamento de biólogos em práticas tradicionais',
      'Treinamento de professores em agroecologia',
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
    { title: 'Agricultora e Guardiã', description: 'Plantio sustentável e conexão com a terra. Décadas de prática na roça.', icon: 'Shovel' },
    { title: 'Artesã de Biojoias', description: 'Criação de joias e artesanatos com matérias-primas naturais da Mata Atlântica.', icon: 'Gem' },
    { title: 'Formadora em Tradição', description: 'Treina biólogos, professores e artistas em saberes tradicionais diversos.', icon: 'Leaf' },
  ],

  organizations: [
    { name: 'Guardiões da Terra', role: 'Líder e Oficineira', description: 'Coletivo Ponto de Cultura ligado à ONG internacional Earth Guardians, que oferece suporte a jovens ativistas do mundo inteiro. Arte, educação ambiental e formação há 11+ anos.', link: 'https://www.instagram.com/earthguardians_br/', icon: 'Globe', color: 'from-emerald-600/30 to-green-700/30' },
    { name: 'ONG SOS Águas da Prata', role: 'Pontão de Cultura', description: 'Serviço de Obras Sociais que sedia o Ponto de Cultura Guardiões da Terra.', link: 'https://aguasdapratasos.wixstudio.com/2025', icon: 'Building', color: 'from-cyan-600/30 to-blue-700/30' },
    { name: 'Kintal da Dita', role: 'Guardiã e Artesã', description: 'Coletivo artístico e agroecológico aberto à comunidade. Contação de histórias, oficinas de arte, cursos de agroecologia e saberes tradicionais.', icon: 'Leaf', color: 'from-amber-600/30 to-orange-700/30' },
    { name: 'Associação Sociocultural da Estação da Cascata', role: 'Co-fundadora', description: 'Coofundado com Malala, renomada diretora, para o desenvolvimento humano e cultural da Cascata.', icon: 'Users', color: 'from-rose-600/30 to-red-700/30' },
    { name: 'Bhumisparsha School', role: 'Parceira', description: 'Escola de música, audiovisual e arte que provê estrutura técnica para shows e eventos do SOS e Guardiões da Terra.', link: 'https://www.bhumisparshaschool.org/', icon: 'Music', color: 'from-purple-600/30 to-indigo-700/30' },
    { name: 'Earth Guardians', role: 'Parceira Internacional', description: 'ONG internacional que oferece suporte a jovens ativistas do mundo inteiro.', link: 'https://www.earthguardians.org/', icon: 'Globe', color: 'from-teal-600/30 to-emerald-700/30' },
    { name: 'Culturando na Montanha', role: 'Parceira', description: 'Ponto de Cultura premiado em São Tomé das Letras. Intervenções artísticas, shows e oficinas em eventos culturais.', link: 'https://www.instagram.com/culturandonamontanha/', icon: 'Mountain', color: 'from-teal-600/30 to-cyan-700/30' },
    { name: 'Baque Mulher', role: 'Figura Ilustre', description: 'Maracatu interestadual celebrando a força das mulheres negras.', link: 'https://www.instagram.com/baquemulhersjbv/', icon: 'Heart', color: 'from-pink-600/30 to-rose-700/30' },
    { name: 'IF São João da Boa Vista', role: 'Aluna e Facilitadora', description: 'Curso para mulheres em agroecologia e práticas sustentáveis.', link: 'https://www.sbv.ifsp.edu.br/', icon: 'GraduationCap', color: 'from-green-600/30 to-emerald-700/30' },
    { name: 'Conselho do Idoso', role: 'Conselheira', description: 'Defesa dos direitos da população idosa em Águas da Prata.', icon: 'Users', color: 'from-blue-600/30 to-sky-700/30' },
    { name: 'Movimento Antinuclear', role: 'Ativista', description: 'Luta ambiental contra exploração nuclear na região.', link: 'https://www.instagram.com/terraviva_aguarara/', icon: 'Shield', color: 'from-red-600/30 to-orange-700/30' },
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
    title: 'Liderança Anciã',
    highlights: [
      { title: 'Marcha das Mulheres Negras 2025', subtitle: 'Liderança Anciã', description: 'Representando mulheres negras do interior paulista.', year: '2025', type: 'march', icon: 'Users', color: 'from-purple-500 to-pink-600' },
      { title: 'Formadora em Agroecologia', subtitle: 'Consultora', description: 'Treinamento de biólogos e professores em práticas sustentáveis.', year: 'Atual', type: 'education', icon: 'GraduationCap', color: 'from-emerald-500 to-green-600' },
      { title: 'Curso IF São João', subtitle: 'Aluna e Facilitadora', description: 'Curso para mulheres em agroecologia aplicada.', year: '2025', type: 'education', icon: 'GraduationCap', color: 'from-emerald-500 to-green-600' },
      { title: 'Kintal da Dita', subtitle: 'Guardiã', description: 'Preservação do Marco da Revolta de 32 e museu artístico.', year: 'Atual', type: 'cultural', icon: 'Music', color: 'from-amber-500 to-orange-600' },
      { title: 'Virada Climática', subtitle: 'Organizadora', description: 'Evento anual de conscientização ambiental.', year: '2024-2025', type: 'environmental', icon: 'Droplets', color: 'from-cyan-500 to-teal-600' },
    ],
  },

  activism: ['Agroecologia', 'Pautas Feministas', 'Movimento Antinuclear', 'Recursos Hídricos', 'Direitos dos Idosos'],

  folkCulture: ['Congo', 'Folia de Reis', 'Dança de São Gonçalo', 'Maracatu', 'Tradições Afro-brasileiras'],

  events: [
    { name: 'Virada Climática 2024/2025', icon: 'Calendar' },
    { name: 'Marcha das Mulheres Negras 2025', icon: 'Users' },
    { name: 'Curso IF São João da Boa Vista', icon: 'GraduationCap' },
    { name: 'Oficinas de Biojoias', icon: 'Gem' },
    { name: 'Festivais Regionais', icon: 'Music' },
  ],
  tourism: {
    title: 'Prata Expedições',
    subtitle: 'Guia Local',
    description: 'Guia turística com conhecimento histórico, social e ambiental da região.',
    link: 'https://prataexpedicoes.com.br/',
    linkLabel: 'Conhecer roteiros',
  },
}

export const galleryImages = Array.from({ length: 80 }, (_, i) => ({
  src: getImagePath(`/dita (${i + 10}).webp`),
  alt: `Dita foto ${i + 10}`,
}))

export function getImagePath(path: string): string {
  const base = import.meta.env.BASE_URL
  if (path.startsWith(base)) {
    return path
  }
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`
}
