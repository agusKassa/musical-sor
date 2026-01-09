import type { Metadata } from 'next';
import { Inter, Pacifico } from 'next/font/google';
import './globals.css';
import { env } from '@/lib/env';

const inter = Inter({ subsets: ['latin'] });
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico'
});

export const metadata: Metadata = {
  title: `${env.store.name} - ${env.store.tagline}`,
  description: env.store.description,
  keywords: ['música', 'instrumentos', 'clases de guitarra', 'tienda de música', 'guitarras', 'amplificadores'],
  authors: [{ name: env.store.name }],
  openGraph: {
    title: `${env.store.name} - ${env.store.tagline}`,
    description: env.store.description,
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${pacifico.variable}`}>
      <body className={inter.className}>
        {children}
        <footer className="bg-background text-foreground py-6 text-center border-t border-border">
          <p>&copy; {new Date().getFullYear()} {env.store.name}. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
