"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import { GoogleMapsLogo, WazeLogo } from './icons';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Replace with your Formspree endpoint
    const formspreeEndpoint = "https://formspree.io/f/your_form_id";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Mensaje Enviado",
          description: "Gracias por contactarnos. Te responderemos a la brevedad.",
        });
        form.reset();
      } else {
        throw new Error("Hubo un problema al enviar el formulario.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="tu@correo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="+56 9 1234 5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Cuéntanos cómo podemos ayudarte..." className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </Form>
  );
}

const InfoItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="text-primary mt-1">{icon}</div>
        <div className="text-muted-foreground">{children}</div>
    </div>
);


export default function ContactSection() {
    return (
        <section id="contacto" className="py-20 md:py-32 bg-card">
            <div className="container">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                    Contáctanos
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-headline text-2xl font-bold mb-4">Información de Contacto</h3>
                            <div className="space-y-4">
                                <InfoItem icon={<MapPin />}>Avenida Benidorm 1280, Viña del Mar, Chile</InfoItem>
                                <InfoItem icon={<Phone />}><a href="tel:+56986908605" className="hover:text-primary transition-colors">+56 9 8690 8605</a></InfoItem>
                                <InfoItem icon={<Mail />}><a href="mailto:contacto@autoshock.cl" className="hover:text-primary transition-colors">contacto@autoshock.cl</a></InfoItem>
                                <InfoItem icon={<Facebook />}><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Síguenos en Facebook</a></InfoItem>
                            </div>
                        </div>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.187383187163!2d-71.53909102434568!3d-33.01131107355152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dde184b76a9f%3A0x49e79430132c3246!2sAv.%20Benidorm%201280%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso!5e0!3m2!1sen!2scl!4v1719522197587!5m2!1sen!2scl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Amortiguadores Auto Shock"
                            ></iframe>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" asChild className="w-full">
                                <a href="https://www.google.com/maps/search/?api=1&query=Avenida+Benidorm+1280%2C+Vi%C3%B1a+del+Mar%2C+Chile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <GoogleMapsLogo className="h-5 w-5" /> Abrir en Google Maps
                                </a>
                            </Button>
                            <Button variant="accent" asChild className="w-full">
                                <a href="https://waze.com/ul?ll=-33.0113,-71.5365&navigate=yes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <WazeLogo className="h-5 w-5" /> Abrir en Waze
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="p-8 bg-background rounded-lg">
                        <h3 className="font-headline text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
