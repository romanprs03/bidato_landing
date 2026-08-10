import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "BiDaTo Group — Transformación de negocios",
    description:
      "BiDaTo transforma procesos, conecta datos, automatiza operaciones y aplica inteligencia artificial para generar valor medible.",
    icons: {
      icon: "/assets/bidato-monogram.png",
      shortcut: "/assets/bidato-monogram.png",
    },
    openGraph: {
      type: "website",
      locale: "es_AR",
      title: "BiDaTo Group — Transformación de negocios",
      description: "Transformamos la forma en que operan los negocios.",
      images: [{ url: socialImage, width: 1792, height: 1024, alt: "BiDaTo Group" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "BiDaTo Group — Transformación de negocios",
      description: "Transformamos la forma en que operan los negocios.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
