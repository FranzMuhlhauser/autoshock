import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const brands = [
  { name: "Ford", id: "carrusel-ford" },
  { name: "Kia", id: "carrusel-kia" },
  { name: "Mitsubishi", id: "carrusel-mitsubishi" },
  { name: "Nissan", id: "carrusel-nissan" },
  { name: "Toyota", id: "carrusel-toyota" },
  { name: "Chevrolet", id: "carrusel-chevrolet" },
].map(brand => ({ ...brand, data: PlaceHolderImages.find(p => p.id === brand.id) }));


const otherBrands = [
    'Peugeot', 'Volkswagen', 'Renault', 'Mazda', 'Honda', 'Hyundai', 'Suzuki', 'Subaru'
];

const BrandsList = ({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean }) => (
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden={ariaHidden}>
        {brands.map((brand, index) => (
            brand.data && (
                <li key={index} className="flex-shrink-0">
                    <Image 
                        src={brand.data.imageUrl}
                        alt={brand.data.description}
                        width={160}
                        height={80}
                        className={cn(
                            "w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-400 hover:scale-110",
                            brand.name === "Kia" ? "h-12" : "h-20"
                        )}
                        title={brand.name}
                        data-ai-hint={brand.data.imageHint}
                    />
                </li>
            )
        ))}
    </ul>
);

export default function BrandsSection() {
    return (
        <section id="marcas" className="py-20 md:py-24 bg-background">
            <div className="container">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">
                    Marcas que <span className="text-premium-yellow">Atendemos</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Repuestos premium compatibles con las principales marcas automotrices del mercado
                </p>
                <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <BrandsList />
                    <BrandsList aria-hidden />
                </div>
                <p className="text-center text-muted-foreground mt-8">Y muchas marcas mas...</p>
                 <div className="flex justify-center flex-wrap gap-3 mt-4">
                    {otherBrands.map((brand) => (
                        <Badge key={brand} variant="secondary" className="px-4 py-2 text-sm transition-all hover:text-premium-yellow hover:shadow-[0_0_15px_hsl(var(--primary))]">
                            {brand}
                        </Badge>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto mt-20 bg-card/50 p-10 rounded-lg text-center border border-border/20">
                    <h3 className="font-headline text-3xl font-bold mb-4">¿Tu marca no está en la lista?</h3>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        No te preocupes, trabajamos con repuestos para prácticamente todas las marcas del mercado
                    </p>
                    <Button asChild size="lg" className="rounded-full bg-premium-yellow text-black hover:bg-premium-yellow-dark">
                        <Link href="#contacto">
                            <Mail className="mr-2 h-5 w-5" />
                            Consulta tu Marca
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
