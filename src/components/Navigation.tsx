'use client'

import { useState, useEffect } from 'react'
import { Leaf, Menu, X, ChevronRight } from 'lucide-react'

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
            <div className={`bg-green-600 rounded-full p-2 transition-all duration-300 ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}>
              <Leaf className="h-6 w-6 text-black" />
            </div>
            <h1 className={`font-bold transition-all duration-300 ${
              scrolled ? 'text-xl' : 'text-2xl'
            }`}>
              <span className="text-white">Nanci</span>
              <span className="text-green-500"> Ferreira</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-green-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
            </div>
          </div>
        )}
      </div>
    </header>
  )
}