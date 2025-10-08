
"use client";

import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MoogLogo, ThcLogo, BogeLogo, SachsLogo, DaherLogo } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">{children}</h2>
);

const BrandLogo = ({ logo: Logo }: { logo: React.ElementType }) => (
    <div className="p-3 bg-secondary rounded-md flex items-center justify-center h-16 transition-transform hover:scale-105">
        <Logo className="h-full w-auto text-muted-foreground" />
    </div>
);

const SubProductCard = ({ id, name }: { id: string, name: string }) => {
    const image = PlaceHolderImages.find(p => p.id === id);
    return (
        <div className="group relative overflow-hidden rounded-lg bg-card">
            {image && (
                 <Image src={image.imageUrl} alt={image.description} width={300} height={200} className="w-full h-32 object-cover transition-transform group-hover:scale-110" data-ai-hint={image.imageHint} />
            )}
            <div className="absolute inset-0 bg-black/50"></div>
            <p className="absolute bottom-2 left-2 font-semibold text-white">{name}</p>
        </div>
    );
}

const trenDelanteroSubProducts = [
    { id: 'sub-axiales', name: 'Axiales' },
    { id: 'sub-bandejas', name: 'Bandejas' },
    { id: 'sub-bieletas', name: 'Bieletas' },
    { id: 'sub-rotulas', name: 'Rótulas' },
    { id: 'sub-terminales', name: 'Terminales' },
];

const ProductCard = ({ title, description, imgSrc, isHelpCard = false }: { title: string, description: string, imgSrc?: string, isHelpCard?: boolean }) => {
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
      {imgSrc && (
        <div className="mt-4 h-24 flex items-end justify-center overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            width={120}
            height={90}
            className="object-contain h-full w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
    </div>
  );
};


const trenDelanteroProducts = [
    { title: 'Axiales', description: 'Conexión directa', imgSrc: '/images/productos_tren_delantero/Axiales.webp' },
    { title: 'Bandejas', description: 'Soporte estructural', imgSrc: '/images/productos_tren_delantero/Bandejas.webp' },
    { title: 'Bieletas', description: 'Estabilización', imgSrc: '/images/productos_tren_delantero/Bieletas.webp' },
    { title: 'Cazoletas', description: 'Amortiguación', imgSrc: '/images/productos_tren_delantero/Cazoletas.webp' },
    { title: 'Espirales', description: 'Suspensión', imgSrc: '/images/productos_tren_delantero/Espirales.webp' },
    { title: 'Rótulas', description: 'Articulación', imgSrc: '/images/productos_tren_delantero/Rotulas.webp' },
    { title: 'Terminales', description: 'Conexión final', imgSrc: '/images/productos_tren_delantero/Terminales.webp' },
    { title: '¿Necesita ayuda?', description: 'Consulte con nuestros expertos', isHelpCard: true }
];

export default function SpecialtiesSection() {
    const images = {
        portalon: PlaceHolderImages.find(p => p.id === 'specialty-portalon'),
        cataliticos: PlaceHolderImages.find(p => p.id === 'specialty-cataliticos'),
        camiones: PlaceHolderImages.find(p => p.id === 'specialty-camiones'),
        trenDelantero: PlaceHolderImages.find(p => p.id === 'tren-delantero-main'),
    };
    
    const handleTriggerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currentTarget = e.currentTarget;
        // Use a timeout to allow the accordion to open/close before scrolling
        setTimeout(() => {
            const item = currentTarget.closest('[data-radix-collection-item]');
            if (item && item.getAttribute('data-state') === 'open') {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 150); // A short delay is usually enough
    };

    return (
        <section id="especialidades" className="py-20 md:py-32 bg-card">
            <div className="container">
                <SectionTitle>Nuestras <span className="text-primary">Especialidades</span></SectionTitle>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Soluciones automotrices de alta gama, seleccionadas para el máximo rendimiento y durabilidad.
                </p>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
                    
                    <AccordionItem value="item-1" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores para Vehículos Livianos</AccordionTrigger>
                        <AccordionContent className="pt-4">
                             <p className="text-muted-foreground text-justify mb-6">Eleve la seguridad y el confort de su vehículo con nuestra exclusiva selección de amortiguadores para vehículos livianos de alta performance, respaldados por las prestigiosas marcas Bilstein, Corven, Gabriel, IBN, KYB, Monroe y Strada. Diseñados con tecnología de punta, garantizamos durabilidad excepcional y un manejo superior. Adquiera ahora y experimente la diferencia en cada viaje. ¡Contáctenos hoy para una consulta personalizada!</p>
                            <div className="w-full mx-auto mb-4">
                                <div className="flex justify-center gap-4 items-center">
                                    <div className="w-1/4 overflow-hidden rounded-lg">
                                        <Image src="/images/productos/amortiguadores_gabriel.webp" alt="Amortiguadores Gabriel" width={480} height={320} className="w-full h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:brightness-110 -rotate-6 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.4))]" />
                                    </div>
                                    <div className="w-1/4 overflow-hidden rounded-lg">
                                        <Image src="/images/productos/amortiguador_kyb.webp" alt="Amortiguador KYB" width={480} height={320} className="w-full h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:brightness-110 rotate-6 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.4))]" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-semibold text-center text-xl mt-6 mb-4 text-premium-yellow">Marcas Especializadas</h4>
                            <div className="mt-2 text-center">
                                
                                <div className="flex justify-center items-center gap-4">
                                    <Image src="/images/Logos/Bilstein-logo.webp" alt="Bilstein Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
                                    <Image src="/images/Logos/corven-logo.webp" alt="Corven Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
                                    <Image src="/images/Logos/Gabriel_logo.webp" alt="Gabriel Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
                                    <Image src="/images/Logos/ibn-logo.webp" alt="IBN Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
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
                                        <div className="overflow-hidden rounded-lg">
                                            <Image src="/images/productos/amortiguador_daher.webp" alt="Amortiguador Daher" width={300} height={200} className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" />
                                        </div>
                                        <div className="overflow-hidden rounded-lg">
                                            <Image src="/images/productos/pack_amortiguador_daher.webp" alt="Pack amortiguadores Daher" width={300} height={200} className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" />
                                        </div>
                                    </div>
                                </div>
                                <h4 className="font-semibold text-center text-xl mt-6 mb-4 text-premium-yellow">Marca Especializada</h4>
                                <div className="mt-4 flex justify-center">
                                     <Image src="/images/Logos/logo_daher.webp" alt="Daher Logo" width={180} height={50} className="object-contain transition-transform duration-300 hover:scale-110" />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Catalíticos</AccordionTrigger>
                        <AccordionContent className="pt-4">
                           <div className="grid md:grid-cols-2 gap-8 items-center">
                                <p className="text-muted-foreground text-justify">Asegure el cumplimiento normativo y la eficiencia de su vehículo con nuestros catalizadores homologados de la marca Gabriel. Fabricados con tecnología de vanguardia, garantizan una reducción óptima de emisiones y un rendimiento excepcional. Adquiera ahora y conduzca con confianza hacia un futuro más limpio. ¡Contáctenos para más información!</p>
                                <div className="overflow-hidden rounded-lg w-full flex justify-center items-center">
                                    <Image src="/images/productos/catalitico_gabriel.webp" alt="Catalítico Gabriel" width={320} height={320} className="w-64 h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores para Camiones y Autobuses</AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <p className="text-muted-foreground text-justify">Repuestos especiales para vehículos de carga y transporte, diseñados para resistir el uso intensivo. Nuestros amortiguadores para camiones y autobuses ofrecen la durabilidad y resistencia necesarias para el transporte comercial y de pasajeros. Garantizamos productos de alta calidad que soportan las exigencias del trabajo pesado.</p>
                                <div className="overflow-hidden rounded-lg w-full flex justify-center items-center">
                                    <Image src="/images/productos/amortiguador_camion.webp" alt="Amortiguador de camión" width={320} height={320} className="w-64 h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" />
                                </div>
                            </div>
                           <h4 className="font-semibold text-center text-xl mt-6 mb-4 text-premium-yellow">Marcas Especializadas</h4>
                            <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
                                <Image src="/images/Logos/eurotec_logo.webp" alt="Eurotec Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
                                <Image src="/images/Logos/Gabriel_logo.webp" alt="Gabriel Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
                                <Image src="/images/Logos/sachs_logo.webp" alt="Sachs Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
                                <Image src="/images/Logos/monroe_logo.webp" alt="Monroe Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
                                <Image src="/images/Logos/prt_logo_resultado.webp" alt="PRT Logo" width={140} height={40} className="object-contain transition-transform duration-300 hover:scale-110" />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Tren Delantero</AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <p className="text-muted-foreground text-justify mb-6">Componentes Esenciales para el Sistema de Dirección y Suspensión Delantera Descubra nuestra completa gama de repuestos de alta calidad, diseñados para garantizar la estabilidad, seguridad y máximo confort de su vehículo. Cada pieza está elaborada con tecnología avanzada para optimizar el rendimiento y prolongar la vida útil de su sistema. ¡Adquiera ahora y conduzca con total confianza! Contáctenos para más detalles.</p>
                            <h4 className="font-semibold text-center text-xl mt-6 mb-4 text-premium-yellow">Nuestros Productos Especializados</h4>
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                {trenDelanteroProducts.map((product) => (
                                    <ProductCard 
                                        key={product.title} 
                                        title={product.title} 
                                        description={product.description} 
                                        imgSrc={product.imgSrc}
                                        isHelpCard={product.isHelpCard}
                                    />
                                ))}
                            </div>
                             <h4 className="font-semibold text-center text-xl mt-6 mb-4 text-premium-yellow">Marcas Especializadas</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <BrandLogo logo={MoogLogo} />
                                <BrandLogo logo={ThcLogo} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
