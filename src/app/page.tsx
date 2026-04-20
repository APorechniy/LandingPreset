import type { Metadata } from 'next'
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { VideoTeaser } from '@/sections/VideoTeaser';
import { Footer } from '@/sections/Footer';
import './global.css'

export default function Page() {
    return (
      <main>
        <Header />
        <Hero />
        <VideoTeaser />
        <Footer />
      </main>
    );
};
