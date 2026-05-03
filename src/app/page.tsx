import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { Reviews } from '@/sections/Reviews';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function Page() {
    return (
      <main>
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    );
};
