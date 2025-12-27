<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Heart, ArrowRight, Sparkles, TreePine, Leaf, Instagram, Mail } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground } from '@/components/ui'

const sectionRef = ref<HTMLElement | null>(null)

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime.timeline({ easing: 'easeOutExpo' })
            .add({ targets: '.cta-icon', opacity: [0, 1], scale: [0.5, 1], duration: 800 })
            .add({ targets: '.cta-title', opacity: [0, 1], translateY: [30, 0], duration: 800 }, '-=600')
            .add({ targets: '.cta-desc', opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=500')
            .add({ targets: '.cta-buttons', opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=400')
            .add({ targets: '.cta-quote', opacity: [0, 1], duration: 600 }, '-=300')
          observer.disconnect()
        }
      })
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="section">
    <SectionBackground
      image-path="/nanci-dita-close.webp"
      :opacity="0.4"
      :blur="2"
      gradient="vignette"
    />

    <!-- Decorative elements -->
    <div class="absolute bottom-10 left-10 opacity-10">
      <TreePine class="w-24 h-24 text-emerald-500" />
    </div>
    <div class="absolute top-20 right-10 opacity-10">
      <Leaf class="w-16 h-16 text-emerald-500 animate-float" />
    </div>

    <div class="max-w-3xl mx-auto text-center relative z-10 px-4">
      <div class="glass rounded-3xl p-8 md:p-12 border border-emerald-500/20 relative overflow-hidden">
        <!-- Animated background gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-rose-500/5 animate-gradient" />

        <div class="relative">
          <!-- Icon -->
          <div class="cta-icon w-16 h-16 rounded-full bg-gradient-to-br from-rose-500/80 to-rose-600/80 flex items-center justify-center mx-auto mb-6 animate-pulse-glow shadow-lg shadow-rose-500/20" style="opacity: 0">
            <Heart class="w-8 h-8 text-white" />
          </div>

          <!-- Title -->
          <h2 class="cta-title text-fluid-3xl md:text-fluid-4xl font-bold mb-4 leading-tight" style="opacity: 0">
            <span class="text-gradient">Preservando Tradições,</span>
            <br />
            <span class="text-white">Construindo o Futuro</span>
          </h2>

          <!-- Description -->
          <p class="cta-desc text-fluid-base text-white/80 mb-8 leading-relaxed max-w-xl mx-auto" style="opacity: 0">
            Acompanhe a jornada de Nanci Ferreira e faça parte desta transformação que integra arte, sustentabilidade e sabedoria ancestral.
          </p>

          <!-- Buttons -->
          <div class="cta-buttons flex flex-col sm:flex-row gap-3 justify-center mb-8" style="opacity: 0">
            <button class="btn-primary group" @click="scrollTo('#sobre')">
              <span>Conhecer a História</span>
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://www.instagram.com/dita22067/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline group"
            >
              <Instagram class="w-4 h-4" />
              <span>Seguir no Instagram</span>
            </a>
          </div>

          <!-- Contact -->
          <div class="cta-buttons flex justify-center gap-4 mb-8" style="opacity: 0">
            <a
              href="mailto:dita.13.ferreira@gmail.com"
              class="inline-flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors text-sm"
            >
              <Mail class="w-4 h-4" />
              <span>dita.13.ferreira@gmail.com</span>
            </a>
          </div>

          <!-- Quote -->
          <div class="cta-quote pt-6 border-t border-emerald-500/20" style="opacity: 0">
            <div class="flex justify-center mb-3">
              <Sparkles class="w-5 h-5 text-emerald-400" />
            </div>
            <blockquote class="text-emerald-200/80 italic text-sm leading-relaxed max-w-md mx-auto">
              "Cada gesto de preservação cultural é uma semente plantada para as futuras gerações"
            </blockquote>
            <cite class="block text-white/40 mt-2 text-xs">
              — Filosofia de vida de Nanci Ferreira
            </cite>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
