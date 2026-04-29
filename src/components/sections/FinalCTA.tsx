"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Check,
  ShieldCheck,
  Clock,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const step1Schema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Inserisci un indirizzo email valido"),
});

const step2Schema = z.object({
  phone: z.string().min(6, "Inserisci un numero di telefono valido"),
  patrimony: z.string().min(1, "Seleziona una fascia patrimoniale"),
  message: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Devi accettare la privacy policy",
  }),
});

const benefits = [
  "Analisi preliminare del tuo patrimonio",
  "Identificazione di inefficienze fiscali",
  "Valutazione delle tue strategie attuali",
  "Nessun impegno, nessuna vendita, massima trasparenza",
];

const patrimonyOptions = [
  { value: "50-250", label: "€50k - €250k" },
  { value: "250-500", label: "€250k - €500k" },
  { value: "500-1m", label: "€500k - €1M" },
  { value: "1m-3m", label: "€1M - €3M" },
  { value: "3m+", label: "Oltre €3M" },
];

export function FinalCTA() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [step1Data, setStep1Data] = useState<{ name: string; email: string } | null>(null);

  const {
    register: registerStep1,
    handleSubmit: handleStep1,
    formState: { errors: errors1 },
  } = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
  });

  const {
    register: registerStep2,
    handleSubmit: handleStep2,
    formState: { errors: errors2, isSubmitting },
  } = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
  });

  const onStep1Submit = (data: z.infer<typeof step1Schema>) => {
    setStep1Data(data);
    setStep(2);
  };

  const onStep2Submit = async (data: z.infer<typeof step2Schema>) => {
    if (!step1Data) return;
    try {
      const patrimonyMap: Record<string, string> = {
        "50-250": "€50k - €250k",
        "250-500": "€250k - €500k",
        "500-1m": "€500k - €1M",
        "1m-3m": "€1M - €3M",
        "3m+": "Oltre €3M",
      };

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: step1Data.name,
          email: step1Data.email,
          phone: data.phone,
          patrimony: patrimonyMap[data.patrimony] || data.patrimony,
          message: data.message || "",
        }),
      });

      if (!response.ok) throw new Error("Errore nell'invio del form");

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Si è verificato un errore. Riprova più tardi.");
    }
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
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy-950)] mb-6">
              Ottieni il tuo Check-up Finanziario gratuito in 40–60 minuti
            </h2>

            <p className="text-[var(--navy-700)] mb-6">
              Analizziamo la tua situazione patrimoniale, identifichiamo le inefficienze
              e ti mostriamo un percorso concreto. Senza impegno, senza pressione commerciale.
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
                  nostro standard di servizio. Contattaci per verificare la disponibilità attuale.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[var(--navy-950)]" />
                  <span className="font-semibold text-[var(--navy-950)]">
                    Senza impegno
                  </span>
                </div>
                <p className="text-[var(--navy-800)] text-sm">
                  Il primo incontro è completamente gratuito e senza alcun obbligo.
                  Il nostro obiettivo è comprendere la tua situazione e valutare
                  insieme se possiamo esserti utili. Nessuna pressione commerciale.
                </p>
              </div>
            </div>

            {/* Badge fiducia */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--navy-950)]/10 border border-[var(--navy-950)]/20">
                <ShieldCheck className="w-4 h-4 text-[var(--navy-950)]" />
                <span className="text-xs font-semibold text-[var(--navy-950)]">Consulenti abilitati MiFID II</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--navy-950)]/10 border border-[var(--navy-950)]/20">
                <Phone className="w-4 h-4 text-[var(--navy-950)]" />
                <span className="text-xs font-semibold text-[var(--navy-950)]">Offerta fuori sede abilitata</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step === 1 ? "bg-[var(--navy-950)] text-white" : "bg-[var(--gold-400)] text-[var(--navy-950)]"}`}>
                  {step === 1 ? "1" : <Check className="w-4 h-4" />}
                </div>
                <div className="flex-1 h-0.5 bg-[var(--gray-200)]">
                  <div className={`h-full bg-[var(--gold-400)] transition-all duration-500 ${step === 2 ? "w-full" : "w-0"}`} />
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step === 2 ? "bg-[var(--navy-950)] text-white" : "bg-[var(--gray-200)] text-[var(--gray-500)]"}`}>
                  2
                </div>
              </div>

              {step === 1 && (
                <>
                  <h3 className="text-2xl font-bold text-[var(--navy-950)] mb-2">
                    Richiedi il tuo Check-up gratuito
                  </h3>
                  <p className="text-sm text-[var(--gray-500)] mb-6">Passo 1 di 2 — Dati di contatto</p>

                  <form onSubmit={handleStep1(onStep1Submit)} className="space-y-5">
                    <div>
                      <label htmlFor="booking-name" className="block text-sm font-medium text-[var(--navy-800)] mb-2">
                        Nome e Cognome *
                      </label>
                      <input
                        {...registerStep1("name")}
                        type="text"
                        id="booking-name"
                        placeholder="Il tuo nome completo"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all text-[var(--navy-950)]"
                      />
                      {errors1.name && (
                        <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors1.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="booking-email" className="block text-sm font-medium text-[var(--navy-800)] mb-2">
                        Email *
                      </label>
                      <input
                        {...registerStep1("email")}
                        type="email"
                        id="booking-email"
                        placeholder="la.tua@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all text-[var(--navy-950)]"
                      />
                      {errors1.email && (
                        <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors1.email.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Continua <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Button>
                  </form>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-2xl font-bold text-[var(--navy-950)] mb-2">
                    Un ultimo passo
                  </h3>
                  <p className="text-sm text-[var(--gray-500)] mb-6">Passo 2 di 2 — Completa la richiesta</p>

                  <form onSubmit={handleStep2(onStep2Submit)} className="space-y-5">
                    <div>
                      <label htmlFor="booking-phone" className="block text-sm font-medium text-[var(--navy-800)] mb-2">
                        Telefono *
                      </label>
                      <input
                        {...registerStep2("phone")}
                        type="tel"
                        id="booking-phone"
                        placeholder="+39 xxx xxx xxxx"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all text-[var(--navy-950)]"
                      />
                      {errors2.phone && (
                        <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors2.phone.message}
                        </p>
                      )}
                      <p className="mt-1.5 text-xs text-[var(--gray-500)]">
                        Usato solo per fissare il tuo appuntamento. Non riceverai chiamate commerciali.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="patrimony" className="block text-sm font-medium text-[var(--navy-800)] mb-2">
                        Patrimonio investibile *
                      </label>
                      <select
                        {...registerStep2("patrimony")}
                        id="patrimony"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all bg-white text-[var(--navy-950)]"
                      >
                        <option value="">Seleziona una fascia</option>
                        {patrimonyOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors2.patrimony && (
                        <p className="mt-1 text-sm text-[var(--error)] flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors2.patrimony.message}
                        </p>
                      )}
                      <p className="mt-1.5 text-xs text-[var(--gray-500)]">
                        Ci aiuta a prepararci al meglio per il tuo check-up. I dati sono trattati con massima riservatezza.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--navy-800)] mb-2">
                        Raccontaci brevemente la tua situazione (opzionale)
                      </label>
                      <textarea
                        {...registerStep2("message")}
                        id="message"
                        rows={3}
                        placeholder="Cosa vorresti migliorare nella gestione del tuo patrimonio?"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--gray-300)] focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 outline-none transition-all resize-none text-[var(--navy-950)]"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        {...registerStep2("privacy")}
                        type="checkbox"
                        id="booking-privacy"
                        className="mt-1 w-5 h-5 rounded border-[var(--gray-300)] text-[var(--gold-500)] focus:ring-[var(--gold-500)]"
                      />
                      <label htmlFor="booking-privacy" className="text-sm text-[var(--gray-600)]">
                        Accetto la{" "}
                        <a href="/privacy" className="text-[var(--navy-700)] font-semibold hover:underline">
                          Privacy Policy
                        </a>{" "}
                        e acconsento al trattamento dei miei dati. *
                      </label>
                    </div>
                    {errors2.privacy && (
                      <p className="text-sm text-[var(--error)] flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors2.privacy.message}
                      </p>
                    )}

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-3 rounded-xl border border-[var(--gray-300)] text-[var(--navy-800)] text-sm font-medium hover:border-[var(--gray-400)] transition-colors"
                      >
                        Indietro
                      </button>
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Invio in corso..." : "Ottieni il tuo Check-up gratuito"}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
