import { useEffect, useMemo, useRef, useCallback } from 'react'
import { useGesture } from '@use-gesture/react'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

type ImageItem = string | { src: string; alt?: string }

type DomeGalleryProps = {
  images?: ImageItem[]
  fit?: number
  fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height'
  minRadius?: number
  maxRadius?: number
  padFactor?: number
  maxVerticalRotationDeg?: number
  dragSensitivity?: number
  enlargeTransitionMs?: number
  segments?: number
  dragDampening?: number
  openedImageWidth?: string
  openedImageHeight?: string
  imageBorderRadius?: string
  openedImageBorderRadius?: string
  grayscale?: boolean
}

type ItemDef = {
  src: string
  alt: string
  x: number
  y: number
  sizeX: number
  sizeY: number
}

const DEFAULT_IMAGES: ImageItem[] = [
  { src: getImagePath('/dita (1).jpg'), alt: 'Dita photo 1' },
  { src: getImagePath('/dita (10).jpg'), alt: 'Dita photo 10' },
  { src: getImagePath('/dita (11).jpg'), alt: 'Dita photo 11' },
  { src: getImagePath('/dita (12).jpg'), alt: 'Dita photo 12' },
  { src: getImagePath('/dita (13).jpg'), alt: 'Dita photo 13' },
  { src: getImagePath('/dita (14).jpg'), alt: 'Dita photo 14' },
  { src: getImagePath('/dita (15).jpg'), alt: 'Dita photo 15' },
  { src: getImagePath('/dita (16).jpg'), alt: 'Dita photo 16' },
  { src: getImagePath('/dita (17).jpg'), alt: 'Dita photo 17' },
  { src: getImagePath('/dita (18).jpg'), alt: 'Dita photo 18' },
  { src: getImagePath('/dita (19).jpg'), alt: 'Dita photo 19' },
  { src: getImagePath('/dita (2).jpg'), alt: 'Dita photo 2' },
  { src: getImagePath('/dita (20).jpg'), alt: 'Dita photo 20' },
  { src: getImagePath('/dita (21).jpg'), alt: 'Dita photo 21' },
  { src: getImagePath('/dita (22).jpg'), alt: 'Dita photo 22' },
  { src: getImagePath('/dita (23).jpg'), alt: 'Dita photo 23' },
  { src: getImagePath('/dita (24).jpg'), alt: 'Dita photo 24' },
  { src: getImagePath('/dita (25).jpg'), alt: 'Dita photo 25' },
  { src: getImagePath('/dita (26).jpg'), alt: 'Dita photo 26' },
  { src: getImagePath('/dita (27).jpg'), alt: 'Dita photo 27' },
  { src: getImagePath('/dita (28).jpg'), alt: 'Dita photo 28' },
  { src: getImagePath('/dita (29).jpg'), alt: 'Dita photo 29' },
  { src: getImagePath('/dita (3).jpg'), alt: 'Dita photo 3' },
  { src: getImagePath('/dita (30).jpg'), alt: 'Dita photo 30' },
  { src: getImagePath('/dita (31).jpg'), alt: 'Dita photo 31' },
  { src: getImagePath('/dita (32).jpg'), alt: 'Dita photo 32' },
  { src: getImagePath('/dita (33).jpg'), alt: 'Dita photo 33' },
  { src: getImagePath('/dita (34).jpg'), alt: 'Dita photo 34' },
  { src: getImagePath('/dita (35).jpg'), alt: 'Dita photo 35' },
  { src: getImagePath('/dita (36).jpg'), alt: 'Dita photo 36' },
  { src: getImagePath('/dita (37).jpg'), alt: 'Dita photo 37' },
  { src: getImagePath('/dita (38).jpg'), alt: 'Dita photo 38' },
  { src: getImagePath('/dita (39).jpg'), alt: 'Dita photo 39' },
  { src: getImagePath('/dita (4).jpg'), alt: 'Dita photo 4' },
  { src: getImagePath('/dita (40).jpg'), alt: 'Dita photo 40' },
  { src: getImagePath('/dita (41).jpg'), alt: 'Dita photo 41' },
  { src: getImagePath('/dita (42).jpg'), alt: 'Dita photo 42' },
  { src: getImagePath('/dita (43).jpg'), alt: 'Dita photo 43' },
  { src: getImagePath('/dita (44).jpg'), alt: 'Dita photo 44' },
  { src: getImagePath('/dita (45).jpg'), alt: 'Dita photo 45' },
  { src: getImagePath('/dita (46).jpg'), alt: 'Dita photo 46' },
  { src: getImagePath('/dita (47).jpg'), alt: 'Dita photo 47' },
  { src: getImagePath('/dita (48).jpg'), alt: 'Dita photo 48' },
  { src: getImagePath('/dita (49).jpg'), alt: 'Dita photo 49' },
  { src: getImagePath('/dita (5).jpg'), alt: 'Dita photo 5' },
  { src: getImagePath('/dita (50).jpg'), alt: 'Dita photo 50' },
  { src: getImagePath('/dita (51).jpg'), alt: 'Dita photo 51' },
  { src: getImagePath('/dita (52).jpg'), alt: 'Dita photo 52' },
  { src: getImagePath('/dita (53).jpg'), alt: 'Dita photo 53' },
  { src: getImagePath('/dita (56).jpg'), alt: 'Dita photo 56' },
  { src: getImagePath('/dita (57).jpg'), alt: 'Dita photo 57' },
  { src: getImagePath('/dita (58).jpg'), alt: 'Dita photo 58' },
  { src: getImagePath('/dita (59).jpg'), alt: 'Dita photo 59' },
  { src: getImagePath('/dita (6).jpg'), alt: 'Dita photo 6' },
  { src: getImagePath('/dita (60).jpg'), alt: 'Dita photo 60' },
  { src: getImagePath('/dita (61).jpg'), alt: 'Dita photo 61' },
  { src: getImagePath('/dita (62).jpg'), alt: 'Dita photo 62' },
  { src: getImagePath('/dita (63).jpg'), alt: 'Dita photo 63' },
  { src: getImagePath('/dita (64).jpg'), alt: 'Dita photo 64' },
  { src: getImagePath('/dita (65).jpg'), alt: 'Dita photo 65' },
  { src: getImagePath('/dita (66).jpg'), alt: 'Dita photo 66' },
  { src: getImagePath('/dita (67).jpg'), alt: 'Dita photo 67' },
  { src: getImagePath('/dita (68).jpg'), alt: 'Dita photo 68' },
  { src: getImagePath('/dita (69).jpg'), alt: 'Dita photo 69' },
  { src: getImagePath('/dita (7).jpg'), alt: 'Dita photo 7' },
  { src: getImagePath('/dita (70).jpg'), alt: 'Dita photo 70' },
  { src: getImagePath('/dita (71).jpg'), alt: 'Dita photo 71' },
  { src: getImagePath('/dita (72).jpg'), alt: 'Dita photo 72' },
  { src: getImagePath('/dita (73).jpg'), alt: 'Dita photo 73' },
  { src: getImagePath('/dita (74).jpg'), alt: 'Dita photo 74' },
  { src: getImagePath('/dita (75).jpg'), alt: 'Dita photo 75' },
  { src: getImagePath('/dita (76).jpg'), alt: 'Dita photo 76' },
  { src: getImagePath('/dita (8).jpg'), alt: 'Dita photo 8' },
  { src: getImagePath('/dita (81).jpg'), alt: 'Dita photo 81' },
  { src: getImagePath('/dita (83).jpg'), alt: 'Dita photo 83' },
  { src: getImagePath('/dita (84).jpg'), alt: 'Dita photo 84' },
  { src: getImagePath('/dita (85).jpg'), alt: 'Dita photo 85' },
  { src: getImagePath('/dita (86).jpg'), alt: 'Dita photo 86' },
  { src: getImagePath('/dita (87).jpg'), alt: 'Dita photo 87' },
  { src: getImagePath('/dita (88).jpg'), alt: 'Dita photo 88' },
  { src: getImagePath('/dita (89).jpg'), alt: 'Dita photo 89' },
  { src: getImagePath('/dita (9).jpg'), alt: 'Dita photo 9' },
  { src: getImagePath('/dita (90).jpg'), alt: 'Dita photo 90' },
  { src: getImagePath('/dita (91).jpg'), alt: 'Dita photo 91' },
  { src: getImagePath('/dita-maracatu.jpg'), alt: 'Dita maracatu' },
  { src: getImagePath('/dita-photo.jpg'), alt: 'Dita portrait' },
  { src: getImagePath('/dita3.jpg'), alt: 'Dita photo' },
]

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35,
}

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max)
const normalizeAngle = (d: number) => ((d % 360) + 360) % 360
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360
  return a - 180
}
const getDataNumber = (el: HTMLElement, name: string, fallback: number) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`)
  const n = attr == null ? NaN : parseFloat(attr)
  return Number.isFinite(n) ? n : fallback
}

function buildItems(pool: ImageItem[], seg: number): ItemDef[] {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2)
  const evenYs = [-4, -2, 0, 2, 4]
  const oddYs = [-3, -1, 1, 3, 5]

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs
    return ys.map((y) => ({ x, y, sizeX: 2, sizeY: 2 }))
  })

  const totalSlots = coords.length
  if (pool.length === 0) {
    return coords.map((c) => ({ ...c, src: '', alt: '' }))
  }
  if (pool.length > totalSlots) {
    console.warn(
      `[DomeGallery] Provided image count (${pool.length}) exceeds available tiles (${totalSlots}). Some images will not be shown.`,
    )
  }

  const normalizedImages = pool.map((image) => {
    if (typeof image === 'string') {
      return { src: image, alt: '' }
    }
    return { src: image.src || '', alt: image.alt || '' }
  })

  const usedImages = Array.from(
    { length: totalSlots },
    (_, i) => normalizedImages[i % normalizedImages.length],
  )

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          const tmp = usedImages[i]
          usedImages[i] = usedImages[j]
          usedImages[j] = tmp
          break
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt,
  }))
}

function computeItemBaseRotation(
  offsetX: number,
  offsetY: number,
  sizeX: number,
  sizeY: number,
  segments: number,
) {
  const unit = 360 / segments / 2
  const rotateY = unit * (offsetX + (sizeX - 1) / 2)
  const rotateX = unit * (offsetY - (sizeY - 1) / 2)
  return { rotateX, rotateY }
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.9,
  fitBasis = 'max',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '1000px',
  openedImageHeight = '1100px',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = false,
}: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const sphereRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<HTMLDivElement>(null)
  const scrimRef = useRef<HTMLDivElement>(null)
  const focusedElRef = useRef<HTMLElement | null>(null)
  const originalTilePositionRef = useRef<{
    left: number
    top: number
    width: number
    height: number
  } | null>(null)

  const rotationRef = useRef({ x: 0, y: 0 })
  const startRotRef = useRef({ x: 0, y: 0 })
  const startPosRef = useRef<{ x: number; y: number } | null>(null)
  const draggingRef = useRef(false)
  const cancelTapRef = useRef(false)
  const movedRef = useRef(false)
  const inertiaRAF = useRef<number | null>(null)
  const pointerTypeRef = useRef<'mouse' | 'pen' | 'touch'>('mouse')
  const tapTargetRef = useRef<HTMLElement | null>(null)
  const openingRef = useRef(false)
  const openStartedAtRef = useRef(0)
  const lastDragEndAt = useRef(0)

  const scrollLockedRef = useRef(false)
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return
    scrollLockedRef.current = true
    document.body.classList.add('dg-scroll-lock')
  }, [])
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return
    scrollLockedRef.current = false
    document.body.classList.remove('dg-scroll-lock')
  }, [])

  const items = useMemo(() => buildItems(images, segments), [images, segments])

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`
    }
  }

  const lockedRadiusRef = useRef<number | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height)
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h
      let basis: number
      switch (fitBasis) {
        case 'min':
          basis = minDim
          break
        case 'max':
          basis = maxDim
          break
        case 'width':
          basis = w
          break
        case 'height':
          basis = h
          break
        default:
          basis = aspect >= 1.3 ? w : minDim
      }
      let radius = basis * fit
      const heightGuard = h * 1.35
      radius = Math.min(radius, heightGuard)
      radius = clamp(radius, minRadius, maxRadius)
      lockedRadiusRef.current = Math.round(radius)

      const viewerPad = Math.max(8, Math.round(minDim * padFactor))
      root.style.setProperty('--radius', `${lockedRadiusRef.current}px`)
      root.style.setProperty('--viewer-pad', `${viewerPad}px`)
      root.style.setProperty('--tile-radius', imageBorderRadius)
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius)
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none')
      applyTransform(rotationRef.current.x, rotationRef.current.y)

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect()
        const mainR = mainRef.current.getBoundingClientRect()

        const hasCustomSize = openedImageWidth && openedImageHeight
        if (hasCustomSize) {
          const tempDiv = document.createElement('div')
          tempDiv.style.cssText = `position: absolute; width: ${openedImageWidth}; height: ${openedImageHeight}; visibility: hidden;`
          document.body.appendChild(tempDiv)
          const tempRect = tempDiv.getBoundingClientRect()
          document.body.removeChild(tempDiv)

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2

          enlargedOverlay.style.left = `${centeredLeft}px`
          enlargedOverlay.style.top = `${centeredTop}px`
        } else {
          enlargedOverlay.style.left = `${frameR.left - mainR.left}px`
          enlargedOverlay.style.top = `${frameR.top - mainR.top}px`
          enlargedOverlay.style.width = `${frameR.width}px`
          enlargedOverlay.style.height = `${frameR.height}px`
        }
      }
    })
    ro.observe(root)
    return () => ro.disconnect()
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    openedImageWidth,
    openedImageHeight,
  ])

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y)
  }, [])

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current)
      inertiaRAF.current = null
    }
  }, [])

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4
      let vX = clamp(vx, -MAX_V, MAX_V) * 80
      let vY = clamp(vy, -MAX_V, MAX_V) * 80
      let frames = 0
      const d = clamp(dragDampening ?? 0.6, 0, 1)
      const frictionMul = 0.94 + 0.055 * d
      const stopThreshold = 0.015 - 0.01 * d
      const maxFrames = Math.round(90 + 270 * d)
      const step = () => {
        vX *= frictionMul
        vY *= frictionMul
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null
          return
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null
          return
        }
        const nextX = clamp(
          rotationRef.current.x - vY / 200,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg,
        )
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200)
        rotationRef.current = { x: nextX, y: nextY }
        applyTransform(nextX, nextY)
        inertiaRAF.current = requestAnimationFrame(step)
      }
      stopInertia()
      inertiaRAF.current = requestAnimationFrame(step)
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia],
  )

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return
        stopInertia()

        const evt = event as PointerEvent
        pointerTypeRef.current = (evt.pointerType as any) || 'mouse'
        if (pointerTypeRef.current === 'touch') evt.preventDefault()
        if (pointerTypeRef.current === 'touch') lockScroll()
        draggingRef.current = true
        cancelTapRef.current = false
        movedRef.current = false
        startRotRef.current = { ...rotationRef.current }
        startPosRef.current = { x: evt.clientX, y: evt.clientY }
        const potential = (evt.target as Element).closest?.('.item__image') as HTMLElement | null
        tapTargetRef.current = potential || null
      },
      onDrag: ({
        event,
        last,
        velocity: velArr = [0, 0],
        direction: dirArr = [0, 0],
        movement,
      }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return

        const evt = event as PointerEvent
        if (pointerTypeRef.current === 'touch') evt.preventDefault()

        const dxTotal = evt.clientX - startPosRef.current.x
        const dyTotal = evt.clientY - startPosRef.current.y

        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal
          if (dist2 > 16) movedRef.current = true
        }

        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg,
        )
        const nextY = startRotRef.current.y + dxTotal / dragSensitivity

        const cur = rotationRef.current
        if (cur.x !== nextX || cur.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY }
          applyTransform(nextX, nextY)
        }

        if (last) {
          draggingRef.current = false
          let isTap = false

          if (startPosRef.current) {
            const dx = evt.clientX - startPosRef.current.x
            const dy = evt.clientY - startPosRef.current.y
            const dist2 = dx * dx + dy * dy
            const TAP_THRESH_PX = pointerTypeRef.current === 'touch' ? 10 : 6
            if (dist2 <= TAP_THRESH_PX * TAP_THRESH_PX) {
              isTap = true
            }
          }

          const [vMagX, vMagY] = velArr
          const [dirX, dirY] = dirArr
          let vx = vMagX * dirX
          let vy = vMagY * dirY

          if (!isTap && Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement
            vx = (mx / dragSensitivity) * 0.02
            vy = (my / dragSensitivity) * 0.02
          }

          if (!isTap && (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005)) {
            startInertia(vx, vy)
          }
          startPosRef.current = null
          cancelTapRef.current = !isTap

          if (isTap && tapTargetRef.current && !focusedElRef.current) {
            openItemFromElement(tapTargetRef.current)
          }
          tapTargetRef.current = null

          if (cancelTapRef.current) setTimeout(() => (cancelTapRef.current = false), 120)
          if (pointerTypeRef.current === 'touch') unlockScroll()
          if (movedRef.current) lastDragEndAt.current = performance.now()
          movedRef.current = false
        }
      },
    },
    { target: mainRef, eventOptions: { passive: false } },
  )

  useEffect(() => {
    const scrim = scrimRef.current
    if (!scrim) return

    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return
      const el = focusedElRef.current
      if (!el) return
      const parent = el.parentElement as HTMLElement
      const overlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement | null
      if (!overlay) return

      const refDiv = parent.querySelector('.item__image--reference') as HTMLElement | null

      const originalPos = originalTilePositionRef.current
      if (!originalPos) {
        overlay.remove()
        if (refDiv) refDiv.remove()
        parent.style.setProperty('--rot-y-delta', `0deg`)
        parent.style.setProperty('--rot-x-delta', `0deg`)
        el.style.visibility = ''
        ;(el.style as any).zIndex = 0
        focusedElRef.current = null
        rootRef.current?.removeAttribute('data-enlarging')
        openingRef.current = false
        return
      }

      const currentRect = overlay.getBoundingClientRect()
      const rootRect = rootRef.current!.getBoundingClientRect()

      const originalPosRelativeToRoot = {
        left: originalPos.left - rootRect.left,
        top: originalPos.top - rootRect.top,
        width: originalPos.width,
        height: originalPos.height,
      }

      const overlayRelativeToRoot = {
        left: currentRect.left - rootRect.left,
        top: currentRect.top - rootRect.top,
        width: currentRect.width,
        height: currentRect.height,
      }

      const animatingOverlay = document.createElement('div')
      animatingOverlay.className = 'enlarge-closing'
      animatingOverlay.style.cssText = `
        position: absolute;
        left: ${overlayRelativeToRoot.left}px;
        top: ${overlayRelativeToRoot.top}px;
        width: ${overlayRelativeToRoot.width}px;
        height: ${overlayRelativeToRoot.height}px;
        z-index: 9999;
        border-radius: ${openedImageBorderRadius};
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,.35);
        transition: all ${enlargeTransitionMs}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
        filter: ${grayscale ? 'grayscale(1)' : 'none'};
      `

      const originalImg = overlay.querySelector('img')
      if (originalImg) {
        const img = originalImg.cloneNode() as HTMLImageElement
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;'
        animatingOverlay.appendChild(img)
      }

      overlay.remove()
      rootRef.current!.appendChild(animatingOverlay)

      void animatingOverlay.getBoundingClientRect()

      requestAnimationFrame(() => {
        animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px'
        animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px'
        animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px'
        animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px'
        animatingOverlay.style.opacity = '0'
      })

      const cleanup = () => {
        animatingOverlay.remove()
        originalTilePositionRef.current = null

        if (refDiv) refDiv.remove()
        parent.style.transition = 'none'
        el.style.transition = 'none'

        parent.style.setProperty('--rot-y-delta', `0deg`)
        parent.style.setProperty('--rot-x-delta', `0deg`)

        requestAnimationFrame(() => {
          el.style.visibility = ''
          el.style.opacity = '0'
          ;(el.style as any).zIndex = 0
          focusedElRef.current = null
          rootRef.current?.removeAttribute('data-enlarging')

          requestAnimationFrame(() => {
            parent.style.transition = ''
            el.style.transition = 'opacity 300ms ease-out'

            requestAnimationFrame(() => {
              el.style.opacity = '1'
              setTimeout(() => {
                el.style.transition = ''
                el.style.opacity = ''
                openingRef.current = false
                if (
                  !draggingRef.current &&
                  rootRef.current?.getAttribute('data-enlarging') !== 'true'
                ) {
                  document.body.classList.remove('dg-scroll-lock')
                }
              }, 300)
            })
          })
        })
      }

      animatingOverlay.addEventListener('transitionend', cleanup, {
        once: true,
      })
    }

    scrim.addEventListener('click', close)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      scrim.removeEventListener('click', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [enlargeTransitionMs, openedImageBorderRadius, grayscale])

  const openItemFromElement = (el: HTMLElement) => {
    if (openingRef.current) return
    openingRef.current = true
    openStartedAtRef.current = performance.now()
    lockScroll()
    const parent = el.parentElement as HTMLElement
    focusedElRef.current = el
    el.setAttribute('data-focused', 'true')
    const offsetX = getDataNumber(parent, 'offsetX', 0)
    const offsetY = getDataNumber(parent, 'offsetY', 0)
    const sizeX = getDataNumber(parent, 'sizeX', 2)
    const sizeY = getDataNumber(parent, 'sizeY', 2)
    const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments)
    const parentY = normalizeAngle(parentRot.rotateY)
    const globalY = normalizeAngle(rotationRef.current.y)
    let rotY = -(parentY + globalY) % 360
    if (rotY < -180) rotY += 360
    const rotX = -parentRot.rotateX - rotationRef.current.x
    parent.style.setProperty('--rot-y-delta', `${rotY}deg`)
    parent.style.setProperty('--rot-x-delta', `${rotX}deg`)
    const refDiv = document.createElement('div')
    refDiv.className = 'item__image item__image--reference opacity-0'
    refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`
    parent.appendChild(refDiv)

    void refDiv.offsetHeight

    const tileR = refDiv.getBoundingClientRect()
    const mainR = mainRef.current?.getBoundingClientRect()
    const frameR = frameRef.current?.getBoundingClientRect()

    if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
      openingRef.current = false
      focusedElRef.current = null
      parent.removeChild(refDiv)
      unlockScroll()
      return
    }

    originalTilePositionRef.current = {
      left: tileR.left,
      top: tileR.top,
      width: tileR.width,
      height: tileR.height,
    }
    el.style.visibility = 'hidden'
    ;(el.style as any).zIndex = 0
    const overlay = document.createElement('div')
    overlay.className = 'enlarge'
    overlay.style.cssText = `position:absolute; left:${frameR.left - mainR.left}px; top:${frameR.top - mainR.top}px; width:${frameR.width}px; height:${frameR.height}px; opacity:0; z-index:30; will-change:transform,opacity; transform-origin:top left; transition:transform ${enlargeTransitionMs}ms ease, opacity ${enlargeTransitionMs}ms ease; border-radius:${openedImageBorderRadius}; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.35);`
    const rawSrc = parent.dataset.src || (el.querySelector('img') as HTMLImageElement)?.src || ''
    const rawAlt = parent.dataset.alt || (el.querySelector('img') as HTMLImageElement)?.alt || ''
    const img = document.createElement('img')
    img.src = rawSrc
    img.alt = rawAlt
    img.style.cssText = `width:100%; height:100%; object-fit:cover; filter:${grayscale ? 'grayscale(1)' : 'none'};`
    overlay.appendChild(img)
    viewerRef.current!.appendChild(overlay)
    const tx0 = tileR.left - frameR.left
    const ty0 = tileR.top - frameR.top
    const sx0 = tileR.width / frameR.width
    const sy0 = tileR.height / frameR.height

    const validSx0 = isFinite(sx0) && sx0 > 0 ? sx0 : 1
    const validSy0 = isFinite(sy0) && sy0 > 0 ? sy0 : 1

    overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${validSx0}, ${validSy0})`
    setTimeout(() => {
      if (!overlay.parentElement) return
      overlay.style.opacity = '1'
      overlay.style.transform = 'translate(0px, 0px) scale(1, 1)'
      rootRef.current?.setAttribute('data-enlarging', 'true')
    }, 16)
    const wantsResize = openedImageWidth || openedImageHeight
    if (wantsResize) {
      const onFirstEnd = (ev: TransitionEvent) => {
        if (ev.propertyName !== 'transform') return
        overlay.removeEventListener('transitionend', onFirstEnd)
        const prevTransition = overlay.style.transition
        overlay.style.transition = 'none'
        const tempWidth = openedImageWidth || `${frameR.width}px`
        const tempHeight = openedImageHeight || `${frameR.height}px`
        overlay.style.width = tempWidth
        overlay.style.height = tempHeight
        const newRect = overlay.getBoundingClientRect()
        overlay.style.width = frameR.width + 'px'
        overlay.style.height = frameR.height + 'px'
        void overlay.offsetWidth
        overlay.style.transition = `left ${enlargeTransitionMs}ms ease, top ${enlargeTransitionMs}ms ease, width ${enlargeTransitionMs}ms ease, height ${enlargeTransitionMs}ms ease`
        const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2
        const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2
        requestAnimationFrame(() => {
          overlay.style.left = `${centeredLeft}px`
          overlay.style.top = `${centeredTop}px`
          overlay.style.width = tempWidth
          overlay.style.height = tempHeight
        })
        const cleanupSecond = () => {
          overlay.removeEventListener('transitionend', cleanupSecond)
          overlay.style.transition = prevTransition
        }
        overlay.addEventListener('transitionend', cleanupSecond, {
          once: true,
        })
      }
      overlay.addEventListener('transitionend', onFirstEnd)
    }
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock')
    }
  }, [])

  const cssStyles = `
    .sphere-root {
      --radius: 520px;
      --viewer-pad: 72px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }
    
    .sphere-root * { box-sizing: border-box; }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }
    
    .stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    
    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }
    
    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg))) 
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg))) 
                 translateZ(var(--radius));
    }
    
    .sphere-root[data-enlarging="true"] .scrim {
      opacity: 1 !important;
      pointer-events: all !important;
    }
    
    @media (max-aspect-ratio: 1/1) {
      .viewer-frame {
        height: auto !important;
        width: 100% !important;
      }
    }
    
    // body.dg-scroll-lock {
    //   position: fixed !important;
    //   top: 0;
    //   left: 0;
    //   width: 100% !important;
    //   height: 100% !important;
    //   overflow: hidden !important;
    //   touch-action: none !important;
    //   overscroll-behavior: contain !important;
    // }
    .item__image {
      position: absolute;
      inset: 10px;
      border-radius: var(--tile-radius, 12px);
      overflow: hidden;
      cursor: pointer;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 300ms;
      pointer-events: auto;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .item__image--reference {
      position: absolute;
      inset: 10px;
      pointer-events: none;
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div
        ref={rootRef}
        className="sphere-root relative w-full h-full"
        style={
          {
            ['--segments-x' as any]: segments,
            ['--segments-y' as any]: segments,
            ['--tile-radius' as any]: imageBorderRadius,
            ['--enlarge-radius' as any]: openedImageBorderRadius,
            ['--image-filter' as any]: grayscale ? 'grayscale(1)' : 'none',
          } as React.CSSProperties
        }
      >
        <main
          ref={mainRef}
          className="absolute inset-0 grid place-items-center overflow-hidden select-none bg-transparent"
          style={{
            touchAction: 'none',
            WebkitUserSelect: 'none',
          }}
        >
          <div className="stage">
            <div ref={sphereRef} className="sphere">
              {items.map((it, i) => (
                <div
                  key={`${it.x},${it.y},${i}`}
                  className="sphere-item absolute m-auto"
                  data-src={it.src}
                  data-alt={it.alt}
                  data-offset-x={it.x}
                  data-offset-y={it.y}
                  data-size-x={it.sizeX}
                  data-size-y={it.sizeY}
                  style={
                    {
                      ['--offset-x' as any]: it.x,
                      ['--offset-y' as any]: it.y,
                      ['--item-size-x' as any]: it.sizeX,
                      ['--item-size-y' as any]: it.sizeY,
                      top: '-999px',
                      bottom: '-999px',
                      left: '-999px',
                      right: '-999px',
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="item__image absolute block overflow-hidden cursor-pointer bg-gray-200 transition-transform duration-300"
                    role="button"
                    tabIndex={0}
                    aria-label={it.alt || 'Open image'}
                    onClick={(e) => {
                      if (draggingRef.current) return
                      if (movedRef.current) return
                      if (performance.now() - lastDragEndAt.current < 80) return
                      if (openingRef.current) return
                      openItemFromElement(e.currentTarget as HTMLElement)
                    }}
                    onPointerUp={(e) => {
                      if ((e.nativeEvent as PointerEvent).pointerType !== 'touch') return
                      if (draggingRef.current) return
                      if (movedRef.current) return
                      if (performance.now() - lastDragEndAt.current < 80) return
                      if (openingRef.current) return
                      openItemFromElement(e.currentTarget as HTMLElement)
                    }}
                    style={{
                      inset: '10px',
                      borderRadius: `var(--tile-radius, ${imageBorderRadius})`,
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <Image
                      src={it.src}
                      draggable={false}
                      alt={it.alt}
                      fill
                      unoptimized
                      className="object-cover pointer-events-none"
                      style={{
                        backfaceVisibility: 'hidden',
                        filter: `var(--image-filter, ${grayscale ? 'grayscale(1)' : 'none'})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={viewerRef}
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
            style={{ padding: 'var(--viewer-pad)' }}
          >
            <div
              ref={scrimRef}
              className="scrim absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(3px)',
              }}
            />
            <div
              ref={frameRef}
              className="viewer-frame h-full aspect-square flex"
              style={{
                borderRadius: `var(--enlarge-radius, ${openedImageBorderRadius})`,
              }}
            />
          </div>
        </main>
      </div>
    </>
  )
}
