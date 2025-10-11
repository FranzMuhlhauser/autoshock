'use server';
/**
 * @fileOverview Flujo para el envío de correos electrónicos desde el formulario de contacto.
 * @description Este archivo contiene la lógica para procesar y enviar un mensaje de contacto
 * a través del servicio de Resend. Valida la entrada y maneja los errores de envío.
 * @exports sendContactMessage - La función principal que envía el correo.
 * @exports ContactMessageInput - El tipo de datos para la entrada del formulario.
 * @exports ContactMessageOutput - El tipo de datos para la respuesta de la función.
 */

import { z } from 'zod';
import { Resend } from 'resend';

// Esquema de validación para la entrada del formulario, usando Zod.
const ContactMessageInputSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido.'),
  email: z.string().email('El correo electrónico no es válido.'),
  phone: z.string().optional(),
  message: z.string().min(1, 'El mensaje es requerido.'),
});

// Esquema de la respuesta de la función.
const ContactMessageOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});

export type ContactMessageInput = z.infer<typeof ContactMessageInputSchema>;
export type ContactMessageOutput = z.infer<typeof ContactMessageOutputSchema>;

const TO_EMAIL = 'auto_shock@hotmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // Resend requiere un dominio verificado, usamos este para desarrollo/demo.

/**
 * Envía un correo de contacto utilizando el servicio de Resend.
 * @param {ContactMessageInput} input Los datos del formulario de contacto.
 * @returns {Promise<ContactMessageOutput>} Un objeto indicando si la operación fue exitosa y un mensaje de error opcional.
 */
export async function sendContactMessage(input: ContactMessageInput): Promise<ContactMessageOutput> {
  try {
    const validation = ContactMessageInputSchema.safeParse(input);
    if (!validation.success) {
      console.error('Error de Validación:', validation.error.flatten().fieldErrors);
      // Devolvemos el primer error encontrado para ser mostrado al usuario.
      const firstError = Object.values(validation.error.flatten().fieldErrors)[0]?.[0];
      return { success: false, error: firstError || 'Datos de entrada no válidos.' };
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error('La variable de entorno RESEND_API_KEY no está configurada.');
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, message } = validation.data;

    const emailHtml = `
      <div>
        <h1>Nuevo Mensaje de Contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `Contacto Web <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: 'Nuevo Mensaje desde tu Página Web',
      html: emailHtml,
      reply_to: email,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return { success: false, error: 'Error al enviar el correo electrónico.' };
    }

    console.log('Correo enviado exitosamente:', data);
    return { success: true };
  } catch (err: unknown) {
    console.error('Error del Servidor:', err);
    const errorMessage = err instanceof Error ? err.message : 'Un error inesperado ocurrió.';
    return { success: false, error: errorMessage };
  }
}
