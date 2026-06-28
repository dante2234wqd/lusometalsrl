"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

interface NavigationProps {
  currentPage?: string
  onNavigate?: (page: string) => void
}

export function Navigation({ currentPage = "home", onNavigate = () => {} }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "sobre-nosotros", label: "Sobre Nosotros" },
    { id: "proyectos", label: "Proyectos" },
    { id: "consultar", label: "Consultar Productos" },
  ]

  const handleNavigate = (page: string) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl text-[#f5c400]">MetalTech</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 transition-colors ${
                  currentPage === item.id
                    ? "text-[#f5c400] border-b-2 border-[#f5c400]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  currentPage === item.id
                    ? "bg-slate-800 text-[#f5c400]"
                    : "text-gray-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
