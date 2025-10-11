
"use client";

import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">{children}</h2>
);

const ProductCard = ({ title, description, imageId, isHelpCard = false }: { title: string, description: string, imageId?: string, isHelpCard?: boolean }) => {
  const image = imageId ? PlaceHolderImages.find(p => p.id === imageId) : null;

  if (isHelpCard) {
    return (
      <Link href="#contacto" className="group flex flex-col justify-center items-center text-center p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg transition-all hover:bg-yellow-900/30 hover:border-yellow-700">
          <h3 className="font-headline text-xl text-premium-yellow font-bold mb-2 group-hover:text-white transition-colors">¿Necesita ayuda?</h3>
          <p className="text-muted-foreground group-hover:text-gray-300 transition-colors">Consulte con nuestros expertos</p>
      </Link>
    )
  }

  return (
    <div className="group flex flex-col p-4 border border-border/50 rounded-lg bg-background/50 hover:border-primary/50 transition-all text-center">
      <div className="flex-grow">
        <h3 className="font-headline text-xl text-premium-yellow font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {image && (
        <div className="mt-4 h-24 flex items-end justify-center overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={120}
            height={90}
            className="object-contain h-full w-auto transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
    </div>
  );
};


const trenDelanteroProducts = [
    { title: 'Axiales', description: 'Conexión directa', imageId: 'td-axiales' },
    { title: 'Bandejas', description: 'Soporte estructural', imageId: 'td-bandejas' },
    { title: 'Bieletas', description: 'Estabilización', imageId: 'td-bieletas' },
    { title: 'Cazoletas', description: 'Amortiguación', imageId: 'td-cazoletas' },
    { title: 'Espirales', description: 'Suspensión', imageId: 'td-espirales' },
    { title: 'Rótulas', description: 'Articulación', imageId: 'td-rotulas' },
    { title: 'Terminales', description: 'Conexión final', imageId: 'td-terminales' },
    { title: '¿Necesita ayuda?', description: 'Consulte con nuestros expertos', isHelpCard: true }
];

const BrandImage = ({id, width, height, altText}: {id: string, width: number, height: number, altText?: string}) => {
    const image = PlaceHolderImages.find(p => p.id === id);
    if (!image) return null;
    return (
        <Image 
            src={image.imageUrl}
            alt={altText || image.description}
            width={width}
            height={height}
            className="object-contain transition-transform duration-300 hover:scale-110"
            data-ai-hint={image.imageHint}
        />
    )
}

export default function SpecialtiesSection() {
    const images = {
        amortiguadorGabriel: PlaceHolderImages.find(p => p.id === 'amortiguador-gabriel'),
        amortiguadorKyb: PlaceHolderImages.find(p => p.id === 'amortiguador-kyb'),
        amortiguadorDaher: PlaceHolderImages.find(p => p.id === 'amortiguador-daher'),
        packAmortiguadorDaher: PlaceHolderImages.find(p => p.id === 'pack-amortiguador-daher'),
        cataliticoGabriel: PlaceHolderImages.find(p => p.id === 'catalitico-gabriel'),
        amortiguadorCamion: PlaceHolderImages.find(p => p.id === 'amortiguador-camion'),
    };
    
    const handleTriggerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currentTarget = e.currentTarget;
        setTimeout(() => {
            const item = currentTarget.closest('[data-radix-collection-item]');
            if (item && item.getAttribute('data-state') === 'open') {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 150);
    };

    return (
        <section id="productos" className="py-20 md:py-32 bg-card">
            <div className="container">
                <SectionTitle>Nuestros <span className="text-primary">Productos</span></SectionTitle>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Soluciones automotrices de alta gama, seleccionadas para el máximo rendimiento y durabilidad.
                </p>
                <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-4xl mx-auto space-y-4">
                    
                    <AccordionItem value="item-1" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores para Vehículos Livianos</AccordionTrigger>
                        <AccordionContent className="pt-4">
                             <p className="text-muted-foreground text-justify mb-6">Eleve la seguridad y el confort de su vehículo con nuestra exclusiva selección de amortiguadores para vehículos livianos de alta performance, respaldados por las prestigiosas marcas Bilstein, Corven, Gabriel, IBN, KYB, Monroe y Strada. Diseñados con tecnología de punta, garantizamos durabilidad excepcional y un manejo superior. Adquiera ahora y experimente la diferencia en cada viaje. ¡Contáctenos hoy para una consulta personalizada!</p>
                            <div className="w-full mx-auto mb-4">
                                <div className="flex justify-center gap-4 items-center">
                                    {images.amortiguadorGabriel && (
                                        <div className="w-1/4 overflow-hidden rounded-lg">
                                            <Image src={images.amortiguadorGabriel.imageUrl} alt={images.amortiguadorGabriel.description} width={480} height={320} className="w-full h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:brightness-110 -rotate-6 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.4))]" data-ai-hint={images.amortiguadorGabriel.imageHint} />
                                        </div>
                                    )}
                                    {images.amortiguadorKyb && (
                                        <div className="w-1/4 overflow-hidden rounded-lg">
                                            <Image src={images.amortiguadorKyb.imageUrl} alt={images.amortiguadorKyb.description} width={480} height={320} className="w-full h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:brightness-110 rotate-6 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.4))]" data-ai-hint={images.amortiguadorKyb.imageHint} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <h4 className="font-semibold text-center text-xl mt-6 mb-4 text-premium-yellow">Marcas Especializadas</h4>
                            <div className="mt-2 text-center">
                                <div className="flex justify-center items-center gap-4">
                                    <BrandImage id="logo-bilstein" width={140} height={40} />
                                    <BrandImage id="logo-corven" width={140} height={40} />
                                    <BrandImage id="logo-gabriel" width={140} height={40} />
                                    <BrandImage id="logo-ibn" width={140} height={40} />
                                </div>
                                <p className="text-muted-foreground mt-4 text-lg">Y muchas marcas más...</p>
                                <div className="flex justify-center items-center gap-4 mt-4">
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">KYB</Badge>
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">Monroe</Badge>
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">Strada</Badge>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores de Portalón</AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <div className="space-y-4">
                                <p className="text-muted-foreground text-justify mb-4">Optimice la funcionalidad y seguridad de su vehículo con nuestros amortiguadores de portalón de la reconocida marca Daher, diseñados con precisión y tecnología avanzada. Ofrecen resistencia superior y un cierre suave, ideales para un uso confiable a largo plazo. Adquiera hoy mismo y eleve la experiencia de su maletero. ¡Contáctenos para más detalles!</p>
                                <div className="w-1/2 mx-auto mb-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                        {images.amortiguadorDaher && (
                                            <div className="overflow-hidden rounded-lg">
                                                <Image src={images.amortiguadorDaher.imageUrl} alt={images.amortiguadorDaher.description} width={300} height={200} className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" data-ai-hint={images.amortiguadorDaher.imageHint} />
                                            </div>
                                        )}
                                        {images.packAmortiguadorDaher && (
                                            <div className="overflow-hidden rounded-lg">
                                                <Image src={images.packAmortiguadorDaher.imageUrl} alt={images.packAmortiguadorDaher.description} width={300} height={200} className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" data-ai-hint={images.packAmortiguadorDaher.imageHint} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h4 className="font-semibold text-center text-xl mt-6 mb-4 text-premium-yellow">Marca Especializada</h4>
                                <div className="mt-4 flex justify-center">
                                     <BrandImage id="logo-daher" width={180} height={50} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Catalíticos</AccordionTrigger>
                        <AccordionContent className="pt-4">
                           <div className="grid md:grid-cols-2 gap-8 items-center">
                                <p className="text-muted-foreground text-justify">Asegure el cumplimiento normativo y la eficiencia de su vehículo con nuestros catalizadores homologados de la marca Gabriel. Fabricados con tecnología de vanguardia, garantizan una reducción óptima de emisiones y un rendimiento excepcional. Adquiera ahora y conduzca con confianza hacia un futuro más limpio. ¡Contáctenos para más información!</p>
                                {images.cataliticoGabriel && (
                                    <div className="overflow-hidden rounded-lg w-full flex justify-center items-center">
                                        <Image src={images.cataliticoGabriel.imageUrl} alt={images.cataliticoGabriel.description} width={320} height={320} className="w-64 h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" data-ai-hint={images.cataliticoGabriel.imageHint} />
                                    </div>
                                )}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores para Camiones y Autobuses</AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <p className="text-muted-foreground text-justify">Repuestos especiales para vehículos de carga y transporte, diseñados para resistir el uso intensivo. Nuestros amortiguadores para camiones y autobuses ofrecen la durabilidad y resistencia necesarias para el transporte comercial y de pasajeros. Garantizamos productos de alta calidad que soportan las exigencias del trabajo pesado.</p>
                                {images.amortiguadorCamion && (
                                    <div className="overflow-hidden rounded-lg w-full flex justify-center items-center">
                                        <Image src={images.amortiguadorCamion.imageUrl} alt={images.amortiguadorCamion.description} width={160} height={160} className="w-40 h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" data-ai-hint={images.amortiguadorCamion.imageHint} />
                                    </div>
                                )}
                            </div>
                           <h4 className="font-semibold text-center text-xl mt-6 mb-4 text-premium-yellow">Marcas Especializadas</h4>
                            <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
                                <BrandImage id="logo-eurotec" width={140} height={40} />
                                <BrandImage id="logo-gabriel" width={140} height={40} />
                                <BrandImage id="logo-sachs" width={140} height={40} />
                                <BrandImage id="logo-monroe" width={140} height={40} />
                                <BrandImage id="logo-prt" width={140} height={40} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Tren Delantero</AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <p className="text-muted-foreground text-justify mb-6">Componentes Esenciales para el Sistema de Dirección y Suspensión Delantera Descubra nuestra completa gama de repuestos de alta calidad, diseñados para garantizar la estabilidad, seguridad y máximo confort de su vehículo. Cada pieza está elaborada con tecnología avanzada para optimizar el rendimiento y prolongar la vida útil de su sistema. ¡Adquiera ahora y conduzca con total confianza! Contáctenos para más detalles.</p>
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                {trenDelanteroProducts.map((product) => (
                                    <ProductCard 
                                        key={product.title} 
                                        title={product.title} 
                                        description={product.description} 
                                        imageId={product.imageId}
                                        isHelpCard={product.isHelpCard}
                                    />
                                ))}
                            </div>
                            <h4 className="font-semibold text-center text-xl mt-8 mb-4 text-premium-yellow">Nuestras Marcas Especializadas</h4>
                            <div className="mt-6 text-center">
                                <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
                                    <BrandImage id="logo-moog" width={120} height={35} />
                                    <BrandImage id="logo-thc" width={120} height={35} />
                                    <BrandImage id="logo-corven" width={120} height={35} altText="Logo marca Corven para tren delantero" />
                                    <BrandImage id="logo-osung" width={120} height={35} />
                                </div>
                                <p className="text-muted-foreground mt-8 text-lg">Y muchas marcas más...</p>
                                <div className="flex justify-center items-center gap-3 mt-4 flex-wrap">
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">Dongnam</Badge>
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">Mitsumaru</Badge>
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">PRS Turquia</Badge>
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">Sidem</Badge>
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">SUS - Q Korea</Badge>
                                    <Badge variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">Yulim</Badge>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
