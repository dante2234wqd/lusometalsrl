"use client"

import { useState } from "react"
import { Calendar, MapPin, X, Plus, Info } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface Project {
  id: number
  title: string
  description: string
  image: string
  location: string
  date: string
  technicalSpecs: string
  details: {
    client: string
    duration: string
    team: string
    challenges: string
    solution: string
    results: string
  }
  hotspots: {
    x: string
    y: string
    title: string
    description: string
  }[]
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  const stats = [
    {
      number: "250+",
      label: "Proyectos completados",
      description: "Obras industriales y estructuras metálicas",
    },
    {
      number: "20",
      label: "Años de experiencia",
      description: "Trayectoria en el sector metalúrgico",
    },
    {
      number: "98%",
      label: "Tasa de satisfacción",
      description: "Clientes que vuelven a confiar en nosotros",
    },
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "Estructura Metálica Industrial",
      description: "Fabricación e instalación de estructura metálica para nave industrial de 2000m²",
      image:
        "https://images.unsplash.com/photo-1758448182583-8871f8eb43c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwcHJvamVjdHxlbnwxfHx8fDE3NjUwNjA3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Buenos Aires",
      date: "2024",
      technicalSpecs: "Estructura 2000 m² · Perfil HEB 400 · Montada en 12 días",
      details: {
        client: "Industrias ACME S.A.",
        duration: "6 meses",
        team: "15 técnicos especializados",
        challenges:
          "Construcción de estructura de gran envergadura con plazos ajustados y requerimientos específicos de resistencia sísmica.",
        solution:
          "Implementación de sistema modular prefabricado con vigas IPN y columnas HEB de alta resistencia. Montaje por secciones permitiendo continuidad de operaciones.",
        results:
          "Entrega 15 días antes del plazo. Estructura certificada para soportar cargas 30% superiores a las especificadas. Cliente reporta 100% de satisfacción.",
      },
      hotspots: [
        {
          x: "25%",
          y: "30%",
          title: "Vigas Principales",
          description: "Vigas IPN 600 de 12m de longitud, diseñadas para soportar cargas de hasta 50 toneladas",
        },
        {
          x: "65%",
          y: "45%",
          title: "Sistema de Unión",
          description: "Uniones soldadas y atornilladas certificadas, permitiendo expansión térmica controlada",
        },
        {
          x: "50%",
          y: "70%",
          title: "Columnas Estructurales",
          description: "Columnas HEB 400 con placas base de anclaje reforzadas para máxima estabilidad",
        },
      ],
    },
    {
      id: 2,
      title: "Escaleras y Barandas Metálicas",
      description: "Diseño y construcción de escaleras industriales con barandas de seguridad",
      image:
        "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY1MDYwNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Córdoba",
      date: "2024",
      technicalSpecs: "Barandas inoxidables · 180 metros lineales · Norma IRAM 3546",
      details: {
        client: "Complejo Industrial Los Álamos",
        duration: "3 meses",
        team: "8 especialistas en herrería",
        challenges:
          "Instalación de escaleras en área de operación continua, cumplimiento estricto de normativas de seguridad industrial.",
        solution:
          "Fabricación modular en taller, instalación nocturna para no interrumpir producción. Peldaños antideslizantes y barandas con altura normativa.",
        results:
          "Cero incidentes durante instalación. Aprobación de auditoría de seguridad en primera instancia. Reducción de 40% en tiempo de acceso entre niveles.",
      },
      hotspots: [
        {
          x: "40%",
          y: "35%",
          title: "Barandas de Seguridad",
          description: "Barandas de acero inoxidable de 1.10m de altura con pasamanos ergonómicos",
        },
        {
          x: "60%",
          y: "55%",
          title: "Peldaños Antideslizantes",
          description: "Rejilla metálica galvanizada con diseño antideslizante certificado",
        },
        {
          x: "30%",
          y: "75%",
          title: "Estructura Principal",
          description: "Largueros de acero estructural con tratamiento anticorrosivo y pintura epoxi",
        },
      ],
    },
    {
      id: 3,
      title: "Portones Industriales",
      description: "Fabricación de portones corredizos automatizados para planta industrial",
      image:
        "https://images.unsplash.com/photo-1764115424793-063c2a8b61f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWx3b3JraW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjUwNDA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Rosario",
      date: "2023",
      technicalSpecs: "Portones industriales con motor trifásico · 8 m × 4 m",
      details: {
        client: "Logística y Distribución del Sur",
        duration: "2 meses",
        team: "6 técnicos especializados",
        challenges:
          "Portones de gran tamaño (8m x 4m) con requerimientos de apertura rápida y alta frecuencia de uso diario.",
        solution:
          "Sistema de motorización industrial reforzado con rodamientos de alta capacidad. Control remoto y sensores de seguridad integrados.",
        results:
          "Reducción de 60% en tiempo de apertura/cierre. Sistema soporta más de 100 ciclos diarios. Mantenimiento mínimo en primer año de operación.",
      },
      hotspots: [
        {
          x: "50%",
          y: "25%",
          title: "Sistema de Motorización",
          description: "Motor industrial de 1.5 HP con control de velocidad variable y sistema de emergencia",
        },
        {
          x: "70%",
          y: "50%",
          title: "Rieles y Rodamientos",
          description: "Sistema de rieles de acero templado con rodamientos industriales de alta carga",
        },
        {
          x: "35%",
          y: "65%",
          title: "Estructura del Portón",
          description: "Caño estructural reforzado con chapa de acero de 3mm, tratamiento galvanizado",
        },
      ],
    },
  ]

  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left - Title and Description */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-orange-600 uppercase tracking-wider">Nuestros Proyectos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
              Soluciones metálicas que transforman industrias.
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Desde estructuras industriales de gran envergadura hasta trabajos de precisión en acero inoxidable, cada
              proyecto refleja nuestro compromiso con la calidad y la excelencia técnica.
            </p>
          </div>

          {/* Right - Image with Overlay */}
          <div className="relative">
            <img
              src="/images/mas-de-250-proyectos.jpeg"
              alt="Proyectos industriales"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 p-6 rounded-b-lg">
              <p className="text-white text-xl mb-0">Más de 250 proyectos completados con éxito</p>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <div className="grid sm:grid-cols-3 gap-8 text-white">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl mb-2">{stat.number}</div>
                <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
                <p className="text-orange-100 text-sm mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <ImageWithFallback
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technical Specs Badge */}
                <div className="bg-orange-50 border-l-4 border-orange-600 p-3 mb-4 rounded">
                  <p className="text-gray-900">{project.technicalSpecs}</p>
                </div>

                <div className="flex items-center gap-4 text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition-colors">
                  Ver Detalles del Proyecto
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors">
            Ver Todos los Proyectos
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
              <h2 className="text-2xl text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={() => {
                  setSelectedProject(null)
                  setActiveHotspot(null)
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {/* Image with Hotspots */}
              <div className="mb-8 relative">
                <ImageWithFallback
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-[500px] object-cover rounded-lg"
                />

                {/* Hotspot Buttons */}
                {selectedProject.hotspots.map((hotspot, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                      className="absolute w-10 h-10 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
                      style={{ left: hotspot.x, top: hotspot.y }}
                    >
                      <Plus
                        size={20}
                        className={`transition-transform ${activeHotspot === index ? "rotate-45" : ""}`}
                      />
                    </button>

                    {/* Hotspot Info Popup */}
                    {activeHotspot === index && (
                      <div
                        className="absolute bg-white rounded-lg shadow-xl p-4 w-72 z-20 border-2 border-orange-600"
                        style={{
                          left: `calc(${hotspot.x} + 45px)`,
                          top: hotspot.y,
                        }}
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <Info className="text-orange-600 flex-shrink-0" size={20} />
                          <h4 className="text-gray-900">{hotspot.title}</h4>
                        </div>
                        <p className="text-gray-600">{hotspot.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="text-orange-600" size={24} />
                  <div>
                    <p className="text-gray-600">Ubicación</p>
                    <p className="text-gray-900">{selectedProject.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="text-orange-600" size={24} />
                  <div>
                    <p className="text-gray-600">Año</p>
                    <p className="text-gray-900">{selectedProject.date}</p>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-orange-900 mb-1">Cliente</p>
                    <p className="text-gray-900">{selectedProject.details.client}</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-orange-900 mb-1">Duración</p>
                    <p className="text-gray-900">{selectedProject.details.duration}</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-orange-900 mb-1">Equipo</p>
                    <p className="text-gray-900">{selectedProject.details.team}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl mb-3 text-gray-900">Desafío</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedProject.details.challenges}</p>
                </div>

                <div>
                  <h3 className="text-xl mb-3 text-gray-900">Solución Implementada</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedProject.details.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl mb-3 text-gray-900">Resultados</h3>
                  <p className="text-gray-700 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    {selectedProject.details.results}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-gray-900 text-white p-6 rounded-lg">
                <h3 className="text-xl mb-2 text-white">¿Tienes un proyecto similar?</h3>
                <p className="text-gray-300 mb-4">Contáctanos para recibir una cotización personalizada</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:proyectos@metalurgica.com"
                    className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg transition-colors"
                  >
                    Solicitar Cotización
                  </a>
                  <a
                    href="tel:+5491123456789"
                    className="border-2 border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg transition-colors"
                  >
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
