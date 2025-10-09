import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "¿Qué marcas de amortiguadores manejan?",
        answer: "Trabajamos con las mejores marcas del mercado: KYB, Monroe, Gabriel, Bilstein, Corven, IBN y Strada. Todas son marcas originales con garantía de fábrica."
    },
    {
        question: "¿Cuándo debo cambiar los amortiguadores de mi auto?",
        answer: "Se recomienda cambiar los amortiguadores cada 80,000-100,000 km o cuando notes rebotes excesivos, ruidos al pasar por baches, o desgaste irregular de neumáticos."
    },
    {
        question: "¿Tienen repuestos para todas las marcas de autos?",
        answer: "Sí, tenemos repuestos para Toyota, Honda, Nissan, Chevrolet, Ford, Hyundai, Kia y muchas más marcas. Contamos con un amplio stock de amortiguadores y repuestos de suspensión."
    },
    {
        question: "¿Cómo funciona la suspensión de tu vehículo?",
        answer: "La suspensión es clave para la estabilidad y comodidad de tu vehículo, absorbiendo irregularidades del terreno gracias a amortiguadores, muelles y barras, mientras optimiza el control junto con el sistema de dirección. Descubre más con nuestros videos explicativos:"
    }
];

export default function FaqSection() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background">
            <div className="container">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">
                    Preguntas <span className="text-premium-yellow">Frecuentes</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Resolvemos las dudas más comunes sobre amortiguadores y repuestos automotrices
                </p>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
                    <AccordionItem value="item-1" className="bg-card border-border/10">
                        <AccordionTrigger className="text-left text-lg font-semibold">{faqItems[0].question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {faqItems[0].answer}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="bg-card border-border/10">
                        <AccordionTrigger className="text-left text-lg font-semibold">{faqItems[1].question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {faqItems[1].answer}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="bg-card border-border/10">
                        <AccordionTrigger className="text-left text-lg font-semibold">{faqItems[2].question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {faqItems[2].answer}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="bg-card border-border/10">
                        <AccordionTrigger className="text-left text-lg font-semibold">{faqItems[3].question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {faqItems[3].answer}
                            <div className="mt-6">
                                <h4 className="font-semibold text-premium-yellow mb-2">¿Cómo funcionan los sistemas de suspensión y amortiguación de un Vehículo?</h4>
                                <div className="aspect-video w-full">
                                    <iframe
                                        className="w-full h-full rounded-lg"
                                        src="https://www.youtube.com/embed/nB4i-LaIdPY"
                                        title="Funcionamientos de la suspención en terreno"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="font-semibold text-premium-yellow mb-2">Aprende a identificar las piezas de la suspensión en tu vehículo</h4>
                                <div className="aspect-video w-full">
                                    <iframe
                                        className="w-full h-full rounded-lg"
                                        src="https://www.youtube.com/embed/Yocn5L4rOy0"
                                        title="Aprende a identificar las piezas de la suspensión en tu vehículo"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
