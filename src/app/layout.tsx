import type { Metadata } from 'next'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import './globals.css'
import { getImagePath } from '@/lib/utils'

// Utility function to merge class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        <link href={`${basePath}/favicon.ico`} rel="icon" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black min-h-screen overflow-x-hidden">
        {/* Organic texture base layer */}
        <div
          className="fixed inset-0 opacity-[0.04] pointer-events-none z-[1]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.02) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.015) 2px, rgba(255, 255, 255, 0.015) 4px),
              repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(16, 185, 129, 0.01) 3px, rgba(16, 185, 129, 0.01) 6px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 20px 20px, 30px 30px',
          }}
        ></div>

        {/* Enhanced noise texture overlay for depth */}
        <div
          className="fixed inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-[2]"
          style={{ backgroundImage: `url('${getImagePath('/noise.webp')}')` }}
        ></div>

        {/* Background image with reduced opacity for AMOLED look */}
        <div
          className="fixed inset-0 bg-cover bg-center opacity-[0.08] z-0"
          style={{ backgroundImage: `url('${getImagePath('/dita-photo.webp')}')` }}
        ></div>

        {/* Enhanced gradient overlay with more depth and organic feel */}
        <div
          className="fixed inset-0 z-0"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.02) 0%, transparent 40%),
              radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.015) 0%, transparent 40%),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.95))
            `,
          }}
        ></div>

        {/* Subtle vignette effect with organic gradient */}
        <div
          className="fixed inset-0 pointer-events-none z-[3]"
          style={{
            background: `radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.5) 100%)`,
          }}
        ></div>

        {/* Content container */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Nanci Ferreira - Dita | Arte e Sustentabilidade na Mata Atlântica',
  description:
    'Conheça o trabalho de Nanci Ferreira (Dita), uma anciã que integra arte e sustentabilidade no coração da Mata Atlântica, em Cascata, Águas da Prata, São Paulo.',
  keywords: [
    'Nanci Ferreira',
    'Dita',
    'sustentabilidade',
    'arte',
    'Mata Atlântica',
    'Cascata',
    'Águas da Prata',
    'bio-joias',
    'instrumentos naturais',
    'educação ambiental',
  ],
}
