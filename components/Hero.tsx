'use client';

import { env } from '@/lib/env';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden scroll-snap-section">
      {/* Fondo móvil - solo visible en pantallas pequeñas */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/images/store.jpg"
          alt=""
          fill
          className="object-cover opacity-60 mix-blend-overlay blur-sm grayscale brightness-110 contrast-75"
          priority
        />
      </div>

      {/* Contenedor grid de 2 columnas */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Columna izquierda: Contenido */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 flex flex-col justify-center px-4 py-20 md:px-8 lg:px-12"
        >
          <div className="text-left text-white max-w-2xl md:mx-0 pr-4">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4 font-pacifico py-10 pr-8 md:pr-16 lg:pr-20" style={{ lineHeight: '1.5' }}>
              <span className="md:hidden inline-block">
                <span className="text-gradient-primary">Mus</span>
                <span className="text-gradient-secondary inline-block pr-2">ical</span>
                <span className="text-gradient-primary"> Sor</span>
              </span>
              <span className="hidden md:inline-block bg-gradient-section bg-clip-text text-transparent pr-4">
                {env.store.name}
              </span>
            </h1>
            <div className="md:hidden">
              <p className="text-3xl font-semibold mb-4" style={{
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.6), 0 4px 20px rgba(0, 0, 0, 0.4)'
              }}>
                Tu música empieza acá
              </p>
              <p className="text-xl opacity-90" style={{
                textShadow: '0 1px 8px rgba(0, 0, 0, 0.5), 0 2px 12px rgba(0, 0, 0, 0.3)'
              }}>
                Instrumentos, reparación y clases para que toques lo que amás
              </p>
            </div>
            <p className="hidden md:block text-3xl font-semibold mb-4" style={{
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)'
            }}>
              Tu música empieza acá
            </p>
            <p className="hidden md:block text-xl mb-10 opacity-90" style={{
              textShadow: '0 1px 8px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(0, 0, 0, 0.2)'
            }}>
              Instrumentos de calidad, reparación profesional y clases personalizadas
            </p>
          </div>
        </motion.div>

        {/* Columna derecha: Imagen con gradiente - solo visible en desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative hidden md:block overflow-hidden bg-gradient-to-br from-primary to-secondary"
        >
          <Image
            src="/images/store.jpg"
            alt="Instrumentos musicales"
            fill
            className="object-cover opacity-60 mix-blend-overlay grayscale brightness-110 contrast-75"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
