import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct image path with basePath prefix
 * @param path - The image path (e.g., '/image.webp')
 * @returns The full path with basePath if configured
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}

/**
 * Background configuration options
 */
export interface BackgroundConfig {
  /** Image path (will be processed with getImagePath) */
  imagePath: string
  /** Image opacity (0-1) */
  opacity?: number
  /** Blur amount in pixels */
  blur?: number
  /** Gradient overlay type */
  gradient?: 'dark' | 'radial' | 'vignette' | 'none'
  /** Custom gradient overlay */
  customGradient?: string
  /** Object position for the image */
  objectPosition?: string
}

/**
 * Generate background styles for a section
 * @param config - Background configuration
 * @returns Object with style properties for background elements
 */
export function createBackgroundStyles(config: BackgroundConfig) {
  const {
    imagePath,
    opacity = 0.3,
    blur = 8,
    gradient = 'dark',
    customGradient,
    objectPosition = 'center',
  } = config

  const gradients = {
    dark: 'linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(0,0,0,0.90), rgba(0,0,0,0.85))',
    radial: 'radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)',
    vignette: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
    none: 'none',
  }

  return {
    image: {
      src: getImagePath(imagePath),
      opacity,
      blur,
      objectPosition,
    },
    gradient: customGradient || gradients[gradient],
  }
}
