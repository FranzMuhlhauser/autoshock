import Image from "next/image";

const brands = [
    { name: "Bilstein", src: "/images/Logos/Bilstein-logo.webp", width: 150, height: 40 },
    { name: "Corven", src: "/images/Logos/corven-logo.webp", width: 140, height: 50 },
    { name: "Gabriel", src: "/images/Logos/Gabriel_logo.webp", width: 200, height: 65 },
    { name: "IBN", src: "/images/Logos/ibn-logo.webp", width: 120, height: 60 },
    { name: "KYB", src: "/images/Logos/kyb-logo.webp", width: 120, height: 50 },
    { name: "Monroe", src: "/images/Logos/monroe_logo.webp", width: 160, height: 40 },
    { name: "Strada", src: "/images/Logos/strada-logo.webp", width: 140, height: 50 },
    { name: "Beste", src: "/images/Logos/beste_logo.webp", width: 130, height: 60 },
    { name: "Daher", src: "/images/Logos/logo_daher.webp", width: 160, height: 45 },
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
                    {brands.map((brand) => (
                        <div key={brand.name} className="flex justify-center items-center h-16">
                            <Image 
                                src={brand.src}
                                alt={`${brand.name} Logo`}
                                width={brand.width}
                                height={brand.height}
                                className="object-contain max-h-full max-w-full text-muted-foreground transition-all duration-300 hover:scale-110"
                                title={brand.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
