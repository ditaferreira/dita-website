<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useSwipe, onKeyStroke } from '@vueuse/core'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-vue-next'

interface GalleryImage {
  src: string
  alt: string
  category?: string
}

const props = defineProps<{
  images: GalleryImage[]
  categories?: string[]
}>()

const activeCategory = ref('Todos')
const selectedIndex = ref<number | null>(null)
const visibleCount = ref(20)
const lightboxRef = ref<HTMLElement | null>(null)
const loadedImages = ref<Set<number>>(new Set())

const filteredImages = computed(() => {
  if (activeCategory.value === 'Todos') return props.images
  return props.images.filter((img) => img.category === activeCategory.value)
})

const displayedImages = computed(() => filteredImages.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < filteredImages.value.length)
const currentImage = computed(() => selectedIndex.value !== null ? displayedImages.value[selectedIndex.value] : null)

const setCategory = (cat: string) => {
  activeCategory.value = cat
  visibleCount.value = 20
}

const openLightbox = (index: number) => {
  selectedIndex.value = index
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedIndex.value = null
  document.body.style.overflow = ''
}

const navigate = (dir: number) => {
  if (selectedIndex.value === null) return
  const next = selectedIndex.value + dir
  if (next >= 0 && next < displayedImages.value.length) {
    selectedIndex.value = next
  }
}

const onImageLoad = (index: number) => {
  loadedImages.value.add(index)
}

// Swipe gestures
const { direction } = useSwipe(lightboxRef, {
  onSwipeEnd() {
    if (direction.value === 'left') navigate(1)
    if (direction.value === 'right') navigate(-1)
  }
})

// Keyboard navigation
onKeyStroke('Escape', closeLightbox)
onKeyStroke('ArrowRight', () => navigate(1))
onKeyStroke('ArrowLeft', () => navigate(-1))

watch(activeCategory, () => {
  visibleCount.value = 20
  loadedImages.value.clear()
})
</script>

<template>
  <div>
    <!-- Category Filter -->
    <div class="flex flex-wrap gap-2 mb-8 justify-center">
      <button
        v-for="cat in categories"
        :key="cat"
        class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
        :class="activeCategory === cat 
          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' 
          : 'glass-light text-white/70 hover:text-white hover:bg-white/10'"
        @click="setCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      <div
        v-for="(image, index) in displayedImages"
        :key="`${image.src}-${index}`"
        class="gallery-item aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
        :style="{ '--delay': (index % 20) * 30 + 'ms' }"
        @click="openLightbox(index)"
      >
        <div v-if="!loadedImages.has(index)" class="absolute inset-0 bg-white/5 animate-pulse" />
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          :class="loadedImages.has(index) ? 'opacity-100' : 'opacity-0'"
          loading="lazy"
          decoding="async"
          @load="onImageLoad(index)"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <ZoomIn class="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>

    <!-- Load More -->
    <div v-if="hasMore" class="mt-10 text-center">
      <button 
        class="btn-outline group"
        @click="visibleCount += 20"
      >
        <span>Ver mais fotos</span>
        <span class="text-emerald-400">({{ filteredImages.length - visibleCount }})</span>
      </button>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="selectedIndex !== null && currentImage"
          ref="lightboxRef"
          class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center touch-pan-y"
          @click.self="closeLightbox"
        >
          <!-- Navigation -->
          <button
            v-if="selectedIndex > 0"
            class="nav-btn left-2 md:left-4"
            @click="navigate(-1)"
          >
            <ChevronLeft class="w-6 h-6" />
          </button>
          
          <button
            v-if="selectedIndex < displayedImages.length - 1"
            class="nav-btn right-2 md:right-4"
            @click="navigate(1)"
          >
            <ChevronRight class="w-6 h-6" />
          </button>

          <!-- Image -->
          <div class="relative max-w-[95vw] max-h-[85vh]">
            <img
              :src="currentImage.src"
              :alt="currentImage.alt"
              class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          <!-- Close -->
          <button
            class="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            @click="closeLightbox"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Counter -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 glass-light rounded-full px-4 py-2 text-white/80 text-sm">
            {{ selectedIndex + 1 }} / {{ displayedImages.length }}
          </div>

          <!-- Swipe hint (mobile) -->
          <div class="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40 text-xs md:hidden">
            Deslize para navegar
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.gallery-item {
  animation: fadeSlideIn 0.5s ease-out backwards;
  animation-delay: var(--delay);
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.nav-btn {
  @apply absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all z-10;
}

.nav-btn:hover {
  transform: translateY(-50%) scale(1.1);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from img,
.lightbox-leave-to img {
  transform: scale(0.9);
}
</style>
