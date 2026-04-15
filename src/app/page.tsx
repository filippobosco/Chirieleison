import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { PainPoints } from "@/components/sections/PainPoints";
import { USP } from "@/components/sections/USP";
import { Method } from "@/components/sections/Method";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Stats />
      <PainPoints />
      <section id="chi-siamo">
        <USP />
      </section>
      <section id="metodo">
        <Method />
      </section>
      <section id="risultati">
        <CaseStudies />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
