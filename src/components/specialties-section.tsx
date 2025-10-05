
"use client";

import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BogeLogo, CorvenLogo, EurotecLogo, GabrielLogo, IBNLogo, KYBLogo, MoogLogo, MonroeLogo, SachsLogo, StradaLogo, ThcLogo, DaherLogo } from '@/components/icons';
import { Badge } from '@/components/ui/badge';

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
                             <div className="w-2/3 mx-auto mb-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                    <div className="overflow-hidden rounded-lg">
                                        <Image src="/images/productos/amortiguadores_gabriel.webp" alt="Amortiguadores Gabriel" width={600} height={400} className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:brightness-110 -rotate-6 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.4))]" />
                                    </div>
                                    <div className="overflow-hidden rounded-lg">
                                        <Image src="/images/productos/amortiguador_kyb.webp" alt="Amortiguador KYB" width={600} height={400} className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:brightness-110 rotate-6 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.4))]" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 text-center">
                                <h4 className="font-semibold text-center text-xl mb-4 text-premium-yellow">Marcas Especializadas</h4>
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
                                <p className="text-muted-foreground text-justify mb-4">Optimice la funcionalidad y seguridad de su vehículo con nuestros amortiguadores de portalón de la reconocida marca Daher/Boge, diseñados con precisión y tecnología avanzada. Ofrecen resistencia superior y un cierre suave, ideales para un uso confiable a largo plazo. Adquiera hoy mismo y eleve la experiencia de su maletero. ¡Contáctenos para más detalles!</p>
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
                                <div className="overflow-hidden rounded-lg w-2/5 mx-auto">
                                    <Image src="/images/productos/catalitico_gabriel.webp" alt="Catalítico Gabriel" width={250} height={250} className="w-full h-auto object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores para Camiones y Autobuses</AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <p className="text-muted-foreground text-justify">Repuestos especiales para vehículos de carga y transporte, diseñados para resistir el uso intensivo. Nuestros amortiguadores para camiones y autobuses ofrecen la durabilidad y resistencia necesarias para el transporte comercial y de pasajeros. Garantizamos productos de alta calidad que soportan las exigencias del trabajo pesado.</p>
                                <div className="space-y-4 flex justify-center items-center">
                                    <Image src="/images/productos/amortiguador_camion.webp" alt="Amortiguador de camión" width={100} height={100} className="rounded-lg object-contain transition-transform duration-300 hover:scale-110 hover:[filter:drop-shadow(0_0_10px_rgba(255,215,0,0.2))]" />
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                 <h4 className="font-semibold text-center text-xl mb-4 text-premium-yellow">Marcas Asociadas</h4>
                                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                                    <BrandLogo logo={SachsLogo} />
                                    <BrandLogo logo={BogeLogo} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-background border-primary/20">
                        <AccordionTrigger onClick={handleTriggerClick} className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Tren Delantero</AccordionTrigger>
                        <AccordionContent className="grid md:grid-cols-2 gap-8 pt-4">
                            <div>
                                <h4 className="font-semibold mb-4">Componentes</h4>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                    {trenDelanteroSubProducts.map(prod => <SubProductCard key={prod.id} {...prod} />)}
                                </div>
                                <p className="text-muted-foreground">Ofrecemos todos los componentes necesarios para la reparación y mantenimiento del tren delantero, crucial para la dirección y estabilidad del vehículo.</p>
                            </div>
                            <div className="space-y-4">
                                {images.trenDelantero && <Image src={images.trenDelantero.imageUrl} alt={images.trenDelantero.description} width={600} height={400} className="rounded-lg object-cover mb-4" data-ai-hint={images.trenDelantero.imageHint}/>}
                                 <h4 className="font-semibold text-center text-lg mb-4 text-premium-yellow">Marcas Especializadas</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <BrandLogo logo={MoogLogo} />
                                    <BrandLogo logo={ThcLogo} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
