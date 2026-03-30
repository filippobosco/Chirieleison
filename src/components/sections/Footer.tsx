"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, Linkedin, Shield, Scale } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy-950)] text-white">
      {/* Main Footer */}
      <div className="py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo bianco.png"
                  alt="CV Wealth Partners"
                  width={500}
                  height={135}
                  className="h-28 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Consulenza finanziaria e patrimoniale con un occhio di riguardo
                alla pianificazione fiscale e successoria.
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contatti</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@cvwealthpartners.it"
                    className="flex items-center gap-3 text-gray-400 hover:text-[var(--gold-400)] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@cvwealthpartners.it</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+393336791235"
                    className="flex items-center gap-3 text-gray-400 hover:text-[var(--gold-400)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+39 333 679 1235</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+393467385480"
                    className="flex items-center gap-3 text-gray-400 hover:text-[var(--gold-400)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+39 346 738 5480</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>[Indirizzo completo della sede]</span>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Informazioni legali</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--gold-400)]" />
                  <div className="text-sm">
                    <p className="font-medium text-gray-300">Antonio Chirieleison</p>
                    <p>P.IVA: 13197700969</p>
                    <p>Delibera OCF n. 2311 del 10/10/2023</p>
                    <p>Albo dei Consulenti Finanziari abilitati all&apos;offerta fuori sede</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--gold-400)]" />
                  <div className="text-sm">
                    <p className="font-medium text-gray-300">Erik Vitali</p>
                    <p>P.IVA: 14198920960</p>
                    <p>Iscrizione OCF n. 2705 del 14/04/2025</p>
                    <p>Albo dei Consulenti Finanziari abilitati all&apos;offerta fuori sede</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Scale className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--gold-400)]" />
                  <span className="text-sm">Consulenti Finanziari abilitati all&apos;offerta fuori sede - Normativa MiFID II compliant</span>
                </li>
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Seguici</h4>
              <div className="flex gap-3 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[var(--navy-800)] flex items-center justify-center hover:bg-[var(--gold-500)] transition-colors group"
                  aria-label="LinkedIn Antonio"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[var(--navy-800)] flex items-center justify-center hover:bg-[var(--gold-500)] transition-colors group"
                  aria-label="LinkedIn Erik"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>

              <h4 className="font-semibold text-lg mb-4">Legale</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-[var(--gold-400)] transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie"
                    className="text-gray-400 hover:text-[var(--gold-400)] transition-colors text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/note-legali"
                    className="text-gray-400 hover:text-[var(--gold-400)] transition-colors text-sm"
                  >
                    Note Legali
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--navy-800)]">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} CV Wealth Partners. Antonio Chirieleison P.IVA 13197700969 — Erik Vitali P.IVA 14198920960. Tutti i
              diritti riservati.
            </p>
          </div>
        </Container>
      </div>

      {/* Disclaimer */}
      <div className="bg-[var(--navy-900)]">
        <Container>
          <div className="py-4">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              Disclaimer: Gli investimenti finanziari comportano rischi. I
              rendimenti passati non sono indicativi di quelli futuri. Ogni
              strategia viene costruita su misura considerando profilo di
              rischio, obiettivi e orizzonte temporale del cliente.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
