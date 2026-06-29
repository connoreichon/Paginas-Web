import type { SiteConfig } from '@/types/config.types'

// ─────────────────────────────────────────────────────────────────────────────
//  COSTAMUEBLE — Demo tienda de muebles y decoración
//
//  Este archivo demuestra cómo la misma plantilla funciona para
//  un comercio retail con solo cambiar los datos de configuración.
//  Para activar esta demo: edita src/config/active.config.ts
// ─────────────────────────────────────────────────────────────────────────────

export const retailDemoConfig: SiteConfig = {

  business: {
    type:             'retail',
    name:             'Costamueble',
    tagline:          'Muebles & Decoración · Fuengirola',
    shortDescription: 'Tu hogar, tu estilo. Muebles de calidad y decoración con carácter para la Costa del Sol.',
    phone:            '+34 952 000 000',
    whatsapp:         '+34 600 000 000',
    whatsappMessage:  'Hola, me gustaría información sobre vuestros productos.',
    email:            'hola@costamueble.es',
    address:          'Av. Jesús Santos Rein, 1, Fuengirola, Málaga',
    city:             'Fuengirola',
    googleMapsUrl:    'https://maps.google.com/?q=Fuengirola+Muebles',
    googleMapsEmbed:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0!2d-4.6!3d36.54',
    openingHours: [
      { days: 'Lunes — Viernes', hours: '10:00 – 14:00 · 17:00 – 20:30' },
      { days: 'Sábado',          hours: '10:00 – 14:00' },
      { days: 'Domingo',         hours: 'Cerrado' },
    ],
    social: {
      instagram: 'https://www.instagram.com/',
      facebook:  'https://www.facebook.com/',
    },
  },

  theme: {
    colors: {
      primary:      '#2C3E50',   // azul marino profundo
      primaryDark:  '#1A252F',
      primaryLight: '#34495E',
      secondary:    '#D4AC6E',   // dorado arena
      accent:       '#B07D62',   // terracota
      surface:      '#FAFAF8',
      surfaceMuted: '#F5F1EB',
      surfaceDark:  '#1A1C1E',
      ink:          '#1C1C1A',
      inkMuted:     '#5C5852',
      inkInv:       '#F5F1EB',
      border:       '#E2D9CD',
    },
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody:    "'Karla', system-ui, sans-serif",
  },

  content: {
    hero: {
      headline:     'Tu hogar.\nTu personalidad.',
      subheadline:  'Muebles y decoración de calidad para quienes saben lo que quieren. Diseño con alma para la Costa del Sol.',
      ctaPrimary:   'Ver catálogo',
      ctaSecondary: 'Contactar',
      image:        '/images/hero-tienda.jpg',
      imageAlt:     'Showroom de Costamueble en Fuengirola',
      trustBadges: [
        { value: '+15', label: 'años de experiencia' },
        { value: '500+', label: 'clientes satisfechos' },
        { value: 'Envío', label: 'en toda la Costa' },
      ],
    },

    valueProps: [
      {
        icon:        'Sofa',
        title:       'Diseño exclusivo',
        description: 'Piezas únicas seleccionadas por nuestros expertos. Calidad que se nota al primer vistazo.',
      },
      {
        icon:        'Truck',
        title:       'Entrega e instalación',
        description: 'Entregamos e instalamos en toda la Costa del Sol. Tu mueble, en tu casa, sin complicaciones.',
      },
      {
        icon:        'Palette',
        title:       'Asesoramiento gratuito',
        description: 'Nuestros diseñadores te ayudan a elegir. Visita nuestro showroom o consultamos online.',
      },
      {
        icon:        'Shield',
        title:       'Garantía 2 años',
        description: 'Todos nuestros productos incluyen garantía de 2 años. Compramos con confianza.',
      },
    ],

    about: {
      headline:   'Más de 15 años\nvistiend hogares',
      body: [
        'Costamueble nació de la pasión por el diseño de interiores y el amor por la Costa del Sol.',
        'Seleccionamos cada pieza con criterio: calidad duradera, diseño atemporal y precio justo. No vendemos muebles, ayudamos a crear hogares.',
      ],
      image:      '/images/showroom.jpg',
      imageAlt:   'Showroom de Costamueble',
      highlights: ['Showroom 500m²', 'Diseñadores de interiores', 'Financiación disponible', 'Montaje incluido'],
    },

    cta: {
      headline:    '¿Buscas muebles para tu hogar?',
      subheadline: 'Visítanos en nuestro showroom o contáctanos por WhatsApp. Te asesoramos sin compromiso.',
      ctaWhatsapp: 'Consultar por WhatsApp',
      ctaCall:     'Llamar ahora',
      ctaMaps:     'Cómo llegar',
    },

    faq: [
      {
        question: '¿Tenéis servicio de montaje?',
        answer:   'Sí, incluimos montaje e instalación en todos nuestros productos. Nuestro equipo se desplaza a toda la Costa del Sol.',
      },
      {
        question: '¿Puedo ver los muebles antes de comprar?',
        answer:   'Claro, nuestro showroom de 500m² está abierto de lunes a viernes y los sábados por la mañana. También enviamos muestras de telas y materiales.',
      },
      {
        question: '¿Ofrecéis financiación?',
        answer:   'Sí, disponemos de financiación a medida sin intereses hasta 12 meses. Consúltanos en tienda o por WhatsApp.',
      },
      {
        question: '¿Cuáles son los plazos de entrega?',
        answer:   'Los productos en stock se entregan en 3-5 días laborables. Los pedidos especiales o a medida tienen un plazo de 4-8 semanas según fabricante.',
      },
    ],

    itemsTitle:    'Nuestros Productos',
    itemsSubtitle: 'Una selección de lo mejor de nuestro catálogo. Visítanos para ver más.',
  },

  items: {
    categories: [
      {
        id:   'sofas',
        name: 'Sofás & Sillones',
        items: [
          { id: 's1', name: 'Sofá Valencia 3 plazas',   price: '€1.290', description: 'Tapizado en tela premium, estructura de madera maciza', badge: 'Bestseller', highlight: true },
          { id: 's2', name: 'Sillón Málaga relax',      price: '€490',   description: 'Mecanismo reclinable, tapizado en piel sintética' },
          { id: 's3', name: 'Sofá chaise longue Marbella', price: '€1.890', description: 'Diseño moderno con chaise longue izquierda o derecha', badge: 'Nuevo' },
        ],
      },
      {
        id:   'mesas',
        name: 'Mesas & Comedor',
        items: [
          { id: 'm1', name: 'Mesa comedor Roble natural', price: '€690',   description: 'Madera de roble maciza, extensible hasta 240cm', highlight: true },
          { id: 'm2', name: 'Sillas tapizadas Costa',    price: '€129/ud', description: 'Juego de 4 sillas. Tapizado lavable' },
          { id: 'm3', name: 'Mesa de centro Mediterránea', price: '€320',  description: 'Tablero de mármol, estructura metálica dorada' },
        ],
      },
      {
        id:   'dormitorio',
        name: 'Dormitorio',
        items: [
          { id: 'd1', name: 'Cabecero tapizado Estepona', price: '€380', description: 'Disponible en 150 y 180cm. Varios colores', badge: 'Popular' },
          { id: 'd2', name: 'Armario corredera Sol',      price: '€890', description: 'Puertas correderas con espejo, interior equipado', highlight: true },
          { id: 'd3', name: 'Mesita de noche Roca',       price: '€180', description: 'Madera natural, cajón y balda' },
        ],
      },
    ],
  },

  gallery: {
    images: [
      { src: '/images/sala-1.jpg',    alt: 'Salón moderno decorado',     caption: 'Salón Valencia' },
      { src: '/images/comedor-1.jpg', alt: 'Comedor roble natural',      caption: 'Comedor Roble' },
      { src: '/images/dormitorio.jpg', alt: 'Dormitorio completo',       caption: 'Suite Estepona' },
      { src: '/images/showroom.jpg',  alt: 'Showroom Costamueble',       caption: 'Nuestro showroom' },
      { src: '/images/detalle-1.jpg', alt: 'Detalle de acabados',        caption: 'Acabados premium' },
      { src: '/images/exterior.jpg',  alt: 'Fachada de la tienda',       caption: 'Costamueble Fuengirola' },
    ],
  },

  reviews: {
    averageRating: 4.7,
    totalReviews:  134,
    reviews: [
      { id: 'r1', author: 'Carmen P.',  rating: 5, text: 'Compramos el salón completo y quedamos encantados. El servicio de montaje fue impecable y el precio muy competitivo.', date: 'Abril 2025', platform: 'google' },
      { id: 'r2', author: 'Roberto K.', rating: 5, text: 'Excellent quality furniture! The team helped us design our living room and the result is beautiful. Highly recommended.', date: 'Marzo 2025', platform: 'google' },
      { id: 'r3', author: 'Lucía M.',   rating: 4, text: 'Muy buen asesoramiento. El plazo de entrega fue un poco más largo de lo esperado pero la calidad del mueble es excelente.', date: 'Mayo 2025', platform: 'google' },
    ],
  },

  seo: {
    title:       'Costamueble | Muebles y Decoración en Fuengirola · Costa del Sol',
    description: 'Tienda de muebles y decoración en Fuengirola. Más de 15 años vistiendo hogares en la Costa del Sol. Showroom 500m², entrega e instalación incluida.',
    keywords:    ['muebles fuengirola', 'decoración fuengirola', 'tienda muebles costa del sol', 'muebles málaga', 'sofas fuengirola'],
    locale:      'es_ES',
    siteUrl:     'https://costamueble.netlify.app',
    ogImage:     '/images/hero-tienda.jpg',
  },
}
