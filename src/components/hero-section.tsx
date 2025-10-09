
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TrustIndicator = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center">
    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{children}</p>
  </div>
);

export default function HeroSection() {

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center">
      <Image
          src="/images/hero/hero.webp"
          alt="Taller mecánico de Auto Shock"
          fill
          className="object-cover"
          priority
          data-ai-hint="car workshop"
        />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container text-center px-4 flex flex-col items-center">
        <Badge variant="secondary" className="mb-4 py-1 px-3 bg-primary/10 border-primary/50 text-primary text-base">Más de 25 años de experiencia</Badge>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
          Amortiguadores <span className="bg-gradient-to-r from-premium-yellow to-premium-yellow-dark bg-clip-text text-transparent">Auto Shock</span>
        </h1>
        <p className="font-headline max-w-2xl mx-auto text-xl md:text-2xl text-premium-yellow mb-6 drop-shadow-md">
          Calidad Premium que Impulsa tu Camino
        </p>
        <Button size="lg" asChild className="rounded-full">
          <Link href="#productos">Explorar Productos</Link>
        </Button>

        <div className="mt-16 text-white">
          <p className="text-lg mb-4">Confían en nosotros más de 10,000 clientes</p>
          <div className="flex justify-center items-center space-x-8">
            <TrustIndicator>25+ Años</TrustIndicator>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <TrustIndicator>10K+ Clientes</TrustIndicator>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <TrustIndicator>Garantía Total</TrustIndicator>
          </div>
        </div>
      </div>

    </section>
  );
}
