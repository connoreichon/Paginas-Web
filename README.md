# Paginas Web Local — Plantilla Premium para Comercios Locales

Plantilla profesional y reutilizable para vender webs a comercios locales (restaurantes, tiendas, servicios). Construida con Vite + React + TypeScript + Tailwind CSS.

**Demo activa:** La Puerta Verde, Bar de Tapas — Fuengirola, Málaga.

---

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

---

## Estructura de archivos

```
src/
├── config/
│   ├── active.config.ts              ← AQUÍ cambias el cliente activo
│   └── clients/
│       ├── la-puerta-verde.config.ts ← Demo restaurante
│       └── retail-demo.config.ts     ← Demo tienda de muebles
├── components/
│   ├── layout/                       ← Header, Footer
│   ├── sections/                     ← Todas las secciones
│   └── ui/                           ← Componentes reutilizables
├── types/
│   └── config.types.ts               ← Tipos TypeScript
└── utils/
    └── seo.ts                        ← SEO automático
public/
└── images/                           ← Pon aquí las fotos del negocio
```

---

## Cómo cambiar de cliente (en menos de 30 segundos)

1. Edita `src/config/active.config.ts`
2. Cambia la línea del import:

```ts
// Restaurante:
import { lapuertaverdeConfig } from './clients/la-puerta-verde.config'

// Tienda de muebles:
import { retailDemoConfig } from './clients/retail-demo.config'
```

3. Guarda. La web cambia completamente.

---

## Cómo crear un nuevo cliente

1. Copia `src/config/clients/la-puerta-verde.config.ts`
2. Renómbrala con el nombre del negocio, p.ej.: `mi-floristeria.config.ts`
3. Edita todos los datos del negocio en ese archivo
4. Cambia el import en `active.config.ts`

---

## Archivos a editar por sección

| Qué cambiar | Archivo |
|------------|---------|
| Nombre, teléfono, WhatsApp | `clients/[negocio].config.ts` → `business` |
| Colores, tipografía | `clients/[negocio].config.ts` → `theme.colors` |
| Textos del hero | `clients/[negocio].config.ts` → `content.hero` |
| Carta / productos | `clients/[negocio].config.ts` → `items` |
| Galería | `clients/[negocio].config.ts` → `gallery` |
| Reseñas | `clients/[negocio].config.ts` → `reviews` |
| SEO (title, description) | `clients/[negocio].config.ts` → `seo` |
| Imágenes | `public/images/` |

**Regla de oro: NUNCA toques los componentes para cambiar contenido.**

---

## Cómo cambiar colores

En el archivo del cliente, edita la sección `theme.colors`:

```ts
theme: {
  colors: {
    primary:      '#1E3A2F',   // color principal (botones, acentos)
    primaryDark:  '#142A22',   // hover del color principal
    secondary:    '#C8A96A',   // dorado / color de énfasis
    surface:      '#FAFAF5',   // fondo principal
    // ...etc
  },
  fontHeading: "'Playfair Display', serif",
  fontBody:    "'Karla', sans-serif",
}
```

Los colores se aplican vía CSS variables. No hace falta recompilar nada.

---

## Cómo cambiar la carta o los productos

En la sección `items` del config:

```ts
items: {
  categories: [
    {
      id:   'tapas',
      name: 'Tapas',
      items: [
        {
          id:          'p1',
          name:        'Nombre del plato',
          price:       '€12.50',
          description: 'Descripción opcional',
          badge:       'Popular',  // opcional
          highlight:   true,       // opcional, lo destaca
        },
      ],
    },
  ],
},
```

---

## Cómo cambiar el SEO

```ts
seo: {
  title:       'Nombre del negocio | Categoría en Ciudad',
  description: 'Descripción para Google (150-160 caracteres)',
  keywords:    ['palabra clave 1', 'palabra clave 2'],
  locale:      'es_ES',
  siteUrl:     'https://tu-dominio.netlify.app',
},
```

El Schema.org (datos estructurados para Google) se genera automáticamente según el `businessType`.

---

## Cómo desplegar en Netlify

1. Sube el proyecto a GitHub
2. En [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Selecciona el repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy 🚀

El archivo `netlify.toml` ya está configurado correctamente.

---

## Cómo pasar de restaurante a tienda (ejemplo)

Para convertir esta web en "Costamueble" (tienda de muebles):

```ts
// src/config/active.config.ts
import { retailDemoConfig } from './clients/retail-demo.config'
export const siteConfig = retailDemoConfig
```

Cambia:
- `businessType: 'retail'` → activa el contexto de tienda
- La sección "Carta" pasa a llamarse "Productos"
- Los CTAs cambian a "Consultar catálogo"
- Los colores, tipografía y contenido vienen del nuevo config

---

## Tipos de negocio soportados

| Tipo | `businessType` | Sección de items |
|------|---------------|-----------------|
| Restaurante / bar | `'restaurant'` | Carta con categorías y precios |
| Tienda / retail | `'retail'` | Productos con categorías |
| Servicios | `'services'` | Servicios y paquetes |

---

## Stack técnico

- **Vite 5** — Build tool ultrarrápido
- **React 18** — UI
- **TypeScript** — Tipado estricto
- **Tailwind CSS 3** — Estilos utility-first
- **Sin backend** — Solo HTML/CSS/JS estático
- **Sin CMS** — Contenido en archivos `.ts`
- **Netlify ready** — Deploy en un click

---

## Checklist antes de entregar a un cliente

- [ ] Actualizar `business.phone` y `business.whatsapp` con números reales
- [ ] Actualizar `business.email` con email real
- [ ] Actualizar `business.googleMapsEmbed` con el iframe real de Google Maps
- [ ] Subir fotos reales a `public/images/`
- [ ] Actualizar `seo.siteUrl` con el dominio final
- [ ] Revisar todos los textos de la sección `content`
- [ ] Verificar `openingHours` son correctos
- [ ] Confirmar `social` links son correctos
- [ ] Desplegar en Netlify y compartir preview con el cliente

---

## Mejoras opcionales (Versión 2)

1. **Galería lightbox** — Modal para ampliar imágenes al hacer clic
2. **Formulario de reserva** — Con validación y envío a email (Netlify Forms)
3. **Modo multiidioma** — ES / EN / FI (útil para zonas turísticas como Fuengirola)
4. **Animaciones avanzadas** — Parallax sutil en el hero
5. **Blog / Novedades** — Sección de artículos generados desde config
6. **Dark mode** — Toggle light/dark
7. **QR generador** — URL corta + QR imprimible para el negocio
8. **Google Analytics** — Integración con gtag configurada desde config
9. **Cookie banner** — Cumplimiento RGPD básico
10. **Precio dinámico de Netlify** — Redirección automática por subdomain

---

*Plantilla creada con ❤️ para comercios locales de la Costa del Sol.*
