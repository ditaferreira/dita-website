<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Leaf, Heart, ArrowDown, Sparkles } from 'lucide-vue-next'
import { SectionBackground } from '@/components/ui'
import { nanciData, getImagePath } from '@/data/nanci-data'

const loaded = ref(false)
onMounted(() => setTimeout(() => loaded.value = true, 100))

const scrollToAbout = () => {
  document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="section min-h-screen flex items-center justify-center">
    <SectionBackground
      image-path="/nanci-dita-full.webp"
      :opacity="0.4"
      :blur="2"
      gradient="vignette"
    />

    <div class="max-w-4xl mx-auto text-center relative z-10 px-4">
      <div class="glass rounded-3xl p-6 md:p-10 lg:p-12 border border-white/10">
        <!-- Badge -->
        <div 
          class="hero-item inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 mb-6"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 0ms"
        >
          <Leaf class="w-4 h-4 text-emerald-400" />
          <span class="text-white/80 text-sm font-medium">Mata Atlântica • Cascata</span>
        </div>

        <!-- Title -->
        <h1 
          class="hero-item text-fluid-5xl font-bold mb-3"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 100ms"
        >
          <span class="text-gradient">{{ nanciData.personal.name }}</span>
        </h1>

        <!-- Subtitle -->
        <div 
          class="hero-item flex items-center justify-center gap-2 mb-4"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 200ms"
        >
          <Heart class="w-5 h-5 text-rose-400" />
          <p class="text-fluid-lg text-white/90">
            Carinhosamente conhecida como
            <span class="text-emerald-400 font-semibold">"{{ nanciData.personal.nickname }}"</span>
          </p>
        </div>

        <!-- Age Badge -->
        <div 
          class="hero-item inline-block glass-light rounded-full px-4 py-1.5 mb-5"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 300ms"
        >
          <span class="text-white/80 text-sm">
            <span class="font-bold text-emerald-400">{{ nanciData.personal.age }}</span> anos de sabedoria ancestral
          </span>
        </div>

        <!-- Description -->
        <p 
          class="hero-item text-fluid-base text-white/70 max-w-xl mx-auto mb-6 leading-relaxed"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 400ms"
        >
          {{ nanciData.personal.title }}
        </p>

        <!-- Profile Image -->
        <div 
          class="hero-item relative mx-auto w-44 h-44 md:w-52 md:h-52 mb-8"
          :class="loaded ? 'animate-in-scale' : 'opacity-0'"
          style="--delay: 500ms"
        >
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
        <div 
          class="hero-item flex flex-wrap justify-center gap-2 mb-8"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 600ms"
        >
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
        <button 
          class="hero-item btn-primary"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 700ms"
          @click="scrollToAbout"
        >
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

<style scoped>
.hero-item {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay);
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.hero-item:not(.animate-in):not(.animate-in-scale) {
  transform: translateY(20px);
}

.animate-in-scale {
  opacity: 1 !important;
  transform: scale(1) !important;
}

.hero-item:not(.animate-in-scale):not(.animate-in) {
  transform: scale(0.9);
}
</style>
