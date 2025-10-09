import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "¿Cuándo debo cambiar los amortiguadores de mi auto?",
        answer: "Se recomienda revisar los amortiguadores cada 20.000 km y cambiarlos entre los 60.000 y 80.000 km, dependiendo del uso y las condiciones de manejo. Signos de desgaste incluyen rebote excesivo, inestabilidad en curvas o fugas de aceite.",
        videoId: "UIWe1qD2qus"
    },
    {
        question: "¿Qué es el tren delantero y por qué es importante?",
        answer: "El tren delantero es el conjunto de piezas que conectan las ruedas delanteras con el chasis del vehículo. Es crucial para la dirección, estabilidad y seguridad. Un tren delantero en mal estado puede causar desgaste irregular de neumáticos y pérdida de control.",
        videoId: "m_qm6l5a94A"
    },
    {
        question: "¿Ofrecen garantía en sus productos?",
        answer: "Sí, todos nuestros productos cuentan con garantía total contra defectos de fabricación. Nuestra prioridad es la calidad y la confianza de nuestros clientes. Consulta los términos específicos para cada producto al momento de la compra."
    },
    {
        question: "¿Tienen repuestos para mi modelo de vehículo?",
        answer: "Contamos con un amplio stock para la mayoría de las marcas y modelos que circulan en Chile. Desde Chevrolet y Ford hasta Toyota y Nissan. Puedes contactarnos directamente para confirmar la disponibilidad para tu vehículo."
    },
];

const YoutubeEmbed = ({ videoId }: { videoId: string }) => (
    <div className="relative overflow-hidden w-full pt-[56.25%] rounded-lg mt-4">
        <iframe
            className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
)

export default function FaqSection() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background">
            <div className="container">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                    Preguntas <span className="text-primary">Frecuentes</span>
                </h2>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="bg-card border-border/10">
                            <AccordionTrigger className="text-left text-lg font-semibold">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {item.answer}
                                {item.videoId && <YoutubeEmbed videoId={item.videoId} />}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
