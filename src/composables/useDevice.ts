import { ref, computed, onMounted, onUnmounted } from 'vue'

type DeviceType = 'mobile' | 'tablet' | 'desktop'
type Orientation = 'portrait' | 'landscape'

interface DeviceInfo {
  type: DeviceType
  orientation: Orientation
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isTouch: boolean
  width: number
  height: number
}

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
}

export function useDevice() {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const height = ref(typeof window !== 'undefined' ? window.innerHeight : 768)

  const type = computed<DeviceType>(() => {
    if (width.value < BREAKPOINTS.mobile) return 'mobile'
    if (width.value < BREAKPOINTS.tablet) return 'tablet'
    return 'desktop'
  })

  const orientation = computed<Orientation>(() =>
    width.value > height.value ? 'landscape' : 'portrait'
  )

  const isMobile = computed(() => type.value === 'mobile')
  const isTablet = computed(() => type.value === 'tablet')
  const isDesktop = computed(() => type.value === 'desktop')
  const isTouch = computed(() => 
    typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  )

  const device = computed<DeviceInfo>(() => ({
    type: type.value,
    orientation: orientation.value,
    isMobile: isMobile.value,
    isTablet: isTablet.value,
    isDesktop: isDesktop.value,
    isTouch: isTouch.value,
    width: width.value,
    height: height.value,
  }))

  let resizeTimeout: ReturnType<typeof setTimeout>

  const handleResize = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      width.value = window.innerWidth
      height.value = window.innerHeight
    }, 100)
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('orientationchange', handleResize)
    clearTimeout(resizeTimeout)
  })

  return {
    device,
    type,
    orientation,
    isMobile,
    isTablet,
    isDesktop,
    isTouch,
    width,
    height,
  }
}
