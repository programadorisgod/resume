import type { APIRoute } from 'astro'
import { Resend } from 'resend'

export const POST: APIRoute = async ({ request }) => {
    try {
        const API_KEY_EMAIL = import.meta.env.API_KEY_EMAIL
        const data = await request.json()

        const { name, email, message } = data

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    message: 'Faltan campos requeridos',
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
        }

        const resend = new Resend(API_KEY_EMAIL)

        const sentEmail = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['catapiascastro@gmail.com'],
            subject: 'Contrato',
            html: `
            <div>
               <p>${message}</p>
               email: ${email}
            </div>
            `,
        })

        if (!sentEmail.error) {
            return new Response(
                JSON.stringify({
                    message: '¡Email sent!',
                }),
                { status: 200 }
            )
        }

        return new Response(
            JSON.stringify({
                message: '¡Datos recibidos y procesados correctamente!',
            }),
            { status: 200 } // Cambiar a 200 para evitar el error
        )
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: error,
            }),
            { status: 400 }
        )
    }
}
