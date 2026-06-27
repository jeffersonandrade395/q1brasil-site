"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ERP_OPCOES,
  TIME_PAP_OPCOES,
  leadPilotoSchema,
  type LeadPiloto,
} from "@/lib/lead-schema";

type Status = "idle" | "enviando" | "ok" | "erro";

const campoBase =
  "w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/30";
const labelBase = "mb-1.5 block text-sm font-semibold text-slate-700";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [erros, setErros] = useState<Record<string, string>>({});
  const [mensagemErro, setMensagemErro] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErros({});
    setMensagemErro("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      nome: String(fd.get("nome") ?? ""),
      email: String(fd.get("email") ?? ""),
      whatsapp: String(fd.get("whatsapp") ?? ""),
      provedor: String(fd.get("provedor") ?? ""),
      cidadeUf: String(fd.get("cidadeUf") ?? ""),
      timePap: String(fd.get("timePap") ?? ""),
      erp: String(fd.get("erp") ?? ""),
      consentimento: fd.get("consentimento") === "on",
      website: String(fd.get("website") ?? ""),
    };

    const parsed = leadPilotoSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErros(fieldErrors);
      setStatus("erro");
      setMensagemErro("Confira os campos destacados e tente novamente.");
      return;
    }

    setStatus("enviando");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data satisfies LeadPiloto),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("ok");
    } catch {
      setStatus("erro");
      setMensagemErro(
        "Não foi possível enviar agora. Tente novamente em instantes.",
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-lg border border-brand/20 bg-brand/5 p-8 text-center">
        <p className="text-lg font-bold text-brand-dark">
          Recebemos sua inscrição.
        </p>
        <p className="mt-2 text-slate-600">
          Entramos em contato pelo WhatsApp/e-mail informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label className={labelBase} htmlFor="nome">
          Nome completo
        </label>
        <input id="nome" name="nome" type="text" autoComplete="name" className={campoBase} placeholder="Seu nome" />
        {erros.nome && <p className="mt-1 text-sm text-danger">{erros.nome}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelBase} htmlFor="email">
            E-mail corporativo
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={campoBase} placeholder="voce@provedor.com.br" />
          {erros.email && <p className="mt-1 text-sm text-danger">{erros.email}</p>}
        </div>
        <div>
          <label className={labelBase} htmlFor="whatsapp">
            WhatsApp
          </label>
          <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" className={campoBase} placeholder="(00) 00000-0000" />
          {erros.whatsapp && <p className="mt-1 text-sm text-danger">{erros.whatsapp}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelBase} htmlFor="provedor">
            Nome do provedor
          </label>
          <input id="provedor" name="provedor" type="text" autoComplete="organization" className={campoBase} placeholder="Ex.: Master Internet" />
          {erros.provedor && <p className="mt-1 text-sm text-danger">{erros.provedor}</p>}
        </div>
        <div>
          <label className={labelBase} htmlFor="cidadeUf">
            Cidade/UF
          </label>
          <input id="cidadeUf" name="cidadeUf" type="text" className={campoBase} placeholder="Ex.: Campinas/SP" />
          {erros.cidadeUf && <p className="mt-1 text-sm text-danger">{erros.cidadeUf}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelBase} htmlFor="timePap">
            Time PAP (nº de vendedores)
          </label>
          <select id="timePap" name="timePap" defaultValue="" className={campoBase}>
            <option value="" disabled>
              Selecione…
            </option>
            {TIME_PAP_OPCOES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {erros.timePap && <p className="mt-1 text-sm text-danger">{erros.timePap}</p>}
        </div>
        <div>
          <label className={labelBase} htmlFor="erp">
            ERP atual
          </label>
          <select id="erp" name="erp" defaultValue="" className={campoBase}>
            <option value="" disabled>
              Selecione…
            </option>
            {ERP_OPCOES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {erros.erp && <p className="mt-1 text-sm text-danger">{erros.erp}</p>}
        </div>
      </div>

      {/* honeypot: escondido para humanos, atrativo para bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          id="consentimento"
          name="consentimento"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 text-brand focus:ring-brand"
        />
        <label htmlFor="consentimento" className="cursor-pointer text-sm text-slate-600">
          Autorizo o contato comercial e o tratamento dos meus dados conforme a{" "}
          <Link href="/privacidade" className="font-semibold text-brand underline hover:text-brand-dark">
            Política de Privacidade
          </Link>
          .
        </label>
      </div>
      {erros.consentimento && (
        <p className="text-sm text-danger">{erros.consentimento}</p>
      )}

      <button
        type="submit"
        disabled={status === "enviando"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "enviando" ? "Enviando…" : "Quero participar do piloto"}
      </button>

      {status === "erro" && mensagemErro && (
        <p className="text-center text-sm text-danger">{mensagemErro}</p>
      )}
    </form>
  );
}
