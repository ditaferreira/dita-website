<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Users, Music, Mountain, Globe, ExternalLink, Building, Leaf, GraduationCap, Heart, Shield } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { nanciData } from '@/data/nanci-data'

const icons = [Globe, Building, Leaf, Users, Music, Mountain, Heart, GraduationCap, Users, Shield]
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({ targets: '.org-card', opacity: [0, 1], translateY: [20, 0], delay: anime.stagger(80), duration: 500, easing: 'easeOutCubic' })
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
    <SectionBackground image-path="/dita (42).webp" :opacity="0.25" :blur="4" gradient="subtle" />

    <div class="max-w-6xl mx-auto relative z-10">
      <SectionHeader title="Organizações e Movimentos" badge="Rede de Parcerias" center>
        <template #badge-icon>
          <Building class="w-4 h-4 text-emerald-400" />
        </template>
      </SectionHeader>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(org, i) in nanciData.organizations" :key="i" class="org-card glass rounded-xl p-4 group" style="opacity:0">
          <div class="flex items-start gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600/30 to-green-700/30 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
              <component :is="icons[i % icons.length]" class="w-5 h-5 text-emerald-400" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-semibold text-white leading-tight mb-1">{{ org.name }}</h3>
              <span class="inline-block bg-emerald-900/40 text-emerald-300 text-[10px] font-medium px-2 py-0.5 rounded-full">{{ org.role }}</span>
            </div>
          </div>
          <p class="text-white/60 text-xs leading-relaxed mb-3">{{ org.description }}</p>
          <a v-if="org.link" :href="org.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-xs font-medium">
            Visitar <ExternalLink class="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
