'use client'

import Image from 'next/image'
import { nanciData } from '@/data/nanci-data'
import Navigation from '@/components/Navigation'
import SplashCursor from '@/components/SplashCursor'
import DomeGallery from '@/components/DomeGallery'
import SectionBackground from '@/components/SectionBackground'
import ChromaGrid from '@/components/ChromaGrid'

import { getImagePath } from '@/lib/utils'
import {
  Leaf,
  Heart,
  Users,
  Globe,
  Music,
  Palette,
  Sparkles,
  Calendar,
  Award,
  BookOpen,
  Mountain,
  ArrowRight,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'

export default function HomePage() {
  // Transform ODS data for ChromaGrid
  const odsItems = nanciData.ods.objectives.map((ods) => ({
    image: `/dita-website/ods_${ods.number}.webp`,
    subtitle: ods.description,
    borderColor: ods.color,
    gradient: `linear-gradient(145deg, ${ods.color}, #000)`,
    url: 'https://sdgs.un.org/goals', // Link to UN SDGs page
  }))

  return (
    <div className="min-h-screen text-white relative">
      <Navigation />
      <SplashCursor />

      {/* Hero Section - Enhanced with background image */}
      <section className="relative py-24 md:py-36 px-4 overflow-hidden min-h-[100vh] flex items-center justify-end">
        {/* Main Background Image */}
        <div className="absolute inset-0">
          {/* Main Background Image only */}
          <Image
            src={getImagePath('/nanci-dita-full.webp')}
            alt=""
            fill
            className="object-cover opacity-45 z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/60"></div>
        </div>

        {/* Subtle particle overlay */}
        {/* Hero Content - Centralized Layout */}
        <div className="max-w-5xl ml-auto relative z-10 w-full text-center">
          <div className="glass rounded-[2rem] p-12 md:p-16 border border-green-500/15 shadow-2xl hover:border-green-500/25 transition-all duration-700 animate-breathe backdrop-blur-xl">
            {/* Top Badge */}
            <div className="inline-flex items-center justify-center mb-8 glass-light rounded-full px-6 py-3 border-glow animate-glow-pulse">
              <Leaf className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-green-300 text-sm font-semibold tracking-wide">
                Mata Atlântica • Cascata
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-fluid-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-gradient animate-shimmer">Nanci Ferreira</span>
            </h1>

            {/* Subtitle with Heart */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className="h-6 w-6 text-green-400 animate-pulse-glow" />
              <p className="text-fluid-2xl text-white font-semibold">
                Carinhosamente conhecida como{' '}
                <span className="text-green-300 font-bold">&ldquo;Dita&rdquo;</span>
              </p>
            </div>

            {/* Age and Description */}
            <div className="mb-8">
              <div className="inline-block glass-light rounded-full px-4 py-2 mb-4">
                <span className="text-green-300 font-semibold">
                  {nanciData.personal.age} anos de sabedoria ancestral
                </span>
              </div>
              <p className="text-fluid-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
                {nanciData.personal.description}
              </p>
            </div>

            {/* Profile Image - Centered with enhanced styling */}
            <div className="relative mx-auto mb-12 w-80 h-80 max-w-sm animate-slide-up">
              {/* Enhanced glow background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-green-500/40 via-green-400/30 to-green-500/40 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Circular container with enhanced ring effect */}
              <div className="relative w-full h-full circular-image animate-float">
                {/* Rotating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 via-green-600/30 to-green-400/40 rounded-full animate-rotate-gradient"></div>

                {/* Image container with enhanced glow */}
                <div className="relative w-full h-full rounded-full overflow-hidden animate-pulse-glow">
                  <Image
                    src={getImagePath('/dita-nobackground.png')}
                    alt="Nanci Ferreira (Dita)"
                    fill
                    className="object-contain scale-90 hover:scale-95 transition-all duration-700 filter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Info Cards with AMOLED styling - Centered */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center glass-light rounded-full px-5 py-2.5 border-glow animate-fade-in animate-delay-300">
                <Calendar className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-white text-fluid-sm">73 anos de sabedoria</span>
              </div>
              <div className="flex items-center glass-light rounded-full px-5 py-2.5 border-glow animate-fade-in animate-delay-400">
                <Calendar className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-white text-fluid-sm">Líder na Comunidade</span>
              </div>
            </div>

            {/* Modern CTA Button - Centered */}
            <div className="animate-fade-in animate-delay-600 relative z-20">
              <a
                href="#sobre"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-green-600 px-8 py-3.5 text-black font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 cursor-pointer z-20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-green-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative flex items-center">
                  Conheça seu trabalho
                  <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with cultural background */}
      <section id="sobre" className="relative py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <SectionBackground
          imagePath="/dita-maracatu.webp"
          opacity={0.15}
          blur={6}
          gradient="dark"
        />

        <div className="max-w-7xl mx-auto">
          <SectionBackground
            imagePath="/nanci2.webp" // Obrigatório
            opacity={0.5} // 0-1
            blur={12} // pixels
            gradient="dark" // 'dark' | 'radial' | 'vignette' | 'none'
            customGradient="..." // CSS gradient customizado
            objectPosition="center" // posição da imagem
          />
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center justify-center mb-6 glass-light rounded-full px-5 py-2 border-glow animate-glow-pulse">
              <Sparkles className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-400 text-sm font-medium tracking-wide">
                Conhecimentos Ancestrais
              </span>
            </div>

            <h2 className="text-fluid-4xl font-bold text-gradient mb-8 tracking-tight">
              Áreas de Especialização
            </h2>

            {/* Enhanced divider */}
            <div className="relative w-32 h-1 mx-auto mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-green-600 rounded-full animate-shimmer"></div>
              <div className="absolute inset-0 bg-green-500/50 blur-sm rounded-full"></div>
            </div>
            <div className="mt-16 max-w-4xl mx-auto animate-slide-up animate-delay-300">
              <blockquote className="relative text-fluid-xl text-green-400 italic font-light leading-relaxed glass-light rounded-2xl py-8 px-10 border border-green-500/10 shadow-lg">
                {/* Quote mark decoration */}

                <p className="relative z-10">&ldquo;{nanciData.personal.quote}&rdquo;</p>

                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-green-500/5 blur-xl rounded-2xl -z-10"></div>
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {nanciData.expertise.map((skill, index) => (
              <div
                key={index}
                className="amoled-card p-10 group animate-slide-up hover:translate-y-[-8px]"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card glow effect on hover */}
                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition-opacity duration-700 -z-10"></div>

                <div className="flex flex-col items-center text-center mb-8">
                  <div className="bg-gradient-to-br from-green-900/80 to-green-800/50 rounded-2xl p-5 mb-6 group-hover:bg-green-800/70 transition-colors duration-500 shadow-lg shadow-green-900/10 group-hover:shadow-green-900/20">
                    {index === 0 && (
                      <Palette className="h-8 w-8 text-green-400 group-hover:text-green-300 transition-colors duration-500" />
                    )}
                    {index === 1 && (
                      <Heart className="h-8 w-8 text-green-400 group-hover:text-green-300 transition-colors duration-500" />
                    )}
                    {index === 2 && (
                      <Leaf className="h-8 w-8 text-green-400 group-hover:text-green-300 transition-colors duration-500" />
                    )}
                  </div>

                  <h3 className="text-fluid-2xl font-semibold text-white group-hover:text-green-400 transition-colors duration-500 mb-4">
                    {skill.title}
                  </h3>

                  {/* Animated underline */}
                  <div className="h-0.5 w-0 bg-green-500 group-hover:w-16 transition-all duration-700 mb-6"></div>
                </div>

                <p className="text-white/80 leading-relaxed text-center">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Nova seção com imagens */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <SectionBackground
          imagePath="/dita3.webp"
          opacity={1}
          blur={8}
          gradient="dark"
          customGradient="linear-gradient(to bottom right, rgba(0,0,0,0.70), rgba(0,0,0,0.80), rgba(0,0,0,0.70))"
        />

        <div className="max-w-9xl mx-auto relative z-10">
          <div className="text-center mb-15 animate-fade-in">
            <h2 className="text-fluid-4xl font-bold text-gradient mb-6">Memórias e Momentos</h2>
          </div>

          {/* Image Gallery Grid - Enhanced with 8 featured images */}
          {/* Dome Gallery Component - Full Width */}
          <div
            className="relative w-full flex items-center justify-center z-999"
            style={{ height: '100vh', maxWidth: '100vw' }}
          >
            <DomeGallery />
          </div>

          {/* Featured Quote */}
          <div className="text-center animate-fade-in animate-delay-400">
            <div className="glass rounded-3xl p-8 max-w-4xl mx-auto backdrop-blur-xl border-green-500/15">
              <blockquote className="text-fluid-xl text-green-300 italic font-light leading-relaxed">
                &ldquo;Cada imagem conta uma história, cada momento é uma semente plantada para o
                futuro&rdquo;
              </blockquote>
              <cite className="block text-white/60 mt-4 text-sm">
                - Reflexão sobre o legado visual
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="projetos" className="relative py-24 px-4 overflow-hidden">
        <SectionBackground
          imagePath="/dita-maracatu.webp" // Obrigatório
          opacity={0.25} // 0-1
          blur={8} // pixels
          gradient="dark" // 'dark' | 'radial' | 'vignette' | 'none'
          customGradient="..." // CSS gradient customizado
          objectPosition="center" // posição da imagem
        />
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-fluid-4xl font-bold text-gradient mb-6">Projetos Principais</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-8"></div>
            <p className="text-fluid-lg text-white/70 max-w-3xl mx-auto">
              Iniciativas que integram arte, sustentabilidade e educação ambiental, transformando a
              comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nanciData.projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border border-white/5 hover:border-green-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-green-900/20 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 mr-5">
                    {project.category === 'Arte e Sustentabilidade' && (
                      <div className="bg-green-900/50 rounded-xl p-3 group-hover:bg-green-800/50 transition-colors duration-300">
                        <Sparkles className="h-6 w-6 text-green-400" />
                      </div>
                    )}
                    {project.category === 'Música e Ecologia' && (
                      <div className="bg-green-900/50 rounded-xl p-3 group-hover:bg-green-800/50 transition-colors duration-300">
                        <Music className="h-6 w-6 text-green-400" />
                      </div>
                    )}
                    {project.category === 'Espaço Cultural' && (
                      <div className="bg-green-900/50 rounded-xl p-3 group-hover:bg-green-800/50 transition-colors duration-300">
                        <Users className="h-6 w-6 text-green-400" />
                      </div>
                    )}
                    {project.category === 'Educação' && (
                      <div className="bg-green-900/50 rounded-xl p-3 group-hover:bg-green-800/50 transition-colors duration-300">
                        <BookOpen className="h-6 w-6 text-green-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 relative w-full items-center justify-center">
                    <h3 className="text-fluid-2xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <span className="inline-block bg-green-900/30 text-green-400 text-sm font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>

                {project.details && (
                  <div className="glass-light rounded-xl p-5 mb-6 border border-white/5">
                    <p className="text-white/60 text-sm leading-relaxed">{project.details}</p>
                  </div>
                )}

                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-green-400 font-medium mb-1">Impacto:</p>
                      <p className="text-white/60 text-sm leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Nova seção com números impactantes */}

      {/* Organizations Section - Enhanced */}
      <section id="organizacoes" className="relative py-24 px-4 overflow-hidden">
        <SectionBackground
          imagePath="/dita (42).webp" // Obrigatório
          opacity={0.15} // 0-1
          blur={12} // pixels
          gradient="radial" // 'dark' | 'radial' | 'vignette' | 'none'
          customGradient="..." // CSS gradient customizado
          objectPosition="center" // posição da imagem
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
              Organizações e Movimentos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-8"></div>
            <p className="text-fluid-lg text-white/70 max-w-3xl mx-auto">
              Participação ativa em organizações e entidades, locais e internacionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nanciData.organizations.map((org, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border border-white/5 hover:border-green-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-green-900/20 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-green-900/50 rounded-xl p-3 mr-5 group-hover:bg-green-800/50 transition-colors duration-300">
                    {index === 0 && <Users className="h-6 w-6 text-green-400" />}
                    {index === 1 && <Music className="h-6 w-6 text-green-400" />}
                    {index === 2 && <Mountain className="h-6 w-6 text-green-400" />}
                    {index === 3 && <Globe className="h-6 w-6 text-green-400" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-fluid-xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300 mb-3">
                      {org.name}
                    </h3>
                    <div className="inline-block bg-green-900/30 text-green-400 text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {org.role}
                    </div>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">{org.description}</p>

                {org.link && (
                  <div className="flex justify-end relative z-20">
                    <a
                      href={org.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors cursor-pointer relative z-20"
                    >
                      <span className="mr-2">Visitar</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Section - Enhanced */}
      <section className="relative py-24 px-4 overflow-hidden">
        <SectionBackground imagePath="/dita (52).webp" opacity={1} blur={7} gradient="dark" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-fluid-4xl font-bold text-gradient mb-6">Turismo</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-8"></div>
            <p className="text-fluid-lg text-white/80 max-w-3xl mx-auto">
              Conectando visitantes com a riqueza cultural e natural da região através de
              experiências na natureza.
            </p>
          </div>

          <div className="glass rounded-3xl p-10 border border-green-500/15 max-w-4xl mx-auto animate-fade-in backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
              <div className="bg-green-900/50 rounded-2xl p-5 md:flex-shrink-0">
                <Globe className="h-12 w-12 text-green-400" />
              </div>
              <div>
                <h3 className="text-fluid-2xl font-semibold text-white mb-2">
                  {nanciData.tourism.company}
                </h3>
                <p className="text-green-400 font-medium">{nanciData.tourism.role}</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-fluid-lg">
              {nanciData.tourism.approach}
            </p>

            <div className="mt-8 flex justify-end relative z-20">
              <a
                href="https://prataexpedicoes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors cursor-pointer relative z-20"
              >
                <span className="mr-2">Conhecer roteiros</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section - Enhanced */}
      <section className="relative py-24 px-4 overflow-hidden">
        <SectionBackground
          imagePath="/dita (83).webp" // Obrigatório
          opacity={0.2} // 0-1
          blur={12} // pixels
          gradient="radial" // 'dark' | 'radial' | 'vignette' | 'none'
          customGradient="..." // CSS gradient customizado
          objectPosition="center" // posição da imagem
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-fluid-4xl font-bold text-gradient mb-6">Eventos e Participações</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-8"></div>
            <p className="text-fluid-lg text-white/80 max-w-3xl mx-auto">
              Participação em festivais, feiras e eventos que transformam celebrações em
              oportunidades de educação ambiental e valorização cultural.
            </p>
          </div>

          {/* Special Events */}
          {nanciData.specialEvents && (
            <div className="mb-16 animate-fade-in">
              <h3 className="text-fluid-2xl font-semibold text-white text-center mb-10">
                Organizadora e Fomentadora
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {nanciData.specialEvents.map((event, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 border border-white/5 hover:border-green-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-green-900/20 group"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-green-900/50 rounded-xl p-3 mr-4 group-hover:bg-green-800/50 transition-colors duration-300">
                        <Sparkles className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-fluid-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                          {event.title}
                        </h4>
                        <span className="text-sm text-green-400">{event.type}</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Events */}
          <div className="glass rounded-3xl p-10 border border-white/5 animate-fade-in animate-delay-200">
            <h3 className="text-fluid-xl font-semibold text-white text-center mb-8">
              Participações Especiais
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nanciData.events.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center glass-light rounded-xl p-4 border border-white/5 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <Music className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ODS Section - Objetivos de Desenvolvimento Sustentável */}
      <section id="ods" className="relative py-32 px-4 overflow-hidden">
        <SectionBackground imagePath="/dita-photo.webp" opacity={0.12} blur={10} gradient="dark" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6 glass-light rounded-full px-5 py-2 border-glow animate-glow-pulse">
              <Globe className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-400 text-sm font-medium tracking-wide">
                Alinhamento Global
              </span>
            </div>

            <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
              Objetivos de Desenvolvimento Sustentável
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-8"></div>

            <p className="text-fluid-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              {nanciData.ods.description}
            </p>
          </div>

          {/* ODS ChromaGrid */}
          <div className="relative w-full min-h-[800px] animate-fade-in">
            <ChromaGrid
              items={odsItems}
              className="py-8"
              radius={400}
              damping={0.5}
              fadeOut={0.8}
            />
          </div>

          {/* Bottom Info Card */}
          <div className="mt-16 glass rounded-3xl p-8 border border-green-500/15 max-w-4xl mx-auto animate-fade-in animate-delay-400 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="bg-green-900/50 rounded-xl p-3 flex-shrink-0">
                <Award className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-fluid-xl font-semibold text-white mb-3">
                  Compromisso com a Agenda 2030
                </h3>
                <p className="text-white/70 leading-relaxed">
                  O trabalho de Nanci Ferreira demonstra como ações locais, enraizadas em saberes
                  ancestrais e práticas comunitárias, contribuem diretamente para os objetivos
                  globais de desenvolvimento sustentável estabelecidos pela ONU. Cada oficina, cada
                  projeto e cada iniciativa representa um passo concreto em direção a um futuro mais
                  justo, sustentável e inclusivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Nova seção especial */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <SectionBackground
          imagePath="/nanci-dita-close.webp"
          opacity={0.3}
          blur={6}
          customGradient="linear-gradient(to bottom right, rgba(20,83,45,0.50), rgba(0,0,0,0.70), rgba(20,83,45,0.50))"
        />

        {/* Animated particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-bounce opacity-40"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="glass rounded-[2.5rem] p-12 md:p-16 backdrop-blur-xl border border-green-500/20 shadow-2xl animate-fade-in">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-full mb-8 animate-pulse-glow">
              <Heart className="h-10 w-10 text-white" />
            </div>

            {/* Main Message */}
            <h2 className="text-fluid-4xl font-bold text-gradient mb-6 leading-tight">
              Preservando Tradições,
              <br />
              Construindo o Futuro
            </h2>

            <p className="text-fluid-xl text-white/90 mb-8 leading-relaxed">
              Acompanhe a jornada de Nanci Ferreira e faça parte desta transformação que integra
              arte, sustentabilidade e sabedoria ancestral para um mundo mais consciente e
              conectado.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
              <a
                href="#sobre"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-green-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 cursor-pointer z-20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-green-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative flex items-center">
                  Conhecer a História
                  <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              <a
                href="#projetos"
                className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-green-500 px-8 py-4 text-green-400 font-semibold transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 cursor-pointer z-20"
              >
                <span className="relative flex items-center">
                  Explorar Projetos
                  <Sparkles className="ml-2 h-5 w-5 transition-all duration-300 group-hover:animate-spin" />
                </span>
              </a>
            </div>

            {/* Quote */}
            <div className="mt-12 pt-8 border-t border-green-500/20">
              <blockquote className="text-fluid-lg text-green-300 italic font-light leading-relaxed">
                &ldquo;Cada gesto de preservação cultural é uma semente plantada para as futuras
                gerações&rdquo;
              </blockquote>
              <cite className="block text-white/60 mt-3 text-sm">
                - Filosofia de vida de Nanci Ferreira
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="relative glass border-t border-green-500/10 py-16 px-4 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-600 rounded-full p-2 mr-3">
                  <Leaf className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-fluid-2xl font-bold">
                  <span className="text-white">Nanci</span>
                  <span className="text-green-500"> Ferreira</span>
                </h3>
              </div>
              <p className="text-white/70 mb-8 max-w-xl leading-relaxed">
                &ldquo;A história de Nanci Ferreira é, fundamentalmente, a história de como uma
                pessoa, enraizada em sua comunidade e comprometida com valores de sustentabilidade e
                justiça social, pode transformar realidades e inspirar mudanças que transcendem os
                limites de seu território original.&rdquo;
              </p>
              <p className="text-white/50 text-sm">
                Cascata, Águas da Prata - São Paulo | Arte e Sustentabilidade na Mata Atlântica
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-green-400 font-semibold mb-4">Navegação</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#sobre"
                      className="text-white/70 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projetos"
                      className="text-white/70 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#organizacoes"
                      className="text-white/70 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Organizações
                    </a>
                  </li>
                  <li>
                    <a
                      href="#impacto"
                      className="text-white/70 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Impacto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ods"
                      className="text-white/70 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="h-3 w-3 mr-1" />
                      ODS
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-green-400 font-semibold mb-4">Contato</h4>
                <ul className="space-y-2">
                  <li className="text-white/70">Cascata, Águas da Prata</li>
                  <li className="text-white/70">São Paulo, Brasil</li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      dita.13.ferreira@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Nanci Ferreira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
