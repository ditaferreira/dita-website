<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import anime, { type AnimeInstance } from 'animejs'
import { useDevice } from '@/composables'
import { galleryImages } from '@/data/nanci-data'

interface Props {
  images?: { src: string; alt: string }[]
  segments?: number
  radius?: number
  autoRotate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  images: () => galleryImages.slice(0, 60),
  segments: 30,
  radius: 500,
  autoRotate: true,
})

const { isMobile, isTouch } = useDevice()

const containerRef = ref<HTMLElement | null>(null)
const sphereRef = ref<HTMLElement | null>(null)
const selectedImage = ref<string | null>(null)

const rotation = ref({ x: 0, y: 0 })
const isDragging = ref(false)
const startPos = ref({ x: 0, y: 0 })
const startRot = ref({ x: 0, y: 0 })

let autoRotateAnim: AnimeInstance | null = null

const items = computed(() => {
  const cols = props.segments
  const positions: { x: number; y: number; src: string; alt: string }[] = []
  
  let imgIndex = 0
  for (let col = 0; col < cols; col++) {
    const yOffsets = col % 2 === 0 ? [-2, -1, 0, 1, 2] : [-1.5, -0.5, 0.5, 1.5, 2.5]
    for (const yOff of yOffsets) {
      if (imgIndex < props.images.length) {
        positions.push({
          x: col - cols / 2,
          y: yOff,
          src: props.images[imgIndex].src,
          alt: props.images[imgIndex].alt,
        })
        imgIndex++
      }
    }
  }
  return positions
})

const getItemStyle = (item: { x: number; y: number }) => {
  const unit = 360 / props.segments / 2
  const rotateY = unit * item.x
  const rotateX = unit * item.y
  
  return {
    transform: `rotateY(${rotateY}deg) rotateX(${-rotateX}deg) translateZ(${props.radius}px)`,
  }
}

const sphereStyle = computed(() => ({
  transform: `translateZ(-${props.radius}px) rotateX(${rotation.value.x}deg) rotateY(${rotation.value.y}deg)`,
}))

const onPointerDown = (e: PointerEvent) => {
  if (selectedImage.value) return
  
  isDragging.value = true
  startPos.value = { x: e.clientX, y: e.clientY }
  startRot.value = { ...rotation.value }
  
  if (autoRotateAnim) autoRotateAnim.pause()
}

const onPointerMove = (e: PointerEvent) => {
  if (!isDragging.value) return
  
  const dx = e.clientX - startPos.value.x
  const dy = e.clientY - startPos.value.y
  const sensitivity = isMobile.value ? 0.3 : 0.2
  
  rotation.value = {
    x: Math.max(-15, Math.min(15, startRot.value.x - dy * sensitivity)),
    y: startRot.value.y + dx * sensitivity,
  }
}

const onPointerUp = () => {
  isDragging.value = false
  if (props.autoRotate && !selectedImage.value) startAutoRotate()
}

const startAutoRotate = () => {
  autoRotateAnim = anime({
    targets: rotation.value,
    y: rotation.value.y + 360,
    duration: 60000,
    easing: 'linear',
    loop: true,
  })
}

const openImage = (src: string) => {
  selectedImage.value = src
  document.body.style.overflow = 'hidden'
  if (autoRotateAnim) autoRotateAnim.pause()
}

const closeImage = () => {
  selectedImage.value = null
  document.body.style.overflow = ''
  if (props.autoRotate) startAutoRotate()
}

onMounted(() => {
  if (props.autoRotate) setTimeout(startAutoRotate, 1000)
  
  anime({
    targets: '.dome-item',
    opacity: [0, 1],
    scale: [0.5, 1],
    delay: anime.stagger(20, { from: 'center' }),
    duration: 800,
    easing: 'easeOutCubic',
  })
})

onUnmounted(() => {
  if (autoRotateAnim) autoRotateAnim.pause()
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    ref="containerRef"
    class="dome-gallery relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
    :style="{ perspective: `${props.radius * 2}px` }"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointerleave="onPointerUp"
  >
    <div ref="sphereRef" class="sphere absolute inset-0 m-auto" :style="sphereStyle">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="dome-item absolute inset-0 m-auto cursor-pointer"
        :style="{
          ...getItemStyle(item),
          width: isMobile ? '80px' : '120px',
          height: isMobile ? '80px' : '120px',
        }"
        @click.stop="openImage(item.src)"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-full h-full object-cover rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
          loading="lazy"
          draggable="false"
        />
      </div>
    </div>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 glass-light rounded-full px-4 py-2 pointer-events-none">
      <p class="text-white/60 text-xs">
        {{ isTouch ? 'Arraste para girar' : 'Clique e arraste para girar' }}
      </p>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          @click="closeImage"
        >
          <img
            :src="selectedImage"
            alt="Imagem ampliada"
            class="max-w-full max-h-full object-contain rounded-xl"
            @click.stop
          />
          <button
            class="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl hover:bg-white/20 transition-colors"
            @click="closeImage"
          >
            ✕
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.dome-gallery {
  touch-action: none;
  user-select: none;
}

.sphere {
  transform-style: preserve-3d;
  will-change: transform;
}

.dome-item {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
