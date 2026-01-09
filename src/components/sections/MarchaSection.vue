<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Users, Heart, Megaphone } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { getImagePath } from '@/data/nanci-data'

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({ targets: '.marcha-content', opacity: [0, 1], translateY: [30, 0], delay: anime.stagger(100), duration: 600, easing: 'easeOutCubic' })
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
  <section id="marcha" ref="sectionRef" class="section overflow-hidden">
    <SectionBackground :image-path="getImagePath('/dita (banner-marcha).jpeg')" :opacity="0.4" :blur="2" gradient="dark" />

    <div class="max-w-6xl mx-auto relative z-10">
      <SectionHeader title="Marcha das Mulheres Negras 2025" badge="Liderança Anciã" center>
        <template #badge-icon>
          <Megaphone class="w-4 h-4 text-purple-400" />
        </template>
      </SectionHeader>

      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <!-- Imagem Principal -->
        <div class="marcha-content" style="opacity:0">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              :src="getImagePath('/dita (marcha).jpeg')" 
              alt="Dita na Marcha das Mulheres Negras 2025" 
              class="w-full h-auto object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div class="absolute bottom-4 left-4 right-4">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/80 text-white text-sm">
                <Heart class="w-4 h-4" />
                Brasília, Janeiro 2025
              </span>
            </div>
          </div>
        </div>

        <!-- Conteúdo -->
        <div class="space-y-6">
          <div class="marcha-content card" style="opacity:0">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                <Users class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-white font-bold text-lg mb-2">Representando o Interior Paulista</h3>
                <p class="text-white/70 text-sm leading-relaxed">
                  Dita participou como liderança anciã na Marcha das Mulheres Negras 2025 em Brasília, 
                  representando as mulheres negras do interior de São Paulo e levando a voz da 
                  ancestralidade e resistência.
                </p>
              </div>
            </div>
          </div>

          <div class="marcha-content card" style="opacity:0">
            <blockquote class="text-white/80 italic text-center">
              "A luta das mulheres negras é a luta pela terra, pela cultura e pela dignidade de nosso povo."
            </blockquote>
            <p class="text-amber-400/80 text-sm text-center mt-3">— Dita</p>
          </div>

          <div class="marcha-content flex flex-wrap gap-2 justify-center" style="opacity:0">
            <span class="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">Ancestralidade</span>
            <span class="px-3 py-1 rounded-full text-xs bg-pink-500/20 text-pink-300 border border-pink-500/30">Resistência</span>
            <span class="px-3 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30">Cultura Popular</span>
          </div>
        </div>
      </div>

      <!-- Banner Secundário -->
      <div class="marcha-content mt-12" style="opacity:0">
        <div class="relative rounded-2xl overflow-hidden h-48 md:h-64">
          <img 
            :src="getImagePath('/dita (banner-marcha).jpeg')" 
            alt="Banner Marcha das Mulheres Negras 2025" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-transparent to-pink-900/70" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <p class="text-white/90 text-lg md:text-xl font-semibold">Mulheres Negras em Marcha</p>
              <p class="text-white/60 text-sm mt-1">Por terra, território e ancestralidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
