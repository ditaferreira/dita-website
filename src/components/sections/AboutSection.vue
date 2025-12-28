<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Sparkles, Shovel, Gem, Leaf, MapPin } from 'lucide-vue-next'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { nanciData } from '@/data/nanci-data'

const icons = [Shovel, Gem, Leaf]
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true
}, { threshold: 0.1 })
</script>

<template>
  <section id="sobre" ref="sectionRef" class="section">
    <SectionBackground image-path="/dita-maracatu.webp" :opacity="0.35" :blur="2" gradient="subtle" />

    <div class="max-w-6xl mx-auto relative z-10">
      <SectionHeader title="Sobre Nanci" badge="Visionária e Guardiã" center>
        <template #badge-icon>
          <Sparkles class="w-4 h-4 text-emerald-400" />
        </template>
      </SectionHeader>

      <!-- Bio Principal -->
      <div class="glass rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
        <div class="flex items-center justify-center gap-2 text-amber-400 text-sm mb-4">
          <MapPin class="w-4 h-4" />
          <span>{{ nanciData.personal.location }}</span>
        </div>
        <p class="text-white/90 leading-relaxed text-center mb-4">{{ nanciData.personal.bio }}</p>
        <blockquote class="border-l-2 border-emerald-500 pl-4 text-emerald-300/90 italic text-sm max-w-2xl mx-auto">
          "{{ nanciData.personal.quote }}"
        </blockquote>
      </div>

      <!-- Expertise -->
      <div class="grid md:grid-cols-3 gap-4 mb-8">
        <div 
          v-for="(skill, i) in nanciData.expertise" 
          :key="i" 
          class="card text-center transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 flex items-center justify-center mb-3">
            <component :is="icons[i]" class="w-5 h-5 text-emerald-400" />
          </div>
          <h3 class="text-white font-semibold mb-2">{{ skill.title }}</h3>
          <p class="text-white/60 text-sm">{{ skill.description }}</p>
        </div>
      </div>

      <!-- Cultura Popular -->
      <div class="glass rounded-2xl p-5 max-w-2xl mx-auto text-center">
        <h3 class="text-white font-semibold mb-3">Cultura Popular</h3>
        <div class="flex flex-wrap justify-center gap-2">
          <span v-for="g in nanciData.folkCulture" :key="g" class="px-3 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300">{{ g }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
