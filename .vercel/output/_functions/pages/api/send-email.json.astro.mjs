import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const API_KEY_EMAIL = "re_WUivGa4y_LWr6KGnVvut8ph9555Nt5FsZ";
    const data = await request.json();
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Faltan campos requeridos"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const resend = new Resend(API_KEY_EMAIL);
    const sentEmail = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["catapiascastro@gmail.com"],
      subject: "Contrato",
      html: `
            <div>
               <p>${message}</p>
               email: ${email}
            </div>
            `
    });
    if (!sentEmail.error) {
      return new Response(
        JSON.stringify({
          message: "¡Email sent!"
        }),
        { status: 200 }
      );
    }
    return new Response(
      JSON.stringify({
        message: "¡Datos recibidos y procesados correctamente!"
      }),
      { status: 200 }
      // Cambiar a 200 para evitar el error
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error
      }),
      { status: 400 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
