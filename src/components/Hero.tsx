"use client"

import { ArrowRight, X, Send, User, Phone, Building2, MessageSquare } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const WA = "5491128960096"

interface HeroProps {
  compact?: boolean
}

export function Hero({ compact = false }: HeroProps) {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ nombre: "", telefono: "", empresa: "", mensaje: "" })
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [showForm])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      "Hola, quiero solicitar una cotización.",
      "",
      `👤 Nombre: ${formData.nombre}`,
      formData.empresa ? `🏭 Empresa: ${formData.empresa}` : "",
      `📱 Teléfono: ${formData.telefono}`,
      "",
      `📋 Consulta: ${formData.mensaje}`,
    ].filter(l => l !== undefined).join("\n")
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines)}`, "_blank")
  }

  return (
    <div
      ref={ref}
      className={`relative bg-gray-900 text-white flex items-center overflow-hidden ${
        compact ? "min-h-[60vh]" : "min-h-[90vh]"
      }`}
    >
      {/* Background — desktop */}
      <div className="absolute inset-0">
        <img
          src="/images/background_hero.webp"
          alt="Materiales siderometalúrgicos Lusometal"
          className="hidden sm:block w-full h-full object-cover opacity-40"
        />
        {/* Background — mobile */}
        <img
          src="/images/background_mobile.webp"
          alt="Materiales siderometalúrgicos Lusometal"
          className="sm:hidden w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className={`max-w-2xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-5">
            Más de 20 años de experiencia · Stock permanente
          </p>

          <h1
            className={`font-black text-white leading-[1.1] mb-6 ${
              compact ? "text-4xl sm:text-5xl" : "text-4xl sm:text-5xl lg:text-[3.5rem]"
            }`}
          >
            Materiales siderometalúrgicos
            <br />
            para{" "}
            <span className="text-orange-500">obras, industrias</span>
            <br />
            <span className="text-orange-500">y herrería</span>
          </h1>

          <p className="text-lg sm:text-xl mb-10 text-gray-300 leading-relaxed">
            Tubos estructurales, perfiles, chapas y accesorios de acero
            con stock permanente y asesoramiento técnico especializado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="group bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 font-semibold shadow-lg hover:-translate-y-1"
            >
              Solicitar cotización
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("sobre-nosotros")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-xl transition-all duration-200 font-semibold"
            >
              Conocer más
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {["Stock permanente", "Asesoramiento técnico", "Obras · Industria · Sector público"].map(item => (
              <span key={item} className="text-gray-400 text-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowForm(false)} />
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[90dvh] overflow-hidden">
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 shrink-0">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Solicitar cotización</h2>
                <p className="text-xs text-gray-500 mt-0.5">Te respondemos por WhatsApp</p>
              </div>
              <button onClick={() => setShowForm(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto overscroll-contain flex-1">
              <form onSubmit={handleWhatsAppSubmit} className="p-5 space-y-3">
                {[
                  { icon: User, name: "nombre", type: "text", placeholder: "Tu nombre *", required: true },
                  { icon: Phone, name: "telefono", type: "tel", placeholder: "Teléfono *", required: true },
                  { icon: Building2, name: "empresa", type: "text", placeholder: "Empresa (opcional)", required: false },
                ].map(({ icon: Icon, name, type, placeholder, required }) => (
                  <div key={name} className="relative">
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                    <input type={type} name={name} required={required}
                      value={formData[name as keyof typeof formData]} onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base" />
                  </div>
                ))}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <textarea name="mensaje" required value={formData.mensaje} onChange={handleChange} rows={3}
                    placeholder="¿Qué materiales o productos necesitás? *"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-base" />
                </div>
                <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg text-base">
                  <Send size={18} />Enviar por WhatsApp
                </button>
                <p className="text-xs text-center text-gray-400 pb-1">Al enviar, se abrirá WhatsApp con tu consulta lista.</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
