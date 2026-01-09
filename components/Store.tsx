import { env } from '@/lib/env';
import { Wrench, Guitar, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { FadeInWhenVisible } from '@/components/ui/FadeInWhenVisible';
import Image from 'next/image';

export function Store() {
  return (
    <section id="tienda" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Mobile background - solo visible en pantallas pequeñas */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/images/guitarra.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestra Tienda</h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <FadeInWhenVisible delay={0.2} direction="left">
            <div className="relative h-full rounded-xl overflow-hidden hidden md:block">
              <Image
                src="/images/guitarra.jpg"
                alt="Tienda de música"
                fill
                className="object-cover"
              />
            </div>
          </FadeInWhenVisible>

          {/* Info Cards */}
          <div className="space-y-6">
            <FadeInWhenVisible delay={0.1} direction="right">
              <Card icon={Guitar} title="Instrumentos de Calidad">
                Guitarras acústicas, eléctricas, bajos y una amplia selección de instrumentos de cuerda
              </Card>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2} direction="right">
              <Card icon={Headphones} title="Accesorios y Equipamiento">
                Amplificadores, pedales, cuerdas, púas y todo lo que necesitas para tu música
              </Card>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3} direction="right">
              <Card icon={Wrench} title="Reparación y Mantenimiento">
                Reparamos guitarras, teclados y toda clase de instrumentos y equipo musical. ¡Déjalo en nuestras manos!
              </Card>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
