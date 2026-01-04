<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Target } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { nanciData, getImagePath } from '@/data/nanci-data'

const gridRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({ targets: '.ods-item', opacity: [0, 1], scale: [0.9, 1], delay: anime.stagger(60), duration: 400, easing: 'easeOutCubic' })
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )
  if (gridRef.value) observer.observe(gridRef.value)
})
</script>

<template>
  <section id="ods" class="section">
    <SectionBackground image-path="/dita-photo.webp" :opacity="0.25" :blur="4" gradient="subtle" />

    <div class="max-w-5xl mx-auto relative z-10">
      <SectionHeader title="Objetivos de Desenvolvimento Sustentável" badge="Alinhamento ONU" center>
        <template #badge-icon>
          <Target class="w-4 h-4 text-emerald-400" />
        </template>
      </SectionHeader>

      <div ref="gridRef" class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="ods in nanciData.ods" :key="ods.number" class="ods-item glass rounded-xl p-4 group transition-all duration-300 hover:bg-white/10" style="opacity:0">
          <div class="relative mb-2">
            <img :src="getImagePath(`/ods_${ods.number}.webp`)" :alt="`ODS ${ods.number}`" class="w-full h-auto aspect-square rounded-lg" loading="lazy" />
            <div class="absolute inset-0 bg-black/30 rounded-lg"></div>
            <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold" :style="{ color: ods.color }">{{ ods.number }}</span>
          </div>
          <p class="text-white/60 text-xs text-center">{{ ods.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
