"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [bgMode, setBgMode] = useState<"dark" | "light">("dark")
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const detectBackground = () => {
      const y = 60
      const x = window.innerWidth / 2
      const el = document.elementFromPoint(x, y) as HTMLElement | null
      if (!el) return
      let current: HTMLElement | null = el
      while (current && current !== document.body) {
        const bg = window.getComputedStyle(current).backgroundColor
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
          if (match) {
            const r = parseInt(match[1])
            const g = parseInt(match[2])
            const b = parseInt(match[3])
            const brightness = (r * 299 + g * 587 + b * 114) / 1000
            setBgMode(brightness > 160 ? "light" : "dark")
            return
          }
        }
        current = current.parentElement
      }
      setBgMode(window.scrollY < 100 ? "dark" : "light")
    }

    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 60) {
        setVisible(true)
      } else if (currentY > lastScrollY + 8) {
        setVisible(false)
        setMobileMenuOpen(false)
      } else if (currentY < lastScrollY - 8) {
        setVisible(true)
      }
      setLastScrollY(currentY)
      detectBackground()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    detectBackground()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "sobre-nosotros", label: "Sobre Nosotros" },
    { id: "consultar", label: "Consultar Productos" },
  ]

  const handleNavClick = (id: string) => {
    onNavigate(id)
    setMobileMenuOpen(false)
  }

  const isDark = bgMode === "dark"

  const pillClass = isDark
    ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/30"
    : "bg-gray-900 border border-gray-800 shadow-2xl shadow-black/40"

  const logoClass = "text-white font-bold tracking-widest cursor-pointer select-none drop-shadow shrink-0"

  const navBtnClass = (isActive: boolean) =>
    isActive
      ? "text-orange-400 bg-white/15 px-4 py-2 rounded-full text-sm font-medium"
      : `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          isDark
            ? "text-white/80 hover:text-white hover:bg-white/10"
            : "text-gray-300 hover:text-white hover:bg-white/10"
        }`

  return (
    <>
      {/* Desktop */}
      <header
        ref={headerRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
        style={{ width: "min(920px, calc(100vw - 2rem))" }}
      >
        <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-300 ${pillClass}`}>
          <h1 className={`text-lg ${logoClass}`} onClick={() => handleNavClick("home")}>
            LUSO METAL SRL
          </h1>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className={navBtnClass(activeSection === item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile */}
      <header
        className={`md:hidden fixed top-3 left-3 right-3 z-50 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className={`rounded-2xl px-4 py-3 flex justify-between items-center transition-all duration-300 ${pillClass}`}>
          <h1 className={`text-base ${logoClass}`} onClick={() => handleNavClick("home")}>
            LUSO METAL SRL
          </h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white/80 hover:text-white p-1">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className={`mt-2 rounded-2xl px-4 py-3 space-y-1 transition-all duration-300 ${pillClass}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id ? "bg-white/15 text-orange-400" : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  )
}
