import { Hero } from '@/components/Hero';
import { Classes } from '@/components/Classes';
import { Store } from '@/components/Store';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="scroll-snap-container">
      <Hero />
      <Store />
      <Classes />
      <Contact />
    </main>
  );
}
