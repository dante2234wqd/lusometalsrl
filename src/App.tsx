"use client"

import { useState } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Products } from "./components/Products"
import { ProductDetailPage } from "./components/ProductDetailPage"
import { Footer } from "./components/Footer"
import { WhatsAppButton } from "./components/WhatsAppButton"

export interface Product {
  id: number
  name: string
  category: string
  description: string
  image: string
  details: {
    fullDescription?: string
    dimensions: string
    materials: string
    finishes: string
    weight: string
    specifications: string[]
    applications: string[]
  }
  measureCategories?: {
    label: string
    rows: { medida: string; kgPorMetro: number }[]
  }[]
}

export interface CartItem {
  productName: string
  categoryLabel: string
  medida: string
  cantidad: number
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    if (selectedProduct && sectionId !== "consultar") {
      setSelectedProduct(null)
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, 50)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const idx = prev.findIndex(i => i.productName === item.productName && i.medida === item.medida)
      if (idx >= 0) {
        const updated = [...prev]
        updated[idx] = { ...updated[idx], cantidad: updated[idx].cantidad + 1 }
        return updated
      }
      return [...prev, item]
    })
  }

  const handleRemoveFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index))
  }

  const handleChangeQty = (index: number, delta: number) => {
    setCartItems(prev => prev.map((item, i) =>
      i === index ? { ...item, cantidad: Math.max(1, item.cantidad + delta) } : item
    ))
  }

  // ── Detail view: Hero + product sidebar + product detail
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Header activeSection={activeSection} onNavigate={scrollToSection} />
        <Hero compact />
        <ProductDetailPage
          product={selectedProduct}
          cartItems={cartItems}
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onChangeQty={handleChangeQty}
        />
        <WhatsAppButton />
      </div>
    )
  }

  // ── Normal site
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <section id="home"><Hero /></section>
        <section id="sobre-nosotros"><About /></section>
        <section id="consultar">
          <Products
            cartItems={cartItems}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onChangeQty={handleChangeQty}
          />
        </section>
      </main>
      <Footer onNavigate={scrollToSection} />
      <WhatsAppButton />
    </div>
  )
}
