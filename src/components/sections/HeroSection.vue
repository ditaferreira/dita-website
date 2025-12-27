<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Leaf, Heart, ArrowDown, Sparkles } from 'lucide-vue-next'
import anime from 'animejs'
import { SectionBackground } from '@/components/ui'
import { nanciData, getImagePath } from '@/data/nanci-data'

const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  anime.timeline({ easing: 'easeOutExpo' })
    .add({ targets: '.hero-badge', opacity: [0, 1], translateY: [20, 0], duration: 600 })
    .add({ targets: '.hero-title', opacity: [0, 1], translateY: [30, 0], duration: 800 }, '-=400')
    .add({ targets: '.hero-subtitle', opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=500')
    .add({ targets: '.hero-image', opacity: [0, 1], scale: [0.9, 1], duration: 800 }, '-=400')
    .add({ targets: '.hero-pills', opacity: [0, 1], translateY: [15, 0], duration: 500 }, '-=400')
    .add({ targets: '.hero-cta', opacity: [0, 1], translateY: [15, 0], duration: 500 }, '-=300')
})

const scrollToAbout = () => {
  document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    ref="heroRef"
    class="section min-h-screen flex items-center justify-center"
  >
    <SectionBackground
      image-path="/nanci-dita-full.webp"
      :opacity="0.4"
      :blur="2"
      gradient="vignette"
    />

    <div class="max-w-4xl mx-auto text-center relative z-10 px-4">
      <div class="glass rounded-3xl p-6 md:p-10 lg:p-12 border border-white/10">
        <!-- Badge -->
        <div class="hero-badge inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 mb-6" style="opacity: 0">
          <Leaf class="w-4 h-4 text-emerald-400" />
          <span class="text-white/80 text-sm font-medium">Mata Atlântica • Cascata</span>
        </div>

        <!-- Title -->
        <h1 class="hero-title text-fluid-5xl font-bold mb-3" style="opacity: 0">
          <span class="text-gradient">{{ nanciData.personal.name }}</span>
        </h1>

        <!-- Subtitle -->
        <div class="hero-subtitle flex items-center justify-center gap-2 mb-4" style="opacity: 0">
          <Heart class="w-5 h-5 text-rose-400" />
          <p class="text-fluid-lg text-white/90">
            Carinhosamente conhecida como
            <span class="text-emerald-400 font-semibold">"{{ nanciData.personal.nickname }}"</span>
          </p>
        </div>

        <!-- Age Badge -->
        <div class="hero-subtitle inline-block glass-light rounded-full px-4 py-1.5 mb-5" style="opacity: 0">
          <span class="text-white/80 text-sm">
            <span class="font-bold text-emerald-400">{{ nanciData.personal.age }}</span> anos de sabedoria ancestral
          </span>
        </div>

        <!-- Description -->
        <p class="hero-subtitle text-fluid-base text-white/70 max-w-xl mx-auto mb-6 leading-relaxed" style="opacity: 0">
          {{ nanciData.personal.title }}
        </p>

        <!-- Profile Image -->
        <div class="hero-image relative mx-auto w-44 h-44 md:w-52 md:h-52 mb-8" style="opacity: 0">
          <div class="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-glow" />
          <div class="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
            <img
              :src="getImagePath('/dita-nobackground.png')"
              :alt="nanciData.personal.name"
              class="w-full h-full object-contain scale-90"
            />
          </div>
        </div>

        <!-- Info Pills -->
        <div class="hero-pills flex flex-wrap justify-center gap-2 mb-8" style="opacity: 0">
          <div class="flex items-center gap-2 glass-light rounded-full px-3 py-1.5">
            <Leaf class="w-4 h-4 text-emerald-400" />
            <span class="text-white/80 text-sm">Guardiã da Terra</span>
          </div>
          <div class="flex items-center gap-2 glass-light rounded-full px-3 py-1.5">
            <Heart class="w-4 h-4 text-rose-400" />
            <span class="text-white/80 text-sm">Líder Comunitária</span>
          </div>
          <div class="flex items-center gap-2 glass-light rounded-full px-3 py-1.5">
            <Sparkles class="w-4 h-4 text-amber-400" />
            <span class="text-white/80 text-sm">Artesã</span>
          </div>
        </div>

        <!-- CTA Button -->
        <button class="hero-cta btn-primary" style="opacity: 0" @click="scrollToAbout">
          <span>Conheça seu trabalho</span>
          <ArrowDown class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="text-white/40 text-xs">Role para explorar</span>
      <ArrowDown class="w-5 h-5 text-white/40 animate-float" />
    </div>
  </section>
</template>
