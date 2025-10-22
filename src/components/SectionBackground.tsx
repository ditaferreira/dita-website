import Image from 'next/image'
import { createBackgroundStyles, type BackgroundConfig } from '@/lib/utils'

interface SectionBackgroundProps extends BackgroundConfig {
  /** Additional CSS classes for the container */
  className?: string
  /** z-index for the background */
  zIndex?: number
}

/**
 * Reusable section background component with image, blur, texture, and gradient overlays
 *
 * @example
 * ```tsx
 * <section className="relative py-24">
 *   <SectionBackground
 *     imagePath="/dita-photo.jpg"
 *     opacity={0.25}
 *     blur={10}
 *     gradient="radial"
 *   />
 *   <div className="relative z-10">
 *     Your content here
 *   </div>
 * </section>
 * ```
 */
export default function SectionBackground({
  imagePath,
  opacity = 0.3,
  blur = 8,
  texture = true,
  textureOpacity = 0.02,
  gradient = 'dark',
  customGradient,
  objectPosition = 'center',
  className = '',
  zIndex = 0,
}: SectionBackgroundProps) {
  const styles = createBackgroundStyles({
    imagePath,
    opacity,
    blur,
    texture,
    textureOpacity,
    gradient,
    customGradient,
    objectPosition,
  })

  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex }}>
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <Image
          src={styles.image.src}
          alt=""
          fill
          className="object-cover"
          style={{
            opacity: styles.image.opacity,
            filter: `blur(${styles.image.blur}px)`,
            objectPosition: styles.image.objectPosition,
          }}
          priority={false}
          quality={85}
        />
      </div>

      {/* Gradient Overlay */}
      {styles.gradient !== 'none' && (
        <div className="absolute inset-0" style={{ background: styles.gradient }} />
      )}

      {/* Texture Overlay */}
      {styles.texture && (
        <div
          className="absolute inset-0 bg-repeat mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url('${styles.texture.src}')`,
            opacity: styles.texture.opacity,
          }}
        />
      )}
    </div>
  )
}
