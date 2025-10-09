import Image from "next/image";

const brands = [
    { name: "Bilstein", src: "/images/Logos/Bilstein-logo.webp" },
    { name: "Corven", src: "/images/Logos/corven-logo.webp" },
    { name: "Gabriel", src: "/images/Logos/Gabriel_logo.webp" },
    { name: "IBN", src: "/images/Logos/ibn-logo.webp" },
    { name: "KYB", src: "/images/Logos/kyb-logo.webp" },
    { name: "Monroe", src: "/images/Logos/monroe_logo.webp" },
    { name: "Strada", src: "/images/Logos/strada-logo.webp" },
    { name: "Beste", src: "/images/Logos/beste_logo.webp" },
    { name: "Daher", src: "/images/Logos/logo_daher.webp" },
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
                    {brands.map((brand) => (
                        <div key={brand.name} className="flex justify-center">
                            <Image 
                                src={brand.src}
                                alt={`${brand.name} Logo`}
                                width={200}
                                height={80}
                                className="object-contain h-20 w-auto text-muted-foreground transition-all duration-300 hover:scale-110"
                                title={brand.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}