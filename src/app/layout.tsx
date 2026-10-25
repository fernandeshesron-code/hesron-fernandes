import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hesron Fernandes",
  description: "Portfólio e projeto inicial com Next.js e Supabase",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
