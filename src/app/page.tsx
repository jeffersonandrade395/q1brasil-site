import Link from "next/link";
import { Logo } from "@/components/logo";
import { LeadForm } from "@/components/lead-form";

/* COPY: texto exato de copy-landing-q1brasil.md (aprovada). IXC no centro, oferta
   de piloto 90 dias, sem overclaim. Mudanças vs Stitch já aplicadas: selo 2026,
   sem "zero latência", sem "Mude o jogo", sem CTA-morto, typo corrigido,
   Cidade/UF adicionado, faixas de Time PAP ajustadas. */

const PASSOS = [
  {
    titulo: "Registro em campo",
    texto:
      "O PAP registra cada abordagem com geolocalização pelo app. Você sabe onde cada venda nasceu.",
  },
  {
    titulo: "Integração com o seu IXC",
    texto:
      "O lead nasce da abordagem e vai pro seu IXC. A venda volta do IXC e reconcilia a comissão — sem digitação dupla, sem planilha.",
  },
  {
    titulo: "Diagnóstico, não dashboard",
    texto:
      "O gestor recebe sinais interpretados: quem está abaixo, em qual bairro, por quê — antes de a meta virar queda.",
  },
];

const DIFERENCIAIS = [
  {
    titulo: "Integração IXC nativa",
    texto:
      "Viabilidade, planos, sync de vendas e cadastro de vendedor direto no seu IXC. O vendedor trabalha num fluxo só.",
  },
  {
    titulo: "Comissão rastreável",
    texto:
      "Sem abordagem registrada, não há comissão. Antifraude por construção — protege sua margem com prova de presença.",
  },
  {
    titulo: "Diagnóstico, não controle",
    texto:
      "A gente interpreta o dado, não só coleta. O gestor age no sinal certo, não na planilha crua.",
  },
];

function StepIcon({ n }: { n: number }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-base font-bold text-white shadow-md shadow-brand/20">
      {n}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo
              iconClassName="h-9 w-9 rounded-md"
              textClassName="text-lg font-extrabold tracking-tight text-slate-900"
            />
          </Link>
          <a
            href="#piloto"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-dark active:scale-95"
          >
            Quero ser provedor piloto
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-halo">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center">
            <span className="mb-8 inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand-dark">
              Programa piloto 2026 · vagas limitadas
            </span>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              A performance da sua equipe PAP,{" "}
              <span className="text-brand">integrada ao seu IXC.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              O Q1 conecta cada abordagem em campo à venda no seu IXC — comissão
              só onde há rastro, e o gestor recebe diagnóstico, não planilha.
            </p>
            <a
              href="#piloto"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand/25 transition-all hover:bg-brand-dark hover:scale-[1.02]"
            >
              Quero ser provedor piloto
            </a>
            <p className="mt-4 text-sm text-slate-500">
              90 dias sem custo, com a integração ao seu IXC.
            </p>
          </div>
        </section>

        {/* ── Como funciona ────────────────────────────────────────────── */}
        <section className="border-t border-slate-100 bg-white">
          <div className="mx-auto w-full max-w-5xl px-6 py-24">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Como funciona
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-brand" />
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {PASSOS.map((p, i) => (
                <div key={p.titulo} className="flex flex-col items-start gap-4">
                  <StepIcon n={i + 1} />
                  <h3 className="text-xl font-bold text-slate-900">{p.titulo}</h3>
                  <p className="leading-relaxed text-slate-600">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Diferenciais ─────────────────────────────────────────────── */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto w-full max-w-5xl px-6 py-24">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Diferenciais
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-brand" />
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {DIFERENCIAIS.map((d) => (
                <div
                  key={d.titulo}
                  className="rounded-lg border border-slate-100 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900">{d.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{d.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Piloto + form ────────────────────────────────────────────── */}
        <section id="piloto" className="border-t border-slate-100 bg-white">
          <div className="mx-auto w-full max-w-2xl px-6 py-24">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Seja um provedor piloto
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
                Programa piloto: <strong className="text-slate-800">90 dias sem custo</strong>, com a
                integração ao seu IXC. Escolhemos poucos provedores para
                acompanhar de perto — em troca, queremos o seu feedback e a sua
                operação como referência.
              </p>
            </div>
            <div className="mt-12 rounded-lg border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-12 sm:flex-row sm:justify-center">
          <div className="flex items-center gap-2.5">
            <Logo
              iconClassName="h-6 w-6 rounded-md"
              textClassName="font-bold text-slate-700"
            />
          </div>
          <span className="hidden text-slate-300 sm:inline">·</span>
          <Link
            href="/privacidade"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-brand"
          >
            Privacidade
          </Link>
          <span className="hidden text-slate-300 sm:inline">·</span>
          <p className="text-sm text-slate-400">© 2026 Q1 Brasil</p>
        </div>
      </footer>
    </div>
  );
}
