<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Users, Music, Mountain, Globe, Building, Leaf, GraduationCap, Heart, Shield, ArrowUpRight } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { nanciData } from '@/data/nanci-data'

const sectionRef = ref<HTMLElement | null>(null)

const iconComponents = {
  Globe,
  Building,
  Leaf,
  Users,
  Music,
  Mountain,
  Heart,
  GraduationCap,
  Shield,
}

const getIcon = (name: string) => {
  return iconComponents[name as keyof typeof iconComponents]
}

const getGradientClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; glow: string; border: string }> = {
    'from-emerald-600/30 to-green-700/30': { bg: 'from-emerald-500 to-green-600', glow: 'group-hover:shadow-emerald-500/20', border: 'group-hover:border-emerald-500/30' },
    'from-cyan-600/30 to-blue-700/30': { bg: 'from-cyan-500 to-blue-600', glow: 'group-hover:shadow-cyan-500/20', border: 'group-hover:border-cyan-500/30' },
    'from-amber-600/30 to-orange-700/30': { bg: 'from-amber-500 to-orange-600', glow: 'group-hover:shadow-amber-500/20', border: 'group-hover:border-amber-500/30' },
    'from-rose-600/30 to-red-700/30': { bg: 'from-rose-500 to-red-600', glow: 'group-hover:shadow-rose-500/20', border: 'group-hover:border-rose-500/30' },
    'from-purple-600/30 to-indigo-700/30': { bg: 'from-purple-500 to-indigo-600', glow: 'group-hover:shadow-purple-500/20', border: 'group-hover:border-purple-500/30' },
    'from-teal-600/30 to-emerald-700/30': { bg: 'from-teal-500 to-emerald-600', glow: 'group-hover:shadow-teal-500/20', border: 'group-hover:border-teal-500/30' },
    'from-teal-600/30 to-cyan-700/30': { bg: 'from-teal-500 to-cyan-600', glow: 'group-hover:shadow-teal-500/20', border: 'group-hover:border-teal-500/30' },
    'from-pink-600/30 to-rose-700/30': { bg: 'from-pink-500 to-rose-600', glow: 'group-hover:shadow-pink-500/20', border: 'group-hover:border-pink-500/30' },
    'from-green-600/30 to-emerald-700/30': { bg: 'from-green-500 to-emerald-600', glow: 'group-hover:shadow-green-500/20', border: 'group-hover:border-green-500/30' },
    'from-blue-600/30 to-sky-700/30': { bg: 'from-blue-500 to-sky-600', glow: 'group-hover:shadow-blue-500/20', border: 'group-hover:border-blue-500/30' },
    'from-red-600/30 to-orange-700/30': { bg: 'from-red-500 to-orange-600', glow: 'group-hover:shadow-red-500/20', border: 'group-hover:border-red-500/30' },
  }
  return colorMap[color] || { bg: 'from-emerald-500 to-green-600', glow: 'group-hover:shadow-emerald-500/20', border: 'group-hover:border-emerald-500/30' }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({ targets: '.org-card', opacity: [0, 1], translateY: [30, 0], scale: [0.95, 1], delay: anime.stagger(60), duration: 600, easing: 'easeOutCubic' })
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section id="organizacoes" ref="sectionRef" class="section">
    <SectionBackground image-path="/dita (42).webp" :opacity="0.2" :blur="6" gradient="subtle" />

    <div class="max-w-7xl mx-auto relative z-10">
      <SectionHeader title="Organizações e Movimentos" badge="Rede de Parcerias" center>
        <template #badge-icon>
          <Building class="w-4 h-4 text-emerald-400" />
        </template>
      </SectionHeader>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div 
          v-for="(org, i) in nanciData.organizations" 
          :key="i" 
          class="org-card group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2"
          :class="[getGradientClasses(org.color).glow, getGradientClasses(org.color).border]"
          style="opacity:0"
        >
          <!-- Background gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="org.color" />
          
          <!-- Glass background -->
          <div class="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] rounded-2xl transition-all duration-500 group-hover:border-white/20 group-hover:from-white/[0.12] group-hover:to-white/[0.04]" />
          
          <!-- Shimmer effect on hover -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          <!-- Content -->
          <div class="relative z-10 p-5 h-full flex flex-col">
            <!-- Header with icon and role badge -->
            <div class="flex items-start gap-4 mb-4">
              <div 
                class="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl"
                :class="getGradientClasses(org.color).bg"
              >
                <component :is="getIcon(org.icon)" class="w-6 h-6 text-white drop-shadow-sm" />
              </div>
              <div class="flex-1 min-w-0 pt-1">
                <span 
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all duration-300"
                  :class="[
                    'bg-gradient-to-r',
                    getGradientClasses(org.color).bg,
                    'text-white/90 shadow-sm'
                  ]"
                >
                  {{ org.role }}
                </span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-base font-bold text-white mb-2 leading-snug group-hover:text-white transition-colors duration-300">
              {{ org.name }}
            </h3>

            <!-- Description -->
            <p class="text-white/50 text-sm leading-relaxed mb-4 flex-grow group-hover:text-white/70 transition-colors duration-300 line-clamp-3">
              {{ org.description }}
            </p>

            <!-- Link button -->
            <div class="mt-auto">
              <a 
                v-if="org.link" 
                :href="org.link" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 hover:border-white/20 group/link"
              >
                <span>Visitar</span>
                <ArrowUpRight class="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
              <div v-else class="h-9" /> <!-- Spacer for cards without links -->
            </div>
          </div>

          <!-- Corner accent -->
          <div 
            class="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-150"
            :class="['bg-gradient-to-br', getGradientClasses(org.color).bg]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
