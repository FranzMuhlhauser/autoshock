"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ScrollArea } from "@/components/ui/scroll-area";

const productOptions = [
    { value: 'Amortiguadores para vehículos livianos', label: 'Amortiguadores para vehículos livianos' },
    { value: 'Amortiguador de portalón', label: 'Amortiguador de portalón' },
    { value: 'Catalíticos homologación de gases', label: 'Catalíticos homologación de gases' },
    { value: 'Amortiguadores para camiones y autobuses', label: 'Amortiguadores para camiones y autobuses' },
    { value: 'Tren delantero para vehículos', label: 'Tren delantero para vehículos' },
    { value: 'Otros productos', label: 'Otros productos' },
] as const;

const trenDelanteroSubOptions = [
    { value: 'axiales', label: 'Axiales' },
    { value: 'bandejas', label: 'Bandejas' },
    { value: 'bieletas', label: 'Bieletas' },
    { value: 'cazoletas', label: 'Cazoletas' },
    { value: 'espirales', label: 'Espirales' },
    { value: 'rótulas', label: 'Rótulas' },
    { value: 'terminales', label: 'Terminales' },
] as const;

const formSchema = z.object({
  producto: z.string({ required_error: 'Por favor, selecciona un producto.' }),
  subProducto: z.string().optional(),
  otroProducto: z.string().optional(),
  marca: z.string().min(2, 'La marca es requerida.'),
  modelo: z.string().min(1, 'El modelo es requerido.'),
  ano: z.string().min(4, 'El año es requerido.'),
  matricula: z.string().min(5, 'La matrícula es requerida.'),
}).refine(data => {
    if (data.producto === 'Tren delantero para vehículos') {
        return !!data.subProducto;
    }
    return true;
}, {
    message: 'Por favor, selecciona una sub-opción para Tren Delantero.',
    path: ['subProducto'],
}).refine(data => {
    if (data.producto === 'Otros productos') {
        return data.otroProducto && data.otroProducto.length > 3;
    }
    return true;
}, {
    message: 'Por favor, especifica el producto que buscas.',
    path: ['otroProducto'],
});

type FormValues = z.infer<typeof formSchema>;

export function WhatsappForm({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void; }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        marca: '',
        modelo: '',
        ano: '',
        matricula: '',
    },
  });

  const productoSeleccionado = form.watch('producto');

  const onSubmit = (data: FormValues) => {
    const phoneNumber = "56986908605";
    let message = `Hola, quiero información sobre `;
    
    if (data.producto === 'Tren delantero para vehículos') {
        message += `tren delantero - ${data.subProducto}. `;
    } else if (data.producto === 'Otros productos') {
        message += `${data.otroProducto}. `;
    } else {
        message += `${data.producto}. `;
    }

    message += `La marca de mi vehículo es ${data.marca}, mi modelo es ${data.modelo}, el año es ${data.ano} y mi matrícula es ${data.matricula}.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Consulta por WhatsApp</DialogTitle>
          <DialogDescription>
            Completa el formulario para que podamos ayudarte de manera más rápida y precisa.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] w-full pr-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="producto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Producto de Interés</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona un producto..." />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {productOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {productoSeleccionado === 'Tren delantero para vehículos' && (
                         <FormField
                            control={form.control}
                            name="subProducto"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Parte del Tren Delantero</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una parte..." />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {trenDelanteroSubOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {productoSeleccionado === 'Otros productos' && (
                        <FormField
                            control={form.control}
                            name="otroProducto"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo de producto que busca</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Ej: Focos, espejos, etc." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    
                    {productoSeleccionado && (
                        <>
                            <FormField control={form.control} name="marca" render={({ field }) => (
                                <FormItem><FormLabel>Marca del Vehículo</FormLabel><FormControl><Input placeholder="Ej: Toyota" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="modelo" render={({ field }) => (
                                <FormItem><FormLabel>Modelo del Vehículo</FormLabel><FormControl><Input placeholder="Ej: Yaris" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="ano" render={({ field }) => (
                                <FormItem><FormLabel>Año del Vehículo</FormLabel><FormControl><Input placeholder="Ej: 2021" type="number" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="matricula" render={({ field }) => (
                                <FormItem><FormLabel>Matrícula / Patente</FormLabel><FormControl><Input placeholder="Ej: ABCD-12" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                        </>
                    )}

                    <Button type="submit" className="w-full" disabled={!productoSeleccionado || form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Generando enlace..." : "Enviar a WhatsApp"}
                    </Button>
                </form>
            </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
