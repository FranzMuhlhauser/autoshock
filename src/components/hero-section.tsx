import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const TrustIndicator = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="font-headline text-3xl lg:text-4xl font-bold text-primary">{value}</p>
    <p className="text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
  </div>
);

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container text-center px-4">
        <Badge variant="secondary" className="mb-4 py-1 px-3 bg-primary/10 border-primary/50 text-primary text-base">Más de 25 años de experiencia</Badge>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
          Amortiguadores <span className="bg-gradient-to-r from-premium-yellow to-premium-yellow-dark bg-clip-text text-transparent">Auto Shock</span>
        </h1>
        <p className="font-headline max-w-2xl mx-auto text-xl md:text-2xl text-premium-yellow mb-6 drop-shadow-md">
          Calidad Premium que Impulsa tu Camino
        </p>
        <Button size="lg" asChild className="rounded-full">
          <Link href="#especialidades">Explorar Productos</Link>
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 lg:pb-16">
        <div className="container">
          <div className="mx-auto max-w-4xl grid grid-cols-3 gap-8 backdrop-blur-sm bg-card/50 p-6 rounded-lg border border-border">
            <TrustIndicator value="25+" label="Años" />
            <TrustIndicator value="10K+" label="Clientes" />
            <TrustIndicator value="100%" label="Garantía Total" />
          </div>
        </div>
      </div>
    </section>
  );
}
