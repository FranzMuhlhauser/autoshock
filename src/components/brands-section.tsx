import Image from "next/image";
import { cn } from "@/lib/utils";

const brands = [
  { name: "Ford", src: "/images/logo_carrusel/fordlogo.webp" },
  { name: "Kia", src: "/images/logo_carrusel/kialogo.webp" },
  { name: "Mitsubishi", src: "/images/logo_carrusel/mitsubishi_logo.webp" },
  { name: "Nissan", src: "/images/logo_carrusel/nissanlogo.webp" },
  { name: "Toyota", src: "/images/logo_carrusel/toyotalogo.webp" },
  { name: "Chevrolet", src: "/images/logo_carrusel/chevroletlogo.webp" },
];

const BrandsList = ({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean }) => (
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden={ariaHidden}>
        {brands.map((brand, index) => (
            <li key={index} className="flex-shrink-0">
                <Image 
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={160}
                    height={60}
                    className={cn(
                        "w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-400 hover:scale-110",
                        brand.name === "Kia" ? "h-12" : "h-16"
                    )}
                    title={brand.name}
                />
            </li>
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
            </div>
        </section>
    );
}
