import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="nosotros" className="py-20 md:py-32 bg-background">
            <div className="container">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                        Sobre <span className="text-premium-yellow">Nosotros</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        En Auto Shock, ofrecemos soluciones automotrices confiables y especializadas en amortiguadores, trenes delanteros y portalones de alta calidad. Colaboramos con marcas internacionales reconocidas para garantizar un rendimiento óptimo, seguridad y durabilidad excepcional. Nuestra amplia experiencia técnica y atención personalizada nos consolidan como un referente en el mercado automotriz.
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-20">
                    <div className="space-y-6">
                        <h3 className="font-headline text-2xl md:text-3xl font-bold">
                            Nuestra Historia
                        </h3>
                        <p className="text-muted-foreground">
                            Somos una empresa familiar con más de 25 años de experiencia en Viña del Mar, especializados en repuestos para vehículos livianos, camiones y autobuses. Trabajamos con las mejores marcas y productos del mercado, ofreciendo una atención de calidad y personalizada para satisfacer las necesidades de nuestros clientes.
                        </p>
                    </div>
                    <div className="flex items-center justify-center bg-card p-8 rounded-lg">
                        <Image 
                            src="/images/logo_auto_shock.webp"
                            alt="Auto Shock Logo"
                            width={300}
                            height={45}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
