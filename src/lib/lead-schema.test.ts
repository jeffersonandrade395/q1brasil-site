import { describe, expect, it } from "vitest";
import { leadPilotoSchema } from "./lead-schema";

const base = {
  nome: "Maria Souza",
  email: "maria@masterinternet.com.br",
  whatsapp: "(11) 99999-0000",
  provedor: "Master Internet",
  cidadeUf: "Campinas/SP",
  timePap: "6-15",
  erp: "IXC",
  consentimento: true,
} as const;

describe("leadPilotoSchema", () => {
  it("aceita um payload válido", () => {
    expect(leadPilotoSchema.safeParse(base).success).toBe(true);
  });

  it("rejeita sem consentimento", () => {
    const r = leadPilotoSchema.safeParse({ ...base, consentimento: false });
    expect(r.success).toBe(false);
  });

  it("rejeita e-mail inválido", () => {
    const r = leadPilotoSchema.safeParse({ ...base, email: "não-é-email" });
    expect(r.success).toBe(false);
  });

  it("rejeita timePap fora das faixas", () => {
    const r = leadPilotoSchema.safeParse({ ...base, timePap: "1-10" });
    expect(r.success).toBe(false);
  });

  it("rejeita erp fora das opções", () => {
    const r = leadPilotoSchema.safeParse({ ...base, erp: "SGP" });
    expect(r.success).toBe(false);
  });

  // Honeypot: o schema deixa passar (vazio, ausente OU preenchido). Quem decide é a
  // /api/lead — ao ver `parsed.data.website` preenchido, responde 200 SEM inserir
  // (finge sucesso, ignora, sem avisar o bot). Por isso o schema não usa .max(0):
  // se rejeitasse aqui, o route nunca chegaria a fingir o 200.
  it("aceita honeypot vazio e ausente (humano)", () => {
    expect(leadPilotoSchema.safeParse({ ...base, website: "" }).success).toBe(true);
    expect(leadPilotoSchema.safeParse(base).success).toBe(true);
  });

  it("deixa o honeypot preenchido PASSAR no schema (o route é quem ignora com 200)", () => {
    const r = leadPilotoSchema.safeParse({ ...base, website: "http://spam" });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.website).toBe("http://spam");
  });
});
