'use server';
/**
 * @fileOverview Flujo para el envío de correos de contacto.
 *
 * - sendContactMessage - Envía un correo electrónico desde el formulario de contacto.
 * - ContactMessageInput - El tipo de entrada para la función sendContactMessage.
 * - ContactMessageOutput - El tipo de retorno para la función sendContactMessage.
 */

import { z } from 'zod';
import { Resend } from 'resend';

// Esquema de validación para la entrada del formulario
const ContactMessageInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

// Esquema de la respuesta
const ContactMessageOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});

export type ContactMessageInput = z.infer<typeof ContactMessageInputSchema>;
export type ContactMessageOutput = z.infer<typeof ContactMessageOutputSchema>;

const TO_EMAIL = 'auto_shock@hotmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // Resend requiere un dominio verificado, usamos este para desarrollo/demo

/**
 * Envía un correo de contacto utilizando Resend.
 * @param input Los datos del formulario de contacto.
 * @returns Un objeto indicando si la operación fue exitosa.
 */
export async function sendContactMessage(input: ContactMessageInput): Promise<ContactMessageOutput> {
  try {
    const validation = ContactMessageInputSchema.safeParse(input);
    if (!validation.success) {
      console.error('Validation Error:', validation.error);
      return { success: false, error: 'Datos de entrada no válidos.' };
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
      console.error('Resend Error:', error);
      return { success: false, error: 'Error al enviar el correo.' };
    }

    console.log('Email sent successfully:', data);
    return { success: true };
  } catch (err) {
    console.error('Server Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Un error inesperado ocurrió.';
    return { success: false, error: errorMessage };
  }
}
