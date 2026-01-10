'use client';

import dynamic from 'next/dynamic';
import { env, getSimplifiedBusinessHours } from '@/lib/env';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { FadeInWhenVisible } from '@/components/ui/FadeInWhenVisible';

// Dynamic import de MapClient
const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center">
      <p className="text-muted-foreground">Cargando mapa...</p>
    </div>
  ),
});

export function Contact() {
  const simplifiedHours = getSimplifiedBusinessHours();
  const { lat, lng } = env.contact.coordinates;
  const address = env.contact.address.full;

  return (
    <section id="contacto" className="py-20 px-4 bg-muted scroll-snap-section min-h-screen md:min-h-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="section-title">Contacto</h2>
          </div>
        </FadeInWhenVisible>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info Card */}
          <FadeInWhenVisible delay={0.2} direction="left">
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow min-h-[600px] flex flex-col justify-between">
            {/* Dirección */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Dirección</h3>
              </div>
              <address className="not-italic text-foreground">
                {env.contact.address.street} {env.contact.address.postal} {env.contact.address.city} {env.contact.address.country}
              </address>
              <br />
              <a
                href={env.contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors font-medium inline-block"
              >
                Ver como llegar
              </a>
            </div>

            {/* Teléfono */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Teléfono</h3>
              </div>
              <a
                href={`tel:${env.contact.phones.store}`}
                className="text-foreground hover:text-primary transition-colors font-medium text-lg"
              >
                {env.contact.phones.store}
              </a>
            </div>

            {/* Emails */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <a
                    href={`mailto:${env.contact.email.info}`}
                    className="text-foreground hover:text-primary transition-colors break-all"
                  >
                    {env.contact.email.info}
                  </a>
                </div>
              </div>
            </div>
            {/* Horarios Simplificados */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Horario</h3>
              </div>
              <div className="space-y-2 text-sm">
                {simplifiedHours.map(({ day, hours }) => (
                  <div key={day} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-muted-foreground font-medium">
                      {day}:
                    </span>
                    <span className="text-foreground">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInWhenVisible>

          {/* Right Column - Map */}
          <FadeInWhenVisible delay={0.2} direction="right">
            <div className="hidden md:block rounded-xl overflow-hidden shadow-lg h-[600px]">
              <MapClient
                center={[lat, lng]}
                zoom={16}
                markerPosition={[lat, lng]}
                popupContent={`<strong>${env.store.name}</strong><br/>${address}`}
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
