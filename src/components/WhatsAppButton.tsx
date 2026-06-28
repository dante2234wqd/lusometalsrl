"use client"

export function WhatsAppButton() {
  const phoneNumber = "541130747014"
  const message = "Hola, necesito presupuesto para productos metálicos"

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" aria-hidden="true" />
      <img src="/boton_whatsapp.svg" alt="WhatsApp" className="relative w-14 h-14" />
    </button>
  )
}