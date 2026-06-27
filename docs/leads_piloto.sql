-- Tabela de leads do programa piloto (Supabase — projeto separado do produto).
-- RLS habilitado e SEM policy: anon/authenticated não leem nem escrevem;
-- apenas o service_role (servidor, em /api/lead) insere.

create table public.leads_piloto (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  whatsapp text not null,
  provedor text not null,
  cidade_uf text not null,
  time_pap text not null,
  erp text not null,
  consentimento boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.leads_piloto enable row level security;
-- SEM policy: somente service_role (server) insere.
