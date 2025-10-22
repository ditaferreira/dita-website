'use client'

import { useState, useEffect } from 'react'
import { Leaf, Menu, X, ChevronRight, Instagram } from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#organizacoes', label: 'Organizações' },
    { href: '#impacto', label: 'Impacto' },
  ]

  return (
    <header
      className={`glass sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div
              className={`bg-green-600 rounded-full p-2 transition-all duration-300 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <Image
                src={getImagePath('/dita_logo.png')} // or "/images/logo.png" or "/logo.svg" (place files in /public)
                alt="Nanci logo"
                width={80}
                height={80}
              />
            </div>
            <h1
              className={`font-bold transition-all duration-300 ${
                scrolled ? 'text-xl' : 'text-2xl'
              }`}
            >
              <span className="text-white">Nanci</span>
              <span className="text-green-500"> Ferreira</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-green-400 transition-colors text-fluid-sm tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/dita22067/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 group cursor-pointer relative z-[60]"
              aria-label="Instagram de Nanci Ferreira"
            >
              <Instagram className="h-5 w-5 text-white pointer-events-none" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-green-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-800/30 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-white hover:text-green-400 transition-colors flex items-center animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  <ChevronRight className="h-4 w-4 mr-2 text-green-500" />
                  {item.label}
                </a>
              ))}

              {/* Instagram Button Mobile */}
              <a
                href="https://www.instagram.com/dita22067/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-pink-400 transition-colors animate-fade-in"
                style={{ animationDelay: `${navItems.length * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 mr-2">
                  <Instagram className="h-4 w-4 text-white" />
                </div>
                Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
