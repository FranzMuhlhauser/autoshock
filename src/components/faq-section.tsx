import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems: { question: string; answer: string }[] = [];

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
