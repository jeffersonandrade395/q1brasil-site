import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";

const encodeSans = Encode_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-encode",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://q1brasil.com.br"),
  title: "Q1 Brasil — Performance PAP para provedores de internet",
  description:
    "Plataforma de performance para times de vendas porta a porta (PAP) de provedores de internet, integrada ao seu IXC.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 162.62 162.62'%3E%3Crect width='162.62' height='162.62' rx='28.04' fill='%230E7C66'/%3E%3C/svg%3E",
  },
  openGraph: {
    title: "Q1 Brasil — Performance PAP para provedores de internet",
    description:
      "Plataforma de performance para times de vendas porta a porta (PAP) de provedores de internet, integrada ao seu IXC.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={encodeSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
