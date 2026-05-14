import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Slogan } from '@/sections/Slogan';
import { Steps } from '@/sections/Steps';
import { Cases } from '@/sections/Cases';
import { Reviews } from '@/sections/Reviews';
import { BookingForm } from '@/sections/BookingForm';
import { Footer } from '@/sections/Footer';

export default function Page() {
    return (
      <main>
        <Header />
        <Hero />
        <Slogan />
        <Steps />
        <Cases />
        <Reviews />
        <BookingForm />
        <Footer />
      </main>
    );
};
