import { env } from '@/lib/env';
import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

export function SocialLinks() {
  const socials = [
    {
      name: 'Instagram',
      url: env.social.instagram,
      icon: Instagram,
      color: 'hover:text-pink-500',
    },
    {
      name: 'Facebook',
      url: env.social.facebook,
      icon: Facebook,
      color: 'hover:text-blue-600',
    },
    {
      name: 'YouTube',
      url: env.social.youtube,
      icon: Youtube,
      color: 'hover:text-red-600',
    },
  ];

  return (
    <section className="py-12 px-4 bg-foreground text-background">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6">Síguenos en Redes Sociales</h3>

        <div className="flex justify-center gap-8 mb-8">
          {socials.map(({ name, url, icon: Icon, color }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${color}`}
              aria-label={name}
            >
              <Icon className="w-10 h-10" />
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href={env.social.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          Chatea con Nosotros en WhatsApp
        </a>
      </div>
    </section>
  );
}
