'use client';

import { env } from '@/lib/env';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Fondo móvil - solo visible en pantallas pequeñas */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/images/store.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
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
          <div className="text-center md:text-left text-white max-w-2xl mx-auto md:mx-0">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance font-pacifico bg-gradient-section bg-clip-text text-transparent">
              {env.store.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-balance">
              {env.store.tagline}
            </p>
            <p className="text-lg mb-10">
              {env.store.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" variant="primary" asChild>
                <a href="#tienda">Nuestra Tienda</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#clases">Clases de Guitarra</a>
              </Button>
            </div>
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
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
