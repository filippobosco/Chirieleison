"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Devo lasciare la mia banca per lavorare con voi?",
    answer:
      "No, non necessariamente. Molti nostri clienti mantengono il conto che usano per la quotidianità e utilizzano il nostro servizio per la gestione dei risparmi. Grazie all'appoggio di Banca Generali, però, offriamo anche la possibilità di avere un conto principale completo: carte, bancomat, addebiti permanenti e tutto ciò che serve. Lo stesso vale per le aziende: possiamo gestire il cash flow o il risparmio accumulato, mentre il conto operativo resta dove preferisci.",
  },
  {
    question: "Quanto patrimonio serve per diventare vostri clienti?",
    answer:
      "Lavoriamo con clienti che hanno un patrimonio investibile (esclusa prima casa) di almeno €250.000. Sotto questa soglia non riusciamo a garantire il livello di servizio e personalizzazione che è il nostro standard.",
  },
  {
    question: "Siete abilitati e regolamentati?",
    answer:
      "Assolutamente sì. Siamo iscritti all'Albo dei Consulenti Finanziari (OCF - Organismo di vigilanza e tenuta dell'albo unico dei Consulenti Finanziari) e operiamo nel pieno rispetto della normativa MiFID II. Antonio possiede inoltre la Certificazione EFPA ESG Advisor (European Financial Planning Association). Questo significa massima trasparenza, obblighi informativi stringenti e tutela totale del cliente.",
  },
  {
    question: "Cosa succede durante il primo incontro?",
    answer:
      "Il primo incontro dura circa 40-60 minuti ed è completamente gratuito e senza impegno. Non ti proporremo nulla. Il nostro obiettivo è ascoltarti, capire la tua situazione attuale, i tuoi obiettivi e le tue preoccupazioni. Ti faremo domande, non ti venderemo prodotti. Alla fine capirai se ha senso lavorare insieme, senza alcuna pressione.",
  },
  {
    question: "Lavorate solo con clienti della vostra zona?",
    answer:
      "No, seguiamo clienti in tutta Italia. Per il primo incontro preferiamo sempre vederci di persona quando possibile: la fiducia si costruisce anche guardandosi negli occhi. Detto questo, possiamo lavorare anche completamente da remoto con tutti gli strumenti necessari. Abbiamo clienti che vediamo di persona una volta all'anno e con cui gestiamo tutto a distanza senza problemi.",
  },
  {
    question: "Che garanzie ho che i miei soldi siano al sicuro?",
    answer:
      "I tuoi capitali non sono mai nelle nostre mani. Sono sempre depositati presso banche depositarie regolamentate e con sistemi di tutela del risparmio (fino a €100.000 per conto). Noi abbiamo solo mandato di gestione o consulenza, mai disponibilità diretta. Zero rischio di appropriazione, sempre massima tracciabilità.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container size="md">
        <SectionHeading title="Domande frequenti" />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="border border-[var(--gray-200)] rounded-2xl overflow-hidden hover:border-[var(--gold-300)] transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-[var(--gray-50)] transition-colors cursor-pointer"
              >
                <span className="font-semibold text-[var(--navy-950)] text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--gold-100)] flex items-center justify-center"
                >
                  <ChevronDown className="w-5 h-5 text-[var(--navy-800)]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-[var(--gray-600)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
