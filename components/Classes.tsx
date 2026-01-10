import { env } from '@/lib/env';
import { Music2, Clock, Music } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { FadeInWhenVisible } from '@/components/ui/FadeInWhenVisible';
import Image from 'next/image';

export function Classes() {
  return (
    <section id="clases" className="py-20 px-4 bg-background relative overflow-hidden scroll-snap-section min-h-screen md:min-h-0">
      {/* Mobile background - solo visible en pantallas pequeñas */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/images/CLASES.jpeg"
          alt=""
          fill
          className="object-cover object-[30%_center] opacity-30 blur-sm"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="section-title">Clases de Guitarra</h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <FadeInWhenVisible delay={0.1} direction="right">
              <Card icon={Music} title="Para Todas las Edades">
                Experiencia didáctica trabajando con niños, adolescentes y adultos. Adaptamos la metodología a cada etapa de aprendizaje
              </Card>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3} direction="right">
              <Card icon={Music2} title="Diversos Estilos Musicales">
                Rock, Tango, Clásica, Blues, Pop y más. Aprende a tocar la música que te apasiona
              </Card>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} direction="right">
              <Card icon={Clock} title="Horarios Flexibles">
                {env.classes.schedule}
              </Card>
            </FadeInWhenVisible>
          </div>

          {/* Image */}
          <FadeInWhenVisible delay={0.2} direction="left">
            <div className="relative h-full rounded-xl overflow-hidden hidden md:block">
              <Image
                src="/images/CLASES.jpeg"
                alt="Clases de guitarra"
                fill
                className="object-cover object-[30%_center]"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
