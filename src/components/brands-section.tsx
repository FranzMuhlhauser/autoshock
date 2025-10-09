import { ChevroletLogo, FordLogo, HyundaiLogo, KiaLogo, MazdaLogo, NissanLogo, SuzukiLogo, ToyotaLogo } from "@/components/icons";
import { cn } from "@/lib/utils";

const brands = [
  { name: "Chevrolet", logo: ChevroletLogo },
  { name: "Ford", logo: FordLogo },
  { name: "Toyota", logo: ToyotaLogo },
  { name: "Nissan", logo: NissanLogo },
  { name: "Hyundai", logo: HyundaiLogo },
  { name: "Kia", logo: KiaLogo },
  { name: "Suzuki", logo: SuzukiLogo },
  { name: "Mazda", logo: MazdaLogo },
];

const BrandsList = ({'aria-hidden': ariaHidden}: {'aria-hidden'?: boolean}) => (
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-[140px] animate-infinite-scroll" aria-hidden={ariaHidden}>
        {brands.map((brand, index) => (
            <li key={index} className="flex-shrink-0">
                <brand.logo className="h-10 w-auto text-muted-foreground transition-colors hover:text-foreground" title={brand.name} />
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
            </div>
        </section>
    );
}
