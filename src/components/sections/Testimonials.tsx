"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dopo 15 anni con la mia banca ho capito che stavo pagando per un servizio che non ricevevo. Antonio ed Erik mi hanno aperto gli occhi e ricostruito tutto da zero. Ora so sempre dove sono i miei soldi e perché.",
    name: "Roberto C.",
    role: "Imprenditore edile",
    years: 5,
    initials: "RC",
  },
  {
    quote:
      "La differenza è nella continuità. Non sono più io a dover rincorrere il consulente. Sono loro che mi tengono aggiornata, mi spiegano tutto e sono sempre disponibili. È un altro pianeta.",
    name: "Silvia P.",
    role: "Libera professionista",
    years: 3,
    initials: "SP",
  },
  {
    quote:
      "La competenza fiscale di Antonio è qualcosa che non avevo mai trovato in un consulente finanziario. Mi ha fatto risparmiare cifre che mai avrei immaginato di perdere in inefficienze.",
    name: "Luca F.",
    role: "CEO azienda familiare",
    years: 4,
    initials: "LF",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading title="Cosa dicono di noi" />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-[var(--gray-50)] rounded-3xl p-6 md:p-8 border border-[var(--gray-200)] hover:border-[var(--gold-300)] hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Quote */}
              <p className="text-[var(--gray-700)] text-lg leading-relaxed italic mt-4 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--gray-200)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-950)] flex items-center justify-center">
                  <span className="text-sm font-bold text-[var(--gold-400)]">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--navy-950)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--gray-600)]">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[var(--gold-600)] font-medium">
                    Cliente da {testimonial.years} anni
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
