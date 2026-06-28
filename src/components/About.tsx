import React from "react"
import { Clock, Building2, BarChart3, Truck } from "lucide-react"

export function About() {
  const strengths = [
    {
      icon: Clock,
      title: "Más de 20 años de experiencia",
      description: "Trayectoria consolidada en el sector siderometalúrgico.",
    },
    {
      icon: Building2,
      title: "Instalaciones propias",
      description: "Infraestructura y equipamiento adecuados para una operación eficiente.",
    },
    {
      icon: BarChart3,
      title: "Proyectos de todo tipo y escala",
      description: "Trabajamos con obras, industrias y sector público.",
    },
    {
      icon: Truck,
      title: "Compromiso en cada entrega",
      description: "Cumplimiento de plazos y atención personalizada.",
    },
  ]

  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Content */}
          <div>
            <div className="mb-6">
              <span className="text-[#f5c400] uppercase tracking-wider">Sobre nosotros</span>
            </div>

            <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">
              Soluciones siderometalúrgicas con respaldo técnico y más de 20 años de trayectoria
            </h2>

            <div className="text-gray-600 mb-8 space-y-4">
              <p>
                <strong>LUSOMETAL SRL</strong> es una empresa dedicada a la comercialización y distribución de materiales
                siderometalúrgicos, con más de 20 años de trayectoria en el sector.
              </p>
              <p>
                A lo largo de estas dos décadas, hemos consolidado una estructura sólida basada en la experiencia, la
                experiencia operativa y un compromiso con cada cliente. Trabajamos con personal capacitado y
                recursos adecuados para garantizar materiales confiables y asesoramiento preciso en cada compra.
              </p>
              <p>
                Acompañamos proyectos de obra, industria y sector público, brindando soluciones acordes a cada
                necesidad, con atención personalizada y cumplimiento en los plazos de entrega.
              </p>
              <p>
                Nuestro objetivo es que cada cliente encuentre no solo los productos que necesita, sino también el respaldo
                y la confianza para llevar adelante su proyecto.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-9 h-9 bg-[#fff4b3] rounded-lg flex items-center justify-center mt-0.5">
                      {React.createElement(strength.icon, { size: 18, className: "text-[#f5c400]" })}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-semibold text-sm">{strength.title}</h4>
                      <p className="text-gray-600 text-sm">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side — updated images */}
          <div className="relative mt-8 lg:mt-0 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src="/images/trabajadores.webp"
                  alt="Equipo de trabajo Lusometal"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="/images/corte_moladora_2_años.webp"
                  alt="Corte con moladora en Lusometal"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Orange badge */}
            <div className="absolute -bottom-8 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-[#f5c400] text-gray-900 px-8 py-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl font-bold">20+</div>
                <div className="text-sm font-bold mt-1">Años en la industria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
