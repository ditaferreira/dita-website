<script setup lang="ts">
import { ref, onMounted } from 'vue'
import anime from 'animejs'

interface Props {
  hover?: boolean
  animate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hover: true,
  animate: true,
})

const cardRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (props.animate && cardRef.value) {
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
    observer.observe(cardRef.value)
  }
})
</script>

<template>
  <div
    ref="cardRef"
    class="card"
    :class="{ 'hover:border-emerald-500/20 hover:-translate-y-1': hover }"
    :style="animate ? { opacity: 0 } : {}"
  >
    <slot />
  </div>
</template>
