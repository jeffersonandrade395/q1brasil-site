# q1brasil-site

Landing institucional da **Q1 Brasil** — captação de provedores para o programa
piloto. Next (App Router) + Tailwind v4, formulário → `/api/lead` → Supabase
(`leads_piloto`) + notificação por e-mail (Resend). Hospedado na Vercel; domínio
q1brasil.com.br + www.

## Stack

- Next 15 (App Router) + React 19, TypeScript `strict`
- Tailwind CSS v4 (CSS-first; tokens da marca em `src/app/globals.css`)
- Encode Sans via `next/font/google`
- Zod (schema compartilhado client/server em `src/lib/lead-schema.ts`)
- Supabase JS + Resend (server-only, na rota `app/api/lead`)
- Vitest

## Scripts

```bash
pnpm install
pnpm dev         # desenvolvimento
pnpm typecheck   # tsc --noEmit
pnpm lint        # next lint
pnpm test        # vitest run
pnpm build       # next build
```

## Variáveis de ambiente

Ver `.env.example`. **Todas server-only — nunca com prefixo `NEXT_PUBLIC_`.**

| Variável | Descrição |
| --- | --- |
| `SUPABASE_URL` | URL do projeto Supabase (separado do produto) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role — usado só no servidor para inserir leads |
| `RESEND_API_KEY` | API key da Resend (domínio `q1brasil.com.br` Verified) |
| `LEAD_NOTIFY_TO` | E-mail que recebe a notificação de novo lead |
| `RESEND_FROM` | Opcional. Default `Q1 Brasil <piloto@q1brasil.com.br>` |

## Banco (Supabase)

Tabela `public.leads_piloto` com **RLS habilitado e sem policy** — anon/authenticated
não leem nem escrevem; apenas o `service_role` (servidor) insere. SQL em
`docs/leads_piloto.sql`.

## Design

Os artefatos do Stitch (referência de layout) ficam em `design/` (gitignored).
A marca segue o brand book, **não** os tokens Material do Stitch.
