"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, TrendingUp, Handshake } from "lucide-react";

const antonioPoints = [
  "Analisi fiscale preventiva (scovo inefficienze prima che diventino problemi)",
  "Visione normativa e compliance assoluta",
  "Protezione patrimoniale da rischi legali e fiscali",
  "Zero zone grigie: tutto alla luce del sole",
];

const erikPoints = [
  "Conoscenza profonda dei mercati e degli strumenti",
  "Strategia patrimoniale di lungo periodo",
  "Accesso a oltre 4.000 soluzioni indipendenti",
  "Visione da insider, ma con libertà totale",
];

export function USP() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          title="Due mondi. Una sola missione: proteggere il tuo patrimonio."
          subtitle="La forza di CV Wealth Partners è nella complementarietà perfetta. Non siamo due consulenti che fanno la stessa cosa. Siamo una task force con competenze che si integrano."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Antonio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[var(--navy-950)] to-[var(--navy-800)] rounded-3xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">AV</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Antonio Vettese
                  </h3>
                  <p className="text-[var(--gold-400)] font-medium">
                    Il Rigore e la Protezione
                  </p>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl italic text-gray-300 mb-6 pl-4 border-l-2 border-[var(--gold-500)]">
                &ldquo;Per anni ho analizzato patrimoni e bilanci dalla parte del
                controllo. Oggi metto quella stessa precisione chirurgica al
                servizio dei miei clienti.&rdquo;
              </blockquote>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold-500)]/20 mb-6">
                <Shield className="w-4 h-4 text-[var(--gold-400)]" />
                <span className="text-sm font-semibold text-[var(--gold-400)] uppercase tracking-wide">
                  Ex Ufficiale Guardia di Finanza
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  Quello che porto:
                </p>
                <ul className="space-y-3">
                  {antonioPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)] mt-2 flex-shrink-0" />
                      <span className="text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-300 italic">
                Il mio obiettivo non è solo farti investire, è costruire uno
                scudo attorno ai tuoi risparmi.
              </p>
            </div>
          </motion.div>

          {/* Erik */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[var(--navy-950)] to-[var(--navy-800)] rounded-3xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-600)] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">EV</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Erik Visentin
                  </h3>
                  <p className="text-[var(--gold-400)] font-medium">
                    L&apos;Esperienza e la Strategia
                  </p>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl italic text-gray-300 mb-6 pl-4 border-l-2 border-[var(--gold-500)]">
                &ldquo;Ho passato 19 anni dentro il sistema bancario. So
                esattamente cosa funziona, cosa non funziona, e cosa devi
                evitare.&rdquo;
              </blockquote>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold-500)]/20 mb-6">
                <TrendingUp className="w-4 h-4 text-[var(--gold-400)]" />
                <span className="text-sm font-semibold text-[var(--gold-400)] uppercase tracking-wide">
                  19 Anni in Banca e Private Banking
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                  Quello che porto:
                </p>
                <ul className="space-y-3">
                  {erikPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)] mt-2 flex-shrink-0" />
                      <span className="text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-300 italic">
                Il mio obiettivo è dare forza e crescita sostenibile al tuo
                capitale, senza inseguire mode o prodotti del momento.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Combined Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[var(--gold-100)] to-[var(--gold-50)] rounded-3xl p-8 md:p-10 border border-[var(--gold-300)]"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-[var(--gold-600)]" />
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--navy-950)]">
              INSIEME = LA TUA SICUREZZA TOTALE
            </h3>
          </div>
          <p className="text-lg md:text-xl text-[var(--navy-800)] text-center max-w-4xl mx-auto leading-relaxed">
            Dove il consulente finanziario tradizionale non capisce di fisco, e
            il commercialista non capisce di investimenti,{" "}
            <span className="font-semibold">
              noi copriamo entrambe le dimensioni
            </span>
            .
            <br />
            <br />
            <span className="text-[var(--gold-600)] font-semibold">
              Risultato: Strategie patrimoniali integrate, protezione fiscale
              garantita, crescita sostenibile nel tempo.
            </span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
