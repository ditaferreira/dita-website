<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  title: string
  subtitle?: string
  badge?: string
  center?: boolean
}

defineProps<Props>()

const headerRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  if (headerRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
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
    class="mb-12 md:mb-16 transition-all duration-1000"
    :class="[
      center ? 'text-center' : '',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
  >
    <!-- Badge -->
    <div
      v-if="badge"
      class="inline-flex items-center gap-2.5 glass-leaf rounded-full px-5 py-2 mb-6 border border-emerald-500/20 transition-all duration-700 delay-100"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      <slot name="badge-icon" />
      <span class="text-emerald-300 text-sm font-medium tracking-wide">{{ badge }}</span>
    </div>

    <!-- Title -->
    <h2 
      class="text-fluid-3xl md:text-fluid-4xl font-bold text-gradient mb-4 tracking-tight transition-all duration-700 delay-200"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      {{ title }}
    </h2>

    <!-- Divider -->
    <div
      v-if="center"
      class="w-20 h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-cyan-500 mx-auto mb-6 rounded-full transition-all duration-700 delay-300"
      :class="isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
    />

    <!-- Subtitle -->
    <p 
      v-if="subtitle" 
      class="text-white/50 text-fluid-base max-w-2xl leading-relaxed transition-all duration-700 delay-400"
      :class="[
        center ? 'mx-auto' : '',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
