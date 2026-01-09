import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { PainPoints } from "@/components/sections/PainPoints";
import { USP } from "@/components/sections/USP";
import { Comparison } from "@/components/sections/Comparison";
import { Method } from "@/components/sections/Method";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

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
      <Comparison />
      <section id="metodo">
        <Method />
      </section>
      <section id="risultati">
        <CaseStudies />
      </section>
      <Testimonials />
      <section id="faq">
        <FAQ />
      </section>
      <FinalCTA />
      <Footer />
    </main>
  );
}
