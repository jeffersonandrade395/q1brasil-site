import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Política de Privacidade — Q1 Brasil",
  description:
    "Como a Q1 Brasil trata dados pessoais no site (formulário do programa piloto) e no aplicativo Q1 para consultores de vendas, conforme a LGPD.",
};

const CONTATO = "contato@q1brasil.com.br";
const CNPJ = "62.116.112/0001-60";
const ATUALIZADO_EM = "8 de julho de 2026";

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
        Última atualização: {ATUALIZADO_EM}
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-slate-700">
        <p>
          A Q1 Brasil Tecnologia (CNPJ {CNPJ}) trata dados pessoais em dois
          contextos: neste <strong>site</strong>, por meio do formulário do
          programa piloto, e no <strong>aplicativo Android Q1</strong>, usado por
          consultores de vendas (PAP) de provedores de internet para registrar
          abordagens em campo, capturar leads e acompanhar vendas e comissões.
          Todo o tratamento observa a Lei Geral de Proteção de Dados (Lei
          13.709/2018).
        </p>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Controlador</h2>
          <p className="mt-2">
            Q1 Brasil Tecnologia, CNPJ {CNPJ}, responsável pelo tratamento dos
            dados descritos nesta política. O contato do encarregado pelo
            tratamento de dados (DPO) é{" "}
            <a
              href={`mailto:${CONTATO}`}
              className="font-semibold text-brand hover:text-brand-dark"
            >
              {CONTATO}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">
            Dados do site (formulário do piloto)
          </h2>
          <p className="mt-2">
            Coletamos apenas o que você informa no formulário: nome, e-mail,
            WhatsApp, nome do provedor, cidade/UF, porte do time de vendas (PAP)
            e ERP utilizado. Usamos esses dados exclusivamente para entrar em
            contato sobre o programa piloto da Q1 Brasil — avaliar o encaixe,
            apresentar a plataforma e dar andamento à sua participação.
          </p>
          <p className="mt-2">
            O tratamento se dá com base no seu <strong>consentimento</strong>,
            manifestado ao marcar a caixa de autorização e enviar o formulário
            (art. 7º, I, da LGPD). Mantemos esses dados até a conclusão do
            contato ou do piloto, ou até que você solicite a revogação do
            consentimento — o que ocorrer primeiro.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">
            Cookies e medição no site
          </h2>
          <p className="mt-2">
            Podemos utilizar cookies e ferramentas de medição de audiência neste
            site — atualmente o Google Tag Manager, que pode carregar tags de
            análise do Google — para entender como as páginas são acessadas e
            melhorar a comunicação do piloto. Esses dados são tratados de forma
            agregada, com base no legítimo interesse. Você pode bloquear ou
            apagar cookies nas configurações do seu navegador.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">
            Aplicativo Q1 (Android)
          </h2>

          <h3 className="mt-4 font-semibold text-slate-900">
            Dados do consultor (usuário do app)
          </h3>
          <p className="mt-2">
            Nome e e-mail de conta, usados para autenticação e para vincular cada
            registro ao seu autor. Coletamos a{" "}
            <strong>localização precisa apenas no momento em que o consultor
            registra uma abordagem</strong>, com o aplicativo aberto e em primeiro
            plano — não coletamos localização em segundo plano nem de forma
            contínua. Também tratamos dados técnicos e de uso (identificadores de
            dispositivo, eventos de navegação e relatórios de erro) de forma
            agregada ou pseudonimizada, para estabilidade e melhoria do produto.
          </p>

          <h3 className="mt-6 font-semibold text-slate-900">
            Dados do cliente final (coletados pelo consultor, com ciência do
            cliente)
          </h3>
          <p className="mt-2">
            Nome, telefone, e-mail e endereço de instalação; CPF, necessário para
            a consulta de viabilidade e para a contratação. Quando exigido pelo
            provedor, também documentos: documento de identificação com CPF,
            comprovante de residência, foto do cliente e foto da fachada do
            imóvel — a lista exata de documentos é configurável por cada
            provedor.
          </p>

          <h3 className="mt-6 font-semibold text-slate-900">
            Finalidades e base legal
          </h3>
          <p className="mt-2">
            Registrar visitas com rastreabilidade; capturar e encaminhar leads;
            verificar viabilidade técnica e apoiar a contratação e a instalação
            junto ao provedor; calcular comissões dos consultores; e gerar
            diagnósticos de desempenho da equipe. As bases legais são a execução
            de contrato e os procedimentos preliminares a ele, o legítimo
            interesse na gestão da força de vendas, o cumprimento de obrigação
            legal e o consentimento, quando exigido.
          </p>

          <h3 className="mt-6 font-semibold text-slate-900">Localização</h3>
          <p className="mt-2">
            A localização precisa é usada com uma única finalidade: associar a
            abordagem ao local onde ela ocorreu, garantindo rastreabilidade e
            prevenindo fraude. A captura é pontual, feita no registro da
            abordagem e com o app em primeiro plano. A permissão pode ser
            revogada a qualquer momento nas configurações do dispositivo — sem
            ela, o registro de abordagens deixa de funcionar. Quando o aparelho
            está sem sinal, o registro da abordagem, incluindo a localização,
            fica temporariamente armazenado no próprio dispositivo até que possa
            ser enviado, e é apagado após o envio.
          </p>

          <h3 className="mt-6 font-semibold text-slate-900">Câmera e fotos</h3>
          <p className="mt-2">
            Para anexar os documentos acima, o aplicativo solicita acesso à câmera
            e à galeria de fotos do dispositivo. O acesso é pontual, ocorre apenas
            quando o consultor escolhe enviar um arquivo e serve somente para esse
            envio. Não varremos nem lemos a galeria de outro modo.
          </p>

          <h3 className="mt-6 font-semibold text-slate-900">Compartilhamento</h3>
          <p className="mt-2">
            Compartilhamos os dados com o provedor de internet contratante, a quem
            o lead se destina, e com os sistemas necessários à contratação (por
            exemplo, o ERP do provedor). Também utilizamos operadores de
            infraestrutura em nuvem, que tratam os dados sob sigilo contratual e
            apenas conforme nossas instruções. <strong>Não vendemos dados
            pessoais</strong> nem os compartilhamos para publicidade de terceiros.
          </p>

          <h3 className="mt-6 font-semibold text-slate-900">Segurança</h3>
          <p className="mt-2">
            Adotamos criptografia em trânsito (HTTPS) e em repouso, controle de
            acesso por perfil de usuário e isolamento lógico dos dados de cada
            provedor. <strong>O CPF do cliente final não é armazenado no
            dispositivo</strong>: é informado no formulário e transmitido com
            segurança ao servidor, sem gravação local no aparelho. Os documentos
            ficam em armazenamento privado, nunca em endereço público, e são
            acessíveis somente por links temporários de curta duração.
          </p>

          <h3 className="mt-6 font-semibold text-slate-900">Retenção</h3>
          <p className="mt-2">
            Dados pessoais do cliente final e documentos são conservados pelo
            prazo necessário às finalidades descritas. Nossa política de retenção
            prevê a eliminação em até 90 dias após o estado terminal do lead ou da
            venda, prazo configurável por provedor, ressalvadas as hipóteses de
            guarda obrigatória previstas em lei.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">
            Direitos do titular (LGPD)
          </h2>
          <p className="mt-2">
            A qualquer momento, você pode solicitar: a confirmação da existência
            de tratamento; o acesso aos seus dados; a correção de dados
            incompletos, inexatos ou desatualizados; a anonimização, o bloqueio ou
            a eliminação de dados desnecessários ou tratados em desconformidade
            com a lei; a portabilidade; a informação sobre as entidades com as
            quais compartilhamos seus dados; e a revogação do consentimento. Basta
            escrever para{" "}
            <a
              href={`mailto:${CONTATO}`}
              className="font-semibold text-brand hover:text-brand-dark"
            >
              {CONTATO}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Menores de idade</h2>
          <p className="mt-2">
            O aplicativo Q1 é uma ferramenta de uso profissional, destinada a
            maiores de 18 anos, e não é direcionado a crianças ou adolescentes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Alterações</h2>
          <p className="mt-2">
            Esta política pode ser atualizada. A versão vigente fica sempre nesta
            página, identificada pela data de última atualização exibida no topo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900">Contato</h2>
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
