import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import anime from 'animejs'

interface AnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation(elementRef: Ref<HTMLElement | null>, options: AnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutCubic',
            })
            if (once) observer?.disconnect()
          } else if (!once) {
            isVisible.value = false
          }
        })
      },
      { threshold, rootMargin }
    )

    if (elementRef.value) observer.observe(elementRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { isVisible }
}

export function useAnimation() {
  const fadeIn = (el: HTMLElement, delay = 0) => {
    anime({
      targets: el,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay,
      easing: 'easeOutCubic',
    })
  }

  const scaleIn = (el: HTMLElement, delay = 0) => {
    anime({
      targets: el,
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 600,
      delay,
      easing: 'easeOutCubic',
    })
  }

  return { fadeIn, scaleIn }
}

export function useParallax(speed = 0.5) {
  const offset = ref(0)

  const handleScroll = () => {
    offset.value = window.scrollY * speed
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { offset }
}

export function useMouseParallax(sensitivity = 0.02) {
  const position = ref({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    position.value = {
      x: (e.clientX - centerX) * sensitivity,
      y: (e.clientY - centerY) * sensitivity,
    }
  }

  onMounted(() => window.addEventListener('mousemove', handleMouseMove, { passive: true }))
  onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))

  return { position }
}

export const animations = {
  fadeUp: {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: 'easeOutCubic',
  },
  fadeIn: {
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutCubic',
  },
  scaleIn: {
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 600,
    easing: 'easeOutCubic',
  },
  slideLeft: {
    opacity: [0, 1],
    translateX: [-40, 0],
    duration: 700,
    easing: 'easeOutCubic',
  },
  slideRight: {
    opacity: [0, 1],
    translateX: [40, 0],
    duration: 700,
    easing: 'easeOutCubic',
  },
  staggerFadeUp: (delay = 100) => ({
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(delay),
    duration: 700,
    easing: 'easeOutCubic',
  }),
  staggerScale: (delay = 50) => ({
    opacity: [0, 1],
    scale: [0.8, 1],
    delay: anime.stagger(delay, { from: 'center' }),
    duration: 500,
    easing: 'easeOutCubic',
  }),
}
