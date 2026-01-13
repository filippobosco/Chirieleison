"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, Target, Lightbulb, MessageSquare, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "CONOSCENZA PROFONDA",
    subtitle: "Primo incontro dedicato all'ascolto",
    description:
      "Non iniziamo mai proponendo soluzioni. Iniziamo facendo le domande giuste:",
    points: [
      "Qual è la tua situazione patrimoniale oggi?",
      "Con chi lavori e cosa vorresti fosse diverso?",
      "Quali sono i tuoi punti di forza attuali da preservare?",
      "Cosa ti tiene sveglio la notte riguardo ai tuoi soldi?",
    ],
    footer: "Obiettivo: costruire un quadro completo e condiviso. Non venderti nulla, ma capirti davvero.",
  },
  {
    icon: Target,
    number: "02",
    title: "DEFINIZIONE OBIETTIVI",
    subtitle: "Diamo una direzione chiara al tuo patrimonio",
    description:
      "Lavoriamo per trasformare desideri vaghi in obiettivi concreti:",
    points: [
      '"Voglio che mio figlio studi nelle migliori università" → Piano accumulo €120k in 10 anni',
      '"Ho liquidità aziendale ferma che non rende" → Strategia tesoreria con strumenti a breve-medio termine',
      '"Voglio proteggere la mia famiglia" → Analisi protezione + pianificazione successoria',
    ],
    footer: "Ogni obiettivo diventa misurabile, raggiungibile, monitorabile.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "STRATEGIA PERSONALIZZATA",
    subtitle: "Soluzioni su misura",
    description: "Sviluppiamo una proposta su misura:",
    points: [
      "Scelta tra 4.000+ strumenti finanziari",
      "Ottimizzazione fiscale integrata (quello che nessuno fa)",
      "Spiegazione trasparente di ogni scelta e alternativa",
      "Simulazioni e scenari concreti",
    ],
    footer:
      "Ti presentiamo tutto in linguaggio chiaro. Se non capisci qualcosa, la colpa è nostra, non tua.",
  },
  {
    icon: MessageSquare,
    number: "04",
    title: "CONFRONTO E DECISIONE",
    subtitle: "Tu decidi, noi guidiamo",
    description:
      "La proposta è un punto di partenza, non un contratto blindato:",
    points: [
      "Discutiamo insieme ogni dettaglio",
      "Rispondiamo a tutte le tue domande",
      "Zero pressione: decidi tu i tempi",
    ],
    footer:
      "Alcune persone ci mettono una settimana, altre tre mesi. Va bene così. L'importante è che tu sia convinto.",
  },
  {
    icon: Heart,
    number: "05",
    title: "ACCOMPAGNAMENTO CONTINUO",
    subtitle: "Il rapporto non finisce, inizia",
    description: "Una volta avviata la strategia:",
    points: [
      "Incontro programmato ogni 3 mesi (in sede o remoto)",
      "Monitoraggio costante dell'andamento",
      "Aggiornamenti proattivi se i mercati cambiano",
      "Risposta garantita entro 24h a ogni tua domanda",
      "Adeguamento del piano se cambiano le tue esigenze",
    ],
    footer:
      "Non sei mai solo. Non sei mai un numero. Sei un cliente che seguiamo come se fossimo soci nel tuo progetto.",
  },
];

export function Method() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          title="Come lavoriamo: il metodo CV Wealth Partners"
          subtitle="Non partiamo dai prodotti. Partiamo da te, dai tuoi obiettivi, dalla tua vita e da quello che vuoi costruire."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gold-400)] via-[var(--gold-500)] to-[var(--gold-600)]" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`lg:flex items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="lg:w-[45%]">
                  <div className="bg-[var(--gray-50)] rounded-3xl p-6 md:p-8 border border-[var(--gray-200)] hover:border-[var(--gold-300)] hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-[var(--navy-800)]" />
                      </div>
                      <div>
                        <span className="text-[var(--navy-800)] font-bold text-sm">
                          STEP {step.number}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--navy-950)]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[var(--navy-700)] font-medium mb-4">
                      {step.subtitle}
                    </p>

                    <p className="text-[var(--gray-700)] mb-4">
                      {step.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {step.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[var(--gray-600)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-500)] mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-[var(--navy-800)] font-medium italic text-sm">
                      {step.footer}
                    </p>
                  </div>
                </div>

                {/* Timeline Node - Desktop Only */}
                <div className="hidden lg:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] items-center justify-center shadow-lg shadow-[var(--gold-500)]/30 z-10">
                  <span className="text-2xl font-bold text-[var(--navy-800)]">
                    {step.number}
                  </span>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
