<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnimation } from '@/composables'

interface Props {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  gradient?: boolean
  delay?: number
  animate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  gradient: false,
  delay: 0,
  animate: true,
})

const textRef = ref<HTMLElement | null>(null)
const { fadeIn } = useAnimation()

onMounted(() => {
  if (props.animate && textRef.value) {
    fadeIn(textRef.value, props.delay)
  }
})
</script>

<template>
  <component
    :is="tag"
    ref="textRef"
    :class="{ 'text-gradient': gradient }"
    :style="animate ? { opacity: 0 } : {}"
  >
    <slot>{{ text }}</slot>
  </component>
</template>
