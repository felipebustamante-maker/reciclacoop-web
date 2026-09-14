import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reciclacoop | Educación ambiental e impacto medible",
  description: "Diseñamos e implementamos programas de educación ambiental, reciclaje e impacto medible para empresas, municipios, colegios y comunidades.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/reciclacoop-logo.png",
    shortcut: "/reciclacoop-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
