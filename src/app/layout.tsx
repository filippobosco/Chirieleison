import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
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
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '784408947305241');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=784408947305241&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  );
}
