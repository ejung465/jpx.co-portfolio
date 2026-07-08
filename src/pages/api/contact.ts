import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const TO_EMAIL = "ethanjung2028@gmail.com";
const MAX_MESSAGE_LENGTH = 4000;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  // honeypot — real visitors never fill this in, bots usually do
  if (data.get("company")) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const projectType = String(data.get("projectType") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message || !emailPattern.test(email) || message.length > MAX_MESSAGE_LENGTH) {
    return new Response(JSON.stringify({ ok: false, error: "Please check your details and try again." }), {
      status: 400,
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ ok: false, error: "Contact form isn't configured yet — email me directly instead." }),
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Portfolio contact form <contact@ethanjung.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
      text: `From: ${name} <${email}>\nProject type: ${projectType || "n/a"}\n\n${message}`,
    });
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Something went wrong sending that. Try again shortly." }), {
      status: 502,
    });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
