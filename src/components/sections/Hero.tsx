"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Shield, TrendingUp, Users, Award } from "lucide-react";

const trustElements = [
  { icon: Shield, text: "Ex Ufficiale Guardia di Finanza" },
  { icon: TrendingUp, text: "19 anni esperienza Private Banking" },
  { icon: Users, text: "Oltre €85M di patrimoni seguiti" },
  { icon: Award, text: "Consulenza indipendente al 100%" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--navy-950)] via-[var(--navy-900)] to-[var(--navy-800)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent opacity-50" />

      <Container size="xl" className="relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--gold-500)] animate-pulse" />
              <span className="text-[var(--gold-400)] text-sm font-medium">
                Consulenza Patrimoniale Premium
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Il tuo patrimonio merita più di un consulente bancario{" "}
              <span className="text-gradient">che cambia ogni 18 mesi</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              La prima consulenza patrimoniale in Italia con{" "}
              <span className="text-white font-semibold">doppia garanzia</span>:
              rigore fiscale di chi ha controllato i patrimoni + strategia
              finanziaria di chi ha gestito €180M in Private Banking.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              CV Wealth Partners non vende prodotti finanziari. Costruisce
              strategie patrimoniali su misura per imprenditori e famiglie che
              vogliono protezione reale, chiarezza totale e un partner che resta
              nel tempo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="btn-glow text-lg">
                Prenota il tuo Check-up Patrimoniale Gratuito
              </Button>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              Valore €500 – Senza impegno – Massima riservatezza
            </p>

            {/* Trust Elements */}
            <div className="grid grid-cols-2 gap-4">
              {trustElements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[var(--gold-400)]" />
                  </div>
                  <span className="text-sm text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founders Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Antonio */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-600)] rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition duration-500" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[var(--navy-700)] to-[var(--navy-800)] border border-[var(--gold-500)]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">AV</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Antonio Vettese
                      </h3>
                      <p className="text-[var(--gold-400)] text-sm font-medium">
                        Il Rigore e la Protezione
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        Ex Ufficiale GdF
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Erik */}
              <div className="relative group mt-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold-600)] to-[var(--gold-500)] rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition duration-500" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[var(--navy-700)] to-[var(--navy-800)] border border-[var(--gold-500)]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">EV</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Erik Visentin
                      </h3>
                      <p className="text-[var(--gold-400)] text-sm font-medium">
                        L&apos;Esperienza e la Strategia
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        19 anni Private Banking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-[var(--gold-500)]/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-[var(--gold-500)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
