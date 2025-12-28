<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Home, MapPin, Landmark, Palette, Gem, Users, Building2, Heart } from 'lucide-vue-next'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { nanciData } from '@/data/nanci-data'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true
}, { threshold: 0.1 })
</script>

<template>
  <section id="kintal" ref="sectionRef" class="section">
    <SectionBackground image-path="/dita (42).webp" :opacity="0.3" :blur="3" gradient="subtle" />

    <div class="max-w-6xl mx-auto relative z-10">
      <SectionHeader title="Pontos de Cultura" badge="Dois Espaços de Resistência" center>
        <template #badge-icon>
          <Heart class="w-4 h-4 text-emerald-400" />
        </template>
      </SectionHeader>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <!-- Guardiões da Terra -->
        <div 
          class="card transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600/30 to-green-600/30 flex items-center justify-center">
              <Users class="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h3 class="text-white font-bold text-lg">{{ nanciData.guardioesDaTerra.name }}</h3>
              <span class="text-emerald-400/80 text-xs">{{ nanciData.guardioesDaTerra.type }}</span>
            </div>
          </div>
          <p class="text-white/80 text-sm mb-4">{{ nanciData.guardioesDaTerra.description }}</p>
          
          <div class="glass-light rounded-lg p-3 mb-4">
            <div class="flex items-center gap-2 mb-2">
              <Building2 class="w-4 h-4 text-amber-400" />
              <span class="text-amber-400 text-xs font-medium">Sede</span>
            </div>
            <p class="text-white font-medium text-sm">{{ nanciData.guardioesDaTerra.ong.name }}</p>
            <p class="text-emerald-400/80 text-xs">{{ nanciData.guardioesDaTerra.ong.type }}</p>
            <p class="text-white/50 text-xs mt-1">{{ nanciData.guardioesDaTerra.ong.description }}</p>
          </div>

          <div class="space-y-2">
            <div v-for="a in nanciData.guardioesDaTerra.activities" :key="a" class="flex items-center gap-2 text-white/70 text-xs">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {{ a }}
            </div>
          </div>
        </div>

        <!-- Kintal da Dita -->
        <div 
          class="card transition-all duration-500"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          style="transition-delay: 100ms"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-600/30 to-orange-600/30 flex items-center justify-center">
              <Home class="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <h3 class="text-white font-bold text-lg">{{ nanciData.kintalDaDita.name }}</h3>
              <span class="text-amber-400/80 text-xs">{{ nanciData.kintalDaDita.type }}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 text-amber-400/80 text-xs mb-3">
            <MapPin class="w-3 h-3" />
            <span>{{ nanciData.kintalDaDita.location }}</span>
          </div>
          <p class="text-white/80 text-sm mb-4">{{ nanciData.kintalDaDita.description }}</p>

          <div class="space-y-4">
            <div class="glass-light rounded-lg p-3">
              <div class="flex items-center gap-2 mb-2">
                <Landmark class="w-4 h-4 text-amber-400" />
                <span class="text-white font-medium text-sm">{{ nanciData.kintalDaDita.historicSite.name }}</span>
              </div>
              <p class="text-white/60 text-xs mb-2">{{ nanciData.kintalDaDita.historicSite.description }}</p>
              <div class="flex flex-wrap gap-1">
                <span v-for="f in nanciData.kintalDaDita.historicSite.features" :key="f" class="px-2 py-0.5 rounded text-[10px] bg-amber-500/15 text-amber-300/80">{{ f }}</span>
              </div>
            </div>

            <div class="glass-light rounded-lg p-3">
              <div class="flex items-center gap-2 mb-2">
                <Palette class="w-4 h-4 text-purple-400" />
                <span class="text-white font-medium text-sm">Museu Tradicional</span>
              </div>
              <p class="text-white/60 text-xs mb-2">{{ nanciData.kintalDaDita.museum.description }}</p>
              <div class="flex flex-wrap gap-1">
                <span v-for="c in nanciData.kintalDaDita.museum.collections" :key="c" class="px-2 py-0.5 rounded text-[10px] bg-purple-500/15 text-purple-300/80">{{ c }}</span>
              </div>
            </div>

            <div class="glass-light rounded-lg p-3">
              <div class="flex items-center gap-2 mb-2">
                <Gem class="w-4 h-4 text-emerald-400" />
                <span class="text-white font-medium text-sm">Oficinas</span>
              </div>
              <div class="flex flex-wrap gap-1">
                <span v-for="w in nanciData.kintalDaDita.workshops" :key="w" class="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-300/80">{{ w }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1">
              <span v-for="a in nanciData.kintalDaDita.agroecology" :key="a" class="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-300">{{ a }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
