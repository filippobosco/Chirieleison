"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Sparkles, Users, Heart } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Nato per scelta",
    description:
      "Non siamo una filiale, non siamo un franchise. Siamo un progetto indipendente, costruito dal rifiuto dei modelli standard.",
  },
  {
    icon: Users,
    title: "Due professionisti, una visione",
    description:
      "La sinergia di competenze complementari: rigore fiscale e strategia finanziaria, unite dalla volontà di lavorare senza compromessi.",
  },
  {
    icon: Heart,
    title: "Relazioni, non numeri",
    description:
      "Chi entra oggi non è \"uno dei tanti\". È seguito, ascoltato e accompagnato nel tempo. È così che costruiamo le relazioni.",
  },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy-950)] mb-6">
            Un progetto nuovo, per chi cerca qualcosa di diverso
          </h2>
          <p className="text-lg md:text-xl text-[var(--gray-600)] max-w-3xl mx-auto leading-relaxed">
            CV Wealth Partners è un team appena nato per scelta, non per caso.
            Nasce dalla convinzione che la consulenza patrimoniale possa essere
            fatta in modo diverso: più vicino, più trasparente, più umano.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-8 md:p-10 rounded-3xl bg-[var(--gray-50)] border border-[var(--gray-200)] hover:border-[var(--gold-300)] hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--gold-100)] to-[var(--gold-200)] mb-6">
                <value.icon className="w-8 h-8 text-[var(--navy-800)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--navy-950)] mb-4">
                {value.title}
              </h3>
              <p className="text-[var(--gray-600)] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
