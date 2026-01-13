"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X } from "lucide-react";

const painPoints = [
  {
    title: "Il tuo consulente bancario è il terzo negli ultimi 3 anni",
    description:
      "Ogni volta devi ricominciare da zero. Ogni volta ti propongono \"il nuovo prodotto del momento\". Mai una strategia di lungo periodo.",
  },
  {
    title: "Ti chiamano solo quando c'è da firmare qualcosa",
    description:
      "Zero monitoraggio. Zero aggiornamenti. Zero interesse reale per i tuoi obiettivi. Sei un numero in un portafoglio da 300 clienti.",
  },
  {
    title: "Nessuno ti ha mai parlato di ottimizzazione fiscale",
    description:
      "Stai perdendo migliaia di euro ogni anno in inefficienze che non conosci. Il tuo consulente non sa nemmeno da dove iniziare.",
  },
  {
    title: "Non hai idea di cosa succede davvero ai tuoi soldi",
    description:
      "Comunicazioni incomprensibili. Estratti conto che sembrano geroglifici. Zero trasparenza su costi, rischi e strategie reali.",
  },
];

export function PainPoints() {
  return (
    <section className="py-20 md:py-28 bg-[var(--gray-50)]">
      <Container>
        <SectionHeading title="Ti riconosci in una di queste situazioni?" />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--gray-200)] hover:shadow-md hover:border-[var(--error)]/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--error)]/10 flex items-center justify-center group-hover:bg-[var(--error)]/20 transition-colors">
                  <X className="w-6 h-6 text-[var(--error)]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--navy-950)] mb-2">
                    {pain.title}
                  </h3>
                  <p className="text-[var(--gray-600)] leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-[var(--navy-800)] leading-relaxed">
            C&apos;è un modo diverso di proteggere e far crescere il tuo patrimonio.
            <br />
            <span className="text-[var(--navy-800)] font-semibold">
              E parte da una scelta semplice: affidarti a chi mette il tuo
              interesse prima di tutto.
            </span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
