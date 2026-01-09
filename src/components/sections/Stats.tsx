"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wallet, Users, Clock, MessageCircle } from "lucide-react";

const stats = [
  {
    icon: Wallet,
    value: "€85+ mln",
    label: "Patrimoni protetti e valorizzati",
  },
  {
    icon: Users,
    value: "47",
    label: "Famiglie e aziende seguite con continuità",
  },
  {
    icon: Clock,
    value: "9.2 anni",
    label: "Permanenza media dei nostri clienti",
  },
  {
    icon: MessageCircle,
    value: "94%",
    label: "Clienti provenienti da passaparola diretto",
  },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading title="I numeri della fiducia" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-[var(--gray-50)] border border-[var(--gray-200)] hover:border-[var(--gold-300)] hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--gold-100)] to-[var(--gold-200)] mb-4">
                <stat.icon className="w-7 h-7 text-[var(--gold-600)]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--navy-950)] mb-2">
                {stat.value}
              </div>
              <p className="text-[var(--gray-600)] text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
