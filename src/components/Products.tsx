"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Search, SlidersHorizontal, Send, ChevronRight, ShoppingCart, Plus, Minus,
  Trash2, User, Phone, Tag, X, MessageCircle, MapPin,
} from "lucide-react"
import type { Product, CartItem } from "../App"
import {
  measures_canos,
  measures_chapas_de_techo,
  measures_chapas_lisas,
  measures_perfiles,
  measures_perfiles_de_chapa,
  measures_redondos_y_cuadrados,
  measures_mallas_y_metal_desplegado,
  measures_ferreteria,
  measures_insumos_p_portones_y_puertas,
} from "../data/products-data"

export const categories = [
  { id: "all", name: "Todos los Productos" },
  { id: "tubos", name: "Tubos y Perfiles" },
  { id: "perfiles-chapa", name: "Perfiles de Chapa" },
  { id: "estructurales", name: "Perfiles Estructurales" },
  { id: "chapas-techo", name: "Chapas de Techo" },
  { id: "chapas-lisas", name: "Chapas Lisas" },
  { id: "barras", name: "Barras y Redondos" },
  { id: "portones", name: "Portones y Puertas" },
  { id: "cerramientos", name: "Cerramientos y Mallas" },
  { id: "accesorios", name: "Ferretería y Accesorios" },
]

const WA = "541130747014"

export const products: Product[] = [
  // ── TUBOS / CAÑOS ──
  {
    id: 1, name: "Caños Estructurales", category: "tubos",
    description: "Caños cuadrados, rectangulares y redondos de acero para estructuras metálicas livianas y medianas",
    image: "/images/Caños Estructurales cuadrados.webp",
    details: { fullDescription: "Caños estructurales de acero en secciones cuadrada, rectangular y redonda. Fabricados con acero al carbono de alta resistencia mecánica, son la solución más versátil para estructuras metálicas, herrería y carpintería metálica. Largo comercial: 6 metros.", dimensions: "Cuadrados, rectangulares y redondos | Largo comercial: 6 metros", materials: "Acero al carbono | LF y LC", finishes: "Negro / Galvanizado", weight: "Variable según sección y espesor", specifications: ["Espesores desde 0.9mm hasta 6.4mm", "Normas IRAM", "Stock permanente"], applications: ["Estructuras metálicas", "Herrería", "Construcción", "Carpintería metálica"] },
    measureCategories: measures_canos.filter(c => c.label.includes("Cuadrados") || c.label.includes("Rectangulares") || c.label.includes("Redondos")),
  },
  {
    id: 2, name: "Caños de Uso Mecánico", category: "tubos",
    description: "Caños redondos para aplicaciones mecánicas e instalaciones industriales",
    image: "/images/caños_uso_mecanico.webp",
    details: { fullDescription: "Caños redondos de uso mecánico para instalaciones de fluidos, gas e industria.", dimensions: "Diámetros nominales desde 1/2\" | Largo comercial: barras", materials: "Acero | Para uso mecánico e instalaciones", finishes: "Negro", weight: "Variable según diámetro", specifications: ["Medidas en pulgadas y mm", "Stock permanente"], applications: ["Instalaciones", "Mecánica industrial", "Construcción", "Plomería"] },
    measureCategories: measures_canos.filter(c => c.label.includes("Mecánico")),
  },
  // ── PERFILES DE CHAPA ──
  {
    id: 3, name: "Perfiles C Galvanizados", category: "perfiles-chapa",
    description: "Perfiles C galvanizados para estructuras de techos y entrepisos livianos",
    image: "/images/perfiles_c_galvanizados_11zon.webp",
    details: { fullDescription: "Perfiles C conformados en frío con terminación galvanizada, ideales para estructuras de techos, entrepisos y cerramientos livianos.", dimensions: "Varios anchos y espesores | Largo: 12 metros", materials: "Chapa galvanizada | Conformado en frío", finishes: "Galvanizado", weight: "Variable según sección", specifications: ["Normas IRAM", "Alta resistencia a la corrosión", "Stock permanente"], applications: ["Techos", "Entrepisos livianos", "Steel framing", "Cerramientos"] },
    measureCategories: measures_perfiles_de_chapa.filter(c => c.label.includes("Galvanizados")),
  },
  {
    id: 4, name: "Perfiles C Negro LC", category: "perfiles-chapa",
    description: "Perfiles C laminados en caliente para estructuras y refuerzos",
    image: "/images/perfiles_c_negro_LC_11zon.webp",
    details: { fullDescription: "Perfiles C conformados en negro laminado en caliente para estructuras, refuerzos y carpintería metálica general.", dimensions: "Varios anchos y espesores | Largo: 12 metros", materials: "Chapa LC negra | Conformado en frío", finishes: "Negro laminado", weight: "Variable según sección", specifications: ["Para pintar o tratar", "Stock permanente"], applications: ["Estructuras", "Refuerzos", "Carpintería metálica", "Herrería"] },
    measureCategories: measures_perfiles_de_chapa.filter(c => c.label.includes("Negro")),
  },
  {
    id: 5, name: "Perfiles U de Chapa", category: "perfiles-chapa",
    description: "Perfiles U de chapa para guías, canales y estructuras livianas",
    image: "/images/perfiles_u_chapa_11zon.webp",
    details: { fullDescription: "Perfiles U conformados en chapa para aplicaciones de guías, canales, estructuras livianas y montaje.", dimensions: "Varios anchos y espesores | Largo: 12 metros", materials: "Chapa negra LC", finishes: "Negro", weight: "Variable según sección", specifications: ["Medidas normalizadas", "Stock permanente"], applications: ["Guías", "Canales", "Estructuras livianas", "Montaje industrial"] },
    measureCategories: measures_perfiles_de_chapa.filter(c => c.label.includes("Perfiles U")),
  },
  // ── PERFILES ESTRUCTURALES ──
  {
    id: 6, name: "IPN - Perfil Doble T", category: "estructurales",
    description: "Perfil laminado en caliente de doble T para vigas y columnas de gran carga",
    image: "/images/perfiles_ipn_11zon.webp",
    details: { fullDescription: "Perfil IPN laminado en caliente con sección doble T para grandes cargas estructurales.", dimensions: "IPN 80mm a IPN 220mm | Largo: 6 metros", materials: "Acero estructural laminado en caliente", finishes: "Laminado natural", weight: "Variable según altura", specifications: ["Normas internacionales", "Stock en medidas principales"], applications: ["Vigas principales", "Columnas", "Estructuras portantes", "Construcción pesada"] },
    measureCategories: measures_perfiles.filter(c => c.label === "IPN"),
  },
  {
    id: 7, name: "UPN - Perfil U Estructural", category: "estructurales",
    description: "Perfil UPN laminado para rieles, guías y refuerzos estructurales",
    image: "/images/perfil_upn_11zon.webp",
    details: { fullDescription: "Perfil UPN laminado en caliente en sección canal U.", dimensions: "UPN 40 a UPN 200 | Largo: 6 metros", materials: "Acero estructural laminado", finishes: "Laminado en caliente", weight: "Según altura del perfil", specifications: ["Medidas normalizadas", "Stock permanente"], applications: ["Rieles", "Guías", "Refuerzos estructurales", "Marcos"] },
    measureCategories: measures_perfiles.filter(c => c.label === "UPN"),
  },
  {
    id: 8, name: "Ángulos de Hierro", category: "estructurales",
    description: "Perfiles angulares en L para refuerzos, escuadras y estructuras ligeras",
    image: "/images/angulo_hierro_11zon.webp",
    details: { fullDescription: "Perfiles angulares en L de acero con alas iguales para herrería y estructuras livianas.", dimensions: "Varios anchos y espesores | Largo: 6 metros", materials: "Acero al carbono | Laminado en caliente", finishes: "Natural / Negro", weight: "Variable según medida", specifications: ["Alas iguales", "Stock permanente"], applications: ["Estructuras livianas", "Escuadras", "Rejas", "Marcos y soportes"] },
    measureCategories: [...measures_perfiles.filter(c => c.label === "Angulos"), ...measures_perfiles.filter(c => c.label === "Ángulos")].filter((c, i, arr) => arr.findIndex(x => x.label === c.label) === i),
  },
  {
    id: 9, name: "Planchuelas", category: "estructurales",
    description: "Barras planas de acero para herrajes, refuerzos y conexiones",
    image: "/images/planchuelas_11zon.webp",
    details: { fullDescription: "Barras planas macizas de acero en amplia variedad de anchos y espesores. Incluye versiones lisas y perforadas.", dimensions: "Ancho x espesor | Largo: 6 metros", materials: "Acero al carbono | Laminado", finishes: "Negro natural", weight: "Variable según sección", specifications: ["Lisos y perforados", "Corte a medida disponible"], applications: ["Herrajes", "Refuerzos", "Uniones", "Herrería general"] },
    measureCategories: measures_perfiles.filter(c => c.label === "Planchuelas" || c.label === "Planchuelas Perforadas"),
  },
  {
    id: 10, name: "Perfiles T", category: "estructurales",
    description: "Perfiles en T para estantes, soportes y estructuras metálicas",
    image: "/images/perfiles_t.webp",
    details: { fullDescription: "Perfiles en forma de T para soportes, estantes, rieles y estructuras metálicas.", dimensions: "Varios anchos y espesores", materials: "Acero al carbono | Laminado", finishes: "Natural", weight: "Variable", specifications: ["Medidas en pulgadas y mm", "Stock disponible"], applications: ["Soportes", "Estantes", "Rieles", "Estructuras"] },
    measureCategories: measures_perfiles.filter(c => c.label === "Perfiles T"),
  },
  // ── CHAPAS DE TECHO ──
  {
    id: 11, name: "Chapas de Techo Cincalum", category: "chapas-techo",
    description: "Chapas cincalum acanaladas y trapezoidales para techos industriales y rurales",
    image: "/images/chapas_galvanizadas_acanaladas_trapezoidales_11zon.webp",
    details: { fullDescription: "Chapas cincalum en formatos acanalado y trapezoidal. Máxima resistencia a la corrosión.", dimensions: "Ancho útil 1.1m | Largo variable | Espesores 0.40 a 0.80mm", materials: "Aleación aluminio-zinc (cincalum)", finishes: "Cincalum natural", weight: "Variable según espesor y largo", specifications: ["Acanaladas y trapezoidales", "Espesores desde 0.40mm"], applications: ["Techos industriales", "Galpones", "Techos rurales", "Tinglados"] },
    measureCategories: measures_chapas_de_techo.filter(c => c.label.includes("Cincalum")),
  },
  {
    id: 12, name: "Chapas de Techo Color", category: "chapas-techo",
    description: "Chapas prepintadas en color negro, blanco y otros para techos con mejor terminación",
    image: "/images/chapa_techo_negra_acanalada_11zon.webp",
    details: { fullDescription: "Chapas prepintadas en colores para techos con mejor terminación estética.", dimensions: "Ancho útil 1.1m | Largo variable", materials: "Chapa prepintada | Color negro, blanco y otros", finishes: "Prepintado color", weight: "Variable", specifications: ["Acanaladas y trapezoidales", "Varios colores disponibles"], applications: ["Techos residenciales", "Techos comerciales", "Fachadas", "Cerramientos"] },
    measureCategories: measures_chapas_de_techo.filter(c => c.label.includes("Color")),
  },
  {
    id: 13, name: "Chapas de Techo Galvanizadas", category: "chapas-techo",
    description: "Chapas galvanizadas acanaladas y trapezoidales para techos y cerramientos",
    image: "/images/chapas_galvanizadas_acanaladas_trapezoidales_11zon.webp",
    details: { fullDescription: "Chapas galvanizadas en formatos acanalado y trapezoidal.", dimensions: "Ancho útil 1.1m | Largo variable", materials: "Chapa galvanizada", finishes: "Galvanizado", weight: "Variable", specifications: ["Acanaladas y trapezoidales", "Varios espesores"], applications: ["Techos", "Cerramientos", "Galpones", "Cobertizos"] },
    measureCategories: measures_chapas_de_techo.filter(c => c.label.includes("Galvanizadas")),
  },
  {
    id: 14, name: "Chapas de Policarbonato y Polipropileno", category: "chapas-techo",
    description: "Chapas traslúcidas de policarbonato y polipropileno para iluminación natural",
    image: "/images/chapa_policarbonato_polipropileno_11zon.webp",
    details: { fullDescription: "Chapas traslúcidas para iluminación natural en techos.", dimensions: "Ancho 1.1m | Largo variable", materials: "Policarbonato / Polipropileno", finishes: "Fumé / Blanco / Traslúcido", weight: "Muy liviano", specifications: ["Resistente al impacto", "Protección UV"], applications: ["Iluminación natural", "Techos de galpones", "Invernaderos", "Cobertizos"] },
    measureCategories: measures_chapas_de_techo.filter(c => c.label.includes("Policarbonato") || c.label.includes("Polipropileno")),
  },
  {
    id: 15, name: "Aislantes y Accesorios para Techos", category: "chapas-techo",
    description: "Espumas, aislantes térmicos y accesorios para completar techos",
    image: "/images/Compriband_Chapa_trapezoidal_Inferior _11zon.webp",
    details: { fullDescription: "Espumas metalizadas, burletes y accesorios para la correcta instalación y aislación de techos metálicos.", dimensions: "Varios formatos y medidas", materials: "Espuma / Aluminio / Acero", finishes: "Metalizado / Natural", weight: "Liviano", specifications: ["Aislación térmica y acústica", "Accesorios de fijación"], applications: ["Aislación de techos", "Fijación de chapas", "Impermeabilización"] },
    measureCategories: measures_chapas_de_techo.filter(c => c.label.includes("Aislantes")),
  },
  // ── CHAPAS LISAS ──
  {
    id: 16, name: "Chapas Laminadas en Caliente y Frío", category: "chapas-lisas",
    description: "Chapas planas de acero laminadas en caliente o frío para fabricación industrial",
    image: "/images/chapa_laminada_caliente_11zon.webp",
    details: { fullDescription: "Chapas planas de acero en amplio rango de espesores, laminadas en caliente (F24) o en frío (LF).", dimensions: "Espesores desde 0.3mm hasta 12mm | Corte a medida", materials: "Acero al carbono F24 (LC) / LF", finishes: "Natural / Negro", weight: "Variable según espesor", specifications: ["LC y LF disponibles", "Corte personalizado", "Stock permanente"], applications: ["Fabricación industrial", "Calderería", "Estructuras", "Piezas a medida"] },
    measureCategories: measures_chapas_lisas.filter(c => c.label.includes("Caliente") || c.label.includes("Frio") || c.label.includes("Decapadas")),
  },
  {
    id: 17, name: "Chapas Galvanizadas Lisas", category: "chapas-lisas",
    description: "Chapas galvanizadas planas para exteriores, ductos y aplicaciones anticorrosivas",
    image: "/images/Chapa_Galvanizada_11zon.webp",
    details: { fullDescription: "Chapas galvanizadas planas para ductos, exteriores y carpintería metálica.", dimensions: "Calibres 30 a 14 | Formatos estándar", materials: "Acero galvanizado", finishes: "Galvanizado zinc", weight: "Variable", specifications: ["Calibres normalizados", "Stock permanente"], applications: ["Ductos", "Exteriores", "Carpintería metálica", "Envolventes"] },
    measureCategories: measures_chapas_lisas.filter(c => c.label === "Galvanizadas"),
  },
  {
    id: 18, name: "Chapas Antideslizantes y Estampadas", category: "chapas-lisas",
    description: "Chapas con relieve antideslizante o diseño estampado para pisos y escaleras",
    image: "/images/chapa_antideslizante_11zon.webp",
    details: { fullDescription: "Chapas con relieve antideslizante o estampado para pisos industriales y plataformas.", dimensions: "Espesores 0.9mm a 4.7mm | Formato estándar", materials: "Acero | Relieve antideslizante o estampado", finishes: "Natural", weight: "Variable según espesor", specifications: ["Antideslizante y estampada", "Varios espesores"], applications: ["Pisos industriales", "Rampas", "Escaleras", "Plataformas"] },
    measureCategories: measures_chapas_lisas.filter(c => c.label === "Antideslizantes" || c.label === "Estampadas"),
  },
  // ── BARRAS Y REDONDOS ──
  {
    id: 19, name: "Redondos y Cuadrados Laminados", category: "barras",
    description: "Barras redondas lisas, aletadas y cuadradas laminadas para herrería y construcción",
    image: "/images/Redondo_aletado_DN_11zon.webp",
    details: { fullDescription: "Barras de sección redonda (lisas, aletadas DN, herrero) y cuadradas laminadas.", dimensions: "Diámetros desde 6mm | Largo por barra", materials: "Acero al carbono | Macizo", finishes: "Laminado natural", weight: "Variable según diámetro", specifications: ["Redondos lisos, aletados y herrero", "Cuadrados laminados", "Corte sin cargo"], applications: ["Estructuras", "Rejas", "Ejes", "Hormigón armado"] },
    measureCategories: measures_redondos_y_cuadrados,
  },
  // ── PORTONES Y PUERTAS ──
  {
    id: 20, name: "Carros y Rieles para Portones", category: "portones",
    description: "Sistemas de carros y rieles para portones corredizos industriales y residenciales",
    image: "/images/CARROS_164_Acero_11zon.webp",
    details: { fullDescription: "Carros de acero y rieles para sistemas de portones corredizos.", dimensions: "Capacidades de carga variable | Riel 6 metros", materials: "Acero | Alta resistencia", finishes: "Pintado / Natural", weight: "Variable según modelo", specifications: ["Carros y rieles coordinados", "Varias capacidades"], applications: ["Portones industriales", "Portones residenciales", "Accesos", "Depósitos"] },
    measureCategories: measures_insumos_p_portones_y_puertas.filter(c => c.label === "Carros" || c.label === "Rieles"),
  },
  {
    id: 21, name: "Ruedas, Roldanas y Accesorios de Portones", category: "portones",
    description: "Ruedas, roldanas, topes y estabilizadores para completar sistemas de portones",
    image: "/images/ruedas_de_goma_fijas_100_11zon.webp",
    details: { fullDescription: "Ruedas de polipropileno y acero, roldanas, topes, receptores y estabilizadores.", dimensions: "Ruedas desde 100mm | Varios modelos", materials: "Polipropileno / Acero", finishes: "Natural / Pintado", weight: "Variable", specifications: ["Ruedas fijas y giratorias", "Topes y receptores incluidos"], applications: ["Portones", "Puertas corredizas", "Accesos industriales"] },
    measureCategories: measures_insumos_p_portones_y_puertas.filter(c => c.label.includes("Ruedas") || c.label.includes("Topes")),
  },
  // ── CERRAMIENTOS Y MALLAS ──
  {
    id: 22, name: "Mallas Electrosoldadas", category: "cerramientos",
    description: "Mallas de alambre electrosoldadas para cercos, cerramientos y hormigón",
    image: "/images/Malla_Sostén_Membrana.webp",
    details: { fullDescription: "Mallas metálicas electrosoldadas en rollos para cercos, protecciones y armado de hormigón.", dimensions: "Alto 1 metro | Por metro | Varias aperturas", materials: "Alambre de acero electrosoldado", finishes: "Natural / Galvanizado", weight: "Variable según calibre", specifications: ["Varias aperturas de malla", "Rollos o paneles"], applications: ["Cercos", "Cerramientos", "Armado de pisos", "Protecciones"] },
    measureCategories: measures_mallas_y_metal_desplegado.filter(c => c.label === "Malla Electrosoldada"),
  },
  {
    id: 23, name: "Metal Desplegado", category: "cerramientos",
    description: "Chapa expandida romboidal para rejas, pisos industriales y cerramientos decorativos",
    image: "/images/Guía_para_piso.webp",
    details: { fullDescription: "Chapa de acero cortada y estirada sin soldaduras con patrón romboidal.", dimensions: "Hojas 1000 x 3000mm | Varios espesores", materials: "Acero | Proceso de corte y estirado", finishes: "Natural / Galvanizado", weight: "Variable según espesor", specifications: ["Sin soldaduras", "Varias aperturas"], applications: ["Rejas decorativas", "Pisos industriales", "Cerramientos", "Protecciones"] },
    measureCategories: measures_mallas_y_metal_desplegado.filter(c => c.label === "Metal Desplegado"),
  },
  // ── FERRETERÍA Y ACCESORIOS ──
  {
    id: 24, name: "Bisagras, Pivotes y Cerraduras", category: "accesorios",
    description: "Herrajes para portones, rejas y puertas: bisagras forjadas, pivotes y cerraduras",
    image: "/images/Bisagra_forjadas_11zon.webp",
    details: { fullDescription: "Amplia línea de bisagras forjadas, pivotes y cerraduras para portones, rejas y puertas metálicas.", dimensions: "Varios modelos y medidas", materials: "Hierro forjado / Acero", finishes: "Natural / Pintado / Galvanizado", weight: "Variable", specifications: ["Bisagras de diferentes medidas", "Cerraduras de caja"], applications: ["Portones", "Rejas", "Puertas", "Carpintería metálica"] },
    measureCategories: measures_ferreteria.filter(c => c.label === "Bisagras y Pivotes" || c.label === "Cerraduras"),
  },
  {
    id: 25, name: "Discos de Corte, Desbaste y Flaps", category: "accesorios",
    description: "Discos abrasivos Tyrolit para amoladora: corte, desbaste y flaps",
    image: "/images/DISCO TYROLIT 114x1,6x22,2 ECOBASIC_11zon.webp",
    details: { fullDescription: "Línea completa de discos abrasivos Tyrolit para amoladora angular.", dimensions: "Diámetros 114mm a 230mm", materials: "Abrasivo industrial Tyrolit", finishes: "Listo para usar", weight: "Variable", specifications: ["Corte, desbaste y flap", "Para metal e inoxidable"], applications: ["Corte de metales", "Desbaste", "Acabado superficial", "Herrería"] },
    measureCategories: measures_ferreteria.filter(c => c.label === "Discos de Corte" || c.label === "Discos de Desbaste" || c.label === "Discos Flaps"),
  },
  {
    id: 26, name: "Electrodos de Soldadura", category: "accesorios",
    description: "Electrodos Conarco para soldadura eléctrica manual en acero común y estructural",
    image: "/images/electrodos.webp",
    details: { fullDescription: "Electrodos Conarco para soldadura por arco eléctrico.", dimensions: "Diámetros 2mm a 4mm", materials: "Acero bajo hidrógeno / 6013", finishes: "Revestido", weight: "Por caja o paquete", specifications: ["Marca Conarco", "Varios diámetros"], applications: ["Soldadura general", "Estructuras", "Herrería", "Mantenimiento"] },
    measureCategories: measures_ferreteria.filter(c => c.label === "Electrodos"),
  },
  {
    id: 27, name: "Tornillos, Tarugos y Varillas Roscadas", category: "accesorios",
    description: "Fijaciones metálicas: tirafondos, tornillos, tarugos y varillas roscadas zincadas",
    image: "/images/T1 Tornillo 8x1 (4,2x25.4)Flangeado punta mecha zinc bl_11zon.webp",
    details: { fullDescription: "Amplia línea de tornillos, tarugos y varillas roscadas zincadas.", dimensions: "Varios diámetros y largos", materials: "Acero / Zincado", finishes: "Zincado / Fosfatado", weight: "Variable", specifications: ["Tirafondos y tornillos para chapa", "Varillas roscadas zincadas"], applications: ["Fijaciones en obra", "Carpintería metálica", "Construcción en seco"] },
    measureCategories: measures_ferreteria.filter(c => c.label === "Tornillos y Tarugos" || c.label === "Varillas Roscadas"),
  },
  {
    id: 28, name: "Cables de Acero, Alambres y Brocas", category: "accesorios",
    description: "Cables de acero 6x7, alambres recocidos y brocas de acero rápido",
    image: "/images/Cable de Acero 6 x 7 - esp 1.5mm x metro_11zon.webp",
    details: { fullDescription: "Cables de acero 6x7 por metro, alambres recocidos y brocas de acero rápido.", dimensions: "Cables desde 1.5mm | Brocas desde 3mm", materials: "Acero / Acero rápido", finishes: "Natural / Galvanizado", weight: "Variable", specifications: ["Cables 6x7 y 7x19", "Brocas acero rápido"], applications: ["Tensado", "Amarre", "Perforación", "Cerramientos"] },
    measureCategories: measures_ferreteria.filter(c => c.label === "Alambres" || c.label === "Cable de Acero y Accesorios" || c.label === "Brocas"),
  },
]

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), delay) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])
  return { ref, visible }
}

function ProductCard({ product, index, onSelect }: { product: Product; index: number; onSelect: () => void }) {
  const { ref, visible } = useReveal(index * 40)
  return (
    <div ref={ref} className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group flex flex-col ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="relative h-40 sm:h-48 overflow-hidden shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute top-2 right-2 bg-[#f5c400] text-gray-900 text-xs px-2 py-0.5 rounded-full font-medium leading-tight">
          {categories.find(c => c.id === product.category)?.name}
        </span>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 line-clamp-2">{product.name}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-2 flex-1">{product.description}</p>
        <button onClick={onSelect} className="w-full bg-[#f5c400] hover:bg-[#ddb000] text-white py-2.5 rounded-lg transition-all font-medium flex items-center justify-center gap-2 text-sm mt-auto">
          Ver Detalles <ChevronRight size={15} />
        </button>
      </div>
    </div>
  )
}

function GoogleMap() {
  return (
    <div className="flex flex-col h-full min-h-[360px] rounded-xl overflow-hidden shadow-sm border border-gray-200">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#fff4b3] rounded-lg flex items-center justify-center shrink-0">
          <MapPin size={15} className="text-[#f5c400]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-900 text-sm font-semibold">Lusometal SRL</p>
          <p className="text-gray-500 text-xs truncate">Av. Cobo 1856, CABA</p>
        </div>
        <a href="https://maps.google.com/?q=Av.+Cobo+1856,+C1406ILQ,+Buenos+Aires,+Argentina" target="_blank" rel="noopener noreferrer"
          className="shrink-0 bg-[#f5c400] hover:bg-[#ddb000] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">Abrir</a>
      </div>
      <iframe title="Ubicación Lusometal SRL"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0!2d-58.4380!3d-34.6290!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2b3e7f8e8f%3A0x1234567890abcdef!2sAv.%20Cobo%201856%2C%20C1406ILQ%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
        className="flex-1 w-full" style={{ border: 0, minHeight: "280px" }}
        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  )
}

function CartButton({ count, onClick }: { count: number; onClick: () => void }) {
  if (count === 0) return null
  return (
    <button onClick={onClick} className="fixed bottom-24 right-4 sm:bottom-24 sm:right-6 z-40 bg-gray-900 text-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-2xl hover:bg-gray-800 transition-all border border-white/10">
      <ShoppingCart size={18} />
      <span className="font-semibold text-sm hidden sm:inline">Ver pedido</span>
      <span className="bg-[#f5c400] text-gray-900 text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse">{count}</span>
    </button>
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
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-[#f5c400]" size={20} />
            <span className="text-base font-bold text-gray-900">Mi pedido</span>
            <span className="bg-[#fff4b3] text-[#6b5600] text-xs font-bold px-2 py-0.5 rounded-full">{items.length}</span>
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
                    <p className="text-[#f5c400] text-xs mt-0.5">{item.categoryLabel}</p>
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
          <div className="px-5 py-4 border-t space-y-2">
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

// Botón flotante de WhatsApp con ícono SVG y pastilla de texto
function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${WA}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center group"
      aria-label="Consultá tu presupuesto por WhatsApp"
    >
      {/* Pastilla visible en mobile siempre */}
      <span className="sm:hidden mr-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
        Consultá tu presupuesto
      </span>
      {/* Pastilla en desktop solo al hover */}
      <span className="hidden sm:block mr-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        Consultá tu presupuesto
      </span>
      {/* Ícono WhatsApp — archivo SVG del proyecto */}
      <div className="relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center shrink-0 animate-pulse transition-transform hover:scale-110 hover:animate-none">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" aria-hidden="true" />
        <img src="/boton_whatsapp.svg" alt="WhatsApp" className="relative w-14 h-14" />
      </div>
    </a>
  )
}

interface ProductsProps {
  cartItems: CartItem[]
  onSelectProduct: (product: Product) => void
  onAddToCart: (item: CartItem) => void
  onRemoveFromCart: (index: number) => void
  onChangeQty: (index: number, delta: number) => void
}

export function Products({ cartItems, onSelectProduct, onAddToCart, onRemoveFromCart, onChangeQty }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cartOpen, setCartOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [formData, setFormData] = useState({ nombre: "", telefono: "", email: "", mensaje: "" })
  const { ref: titleRef, visible: titleVisible } = useReveal()

  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCat = selectedCategory === "all" || p.category === selectedCategory
    return matchSearch && matchCat
  })

  // Mensaje limpio sin duplicados: solo los datos que el usuario completó
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const parts = [
      `👤 Nombre: ${formData.nombre}`,
      `📱 Teléfono: ${formData.telefono}`,
      formData.email ? `📧 Email: ${formData.email}` : "",
      ``,
      `📋 Consulta: ${formData.mensaje}`,
    ].filter(Boolean)
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(parts.join("\n"))}`, "_blank")
  }

  return (
    <div className="bg-gray-100 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-10 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-2xl sm:text-4xl mb-3 text-gray-900 font-bold">Materiales siderometalúrgicos para la industria</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            Caños, perfiles, chapas, barras, insumos para portones y ferretería industrial.
            Stock permanente, corte a medida y asesoramiento técnico especializado.
          </p>
        </div>

        <div className="mb-2 flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Buscar productos..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c400] bg-white text-gray-900 text-sm" />
          </div>
          <div className="hidden sm:block">
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}
              className="pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c400] appearance-none bg-white text-gray-900 text-sm h-full">
              {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
            </select>
          </div>
          <button onClick={() => setFilterOpen(v => !v)}
            className={`sm:hidden flex items-center justify-center w-12 border rounded-lg bg-white transition-colors ${filterOpen ? 'border-[#f5c400] text-[#f5c400]' : 'border-gray-300 text-gray-600'}`}>
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {filterOpen && (
          <div className="sm:hidden mb-4 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setFilterOpen(false) }}
                className={`w-full text-left px-4 py-3 text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between ${selectedCategory === cat.id ? 'bg-[#f5c400] text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}>
                {cat.name}
                {selectedCategory === cat.id && <span className="text-xs opacity-80">✓</span>}
              </button>
            ))}
          </div>
        )}

        {!filterOpen && selectedCategory !== "all" && (
          <div className="sm:hidden mb-4">
            <span className="bg-[#fff4b3] text-[#6b5600] text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
              {categories.find(c => c.id === selectedCategory)?.name}
              <button onClick={() => setSelectedCategory("all")}><X size={12} /></button>
            </span>
          </div>
        )}

        <div className={filterOpen || (!filterOpen && selectedCategory !== "all") ? "" : "mb-6"} />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} onSelect={() => onSelectProduct(product)} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl mb-2 text-gray-900 text-center font-semibold">¿No encontraste lo que buscás?</h3>
          <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">Completá el formulario y te contactamos por WhatsApp</p>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={17} /><input type="text" value={formData.nombre} onChange={e => setFormData(p => ({ ...p, nombre: e.target.value }))} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f5c400] bg-white text-gray-900 text-sm" placeholder="Nombre completo" /></div>
              <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={17} /><input type="tel" value={formData.telefono} onChange={e => setFormData(p => ({ ...p, telefono: e.target.value }))} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f5c400] bg-white text-gray-900 text-sm" placeholder="Teléfono" /></div>
              <div className="relative"><Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={17} /><input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f5c400] bg-white text-gray-900 text-sm" placeholder="Email (opcional)" /></div>
              <textarea value={formData.mensaje} onChange={e => setFormData(p => ({ ...p, mensaje: e.target.value }))} required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f5c400] bg-white text-gray-900 resize-none text-sm" placeholder="Describí qué producto o servicio necesitás..." />
              <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all text-sm sm:text-base">
                <Send size={18} />Enviar por WhatsApp
              </button>
            </form>
            <GoogleMap />
          </div>
        </div>
      </div>

      <CartButton count={cartItems.length} onClick={() => setCartOpen(true)} />
      {cartOpen && <CartPanel items={cartItems} onClose={() => setCartOpen(false)} onRemove={onRemoveFromCart} onChangeQty={onChangeQty} />}

      {/* Botón flotante WhatsApp */}
      <WhatsAppFAB />
    </div>
  )
}
