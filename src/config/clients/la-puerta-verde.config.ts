import type { SiteConfig } from '@/types/config.types'

// ─────────────────────────────────────────────────────────────────────────────
//  LA PUERTA VERDE — Fuengirola, Málaga
//  Bar de Tapas · Cocina nórdico-española · Carta de vinos
//
//  Para actualizar este negocio edita SOLO este archivo.
//  No toques ningún componente.
// ─────────────────────────────────────────────────────────────────────────────

export const lapuertaverdeConfig: SiteConfig = {

  // ─── NEGOCIO ──────────────────────────────────────────────────────────────

  business: {
    type:             'restaurant',
    name:             'La Puerta Verde',
    tagline:          'Bar de Tapas · Fuengirola',
    shortDescription: 'Cocina artesanal con alma mediterránea y toque nórdico. Vinos seleccionados, tapas de autor y ambiente acogedor en el corazón de Fuengirola.',
    phone:            'PENDIENTE_DE_CONFIRMAR',
    whatsapp:         'PENDIENTE_DE_CONFIRMAR',
    whatsappMessage:  'Hola, me gustaría reservar una mesa en La Puerta Verde.',
    email:            'PENDIENTE_DE_CONFIRMAR',
    address:          'Fuengirola, Málaga',
    city:             'Fuengirola',
    googleMapsUrl:    'https://maps.google.com/?q=La+Puerta+Verde+Fuengirola',
    googleMapsEmbed:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0!2d-4.6!3d36.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMyJzI0LjAiTiA0wrAzNicwMC4wIlc!5e0!3m2!1ses!2ses!4v1234567890',
    reservationUrl:   'https://www.la-puerta-verde.com/rservations/',
    openingHours: [
      { days: 'Martes — Sábado', hours: '19:00 – 23:00', note: 'Cocina hasta las 22:00' },
      { days: 'Domingo — Lunes', hours: 'Cerrado' },
    ],
    social: {
      instagram:   'https://www.instagram.com/bardetapas_lapuertaverde/',
      tripadvisor: 'https://www.tripadvisor.es/Restaurant_Review-g315915-d25112199-Reviews-La_Puerta_Verde-Fuengirola_Costa_del_Sol_Province_of_Malaga_Andalucia.html',
    },
  },

  // ─── TEMA VISUAL ──────────────────────────────────────────────────────────
  // Cambia estos valores para adaptar la web a otro negocio.

  theme: {
    colors: {
      primary:      '#1E3A2F',   // verde bosque profundo
      primaryDark:  '#142A22',   // verde hover
      primaryLight: '#2D5A40',   // verde suave
      secondary:    '#C8A96A',   // dorado cálido
      accent:       '#8B6347',   // madera natural
      surface:      '#FAFAF5',   // blanco roto cálido
      surfaceMuted: '#F4EFE6',   // crema
      surfaceDark:  '#1A1E1B',   // fondo oscuro secciones
      ink:          '#1C1C1A',   // texto principal
      inkMuted:     '#5C5550',   // texto secundario
      inkInv:       '#F4EFE6',   // texto sobre fondo oscuro
      border:       '#E0D8CC',   // borde cálido
    },
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody:    "'Karla', system-ui, sans-serif",
  },

  // ─── CONTENIDO ────────────────────────────────────────────────────────────

  content: {
    hero: {
      headline:     'Tapas de autor.\nVinos con alma.',
      subheadline:  'Cocina artesanal nórdico-española en el corazón de Fuengirola. Una experiencia que va más allá de comer.',
      ctaPrimary:   'Reservar mesa',
      ctaSecondary: 'Ver la carta',
      image:        '/images/hero-restaurante.jpg',
      imageAlt:     'Interior acogedor de La Puerta Verde, Fuengirola',
      trustBadges: [
        { value: '4.8★', label: 'en TripAdvisor' },
        { value: '100%', label: 'producto local' },
        { value: 'Abierto', label: 'mar – sáb noche' },
      ],
    },

    valueProps: [
      {
        icon: 'ChefHat',
        title: 'Cocina de autor',
        description: 'Técnica nórdica con ingredientes mediterráneos. La carta cambia casi a diario para garantizar la máxima frescura.',
      },
      {
        icon: 'Wine',
        title: 'Selección de vinos',
        description: 'Una carta de vinos cuidadosamente seleccionada para acompañar cada tapa. El maridaje perfecto existe.',
      },
      {
        icon: 'Leaf',
        title: 'Producto local',
        description: 'Apostamos por los productores de la Costa del Sol. Sabor auténtico, kilómetro cero, máximo compromiso.',
      },
      {
        icon: 'Heart',
        title: 'Ambiente acogedor',
        description: 'Un espacio íntimo donde el tiempo se detiene. Perfecto para desconectar de la rutina y disfrutar.',
      },
    ],

    about: {
      headline:   'Una puerta abierta\na la buena mesa',
      body: [
        'La Puerta Verde nació de la pasión por la cocina honesta: producto de calidad, técnica cuidada y mucho amor en cada plato.',
        'Fusionamos la precisión nórdica con el sabor mediterráneo que caracteriza la Costa del Sol. El resultado es una experiencia única que sorprende en cada visita.',
        '"Hand crafted quality food and good wines." Eso somos. Eso ofrecemos.',
      ],
      image:    '/images/interior-restaurante.jpg',
      imageAlt: 'El equipo de La Puerta Verde en cocina',
      highlights: [
        'Carta de temporada',
        'Menús degustación',
        'Selección de vinos',
        'Cocina a la vista',
      ],
    },

    cta: {
      headline:    '¿Listo para vivir la experiencia?',
      subheadline: 'Reserva tu mesa ahora y descubre por qué La Puerta Verde es el rincón favorito de Fuengirola.',
      ctaWhatsapp: 'Reservar por WhatsApp',
      ctaCall:     'Llamar ahora',
      ctaMaps:     'Cómo llegar',
    },

    faq: [
      {
        question: '¿Necesito reservar con antelación?',
        answer:   'Recomendamos reservar, especialmente los fines de semana. Puedes hacerlo por WhatsApp, teléfono o a través de nuestra web. Somos un espacio íntimo con plazas limitadas.',
      },
      {
        question: '¿Cuáles son los horarios?',
        answer:   'Abrimos de martes a sábado de 19:00 a 23:00. La cocina cierra a las 22:00. Permanecemos cerrados domingos y lunes.',
      },
      {
        question: '¿Tenéis opciones vegetarianas o para alergias?',
        answer:   'Sí, trabajamos con ingredientes frescos y podemos adaptar varios platos. Consúltanos al reservar para que lo preparemos con antelación.',
      },
      {
        question: '¿Qué son los menús de tapas?',
        answer:   'Son menús degustación con 3, 5 o 7 tapas de nuestra selección del día (NO.3 · NO.5 · NO.7). La mejor forma de descubrir nuestra cocina.',
      },
      {
        question: '¿Hacéis catering o eventos privados?',
        answer:   'Sí, ofrecemos servicios de catering y consultoría gastronómica para eventos privados. Contáctanos para más información.',
      },
    ],

    itemsTitle:    'Nuestra Carta',
    itemsSubtitle: 'Tapas de autor que cambian casi a diario. Aquí tienes nuestra propuesta habitual.',
  },

  // ─── CARTA ────────────────────────────────────────────────────────────────

  items: {
    categories: [
      {
        id:   'tapas',
        name: 'Tapas',
        description: 'Elaboradas con técnica y con cariño. Comparte o disfruta a tu ritmo.',
        items: [
          { id: 't1', name: 'Pan fresco y mantequilla de casa',      price: '€3.50', highlight: false },
          { id: 't2', name: 'Patatas bravas 2.0',                    price: '€6.50', description: 'Nuestra versión de un clásico', badge: 'Popular' },
          { id: 't3', name: 'Bao negra & pollo',                     price: '€3.80' },
          { id: 't4', name: '"Paella" bomba',                        price: '€1.80', description: 'Un bocado de recuerdo' },
          { id: 't5', name: 'Taco nórdica',                          price: '€8.00' },
          { id: 't6', name: 'Atún & BBQ',                            price: '€11.50', highlight: true },
          { id: 't7', name: 'Pato & col',                            price: '€13.50', highlight: true },
          { id: 't8', name: 'Crudo de vaca',                         price: '€14.00', badge: 'Chef', highlight: true },
          { id: 't9', name: 'Sopa de gambas blanca "al pil pil"',    price: '€14.50', highlight: true },
        ],
      },
      {
        id:   'dulces',
        name: 'Dulces',
        description: 'El final perfecto para una buena experiencia.',
        items: [
          { id: 'd1', name: 'Tarta de queso "bask"',     price: '€7.50', badge: 'Popular' },
          { id: 'd2', name: 'Chocolata & mandarina',     price: '€6.50' },
          { id: 'd3', name: 'Queso del día',             price: '€6.00' },
        ],
      },
      {
        id:   'menus',
        name: 'Menús Degustación',
        description: 'La mejor forma de descubrir nuestra cocina. Déjate llevar.',
        items: [
          {
            id:          'm1',
            name:        'Menú NO.3',
            price:       '€29',
            description: '3 tapas de nuestra selección del día',
            tags:        ['Por persona'],
          },
          {
            id:          'm2',
            name:        'Menú NO.5',
            price:       '€39',
            description: '5 tapas de nuestra selección del día',
            tags:        ['Por persona'],
            badge:       'Más elegido',
            highlight:   true,
          },
          {
            id:          'm3',
            name:        'Menú NO.7',
            price:       '€55',
            description: '7 tapas de nuestra selección del día. La experiencia completa.',
            tags:        ['Por persona'],
            badge:       'Experiencia completa',
          },
        ],
      },
    ],
  },

  // ─── GALERÍA ──────────────────────────────────────────────────────────────

  gallery: {
    images: [
      { src: '/images/plato-1.jpg',    alt: 'Tapa de autor de La Puerta Verde',   caption: 'Crudo de vaca' },
      { src: '/images/plato-2.jpg',    alt: 'Sopa de gambas al pil pil',          caption: 'Gambas al pil pil' },
      { src: '/images/plato-3.jpg',    alt: 'Tarta de queso vasca',               caption: 'Tarta de queso bask' },
      { src: '/images/interior-1.jpg', alt: 'Interior de La Puerta Verde',        caption: 'Nuestro espacio' },
      { src: '/images/interior-2.jpg', alt: 'Ambiente acogedor del restaurante',  caption: 'Ambiente íntimo' },
      { src: '/images/vinos.jpg',      alt: 'Selección de vinos de la carta',     caption: 'Nuestra bodega' },
    ],
  },

  // ─── RESEÑAS ──────────────────────────────────────────────────────────────

  reviews: {
    averageRating: 4.8,
    totalReviews:  87,
    reviews: [
      {
        id:       'r1',
        author:   'María G.',
        rating:   5,
        text:     'Una experiencia gastronómica increíble. Las tapas son obras de arte y los vinos están perfectamente seleccionados. Volveré sin duda.',
        date:     'Mayo 2025',
        platform: 'google',
      },
      {
        id:       'r2',
        author:   'James M.',
        rating:   5,
        text:     'Absolutely outstanding! The Nordic-Spanish fusion tapas were unlike anything I\'ve had on the Costa del Sol. The bask cheesecake was heavenly.',
        date:     'Abril 2025',
        platform: 'tripadvisor',
      },
      {
        id:       'r3',
        author:   'Ana R.',
        rating:   5,
        text:     'Ambiente íntimo y acogedor, servicio atento y una carta que te sorprende en cada visita. Mi restaurante favorito en Fuengirola.',
        date:     'Junio 2025',
        platform: 'google',
      },
      {
        id:       'r4',
        author:   'Pedro L.',
        rating:   5,
        text:     'El menú degustación NO.7 es una experiencia que hay que vivir. Cada tapa cuenta una historia. Precio muy razonable para la calidad que ofrecen.',
        date:     'Marzo 2025',
        platform: 'tripadvisor',
      },
    ],
  },

  // ─── SEO ──────────────────────────────────────────────────────────────────

  seo: {
    title:       'La Puerta Verde | Bar de Tapas en Fuengirola · Cocina de Autor',
    description: 'Bar de tapas de autor en Fuengirola. Cocina nórdico-española, selección de vinos y menús degustación. Martes a sábado de 19:00 a 23:00.',
    keywords:    ['restaurante fuengirola', 'bar de tapas fuengirola', 'tapas fuengirola', 'restaurante costa del sol', 'la puerta verde fuengirola', 'tapas de autor málaga', 'menú degustación fuengirola'],
    locale:      'es_ES',
    siteUrl:     'https://lapuertaverde.netlify.app',
    ogImage:     '/images/hero-restaurante.jpg',
  },
}
