<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sparkles, Music, Calendar } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { nanciData } from '@/data/nanci-data'

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({ targets: '.event-item', opacity: [0, 1], translateY: [15, 0], delay: anime.stagger(60), duration: 400, easing: 'easeOutCubic' })
          observer.disconnect()
        }
      })
    },
    { threshold: 0.15 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="section">
    <SectionBackground image-path="/dita (64).webp" :opacity="0.25" :blur="3" gradient="subtle" />

    <div class="max-w-4xl mx-auto relative z-10">
      <SectionHeader title="Eventos e Participações" badge="Agenda Cultural" center>
        <template #badge-icon>
          <Calendar class="w-4 h-4 text-emerald-400" />
        </template>
      </SectionHeader>

      <div class="card">
        <div class="flex flex-wrap justify-center gap-2">
          <div v-for="e in nanciData.events" :key="e" class="event-item flex items-center gap-2 glass-light rounded-full px-4 py-2" style="opacity:0">
            <Music class="w-4 h-4 text-emerald-400" />
            <span class="text-white/80 text-sm">{{ e }}</span>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center">
        <span class="inline-flex items-center gap-2 text-white/50 text-sm">
          <Sparkles class="w-4 h-4 text-emerald-400" />
          Participação ativa em eventos culturais e ambientais
        </span>
      </div>
    </div>
  </section>
</template>
