<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Sparkles, Shovel, Gem, Leaf, MapPin, Quote } from 'lucide-vue-next'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { nanciData } from '@/data/nanci-data'

const icons = [Shovel, Gem, Leaf]
const iconColors = ['from-emerald-500/30 to-green-600/30', 'from-amber-500/30 to-orange-600/30', 'from-cyan-500/30 to-teal-600/30']
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true
}, { threshold: 0.1 })
</script>

<template>
  <section id="sobre" ref="sectionRef" class="section">
    <SectionBackground image-path="/dita-maracatu.webp" :opacity="0.3" :blur="3" gradient="subtle" />

    <div class="max-w-6xl mx-auto relative z-10">
      <SectionHeader title="Sobre Nanci" badge="Visionária e Guardiã" center>
        <template #badge-icon>
          <Sparkles class="w-4 h-4 text-emerald-400" />
        </template>
      </SectionHeader>

      <!-- Bio Principal -->
      <div 
        class="glass-glow rounded-3xl p-8 md:p-10 mb-10 max-w-4xl mx-auto border border-emerald-500/10 transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="flex items-center justify-center gap-2 text-amber-400 text-sm mb-5">
          <MapPin class="w-4 h-4" />
          <span class="font-medium">{{ nanciData.personal.location }}</span>
        </div>
        <p class="text-white/80 leading-relaxed text-center mb-6 text-lg">{{ nanciData.personal.bio }}</p>
        <blockquote class="relative glass-light rounded-2xl p-6 max-w-2xl mx-auto border border-emerald-500/10">
          <Quote class="absolute -top-3 -left-3 w-8 h-8 text-emerald-500/30" />
          <p class="text-emerald-300/90 italic text-base leading-relaxed pl-4">
            "{{ nanciData.personal.quote }}"
          </p>
        </blockquote>
      </div>

      <!-- Expertise -->
      <div class="grid md:grid-cols-3 gap-5 mb-10">
        <div 
          v-for="(skill, i) in nanciData.expertise" 
          :key="i" 
          class="card text-center group transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${200 + i * 100}ms` }"
        >
          <div 
            class="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            :class="`bg-gradient-to-br ${iconColors[i]}`"
          >
            <component :is="icons[i]" class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-white font-semibold mb-2 text-lg">{{ skill.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed">{{ skill.description }}</p>
        </div>
      </div>

      <!-- Cultura Popular -->
      <div 
        class="glass rounded-2xl p-6 max-w-2xl mx-auto text-center border border-amber-500/10 transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="transition-delay: 500ms"
      >
        <h3 class="text-white font-semibold mb-4 text-lg">Cultura Popular</h3>
        <div class="flex flex-wrap justify-center gap-2">
          <span 
            v-for="(g, i) in nanciData.folkCulture" 
            :key="g" 
            class="px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/20 hover:border-amber-500/40 transition-colors cursor-default"
            :style="{ animationDelay: `${i * 50}ms` }"
          >
            {{ g }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
