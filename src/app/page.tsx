import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BeforeAfter from '@/components/BeforeAfter';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'AI Web-студия Beautifier',
  'image': 'https://beautifier.ru/og-image.jpg',
  '@id': 'https://beautifier.ru',
  'url': 'https://beautifier.ru',
  'telephone': '+79198843477',
  'priceRange': '$$',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Москва',
    'addressCountry': 'RU'
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    'opens': '09:00',
    'closes': '18:00'
  },
  'sameAs': [
    'https://t.me/repa_13'
  ]
};

export const metadata: Metadata = {
  title: 'Beautifier | AI Web-студия | Разработка эстетичных сайтов на базе ИИ',
  description: 'Профессиональное создание и редизайн сайтов с использованием нейросетей. Повышаем конверсию и эстетику интерфейсов. Быстрый аудит и генерация прототипов.',
  keywords: 'веб-студия, дизайн сайтов, искусственный интеллект, AI дизайн, веб-разработка, Beautifier, редизайн интерфейсов, заказать сайт, Next.js студия',
  openGraph: {
    title: 'AI Web-студия Beautifier',
    description: 'Разработка эстетичных сайтов нового поколения силой искусственного интеллекта.',
    type: 'website',
    locale: 'ru_RU',
    images: "https://beautifier.ru/og-image.jpg"
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    title: 'Beautifier',
    statusBarStyle: 'black-translucent',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <BeforeAfter />
        <ContactForm />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}