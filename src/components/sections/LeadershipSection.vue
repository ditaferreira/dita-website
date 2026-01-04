<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Crown, Users, GraduationCap, Music, Droplets } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { nanciData } from '@/data/nanci-data'

const sectionRef = ref<HTMLElement | null>(null)

const iconComponents = {
  Users,
  GraduationCap,
  Music,
  Droplets,
}

const getIcon = (name: string) => {
  return iconComponents[name as keyof typeof iconComponents]
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({ targets: '.leadership-card', opacity: [0, 1], translateY: [20, 0], delay: anime.stagger(80), duration: 400, easing: 'easeOutCubic' })
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
  <section id="lideranca" ref="sectionRef" class="section">
    <SectionBackground image-path="/dita (94).webp" :opacity="0.35" :blur="3" gradient="subtle" />

    <div class="max-w-6xl mx-auto relative z-10">
      <SectionHeader :title="nanciData.leadership.title" badge="Ancestralidade" center>
        <template #badge-icon>
          <Crown class="w-4 h-4 text-amber-400" />
        </template>
      </SectionHeader>

      <!-- Highlights -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div v-for="(h, i) in nanciData.leadership.highlights" :key="i" class="leadership-card card" style="opacity:0">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r rounded-t-2xl" :class="h.color" />
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0" :class="h.color">
              <component :is="getIcon(h.icon)" class="w-4 h-4 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2 mb-1">
                <h3 class="text-white font-semibold text-sm truncate">{{ h.title }}</h3>
                <span class="text-white/40 text-xs flex-shrink-0">{{ h.year }}</span>
              </div>
              <p class="text-amber-400/80 text-xs mb-1">{{ h.subtitle }}</p>
              <p class="text-white/60 text-xs">{{ h.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Activism -->
      <div class="glass rounded-2xl p-5 max-w-2xl mx-auto text-center">
        <h3 class="text-white font-semibold mb-3">Áreas de Atuação</h3>
        <div class="flex flex-wrap justify-center gap-2">
          <span v-for="a in nanciData.activism" :key="a" class="px-3 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10">{{ a }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
