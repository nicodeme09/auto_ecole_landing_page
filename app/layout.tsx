import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auto École App — La plateforme tout-en-un pour gérer votre auto-école",
  description:
    "Gérez vos apprenants, planifiez vos leçons, suivez vos paiements et pilotez votre auto-école depuis une seule interface moderne. Essai gratuit sans carte bancaire.",
  keywords: [
    "logiciel auto école",
    "gestion auto école",
    "plateforme auto école",
    "logiciel moniteur",
    "gestion apprenants",
    "planning auto école",
    "suivi paiements auto école",
  ],
  authors: [{ name: "Auto École App" }],
  openGraph: {
    title: "Auto École App — Gérez votre auto-école intelligemment",
    description:
      "Apprenants, plannings, paiements, moniteurs — tout centralisé dans une interface simple et moderne.",
    type: "website",
    locale: "fr_FR",
    siteName: "Auto École App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto École App",
    description: "La plateforme tout-en-un pour les auto-écoles modernes.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
