import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV Wealth Partners | Consulenza Patrimoniale Premium",
  description:
    "Consulenza finanziaria e patrimoniale personalizzata. Strategie su misura per imprenditori e famiglie, con attenzione alla pianificazione fiscale e successoria.",
  keywords: [
    "consulenza patrimoniale",
    "wealth management",
    "consulenza finanziaria",
    "private banking",
    "ottimizzazione fiscale",
    "gestione patrimonio",
  ],
  authors: [{ name: "CV Wealth Partners" }],
  openGraph: {
    title: "CV Wealth Partners | Consulenza Patrimoniale Premium",
    description:
      "Il tuo patrimonio merita un consulente che faccia davvero il tuo interesse. Prenota il tuo Check-up Finanziario e Patrimoniale.",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Wealth Partners | Consulenza Patrimoniale Premium",
    description:
      "Il tuo patrimonio merita più di un consulente bancario che cambia ogni 18 mesi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
