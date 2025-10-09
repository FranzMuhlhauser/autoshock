
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SpecialtiesSection from '@/components/specialties-section';
import FaqSection from '@/components/faq-section';
import BrandsSection from '@/components/brands-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import PremiumBrandsSection from '@/components/premium-brands-section';
import ValuesSection from '@/components/values-section';

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
