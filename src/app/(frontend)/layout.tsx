import type { Metadata } from 'next'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import './globals.css'

// Utility function to merge class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="pt-BR" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black min-h-screen overflow-x-hidden">
        {/* Subtle noise texture overlay for AMOLED effect */}
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-[1]"></div>
        
        {/* Background image with reduced opacity for AMOLED look */}
        <div className="fixed inset-0 bg-[url('/dita-photo.jpg')] bg-cover bg-center opacity-[0.07] z-0"></div>
        
        {/* Enhanced gradient overlay with more depth */}
        <div className="fixed inset-0 bg-gradient-to-b from-black via-black/98 to-black/95 z-0"></div>
        
        {/* Subtle vignette effect */}
        <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-[2]"></div>
        
        {/* Content container */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Nanci Ferreira - Dita | Arte e Sustentabilidade na Mata Atlântica',
  description: 'Conheça o trabalho de Nanci Ferreira (Dita), uma anciã que integra arte e sustentabilidade no coração da Mata Atlântica, em Cascata, Águas da Prata, São Paulo.',
  keywords: ['Nanci Ferreira', 'Dita', 'sustentabilidade', 'arte', 'Mata Atlântica', 'Cascata', 'Águas da Prata', 'bio-joias', 'instrumentos naturais', 'educação ambiental'],
}
