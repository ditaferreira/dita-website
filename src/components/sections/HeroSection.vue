<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Leaf, Heart, ArrowDown, Sparkles, Star } from 'lucide-vue-next'
import { SectionBackground } from '@/components/ui'
import { nanciData, getImagePath } from '@/data/nanci-data'

const loaded = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 20
  mouseY.value = ((e.clientY - rect.top) / rect.height - 0.5) * 20
}

onMounted(() => {
  setTimeout(() => loaded.value = true, 100)
})

const scrollToAbout = () => {
  document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section 
    id="hero" 
    class="section min-h-screen flex items-center justify-center relative"
    @mousemove="handleMouseMove"
  >
    <SectionBackground
      image-path="/nanci-dita-full.webp"
      :opacity="0.35"
      :blur="3"
      gradient="vignette"
    />

    <!-- Ambient glow effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        class="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        :style="{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
          left: '10%',
          top: '20%',
          transform: `translate(${mouseX * 0.5}px, ${mouseY * 0.5}px)`
        }"
      />
      <div 
        class="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
        :style="{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
          right: '10%',
          bottom: '20%',
          transform: `translate(${-mouseX * 0.3}px, ${-mouseY * 0.3}px)`
        }"
      />
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 6" :key="i" 
        class="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-float"
        :style="{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${4 + i * 0.5}s`
        }"
      />
    </div>

    <div class="max-w-4xl mx-auto text-center relative z-10 px-4">
      <div 
        class="glass-glow rounded-[2rem] p-8 md:p-12 lg:p-14 border border-emerald-500/10 animate-border-glow"
        :style="{
          transform: `perspective(1000px) rotateX(${-mouseY * 0.02}deg) rotateY(${mouseX * 0.02}deg)`
        }"
      >
        <!-- Badge -->
        <div 
          class="hero-item inline-flex items-center gap-2.5 glass-light rounded-full px-5 py-2.5 mb-8 border border-emerald-500/20"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 0ms"
        >
          <Leaf class="w-4 h-4 text-emerald-400" />
          <span class="text-white/80 text-sm font-medium tracking-wide">Águas da Prata • Cascata</span>
          <Star class="w-3 h-3 text-amber-400 fill-amber-400" />
        </div>

        <!-- Title -->
        <h1 
          class="hero-item text-fluid-5xl font-bold mb-4 tracking-tight"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 100ms"
        >
          <span class="text-gradient">{{ nanciData.personal.title }}</span>
        </h1>

        <!-- Subtitle -->
        <div 
          class="hero-item flex items-center justify-center gap-2.5 mb-5"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 200ms"
        >
          <Heart class="w-5 h-5 text-rose-400 animate-pulse" />
          <p class="text-fluid-lg text-white/90">
            <span class="text-emerald-400 font-semibold">"{{ nanciData.personal.nickname }}"</span>
          </p>
        </div>

        <!-- Age Badge -->
        <div 
          class="hero-item inline-block glass-light rounded-full px-5 py-2 mb-6 border border-amber-500/20"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 300ms"
        >
          <span class="text-white/80 text-sm">
            <span class="font-bold text-amber-400 text-lg">{{ nanciData.personal.age }}</span> 
            <span class="ml-1">anos de sabedoria ancestral</span>
          </span>
        </div>

        <!-- Description -->
        <p 
          class="hero-item text-fluid-base text-white/60 max-w-xl mx-auto mb-8 leading-relaxed"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 400ms"
        >
          "{{ nanciData.personal.quote }}"
        </p>

        <!-- Profile Image -->
        <div 
          class="hero-item relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-10"
          :class="loaded ? 'animate-in-scale' : 'opacity-0'"
          style="--delay: 500ms"
        >
          <!-- Animated rings -->
          <div class="absolute -inset-6 rounded-full border border-emerald-500/20 animate-pulse-glow" />
          <div class="absolute -inset-10 rounded-full border border-cyan-500/10 animate-pulse-glow" style="animation-delay: 0.5s" />
          
          <!-- Glow effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-emerald-500/25 via-cyan-500/20 to-purple-500/25 rounded-full blur-2xl animate-pulse-glow" />
          
          <!-- Image container -->
          <div class="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            <img
              :src="getImagePath('/dita-nobackground.png')"
              :alt="nanciData.personal.name"
              class="w-full h-full object-contain scale-[0.85] drop-shadow-2xl"
            />
          </div>
        </div>

        <!-- Info Pills -->
        <div 
          class="hero-item flex flex-wrap justify-center gap-3 mb-10"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 600ms"
        >
          <div v-for="expertise in nanciData.expertise" :key="expertise.title" class="flex items-center gap-2 glass-light rounded-full px-4 py-2 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors cursor-default">
            <Leaf class="w-4 h-4 text-emerald-400" />
            <span class="text-white/80 text-sm font-medium">{{ expertise.title }}</span>
          </div>
          <div class="flex items-center gap-2 glass-light rounded-full px-4 py-2 border border-rose-500/10 hover:border-rose-500/30 transition-colors cursor-default">
            <Heart class="w-4 h-4 text-rose-400" />
            <span class="text-white/80 text-sm font-medium">Líder Comunitária</span>
          </div>
        </div>

        <!-- CTA Button -->
        <button 
          class="hero-item btn-primary group"
          :class="loaded ? 'animate-in' : 'opacity-0'"
          style="--delay: 700ms"
          @click="scrollToAbout"
        >
          <span>Conheça seu trabalho</span>
          <ArrowDown class="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
      <span class="text-white/30 text-xs tracking-widest uppercase">Role para explorar</span>
      <div class="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
        <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-item {
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay);
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.hero-item:not(.animate-in):not(.animate-in-scale) {
  transform: translateY(30px);
}

.animate-in-scale {
  opacity: 1 !important;
  transform: scale(1) !important;
}

.hero-item:not(.animate-in-scale):not(.animate-in) {
  transform: scale(0.9);
}
</style>
