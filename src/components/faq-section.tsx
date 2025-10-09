import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "¿Qué tipos de amortiguadores ofrecen?",
        answer: "Ofrecemos una amplia gama que incluye amortiguadores hidráulicos, a gas, de portalón, para vehículos livianos, camiones y autobuses, cubriendo las principales marcas y modelos del mercado."
    },
    {
        question: "¿Cuáles son las señales de que necesito cambiar los amortiguadores?",
        answer: "Presta atención a rebotes excesivos, ruidos al pasar por baches, desgaste irregular de neumáticos, inestabilidad en curvas o una distancia de frenado más larga. Estos son indicadores clave."
    },
    {
        question: "¿Realizan envíos a todo Chile?",
        answer: "Sí, realizamos despachos a todas las regiones del país a través de Starken, Chilexpress y Blue Express, asegurando que tus repuestos lleguen de forma rápida y segura."
    },
    {
        question: "¿Qué garantía tienen los productos?",
        answer: "Todos nuestros productos cuentan con una garantía de 3 meses por defectos de fabricación. La calidad y tu tranquilidad son nuestra prioridad."
    },
    {
        question: "¿Ofrecen asesoramiento técnico?",
        answer: "¡Por supuesto! Nuestro equipo de expertos está disponible para brindarte la mejor asesoría técnica y ayudarte a elegir el repuesto exacto que tu vehículo necesita."
    },
    {
        question: "¿Cómo funciona la suspensión de tu vehículo?",
        answer: "La suspensión conecta las ruedas al chasis y utiliza amortiguadores y espirales para absorber impactos, manteniendo los neumáticos en contacto con el suelo para garantizar estabilidad, control y confort al conducir."
    }
];

export default function FaqSection() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background">
            <div className="container">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">
                    Preguntas <span className="text-primary">Frecuentes</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Resolvemos las dudas más comunes sobre amortiguadores y repuestos automotrices
                </p>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="bg-card border-border/10">
                            <AccordionTrigger className="text-left text-lg font-semibold">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
