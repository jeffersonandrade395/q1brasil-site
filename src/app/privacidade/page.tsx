import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Política de Privacidade — Q1 Brasil",
  description:
    "Como a Q1 Brasil trata os dados coletados no formulário do programa piloto, conforme a LGPD.",
};

const CONTATO = "contato@q1brasil.com.br";

export default function PrivacidadePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        <Logo iconClassName="h-6 w-6 rounded-md" />
      </Link>

      <h1 className="mt-10 text-3xl font-extrabold tracking-tight text-slate-900">
        Política de Privacidade
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        Esta página descreve como tratamos os dados informados no formulário do
        programa piloto.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-bold text-slate-900">Controlador</h2>
          <p className="mt-2">
            Q1 Brasil Tecnologia, responsável pelo tratamento dos dados coletados
            neste site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Dados coletados</h2>
          <p className="mt-2">
            Coletamos apenas o que você informa no formulário: nome, e-mail,
            WhatsApp, nome do provedor, cidade/UF, porte do time de vendas (PAP) e
            ERP utilizado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Finalidade</h2>
          <p className="mt-2">
            Usamos esses dados exclusivamente para entrar em contato sobre o
            programa piloto da Q1 Brasil — avaliar o encaixe, apresentar a
            plataforma e dar andamento à sua participação.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Base legal</h2>
          <p className="mt-2">
            O tratamento se dá com base no seu <strong>consentimento</strong>,
            manifestado ao marcar a caixa de autorização e enviar o formulário
            (art. 7º, I, da LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Retenção</h2>
          <p className="mt-2">
            Mantemos seus dados até a conclusão do contato ou do piloto, ou até que
            você solicite a revogação do consentimento — o que ocorrer primeiro.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">
            Direitos do titular
          </h2>
          <p className="mt-2">
            Você pode, a qualquer momento, solicitar acesso, correção ou exclusão
            dos seus dados, além de revogar o consentimento. Basta entrar em
            contato pelo canal abaixo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Canal de contato</h2>
          <p className="mt-2">
            Para exercer seus direitos ou tirar dúvidas sobre privacidade, escreva
            para{" "}
            <a
              href={`mailto:${CONTATO}`}
              className="font-semibold text-brand hover:text-brand-dark"
            >
              {CONTATO}
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-slate-100 pt-6">
        <Link
          href="/"
          className="text-sm font-semibold text-brand hover:text-brand-dark"
        >
          ← Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
