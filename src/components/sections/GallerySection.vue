<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Camera, Sparkles } from 'lucide-vue-next'
import { SectionBackground, SectionHeader } from '@/components/ui'
import { PhotoGallery } from '@/components/gallery'
import { getImagePath } from '@/data/nanci-data'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) isVisible.value = true
}, { threshold: 0.1 })

const categories = ['Todos', 'Cultura', 'Natureza', 'Eventos', 'Artesanato', 'Comunidade']
const categoryMap = ['Cultura', 'Natureza', 'Eventos', 'Artesanato', 'Comunidade']

const galleryImages = Array.from({ length: 80 }, (_, i) => ({
  src: getImagePath(`/dita (${i + 10}).webp`),
  alt: `Dita foto ${i + 10}`,
  category: categoryMap[i % categoryMap.length],
}))
</script>

<template>
  <section id="galeria" ref="sectionRef" class="section">
    <SectionBackground
      image-path="/dita3.webp"
      :opacity="0.2"
      :blur="4"
      gradient="subtle"
    />

    <div class="max-w-7xl mx-auto relative z-10">
      <Transition name="slide-up">
        <div v-if="isVisible">
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
      </Transition>

      <PhotoGallery :images="galleryImages" :categories="categories" />

      <Transition name="fade" appear>
        <div v-if="isVisible" class="mt-12 text-center">
          <blockquote class="glass-leaf rounded-2xl p-6 max-w-xl mx-auto border border-emerald-500/20">
            <Sparkles class="w-5 h-5 text-emerald-400 mx-auto mb-3" />
            <p class="text-emerald-200/90 italic text-sm leading-relaxed">
              "Cada imagem conta uma história, cada momento é uma semente plantada para o futuro"
            </p>
          </blockquote>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.slide-up-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active {
  transition: opacity 0.8s ease 0.3s;
}
.fade-enter-from {
  opacity: 0;
}
</style>
