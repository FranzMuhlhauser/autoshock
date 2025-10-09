import { ShieldCheck, Briefcase, Award, Handshake, Heart, Gem } from "lucide-react";

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-card p-6 rounded-lg text-center flex flex-col items-center shadow-md transition-all hover:-translate-y-2 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)] border border-transparent">
        <div className="mb-4 text-premium-yellow">{icon}</div>
        <h3 className="font-headline text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm flex-grow">{description}</p>
    </div>
);

const values = [
    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: "Honestidad",
        description: "Transparencia y sinceridad en cada interacción con nuestros clientes y proveedores."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Responsabilidad",
        description: "Asumimos la responsabilidad de nuestros productos y servicios, garantizando siempre la mejor calidad."
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Calidad",
        description: "Solo ofrecemos productos que cumplen con los más altos estándares de la industria automotriz."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Compromiso",
        description: "Estamos comprometidos con la satisfacción total de nuestros clientes, superando sus expectativas."
    },
    {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: "Pasión",
        description: "Nos apasiona el mundo automotriz y ponemos esa energía en todo lo que hacemos."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Confianza",
        description: "Construimos relaciones duraderas, asegurando que cada cliente reciba productos y asesoría fiables."
    }
];

export default function ValuesSection() {
    return (
        <section id="valores" className="pt-10 md:pt-16 pb-20 md:pb-32 bg-card">
            <div className="container">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">
                    Nuestros <span className="text-premium-yellow">Valores</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Los principios que guían nuestro trabajo y nos impulsan a ser mejores cada día.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}