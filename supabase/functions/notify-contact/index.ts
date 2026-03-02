import { corsHeaders } from "../_shared/cors.ts";

const RESEND_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, location, paint_type, area_sqm, deadline, service } = await req.json();

    if (!NOTIFY_EMAIL) {
      throw new Error("NOTIFY_EMAIL not configured");
    }

    const paintTypeLabels: Record<string, string> = {
      interior: "Interior",
      exterior: "Exterior",
      both: "Interior e Exterior",
      industrial: "Industrial",
    };

    const rows = [
      { label: "Nome", value: name },
      { label: "Email", value: email },
      { label: "Telefone", value: phone },
      { label: "Localização", value: location },
      { label: "Tipo de Pintura", value: paint_type ? paintTypeLabels[paint_type] || paint_type : null },
      { label: "Área (m²)", value: area_sqm },
      { label: "Prazo", value: deadline },
      { label: "Serviço / Mensagem", value: service },
    ]
      .filter((r) => r.value)
      .map(
        (r) =>
          `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;">${r.label}</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${r.value}</td></tr>`
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
        <div style="background:#1a1a2e;padding:24px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:20px;">Nova Submissão de Contacto</h1>
        </div>
        <div style="padding:24px;">
          <p style="color:#6b7280;margin:0 0 16px;">Recebeste um novo pedido de orçamento através do website.</p>
          <table style="width:100%;border-collapse:collapse;">${rows}</table>
          <p style="color:#9ca3af;font-size:12px;margin:24px 0 0;text-align:center;">Email enviado automaticamente pelo website 7Limp.</p>
        </div>
      </div>
    `;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/email", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [NOTIFY_EMAIL],
        subject: `Novo Contacto: ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Email send failed: ${errorText}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("notify-contact error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
