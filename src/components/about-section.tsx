import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Award, Handshake, Heart, ShieldCheck, Briefcase, Gem } from "lucide-react";

const values = [
    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: "Honestidad",
        description: "Transparencia y sinceridad en cada interacción con nuestros clientes y proveedores."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Confianza",
        description: "Construimos relaciones duraderas, asegurando que cada cliente reciba productos y asesoría fiables."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Responsabilidad",
        description: "Cumplimos nuestros compromisos, garantizando la satisfacción y seguridad de nuestros clientes."
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Calidad",
        description: "Solo ofrecemos productos que cumplen con los más altos estándares de rendimiento y durabilidad."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Compromiso",
        description: "Estamos comprometidos con el éxito de nuestros clientes, brindando soporte y la mejor asesoría."
    },
    {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: "Pasión",
        description: "Nos apasionan los autos y nos enorgullece ser parte del cuidado y rendimiento de su vehículo."
    }
];

export default function AboutSection() {
    return (
        <section id="nosotros" className="py-20 md:py-32 bg-background">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">
                            Más de 25 Años Impulsando tu Camino
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Desde nuestros inicios, en Amortiguadores Auto Shock nos hemos dedicado a ser el socio de confianza para talleres y conductores en todo Chile. Nuestra misión es simple: proveer repuestos de la más alta calidad con un servicio al cliente excepcional.
                        </p>
                        <p className="text-muted-foreground">
                            Creemos en construir relaciones a largo plazo, basadas en la honestidad y el profundo conocimiento técnico de nuestro equipo. Cada pieza que vendemos es un reflejo de nuestro compromiso con la seguridad y el rendimiento de su vehículo.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-bold mb-6">Nuestros Valores</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {values.map((value) => (
                                <Card key={value.title} className="bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all">
                                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                        {value.icon}
                                        <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
