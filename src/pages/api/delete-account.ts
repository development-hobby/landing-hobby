import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const { email, reason } = await request.json();

  console.log("Email:", email);
  console.log("Razón:", reason);
  console.log(import.meta.env.EMAIL_USER);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  try {
    // Enviar el correo
    await transporter.sendMail({
      from: `"Soporte" <${import.meta.env.EMAIL_USER}>`,
      to: import.meta.env.SUPPORT_EMAIL,
      subject: "Solicitud de eliminación de cuenta",
      text: `
        Se ha recibido una solicitud de eliminación de cuenta.
        
        Correo electrónico: ${email}
        Razón: ${reason}
      `,
    });

    return new Response(
      JSON.stringify({ message: "Solicitud enviada correctamente" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(
      JSON.stringify({ message: "Error al procesar la solicitud" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};
