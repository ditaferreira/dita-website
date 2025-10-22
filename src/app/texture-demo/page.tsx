'use client'

import { Sparkles, Heart, Leaf } from 'lucide-react'

export default function TextureDemoPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-fluid-5xl font-bold text-gradient mb-4">
            Textured Background Showcase
          </h1>
          <p className="text-white/70 text-fluid-lg">
            Enhanced AMOLED-optimized backgrounds with organic textures
          </p>
        </div>

        {/* Glass Components */}
        <section>
          <h2 className="text-fluid-3xl font-bold text-white mb-6">Glass Morphism</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-fluid-xl font-semibold text-white">Standard Glass</h3>
              </div>
              <p className="text-white/80">
                Enhanced with organic texture overlay, radial gradients, and cross-hatch patterns.
                Hover to see the shimmer effect.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-fluid-xl font-semibold text-white">Light Glass</h3>
              </div>
              <p className="text-white/80">
                Lighter variant with subtle texture. Perfect for secondary elements and overlays.
              </p>
            </div>
          </div>
        </section>

        {/* AMOLED Cards */}
        <section>
          <h2 className="text-fluid-3xl font-bold text-white mb-6">AMOLED Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="amoled-card p-8 group">
                <div className="bg-green-900/50 rounded-xl p-4 mb-6 inline-block group-hover:bg-green-800/50 transition-colors">
                  <Leaf className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-fluid-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  Card {i}
                </h3>
                <p className="text-white/70">
                  Deep black background with organic texture patterns. Hover to see the animated
                  shimmer effect.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Utility Classes */}
        <section>
          <h2 className="text-fluid-3xl font-bold text-white mb-6">Utility Classes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-textured-black rounded-2xl p-8">
              <h3 className="text-fluid-xl font-semibold text-white mb-3">.bg-textured-black</h3>
              <p className="text-white/70">90% black with full organic texture pattern</p>
            </div>

            <div className="bg-textured-dark rounded-2xl p-8">
              <h3 className="text-fluid-xl font-semibold text-white mb-3">.bg-textured-dark</h3>
              <p className="text-white/70">70% black with medium texture</p>
            </div>

            <div className="bg-textured-subtle rounded-2xl p-8">
              <h3 className="text-fluid-xl font-semibold text-white mb-3">.bg-textured-subtle</h3>
              <p className="text-white/70">50% black with light texture</p>
            </div>
          </div>
        </section>

        {/* Organic Noise Overlay */}
        <section>
          <h2 className="text-fluid-3xl font-bold text-white mb-6">Organic Noise Overlay</h2>
          <div className="organic-noise bg-black/60 rounded-2xl p-12 backdrop-blur-xl">
            <h3 className="text-fluid-2xl font-semibold text-white mb-4">.organic-noise Class</h3>
            <p className="text-white/80 text-fluid-lg leading-relaxed">
              Add this class to any element to apply an organic texture overlay. The overlay uses
              radial gradients and repeating linear patterns to create depth without overwhelming
              the content. Perfect for creating sophisticated, textured surfaces.
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section>
          <h2 className="text-fluid-3xl font-bold text-white mb-6">Before vs After</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white/70 mb-3 text-center">Before (Flat Black)</h3>
              <div
                className="rounded-2xl p-8 backdrop-blur-xl"
                style={{ background: 'rgba(0, 0, 0, 0.65)' }}
              >
                <p className="text-white/80">
                  Simple flat black background with basic backdrop blur. Functional but lacks visual
                  depth and sophistication.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-white/70 mb-3 text-center">After (Textured)</h3>
              <div className="glass rounded-2xl p-8">
                <p className="text-white/80">
                  Enhanced with organic textures, radial gradients, and cross-hatch patterns.
                  Maintains AMOLED optimization while adding visual interest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="glass rounded-2xl p-8">
          <h2 className="text-fluid-2xl font-bold text-white mb-6">Technical Implementation</h2>
          <div className="space-y-4 text-white/70">
            <div>
              <h4 className="text-white font-semibold mb-2">Texture Layers:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Radial gradients for soft organic glows</li>
                <li>Repeating linear gradients for cross-hatch patterns</li>
                <li>Multiple angles (45°, -45°, 60°, -30°) for variety</li>
                <li>Layered approach with proper z-index hierarchy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Performance:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Pure CSS implementation (no additional image requests)</li>
                <li>GPU-accelerated transforms and animations</li>
                <li>Optimized opacity values for minimal rendering cost</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Color Palette:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Base Black: rgba(0, 0, 0, 0.65-0.9)</li>
                <li>Green Accents: rgba(16, 185, 129, 0.008-0.03)</li>
                <li>White Highlights: rgba(255, 255, 255, 0.005-0.015)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
