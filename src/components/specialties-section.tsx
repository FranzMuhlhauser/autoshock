import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BilsteinLogo, BogeLogo, CorvenLogo, DaherLogo, EurotecLogo, GabrielLogo, IBNLogo, KYBLogo, MoogLogo, MonroeLogo, SachsLogo, StradaLogo, ThcLogo } from '@/components/icons';

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

    return (
        <section id="especialidades" className="py-20 md:py-32 bg-card">
            <div className="container">
                <SectionTitle>Nuestras <span className="text-primary">Especialidades</span></SectionTitle>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Soluciones automotrices de alta gama, seleccionadas para el máximo rendimiento y durabilidad.
                </p>
                <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-4xl mx-auto space-y-4">
                    
                    <AccordionItem value="item-1" className="bg-background border-primary/20">
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores para Vehículos Livianos</AccordionTrigger>
                        <AccordionContent className="pt-4">
                             <p className="text-muted-foreground text-justify mb-6">Eleve la seguridad y el confort de su vehículo con nuestra exclusiva selección de amortiguadores para vehículos livianos de alta performance, respaldados por las prestigiosas marcas Bilstein, Corven, Gabriel, IBN, KYB, Monroe y Strada. Diseñados con tecnología de punta, garantizamos durabilidad excepcional y un manejo superior. Adquiera ahora y experimente la diferencia en cada viaje. ¡Contáctenos hoy para una consulta personalizada!</p>
                             <div className="w-2/3 mx-auto mb-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                    <div className="overflow-hidden rounded-lg">
                                        <Image src="/images/productos/amortiguadores_gabriel.webp" alt="Amortiguadores Gabriel" width={600} height={400} className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:brightness-110 -rotate-6" />
                                    </div>
                                    <div className="overflow-hidden rounded-lg">
                                        <Image src="/images/productos/amortiguador_kyb.webp" alt="Amortiguador KYB" width={600} height={400} className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-110 hover:brightness-110 rotate-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h4 className="font-semibold text-center text-lg mb-4 text-primary">Nuestras Marcas Destacadas</h4>
                                <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
                                    <BrandLogo logo={BilsteinLogo} />
                                    <BrandLogo logo={CorvenLogo} />
                                    <BrandLogo logo={GabrielLogo} />
                                    <BrandLogo logo={IBNLogo} />
                                    <BrandLogo logo={KYBLogo} />
                                    <BrandLogo logo={MonroeLogo} />
                                    <BrandLogo logo={StradaLogo} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-background border-primary/20">
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores de Portalón</AccordionTrigger>
                        <AccordionContent className="grid md:grid-cols-2 gap-8 pt-4">
                             <div>
                                {images.portalon && <Image src={images.portalon.imageUrl} alt={images.portalon.description} width={600} height={400} className="rounded-lg object-cover mb-4" data-ai-hint={images.portalon.imageHint}/>}
                                <p className="text-muted-foreground">Amortiguadores de gas para portalones y capós que aseguran una apertura y cierre suaves y seguros. Compatibles con una gran variedad de modelos.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-semibold">Marcas Asociadas</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <BrandLogo logo={DaherLogo} />
                                    <BrandLogo logo={BogeLogo} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="bg-background border-primary/20">
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Catalíticos</AccordionTrigger>
                        <AccordionContent className="grid md:grid-cols-2 gap-8 pt-4">
                            <div>
                                {images.cataliticos && <Image src={images.cataliticos.imageUrl} alt={images.cataliticos.description} width={600} height={400} className="rounded-lg object-cover mb-4" data-ai-hint={images.cataliticos.imageHint} />}
                                <p className="text-muted-foreground">Convertidores catalíticos que cumplen con las normativas ambientales, mejorando el rendimiento del motor y reduciendo las emisiones contaminantes.</p>
                            </div>
                             <div className="space-y-4">
                                <h4 className="font-semibold">Marca Asociada</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <BrandLogo logo={GabrielLogo} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-background border-primary/20">
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Amortiguadores para Camiones y Autobuses</AccordionTrigger>
                        <AccordionContent className="grid md:grid-cols-2 gap-8 pt-4">
                            <div>
                                {images.camiones && <Image src={images.camiones.imageUrl} alt={images.camiones.description} width={600} height={400} className="rounded-lg object-cover mb-4" data-ai-hint={images.camiones.imageHint} />}
                                <p className="text-muted-foreground">Soluciones robustas para el transporte pesado. Nuestros amortiguadores para camiones y buses están diseñados para resistir las condiciones más exigentes.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-semibold">Marcas Asociadas</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <BrandLogo logo={EurotecLogo} />
                                    <BrandLogo logo={SachsLogo} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-background border-primary/20">
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-premium-yellow transition-colors duration-300">Tren Delantero</AccordionTrigger>
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
                                 <h4 className="font-semibold">Marcas Especializadas</h4>
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
