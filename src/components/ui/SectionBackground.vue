<script setup lang="ts">
import { computed } from 'vue'
import { getImagePath } from '@/data/nanci-data'

interface Props {
  imagePath: string
  opacity?: number
  blur?: number
  gradient?: 'dark' | 'subtle' | 'vignette' | 'none'
}

const props = withDefaults(defineProps<Props>(), {
  opacity: 0.5,
  blur: 0,
  gradient: 'subtle',
})

const gradientStyle = computed(() => {
  switch (props.gradient) {
    case 'dark':
      return 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
    case 'subtle':
      return 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)'
    case 'vignette':
      return 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)'
    default:
      return 'none'
  }
})

const imageStyle = computed(() => ({
  opacity: props.opacity,
  filter: props.blur > 0 ? `blur(${props.blur}px)` : 'none',
}))
</script>

<template>
  <div class="absolute inset-0 overflow-hidden -z-10">
    <img
      :src="getImagePath(imagePath)"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
      :style="imageStyle"
      loading="lazy"
      decoding="async"
    />
    <div
      v-if="gradient !== 'none'"
      class="absolute inset-0"
      :style="{ background: gradientStyle }"
    />
  </div>
</template>
