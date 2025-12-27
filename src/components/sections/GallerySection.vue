<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Camera, Sparkles } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground, SectionHeader } from '@/components/ui'
import MasonryGallery from '@/components/gallery/MasonryGallery.vue'
import { getImagePath } from '@/data/nanci-data'

const sectionRef = ref<HTMLElement | null>(null)

// Generate gallery images with categories
const galleryImages = computed(() => {
  const categories = ['Cultura', 'Natureza', 'Eventos', 'Artesanato', 'Comunidade']
  return Array.from({ length: 80 }, (_, i) => ({
    src: getImagePath(`/dita (${i + 10}).webp`),
    alt: `Dita foto ${i + 10}`,
    category: categories[i % categories.length],
  }))
})

const categories = ['Todos', 'Cultura', 'Natureza', 'Eventos', 'Artesanato', 'Comunidade']

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: '.gallery-header',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutCubic',
          })
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
  <section id="galeria" ref="sectionRef" class="section">
    <SectionBackground
      image-path="/dita3.webp"
      :opacity="0.25"
      :blur="3"
      gradient="subtle"
    />

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="gallery-header" style="opacity: 0">
        <SectionHeader
          title="Memórias e Momentos"
          subtitle="Cada imagem conta uma história de vida, cultura e conexão com a natureza."
          badge="Galeria"
          center
        >
          <template #badge-icon>
            <Camera class="w-4 h-4 text-emerald-400" />
          </template>
        </SectionHeader>
      </div>

      <MasonryGallery :images="galleryImages" :categories="categories" />

      <div class="mt-12 text-center">
        <blockquote class="glass-leaf rounded-2xl p-6 max-w-xl mx-auto border border-emerald-500/20">
          <Sparkles class="w-5 h-5 text-emerald-400 mx-auto mb-3" />
          <p class="text-emerald-200 italic text-sm leading-relaxed">
            "Cada imagem conta uma história, cada momento é uma semente plantada para o futuro"
          </p>
        </blockquote>
      </div>
    </div>
  </section>
</template>
