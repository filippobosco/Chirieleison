"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Check,
  ShieldCheck,
  Clock,
  AlertCircle,
  Calendar,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  phone: z.string().min(10, "Inserisci un numero di telefono valido"),
  patrimony: z.string().min(1, "Seleziona una fascia patrimoniale"),
  message: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Devi accettare la privacy policy",
  }),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  "Analisi preliminare del tuo patrimonio",
  "Identificazione di inefficienze fiscali",
  "Valutazione delle tue strategie attuali",
  "Nessun impegno, nessuna vendita, massima trasparenza",
];

const patrimonyOptions = [
  { value: "250-500", label: "€250k - €500k" },
  { value: "500-1m", label: "€500k - €1M" },
  { value: "1m-3m", label: "€1M - €3M" },
  { value: "3m+", label: "Oltre €3M" },
];

export function FinalCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Booking form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <section
      id="prenota"
      className="py-20 md:py-28 bg-gradient-to-br from-[var(--gold-500)] via-[var(--gold-400)] to-[var(--gold-500)]"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy-950)] mb-6">
              Sei pronto a riprendere il controllo del tuo patrimonio?
            </h2>

            <p className="text-xl md:text-2xl text-[var(--navy-800)] font-medium mb-6">
              Prenota ora il tuo Check-up Patrimoniale Gratuito{" "}
              <span className="text-[var(--navy-950)]">(Valore €500)</span>
            </p>

            <p className="text-[var(--navy-700)] mb-6">
              60-90 minuti dedicati a capire la tua situazione e a identificare
              le aree di miglioramento più urgenti.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--navy-950)] flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[var(--gold-400)]" />
                  </div>
                  <span className="text-[var(--navy-800)] font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Scarcity + Guarantee */}
            <div className="space-y-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[var(--navy-950)]" />
                  <span className="font-semibold text-[var(--navy-950)]">
                    Disponibilità limitata
                  </span>
                </div>
                <p className="text-[var(--navy-800)] text-sm">
                  Accettiamo massimo 5 nuovi clienti al mese per garantire il
                  nostro standard di servizio. I posti disponibili per gennaio
                  2026 sono già al 60%. Prenota ora per non aspettare febbraio.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[var(--navy-950)]" />
                  <span className="font-semibold text-[var(--navy-950)]">
                    Garanzia
                  </span>
                </div>
                <p className="text-[var(--navy-800)] text-sm">
                  Se dopo il check-up non vedi valore concreto in quello che
                  possiamo fare per te, non ti chiediamo nulla. Nessuna
                  insistenza, nessuna pressione. Punto.
                </p>
              </div>
            </div>

            {/* Phone CTA */}
            <div className="flex items-center gap-4">
              <span className="text-[var(--navy-800)]">
                Preferisci parlare prima al telefono?
              </span>
              <a
                href="tel:+390000000000"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--navy-950)] text-[var(--gold-400)] font-medium hover:bg-[var(--navy-800)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Chiamaci
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--success)]/10 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-[var(--success)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--navy-950)] mb-2">
                  Richiesta inviata!
                </h3>
                <p className="text-[var(--gray-600)]">
                  Ti contatteremo entro 24 ore per fissare l&apos;incontro.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-[var(--navy-950)] mb-6">
                  Prenota il tuo Check-up Gratuito
                </h3>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-sm font-medium text-[var(--navy-800)] mb-2"
                    >
                      Nome e Cognome *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="booking-name"
                      placeholder="Il tuo nome completo"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-sm font-medium text-[var(--navy-800)] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="booking-email"
                      placeholder="la.tua@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-medium text-[var(--navy-800)] mb-2"
                    >
                      Telefono *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      id="booking-phone"
                      placeholder="+39 xxx xxx xxxx"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Patrimony */}
                  <div>
                    <label
                      htmlFor="patrimony"
                      className="block text-sm font-medium text-[var(--navy-800)] mb-2"
                    >
                      Patrimonio investibile *
                    </label>
                    <select
                      {...register("patrimony")}
                      id="patrimony"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Seleziona una fascia</option>
                      {patrimonyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.patrimony && (
                      <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.patrimony.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--navy-800)] mb-2"
                    >
                      Raccontaci brevemente la tua situazione (opzionale)
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={3}
                      placeholder="Cosa vorresti migliorare nella gestione del tuo patrimonio?"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Privacy */}
                  <div className="flex items-start gap-3">
                    <input
                      {...register("privacy")}
                      type="checkbox"
                      id="booking-privacy"
                      className="mt-1 w-5 h-5 rounded border-[var(--gray-300)] text-[var(--gold-500)] focus:ring-[var(--gold-500)]"
                    />
                    <label
                      htmlFor="booking-privacy"
                      className="text-sm text-[var(--gray-600)]"
                    >
                      Accetto la{" "}
                      <a
                        href="/privacy"
                        className="text-[var(--gold-600)] hover:underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      e acconsento al trattamento dei miei dati. *
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-sm text-[var(--error)] flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.privacy.message}
                    </p>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Invio in corso..."
                      : "Prenota il Check-up Gratuito"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
