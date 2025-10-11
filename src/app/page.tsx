
"use client";

import dynamic from 'next/dynamic';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import WhatsAppButton from '@/components/whatsapp-button';

// Carga los componentes de forma diferida para mejorar el rendimiento de carga inicial.
// Estos componentes no se cargarán hasta que estén cerca de ser visibles en la pantalla.
const SpecialtiesSection = dynamic(() => import('@/components/specialties-section'));
const PremiumBrandsSection = dynamic(() => import('@/components/premium-brands-section'));
const BrandsSection = dynamic(() => import('@/components/brands-section'));
const AboutSection = dynamic(() => import('@/components/about-section'));
const ValuesSection = dynamic(() => import('@/components/values-section'));
const FaqSection = dynamic(() => import('@/components/faq-section'));
const ContactSection = dynamic(() => import('@/components/contact-section'));
const Footer = dynamic(() => import('@/components/footer'));


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SpecialtiesSection />
        <PremiumBrandsSection />
        <BrandsSection />
        <AboutSection />
        <ValuesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
