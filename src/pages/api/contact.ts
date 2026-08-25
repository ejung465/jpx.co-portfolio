import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const TO_EMAIL = "contact@jpxco.dev";
const MAX_MESSAGE_LENGTH = 4000;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  // honeypot — real visitors never fill this in, bots usually do
  if (data.get("company")) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
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

  // resend.emails.send() returns { data, error } — it does NOT throw on an
  // API-level rejection (e.g. the sandbox sender's recipient restriction
  // before jpxco.dev is verified). Both paths must be checked, or a
  // rejected send gets reported to the client — and logged here — as a
  // silent success.
  let result;
  try {
    result = await resend.emails.send({
      // Resend's shared sandbox sender — works with no domain verification,
      // but while unverified it can only deliver to the address on the
      // Resend account itself. Once jpxco.dev is verified in Resend, switch
      // this to e.g. contact@jpxco.dev so it can reach any recipient.
      from: "JPX Website Development Co. <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
      text: `From: ${name} <${email}>\nPhone: ${phone || "not provided"}\nProject type: ${projectType || "n/a"}\n\n${message}`,
    });
  } catch (err) {
    console.error("contact form: resend threw", err);
    return new Response(JSON.stringify({ ok: false, error: "Something went wrong sending that. Try again shortly." }), {
      status: 502,
    });
  }

  if (result.error) {
    console.error("contact form: resend rejected the send", result.error);
    return new Response(
      JSON.stringify({ ok: false, error: "Something went wrong sending that. Try again shortly." }),
      { status: 502 },
    );
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
