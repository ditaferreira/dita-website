<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Home, User, Briefcase, Building2, Instagram, Camera, Menu, X, Crown, Megaphone } from 'lucide-vue-next'
import { useDevice } from '@/composables'
import { getImagePath } from '@/data/nanci-data'

const { isMobile } = useDevice()
const scrolled = ref(false)
const scrollProgress = ref(0)
const activeSection = ref('hero')
const mobileMenuOpen = ref(false)

const navItems = [
  { href: '#hero', label: 'Início', icon: Home },
  { href: '#sobre', label: 'Sobre', icon: User },
  { href: '#lideranca', label: 'Liderança', icon: Crown },
  { href: '#marcha', label: 'Marcha 2025', icon: Megaphone },
  { href: '#galeria', label: 'Galeria', icon: Camera },
  { href: '#projetos', label: 'Projetos', icon: Briefcase },
  { href: '#organizacoes', label: 'Organizações', icon: Building2 },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = Math.min((window.scrollY / docHeight) * 100, 100)
  
  const sections = navItems.map(item => item.href.slice(1))
  for (const section of sections.reverse()) {
    const el = document.getElementById(section)
    if (el && window.scrollY >= el.offsetTop - 200) {
      activeSection.value = section
      break
    }
  }
}

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (!el) return
  
  // Use View Transitions API if available
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      el.scrollIntoView({ behavior: 'smooth' })
    })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}

const isActive = (href: string) => activeSection.value === href.slice(1)

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Desktop Header -->
  <header
    v-if="!isMobile"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass py-3' : 'py-4 bg-transparent'"
  >
    <div class="progress-bar" :style="{ width: `${scrollProgress}%` }" />
    
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-3 group" @click.prevent="scrollTo('#hero')">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-0.5 group-hover:scale-105 transition-transform">
          <div class="w-full h-full rounded-full overflow-hidden bg-forest-950">
            <img :src="getImagePath('/dita_logo.png')" alt="Logo" class="w-full h-full object-cover" />
          </div>
        </div>
        <span class="font-bold text-lg">
          <span class="text-white">Nanci</span>
          <span class="text-emerald-400"> Ferreira</span>
        </span>
      </a>

      <nav class="flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="nav-link"
          :class="isActive(item.href) ? 'nav-link-active' : ''"
          @click.prevent="scrollTo(item.href)"
        >
          {{ item.label }}
          <span v-if="isActive(item.href)" class="nav-indicator" />
        </a>

        <a
          href="https://www.instagram.com/dita22067/"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-2 w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Instagram class="w-4 h-4 text-white" />
        </a>
      </nav>
    </div>
  </header>

  <!-- Mobile Header -->
  <header v-if="isMobile" class="fixed top-0 left-0 right-0 z-50 glass py-3 px-4 safe-top">
    <div class="flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-2" @click.prevent="scrollTo('#hero')">
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 p-0.5">
          <div class="w-full h-full rounded-full overflow-hidden bg-forest-950">
            <img :src="getImagePath('/dita_logo.png')" alt="Logo" class="w-full h-full object-cover" />
          </div>
        </div>
        <span class="font-bold text-sm">
          <span class="text-white">Nanci</span>
          <span class="text-emerald-400"> Ferreira</span>
        </span>
      </a>

      <button
        class="w-10 h-10 rounded-full glass-light flex items-center justify-center"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Menu"
      >
        <Menu v-if="!mobileMenuOpen" class="w-5 h-5 text-white" />
        <X v-else class="w-5 h-5 text-white" />
      </button>
    </div>

    <div class="progress-bar" :style="{ width: `${scrollProgress}%` }" />
  </header>

  <!-- Mobile Menu Overlay -->
  <Transition name="menu">
    <div
      v-if="isMobile && mobileMenuOpen"
      class="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-20 px-6"
    >
      <nav class="flex flex-col gap-2">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="flex items-center gap-4 px-4 py-4 rounded-xl transition-all"
          :class="isActive(item.href) ? 'bg-emerald-500/20 text-emerald-400' : 'text-white/70 hover:bg-white/5'"
          @click.prevent="scrollTo(item.href)"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span class="font-medium">{{ item.label }}</span>
        </a>

        <a
          href="https://www.instagram.com/dita22067/"
          target="_blank"
          class="flex items-center gap-4 px-4 py-4 rounded-xl text-pink-400 hover:bg-white/5 transition-all mt-4"
        >
          <Instagram class="w-5 h-5" />
          <span class="font-medium">Instagram</span>
        </a>
      </nav>
    </div>
  </Transition>

  <!-- Mobile Bottom Navigation -->
  <nav v-if="isMobile" class="fixed bottom-0 left-0 right-0 z-50 glass safe-bottom border-t border-emerald-500/10">
    <div class="flex items-center justify-around py-2 px-1">
      <a
        v-for="item in navItems.slice(0, 5)"
        :key="item.href"
        :href="item.href"
        class="flex flex-col items-center gap-0.5 py-2 px-2 rounded-xl transition-all"
        :class="isActive(item.href) ? 'text-emerald-400 bg-emerald-500/10' : 'text-white/60'"
        @click.prevent="scrollTo(item.href)"
      >
        <component :is="item.icon" class="w-5 h-5" />
        <span class="text-[9px] font-medium">{{ item.label }}</span>
      </a>

      <a
        href="https://www.instagram.com/dita22067/"
        target="_blank"
        class="flex flex-col items-center gap-0.5 py-2 px-2 rounded-xl text-pink-400"
      >
        <Instagram class="w-5 h-5" />
        <span class="text-[9px] font-medium">Social</span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.progress-bar {
  @apply absolute bottom-0 left-0 h-0.5 bg-emerald-500/60;
  transition: width 0.15s ease-out;
}

.nav-link {
  @apply relative px-3 py-2 rounded-full text-sm font-medium text-white/70 transition-all duration-300;
}

.nav-link:hover {
  @apply text-white bg-white/5;
}

.nav-link-active {
  @apply text-emerald-400 bg-emerald-500/10;
}

.nav-indicator {
  @apply absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
