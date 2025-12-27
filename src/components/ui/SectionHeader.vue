<script setup lang="ts">
import { ref, onMounted } from 'vue'
import anime from 'animejs'

interface Props {
  title: string
  subtitle?: string
  badge?: string
  center?: boolean
}

defineProps<Props>()

const headerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (headerRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
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
    observer.observe(headerRef.value)
  }
})
</script>

<template>
  <div
    ref="headerRef"
    class="mb-10 md:mb-12"
    :class="center ? 'text-center' : ''"
    style="opacity: 0"
  >
    <!-- Badge -->
    <div
      v-if="badge"
      class="inline-flex items-center gap-2 glass-leaf rounded-full px-4 py-1.5 mb-5 border border-emerald-500/20"
    >
      <slot name="badge-icon" />
      <span class="text-emerald-300 text-sm font-medium">{{ badge }}</span>
    </div>

    <!-- Title -->
    <h2 class="text-fluid-3xl md:text-fluid-4xl font-bold text-gradient mb-3">
      {{ title }}
    </h2>

    <!-- Divider -->
    <div
      v-if="center"
      class="w-16 h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 mx-auto mb-5 rounded-full"
    />

    <!-- Subtitle -->
    <p v-if="subtitle" class="text-white/60 text-fluid-base max-w-2xl leading-relaxed" :class="center ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>
