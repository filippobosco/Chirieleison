import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { PainPoints } from "@/components/sections/PainPoints";
import { USP } from "@/components/sections/USP";
import { Method } from "@/components/sections/Method";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FAQ } from "@/components/sections/FAQ";
import { MidCTA } from "@/components/sections/MidCTA";
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
      <MidCTA />
      <section id="chi-siamo">
        <USP />
      </section>
      <section id="metodo">
        <Method />
      </section>
      <section id="risultati">
        <CaseStudies />
      </section>
      <FinalCTA />
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
