import { BilsteinLogo, CorvenLogo, GabrielLogo, SachsLogo, MonroeLogo, KYBLogo } from "@/components/icons";

const brands = [
    { name: "Bilstein", logo: BilsteinLogo },
    { name: "Corven", logo: CorvenLogo },
    { name: "Gabriel", logo: GabrielLogo },
    { name: "Sachs", logo: SachsLogo },
    { name: "Monroe", logo: MonroeLogo },
    { name: "KYB", logo: KYBLogo },
];

export default function PremiumBrandsSection() {
    return (
        <section id="premium-marcas" className="py-20 md:py-24 bg-card">
            <div className="container text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                    Marcas <span className="text-premium-yellow">Premium</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                    Trabajamos con las mejores marcas del mercado para garantizar la máxima calidad y durabilidad.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    {brands.map((brand) => (
                        <div key={brand.name} className="flex justify-center">
                            <brand.logo className="h-12 w-auto text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110" title={brand.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
