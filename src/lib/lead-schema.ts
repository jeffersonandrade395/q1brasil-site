import { z } from "zod";

export const TIME_PAP_OPCOES = ["1-5", "6-15", "16-40", "40+"] as const;
export const ERP_OPCOES = ["IXC", "Outro", "Não uso"] as const;

export const leadPilotoSchema = z.object({
  nome: z.string().min(2).max(120),
  email: z.string().email().max(160),
  whatsapp: z.string().min(8).max(20),
  provedor: z.string().min(2).max(120),
  cidadeUf: z.string().min(2).max(80),
  timePap: z.enum(TIME_PAP_OPCOES),
  erp: z.enum(ERP_OPCOES),
  consentimento: z.literal(true, {
    errorMap: () => ({ message: "É necessário consentir para enviar." }),
  }),
  // honeypot anti-spam: campo oculto que humano não preenche.
  // Aceita qualquer string aqui (cap de tamanho só por sanidade) PARA QUE o /api/lead
  // consiga detectar `website` preenchido e responder 200 sem inserir ("finge sucesso,
  // ignora", sem avisar o bot). Se usássemos .max(0) a validação rejeitaria com 422
  // antes do route checar o honeypot, deixando aquele branch morto.
  website: z.string().max(200).optional(),
});

export type LeadPiloto = z.infer<typeof leadPilotoSchema>;
