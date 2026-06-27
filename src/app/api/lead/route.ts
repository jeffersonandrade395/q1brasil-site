import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { leadPilotoSchema } from "@/lib/lead-schema";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "BAD_REQUEST" }, { status: 400 });
  }

  const parsed = leadPilotoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "VALIDATION" }, { status: 422 });
  }
  // honeypot: campo oculto preenchido => bot. Finge sucesso e ignora (não insere).
  if (parsed.data.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const d = parsed.data;
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } },
  );
  const { error } = await supabase.from("leads_piloto").insert({
    nome: d.nome,
    email: d.email,
    whatsapp: d.whatsapp,
    provedor: d.provedor,
    cidade_uf: d.cidadeUf,
    time_pap: d.timePap,
    erp: d.erp,
    consentimento: d.consentimento,
  });
  if (error) {
    console.error("lead insert falhou", error.message);
    return NextResponse.json({ error: "DB" }, { status: 500 });
  }

  // Notifica o fundador (Resend; domínio q1brasil.com.br já Verified).
  // Não bloquear o sucesso se o e-mail falhar — o lead já está gravado.
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Q1 Brasil <piloto@q1brasil.com.br>",
      to: process.env.LEAD_NOTIFY_TO!,
      subject: `Novo piloto: ${d.provedor} (${d.erp})`,
      text: `Provedor: ${d.provedor}\nContato: ${d.nome}\nE-mail: ${d.email}\nWhatsApp: ${d.whatsapp}\nCidade/UF: ${d.cidadeUf}\nTime PAP: ${d.timePap}\nERP: ${d.erp}`,
    });
  } catch (e) {
    console.error("resend falhou (lead gravado mesmo assim)", e);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
