# MusicalXor - Landing Page

Landing page 100% frontend para tienda de música y clases de guitarra, construida con Next.js 15, TypeScript y Tailwind CSS.

## Características

- **Next.js 15** con App Router y React 19
- **TypeScript** para type safety
- **Tailwind CSS** con sistema de colores personalizable mediante CSS variables
- **Leaflet + OpenStreetMap** para mapa interactivo (sin API key)
- **Variables de entorno** para fácil configuración de contenido
- **SEO optimizado** con metadata dinámica
- **Responsive design** mobile-first
- **Performance optimizada** con Turbopack y Next/Image

## Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## Instalación

```bash
# Clonar el repositorio o navegar a la carpeta
cd musicalxor

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Editar .env.local con tus datos reales
```

## Configuración

### Variables de Entorno

Edita el archivo `.env.local` con la información de tu tienda:

```bash
# Información de la Tienda
NEXT_PUBLIC_STORE_NAME="MusicalXor"
NEXT_PUBLIC_STORE_TAGLINE="Tu pasión musical empieza aquí"
NEXT_PUBLIC_STORE_DESCRIPTION="Tienda de instrumentos musicales y clases de guitarra"

# Teléfonos
NEXT_PUBLIC_CONTACT_PHONE_MAIN="+34 XXX XXX XXX"
NEXT_PUBLIC_CONTACT_PHONE_CLASSES="+34 XXX XXX XXX"
NEXT_PUBLIC_CONTACT_PHONE_STORE="+34 XXX XXX XXX"
NEXT_PUBLIC_CONTACT_WHATSAPP="+34XXXXXXXXX"

# Dirección
NEXT_PUBLIC_CONTACT_ADDRESS_STREET="Calle Principal 123"
NEXT_PUBLIC_CONTACT_ADDRESS_CITY="Madrid"
NEXT_PUBLIC_CONTACT_ADDRESS_POSTAL="28001"
NEXT_PUBLIC_CONTACT_ADDRESS_COUNTRY="España"

# Coordenadas para el mapa
NEXT_PUBLIC_CONTACT_LATITUDE="40.4168"
NEXT_PUBLIC_CONTACT_LONGITUDE="-3.7038"

# Email
NEXT_PUBLIC_CONTACT_EMAIL_INFO="info@musicalxor.com"
NEXT_PUBLIC_CONTACT_EMAIL_CLASSES="clases@musicalxor.com"

# Horarios
NEXT_PUBLIC_HOURS_MONDAY="09:00-14:00,16:00-20:00"
NEXT_PUBLIC_HOURS_TUESDAY="09:00-14:00,16:00-20:00"
# ... etc

# Redes Sociales
NEXT_PUBLIC_SOCIAL_INSTAGRAM="https://instagram.com/musicalxor"
NEXT_PUBLIC_SOCIAL_FACEBOOK="https://facebook.com/musicalxor"
NEXT_PUBLIC_SOCIAL_YOUTUBE="https://youtube.com/@musicalxor"
NEXT_PUBLIC_SOCIAL_WHATSAPP_LINK="https://wa.me/34XXXXXXXXX"
```

**Nota importante sobre coordenadas del mapa:**

Para obtener las coordenadas de tu ubicación:
1. Ve a [Google Maps](https://maps.google.com)
2. Haz clic derecho en tu ubicación
3. Selecciona las coordenadas (primer número es latitud, segundo es longitud)
4. Actualiza `NEXT_PUBLIC_CONTACT_LATITUDE` y `NEXT_PUBLIC_CONTACT_LONGITUDE`

### Personalizar Colores

Los colores se configuran mediante CSS variables en `app/globals.css`. Esto permite cambiar toda la paleta de colores sin rebuild:

```css
:root {
  /* Colores principales */
  --color-primary: 220 70% 50%;        /* Azul - marca principal */
  --color-secondary: 280 60% 50%;      /* Púrpura - acento */

  /* Puedes cambiar estos valores HSL:
     - Primer número (Hue): 0-360 (color en la rueda)
     - Segundo número (Saturation): 0-100% (intensidad del color)
     - Tercer número (Lightness): 0-100% (oscuridad a claridad)
  */
}
```

**Ejemplos de colores:**
- Naranja: `30 90% 50%`
- Verde: `142 76% 45%`
- Rojo: `0 84% 60%`
- Amarillo: `45 100% 51%`

Después de cambiar los colores, simplemente recarga el navegador (no necesitas rebuild).

### Reemplazar Imágenes

Las imágenes están en `public/images/`:

1. **hero-placeholder.jpg** (1920x1080px) - Imagen de fondo del hero
2. **classes-placeholder.jpg** (1200x800px) - Imagen de clases de guitarra
3. **store-placeholder.jpg** (1200x800px) - Imagen de la tienda

Simplemente reemplaza estos archivos con tus propias imágenes manteniendo los mismos nombres.

**Recomendaciones:**
- Formato WebP o AVIF para mejor compresión
- Optimiza las imágenes antes de subirlas
- Mantén las proporciones sugeridas

## Comandos de Desarrollo

```bash
# Desarrollo local
npm run dev
# Abre http://localhost:3000

# Build de producción
npm run build

# Servir build de producción localmente
npm run start

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Estructura del Proyecto

```
musicalxor/
├── app/
│   ├── globals.css          # Estilos globales y variables CSS
│   ├── layout.tsx           # Layout raíz con SEO
│   └── page.tsx             # Página principal
├── components/
│   ├── Hero.tsx             # Sección hero
│   ├── Classes.tsx          # Sección clases
│   ├── Store.tsx            # Sección tienda
│   ├── ContactCards.tsx     # Tarjetas de contacto
│   ├── Map.tsx              # Wrapper del mapa
│   ├── MapClient.tsx        # Implementación Leaflet
│   ├── SocialLinks.tsx      # Redes sociales
│   └── ui/
│       ├── Button.tsx       # Componente botón
│       └── Card.tsx         # Componente card
├── lib/
│   ├── env.ts               # Variables de entorno type-safe
│   └── utils.ts             # Utilidades
├── types/
│   └── index.ts             # Interfaces TypeScript
├── public/
│   └── images/              # Imágenes del sitio
├── .env.example             # Template de variables de entorno
├── .env.local               # Variables reales (no commitear)
├── next.config.ts           # Configuración de Next.js
├── tailwind.config.ts       # Configuración de Tailwind
└── tsconfig.json            # Configuración de TypeScript
```

## Secciones de la Landing Page

1. **Hero** - Presentación principal con nombre y tagline
2. **Clases de Guitarra** - Información sobre clases y contacto
3. **Tienda** - Descripción de productos disponibles
4. **Contacto** - Tarjetas con teléfono, dirección, email y horarios
5. **Mapa** - Ubicación interactiva con Leaflet + OpenStreetMap
6. **Redes Sociales** - Enlaces a Instagram, Facebook, YouTube y WhatsApp

## Deployment en Vercel

1. Sube tu código a GitHub, GitLab o Bitbucket

2. Importa el proyecto en [Vercel](https://vercel.com):
   - Conecta tu repositorio
   - Vercel detectará automáticamente que es un proyecto Next.js

3. Configura las variables de entorno:
   - Ve a Settings → Environment Variables
   - Copia TODAS las variables de `.env.local`
   - Pégalas en Vercel

4. Deploy automático

### Variables de Entorno en Producción

**IMPORTANTE:** Debes agregar todas las variables de entorno en Vercel para que la aplicación funcione correctamente en producción.

## Personalización Avanzada

### Modificar Componentes

Todos los componentes están en la carpeta `components/`. Puedes editarlos directamente para cambiar el contenido estático o la estructura.

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `components/`
2. Impórtalo en `app/page.tsx`
3. Agrégalo al orden de secciones

### TypeScript

El proyecto usa TypeScript estricto. Todas las interfaces están en `types/index.ts`. Los accessors de variables de entorno en `lib/env.ts` proporcionan type safety completo.

## Troubleshooting

### El mapa no se muestra

- Verifica que las coordenadas en `.env.local` sean correctas
- Asegúrate de que `NEXT_PUBLIC_CONTACT_LATITUDE` y `NEXT_PUBLIC_CONTACT_LONGITUDE` estén configuradas
- Revisa la consola del navegador para errores de Leaflet

### Las variables de entorno no funcionan

- Asegúrate de que el archivo se llame exactamente `.env.local`
- Reinicia el servidor de desarrollo (`npm run dev`)
- Verifica que todas las variables tengan el prefijo `NEXT_PUBLIC_`

### Errores de TypeScript

- Ejecuta `npx tsc --noEmit` para ver todos los errores
- Verifica que todas las variables de entorno requeridas estén definidas

### Las imágenes no cargan

- Verifica que las imágenes estén en `public/images/`
- Los nombres de archivo deben coincidir exactamente
- Reinicia el servidor de desarrollo

## Performance

El sitio está optimizado para máxima performance:

- **Server Components** por defecto (menos JavaScript al cliente)
- **Next/Image** para optimización automática de imágenes
- **Turbopack** para builds ultra-rápidos
- **Lazy loading** de mapas y contenido below-fold
- **CSS variables** para personalización sin rebuild

## SEO

El sitio incluye optimizaciones SEO:

- Metadata dinámica desde variables de entorno
- Semantic HTML (nav, section, article)
- Meta tags Open Graph
- Sitemap automático de Next.js
- URLs limpias con anclas (#clases, #tienda, etc.)

## Accesibilidad

- Navegación por teclado funcional
- ARIA labels en componentes interactivos
- Contraste de colores WCAG AA
- Scroll suave entre secciones
- Focus states visibles

## Escalabilidad Futura

Este proyecto está preparado para evolucionar fácilmente:

- **Backend:** Agregar API routes de Next.js
- **Formularios:** Implementar contacto y reservas
- **CMS:** Integrar Sanity o Contentful
- **E-commerce:** Añadir catálogo y carrito
- **Autenticación:** NextAuth.js para usuarios
- **Blog:** MDX para contenido
- **i18n:** next-intl para multi-idioma

## Soporte

Para reportar problemas o sugerencias, crea un issue en el repositorio.

## Licencia

Este proyecto es propiedad de MusicalXor. Todos los derechos reservados.

---

**Desarrollado con Next.js 15 + TypeScript + Tailwind CSS**
