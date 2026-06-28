"use client"

import { Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

interface FooterProps {
  onNavigate: (section: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl text-white mb-4">Lusometal SRL</h3>
            <p className="mb-4">Soluciones integrales en metalurgia con más de 20 años de experiencia en el mercado.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#f5c400] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#f5c400] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#f5c400] transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate("home")} className="hover:text-[#f5c400] transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("sobre-nosotros")} className="hover:text-[#f5c400] transition-colors">
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("consultar")} className="hover:text-[#f5c400] transition-colors">
                  Productos
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>Estructuras Metálicas</li>
              <li>Piezas Industriales</li>
              <li>Herrería en General</li>
              <li>Carpintería Metálica</li>
              <li>Proyectos a Medida</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Av. Cobo 1856, CABA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+5491128960096" className="hover:text-[#f5c400] transition-colors">
                  +54 9 11 2896-0096
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2026 LUSOMETAL SRL. Todos los derechos reservados.</p>
          <p className="text-sm mt-2 text-gray-500">
            Diseñada y autorizada por{" "}
            <a
              href="https://www.staerstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5c400] transition-colors underline underline-offset-2"
            >
              STAER STUDIO
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
