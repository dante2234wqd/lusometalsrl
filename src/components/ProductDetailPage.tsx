"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronDown, ChevronUp, ChevronRight, Table2, Plus, Minus,
  Trash2, ShoppingCart, MessageCircle, CheckCircle, X,
  Search, Package, SlidersHorizontal, ZoomIn,
} from "lucide-react"
import type { Product, CartItem } from "../App"
import { products, categories } from "./Products"

const WA = "5491128960096"

const CATEGORY_IMAGES: Record<string, string> = {
  "Bisagras y Pivotes": "/images/Bisagra_forjadas_11zon.webp",
  "Brocas": "/images/BROCA ACERO RAPIDO - 4.75 mm_11zon.webp",
  "Cable de Acero y Accesorios": "/images/Cable de Acero 6 x 7 - esp 1.5mm x metro_11zon.webp",
  "Cable de acero y accesorios": "/images/Cable de Acero 6 x 7 - esp 1.5mm x metro_11zon.webp",
  "Discos de Corte": "/images/DISCO TYROLIT 114x1,6x22,2 ECOBASIC_11zon.webp",
  "Discos de Desbaste": "/images/DISCO TYROLIT 114x4,8x22,2 Desbaste Inox - FE_11zon.webp",
  "Discos Flaps": "/images/FLAP TYROLIT CONVEXO 115 G40 ECO BASIC_11zon.webp",
  "Cerraduras": "/images/Cerradura_Caja_cerradura_175x77x25_11zon.webp",
  "Electrodos": "/images/electrodos.webp",
  "Tornillos y Tarugos": "/images/T1 Tornillo 8x1 (4,2x25.4)Flangeado punta mecha zinc bl_11zon.webp",
  "Varillas Roscadas": "/images/Varilla Roscada 1 x 1000mm Zincada_11zon.webp",
  "Alambres": "/images/Alambre de negro Recocido N 8 (4.06mm)_11zon.webp",
  "Carros": "/images/CARROS_164_Acero_11zon.webp",
  "Rieles": "/images/riel_superior_plano_11zon.webp",
  "Ruedas y Roldanas": "/images/ruedas_de_goma_fijas_100_11zon.webp",
  "Topes, Receptores y Estabilizadores": "/images/Estabilizador_simple_11zon.webp",
  "Caños Cuadrados": "/images/Caños Estructurales cuadrados.webp",
  "Caños Rectangulares": "/images/tubos_perfiles_11zon.webp",
  "Caños Redondos": "/images/caños_uso_mecanico.webp",
  "Caños Uso Mecánico": "/images/caños_uso_mecanico.webp",
  "Chapas Cincalum Acanaladas": "/images/chapas_galvanizadas_acanaladas_trapezoidales_11zon.webp",
  "Chapas Cincalum Trapezoidales": "/images/chapas_galvanizadas_acanaladas_trapezoidales_11zon.webp",
  "Chapas Color Negro Acanaladas": "/images/chapa_techo_negra_acanalada_11zon.webp",
  "Chapas Color Negro Trapezoidales": "/images/chapa_techo_negra_acanalada_11zon.webp",
  "Chapas de Policarbonato": "/images/chapa_policarbonato_polipropileno_11zon.webp",
  "Chapas de Polipropileno": "/images/chapa_policarbonato_polipropileno_11zon.webp",
  "Chapas Galvanizadas Acanaladas": "/images/chapas_galvanizadas_acanaladas_trapezoidales_11zon.webp",
  "Chapas Galvanizadas Trapezoidales": "/images/chapas_galvanizadas_acanaladas_trapezoidales_11zon.webp",
  "Aislantes y Accesorios para Techos": "/images/Compriband_Chapa_trapezoidal_Inferior _11zon.webp",
  "Antideslizantes": "/images/chapa_antideslizante_11zon.webp",
  "Estampadas": "/images/chapas_estampadas_11zon.webp",
  "Galvanizadas": "/images/Chapa_Galvanizada_11zon.webp",
  "Laminadas en Caliente": "/images/chapa_laminada_caliente_11zon.webp",
  "Laminadas en Frio": "/images/laminadas_frio_11zon.webp",
  "LC Decapadas": "/images/Chapa_LC_Decapada_frio_11zon.webp",
  "IPN": "/images/perfiles_ipn_11zon.webp",
  "UPN": "/images/perfil_upn_11zon.webp",
  "Angulos": "/images/angulo_hierro_11zon.webp",
  "Ángulos": "/images/angulo_hierro_11zon.webp",
  "Planchuelas": "/images/planchuelas_11zon.webp",
  "Planchuelas Perforadas": "/images/planchuelas_11zon.webp",
  "Perfiles T": "/images/perfiles_t.webp",
  "Perfiles C Galvanizados": "/images/perfiles_c_galvanizados_11zon.webp",
  "Perfiles C Negro LC": "/images/perfiles_c_negro_LC_11zon.webp",
  "Perfiles U": "/images/perfiles_u_chapa_11zon.webp",
  "Redondos Aletados DN": "/images/Redondo_aletado_DN_11zon.webp",
  "Redondos Lisos": "/images/redondos_lisos_11zon.webp",
  "Redondos Lisos Herrero": "/images/Redondo_Liso_Herrero_11zon.webp",
  "Cuadrados Laminados": "/images/Cuadrado_Laminado_11zon.webp",
  "Malla Electrosoldada": "/images/Malla_Sostén_Membrana.webp",
  "Metal Desplegado": "/images/Guía_para_piso.webp",
}

// Lightbox: imagen siempre centrada en pantalla sin scroll
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={e => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-lg text-gray-700 hover:text-gray-900 z-10"
        >
          <X size={18} />
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full rounded-2xl shadow-2xl object-contain"
          style={{ maxHeight: "85vh" }}
        />
      </div>
    </div>
  )
}

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), delay) },
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])
  return { ref, visible }
}

function MeasureTable({ productName, measureCategories, onAddToCart }: {
  productName: string
  measureCategories: NonNullable<Product["measureCategories"]>
  onAddToCart: (item: CartItem) => void
}) {
  const [openCat, setOpenCat] = useState<string | null>(measureCategories[0]?.label ?? null)
  const [addedKey, setAddedKey] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const handleAdd = (catLabel: string, row: { medida: string; kgPorMetro: number }) => {
    const key = `${catLabel}__${row.medida}`
    onAddToCart({ productName, categoryLabel: catLabel, medida: row.medida, cantidad: 1 })
    setAddedKey(key)
    setTimeout(() => setAddedKey(null), 1200)
  }

  return (
    <>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      <div className="space-y-3">
        {measureCategories.map(cat => {
          const catImage = CATEGORY_IMAGES[cat.label]
          const isOpen = openCat === cat.label
          return (
            <div key={cat.label} className="border border-gray-200 rounded-xl overflow-hidden">
              <div
                role="button" tabIndex={0}
                onClick={() => setOpenCat(isOpen ? null : cat.label)}
                onKeyDown={e => e.key === "Enter" && setOpenCat(isOpen ? null : cat.label)}
                className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer select-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {catImage && (
                    <div
                      onClick={e => { e.stopPropagation(); setLightbox({ src: catImage, alt: cat.label }) }}
                      className="relative shrink-0 rounded-lg overflow-hidden border border-gray-200 hover:border-orange-400 transition-colors cursor-zoom-in group/thumb"
                      style={{ width: 40, height: 40 }}
                      title="Ver imagen en grande"
                    >
                      <img src={catImage} alt={cat.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors flex items-center justify-center">
                        <ZoomIn size={13} className="text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  )}
                  <Table2 className="text-orange-500 shrink-0" size={16} />
                  <span className="font-semibold text-gray-800 text-sm truncate">{cat.label}</span>
                  <span className="text-xs text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full shrink-0 hidden sm:inline">{cat.rows.length}</span>
                </div>
                {isOpen ? <ChevronUp size={16} className="text-gray-400 shrink-0 ml-2" /> : <ChevronDown size={16} className="text-gray-400 shrink-0 ml-2" />}
              </div>
              {isOpen && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-orange-50 border-b border-orange-100">
                        <th className="text-left px-5 py-2.5 text-gray-700 font-semibold">Medida</th>
                        <th className="text-center px-3 py-2.5 text-gray-700 font-semibold whitespace-nowrap">Kg/m</th>
                        <th className="text-center px-3 py-2.5 text-gray-700 font-semibold">Agregar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.rows.map((row, i) => {
                        const key = `${cat.label}__${row.medida}`
                        const added = addedKey === key
                        return (
                          <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                            <td className="px-5 py-2.5 text-gray-700 text-xs sm:text-sm">{row.medida}</td>
                            <td className="px-3 py-2.5 text-center text-gray-500 tabular-nums text-xs sm:text-sm">{row.kgPorMetro.toFixed(2)}</td>
                            <td className="px-3 py-2.5 text-center">
                              <button
                                onClick={() => handleAdd(cat.label, row)}
                                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${added ? "bg-green-100 text-green-700" : "bg-orange-100 hover:bg-orange-600 text-orange-700 hover:text-white"}`}
                              >
                                {added ? <><CheckCircle size={12} />OK</> : <><Plus size={12} />Agregar</>}
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-400 px-5 py-2 bg-gray-50 border-t border-gray-100">* Precios a confirmar. Consultá disponibilidad por WhatsApp.</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

function CartPanel({ items, onClose, onRemove, onChangeQty }: {
  items: CartItem[]; onClose: () => void; onRemove: (i: number) => void; onChangeQty: (i: number, d: number) => void
}) {
  const send = () => {
    const lines = [
      "Hola! Quiero consultar por los siguientes materiales:",
      "",
      ...items.map((item, i) =>
        `${i + 1}. *${item.productName}*\n   📐 ${item.medida}\n   📦 ${item.categoryLabel}\n   🔢 Cantidad: ${item.cantidad}`
      ),
      "",
      "¿Podrían enviarme precio y disponibilidad? Gracias!",
    ]
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank")
  }
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-orange-600" size={20} />
            <span className="text-base font-bold text-gray-900">Mi pedido</span>
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">{items.length}</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><X size={18} /></button>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 space-y-3">
          {items.length === 0
            ? <p className="text-center text-gray-400 py-12 text-sm">Todavía no agregaste ningún producto.</p>
            : items.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 pr-2">
                    <p className="font-semibold text-gray-900 text-sm">{item.productName}</p>
                    <p className="text-orange-600 text-xs mt-0.5">{item.categoryLabel}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.medida}</p>
                  </div>
                  <button onClick={() => onRemove(i)} className="text-gray-400 hover:text-red-500 p-1"><Trash2 size={14} /></button>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">Cant:</span>
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2 py-1">
                    <button onClick={() => onChangeQty(i, -1)} disabled={item.cantidad <= 1} className="text-gray-500 hover:text-gray-800 disabled:opacity-30"><Minus size={13} /></button>
                    <span className="text-sm font-semibold text-gray-900 w-5 text-center">{item.cantidad}</span>
                    <button onClick={() => onChangeQty(i, 1)} className="text-gray-500 hover:text-gray-800"><Plus size={13} /></button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {items.length > 0 && (
          <div className="px-5 py-4 border-t space-y-2 shrink-0">
            <p className="text-xs text-gray-500 text-center">Se abrirá WhatsApp con tu pedido completo.</p>
            <button onClick={send} className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg">
              <MessageCircle size={20} />Enviar pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function DesktopSidebar({ currentProduct, onSelect }: { currentProduct: Product; onSelect: (p: Product) => void }) {
  const [openCat, setOpenCat] = useState<string | null>(currentProduct.category)
  const [search, setSearch] = useState("")
  const grouped = categories.filter(c => c.id !== "all").map(c => ({
    ...c, items: products.filter(p => p.category === c.id && (search === "" || p.name.toLowerCase().includes(search.toLowerCase()))),
  })).filter(c => c.items.length > 0)
  return (
    <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-24 self-start">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gray-900 px-5 py-4">
          <h2 className="text-white font-bold text-base flex items-center gap-2"><Package size={17} className="text-orange-400" />Productos</h2>
        </div>
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar producto..."
              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50" />
          </div>
        </div>
        <div className="overflow-y-auto overscroll-contain" style={{ maxHeight: "calc(100vh - 200px)" }}>
          {grouped.map(cat => (
            <div key={cat.id} className="border-b border-gray-100 last:border-0">
              <button onClick={() => setOpenCat(openCat === cat.id ? null : cat.id)}
                className={`w-full flex items-center justify-between px-5 py-3 text-left transition-colors hover:bg-gray-50 ${openCat === cat.id ? "bg-orange-50" : ""}`}>
                <span className={`text-sm font-semibold ${openCat === cat.id ? "text-orange-600" : "text-gray-700"}`}>{cat.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{cat.items.length}</span>
                  {openCat === cat.id ? <ChevronUp size={14} className="text-orange-500" /> : <ChevronRight size={14} className="text-gray-400" />}
                </div>
              </button>
              {openCat === cat.id && (
                <div className="bg-gray-50 border-t border-gray-100">
                  {cat.items.map(p => (
                    <button key={p.id} onClick={() => onSelect(p)}
                      className={`w-full flex items-center gap-3 px-5 py-2.5 text-left transition-all hover:bg-orange-50 group ${currentProduct.id === p.id ? "bg-orange-100 border-l-2 border-orange-500" : "border-l-2 border-transparent"}`}>
                      <img src={p.image} alt={p.name} className="w-9 h-9 object-cover rounded-lg shrink-0 border border-gray-200" />
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-medium truncate ${currentProduct.id === p.id ? "text-orange-700" : "text-gray-700 group-hover:text-orange-600"}`}>{p.name}</p>
                      </div>
                      <ChevronRight size={13} className={`shrink-0 ${currentProduct.id === p.id ? "text-orange-500" : "text-gray-300"}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

function MobileProductList({ currentProduct, onSelect }: { currentProduct: Product; onSelect: (p: Product) => void }) {
  const [openCat, setOpenCat] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const grouped = categories.filter(c => c.id !== "all").map(c => ({
    ...c, items: products.filter(p => p.category === c.id && (search === "" || p.name.toLowerCase().includes(search.toLowerCase()))),
  })).filter(c => c.items.length > 0)
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-5">
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar producto..."
            className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50" />
        </div>
      </div>
      {grouped.map(cat => (
        <div key={cat.id} className="border-b border-gray-100 last:border-0">
          <button onClick={() => setOpenCat(openCat === cat.id ? null : cat.id)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${openCat === cat.id ? "bg-orange-50" : "hover:bg-gray-50"}`}>
            <span className={`text-sm font-semibold ${openCat === cat.id ? "text-orange-600" : "text-gray-700"}`}>{cat.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{cat.items.length}</span>
              {openCat === cat.id ? <ChevronUp size={14} className="text-orange-500" /> : <ChevronRight size={14} className="text-gray-400" />}
            </div>
          </button>
          {openCat === cat.id && (
            <div className="bg-gray-50 border-t border-gray-100">
              {cat.items.map(p => (
                <button key={p.id} onClick={() => onSelect(p)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all hover:bg-orange-50 ${currentProduct.id === p.id ? "bg-orange-100 border-l-2 border-orange-500" : "border-l-2 border-transparent"}`}>
                  <img src={p.image} alt={p.name} className="w-9 h-9 object-cover rounded-lg shrink-0 border border-gray-200" />
                  <p className={`text-xs font-medium truncate flex-1 ${currentProduct.id === p.id ? "text-orange-700" : "text-gray-700"}`}>{p.name}</p>
                  <ChevronRight size={13} className={`shrink-0 ${currentProduct.id === p.id ? "text-orange-500" : "text-gray-300"}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Botón flotante de WhatsApp con ícono SVG y pastilla de texto
function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WA}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-0 group"
      aria-label="Consultá tu presupuesto por WhatsApp"
    >
      {/* Pastilla de texto — aparece al hover en desktop, siempre visible en mobile */}
      <span className="
        mr-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg
        whitespace-nowrap
        opacity-0 translate-x-2 pointer-events-none
        group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-200
        sm:block hidden
      ">
        Consultá tu presupuesto
      </span>
      {/* Pastilla siempre visible en mobile */}
      <span className="sm:hidden mr-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
        Consultá tu presupuesto
      </span>
      {/* Ícono WhatsApp */}
      <div className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] transition-colors shrink-0">
        <img src="/images/icono_whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
      </div>
    </a>
  )
}

export function ProductDetailPage({
  product, cartItems, onSelectProduct, onAddToCart, onRemoveFromCart, onChangeQty,
}: {
  product: Product; cartItems: CartItem[]; onSelectProduct: (p: Product) => void
  onAddToCart: (item: CartItem) => void; onRemoveFromCart: (index: number) => void; onChangeQty: (index: number, delta: number) => void
}) {
  const [tableOpen, setTableOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileListOpen, setMobileListOpen] = useState(false)
  const [heroLightbox, setHeroLightbox] = useState(false)
  const { ref: detailRef, visible: detailVisible } = useReveal(100)

  useEffect(() => { setTableOpen(false); setMobileListOpen(false) }, [product.id])

  const measureData = product.measureCategories && product.measureCategories.length > 0 ? product.measureCategories : null
  const getWhatsAppMessage = () =>
    encodeURIComponent(`Hola, me interesa consultar sobre *${product.name}*.\n\n¿Me pueden brindar precio y disponibilidad?\n\nGracias!`)

  return (
    <div className="bg-gray-50 min-h-screen">
      {heroLightbox && <Lightbox src={product.image} alt={product.name} onClose={() => setHeroLightbox(false)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex gap-8">
          <DesktopSidebar currentProduct={product} onSelect={onSelectProduct} />
          <div ref={detailRef} className={`flex-1 min-w-0 transition-all duration-700 ${detailVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

            <div className="lg:hidden flex items-center justify-between mb-3 bg-gray-900 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2 text-white min-w-0">
                <Package size={15} className="text-orange-400 shrink-0" />
                <span className="font-semibold text-sm truncate">{product.name}</span>
              </div>
              <button onClick={() => setMobileListOpen(v => !v)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors shrink-0 ml-3 ${mobileListOpen ? "text-orange-400" : "text-gray-300 hover:text-white"}`}>
                <span>Ver productos</span><SlidersHorizontal size={15} />
              </button>
            </div>

            {mobileListOpen && (
              <div className="lg:hidden">
                <MobileProductList currentProduct={product} onSelect={(p) => { onSelectProduct(p); setMobileListOpen(false) }} />
              </div>
            )}

            <div className="relative w-full rounded-2xl overflow-hidden mb-6 shadow-lg cursor-zoom-in group"
              style={{ height: "clamp(200px, 35vw, 460px)" }} onClick={() => setHeroLightbox(true)}>
              <img key={product.id} src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={18} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 sm:pb-8">
                <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">
                  {categories.find(c => c.id === product.category)?.name}
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mt-1 leading-tight">{product.name}</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm mb-5">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{product.details.fullDescription || product.description}</p>
              {product.details.applications?.length > 0 && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Aplicaciones</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.details.applications.map((app, i) => (
                      <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-semibold">{app}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {measureData ? (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <button onClick={() => setTableOpen(!tableOpen)}
                  className="w-full flex items-center justify-between bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 sm:py-5 rounded-xl transition-all mb-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Table2 size={20} className="text-orange-400" />
                    <div className="text-left">
                      <p className="font-bold text-base sm:text-lg leading-tight">Ver tabla de medidas</p>
                      <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                        {measureData.length} categorías · {measureData.reduce((a, c) => a + c.rows.length, 0)} medidas
                      </p>
                    </div>
                  </div>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${tableOpen ? "rotate-180" : ""}`} />
                </button>
                {tableOpen && <MeasureTable productName={product.name} measureCategories={measureData} onAddToCart={onAddToCart} />}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <a href={`https://wa.me/${WA}?text=${getWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:-translate-y-0.5">
                  <MessageCircle size={22} />Consultar por WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Carrito — bottom-24 para que quede encima del botón de WhatsApp */}
      {cartItems.length > 0 && (
        <button onClick={() => setCartOpen(true)}
          className="fixed bottom-24 right-4 sm:bottom-24 sm:right-6 z-40 bg-gray-900 text-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-2xl hover:bg-gray-800 transition-all border border-white/10">
          <ShoppingCart size={18} />
          <span className="font-semibold text-sm hidden sm:inline">Ver pedido</span>
          <span className="bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse">{cartItems.length}</span>
        </button>
      )}

      {cartOpen && <CartPanel items={cartItems} onClose={() => setCartOpen(false)} onRemove={onRemoveFromCart} onChangeQty={onChangeQty} />}

      {/* Botón flotante WhatsApp */}
      <WhatsAppFAB />
    </div>
  )
}
