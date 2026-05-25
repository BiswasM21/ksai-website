"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, Pill, UserCheck, Truck, HeartPulse, Languages, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Pill,
    title: "Medicine Dispensary",
    desc: "Dispenses prescribed medications with dosage verification and patient ID confirmation. Reduces dispensing errors and wait times at hospital pharmacies.",
  },
  {
    icon: UserCheck,
    title: "Smart Reception",
    desc: "Handles patient check-in, appointment reminders, and queue management — speaks with visitors at the entrance and guides them to the right department.",
  },
  {
    icon: Truck,
    title: "Indoor Delivery",
    desc: "Delivers medicines, lab reports, and supplies across floors and wings. Autonomous navigation with obstacle avoidance and lift integration.",
  },
  {
    icon: HeartPulse,
    title: "No-Touch Vital Signs",
    desc: "Measures heart rate, temperature, SpO2, and blood pressure without contact. Results displayed on-screen and sent directly to the hospital's EMR.",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    desc: "Communicates fluently in English, Hindi, Odia, and regional languages — making healthcare accessible to patients from diverse linguistic backgrounds.",
  },
];

const highlights = [
  "Autonomous indoor navigation",
  "EMR / HIS integration ready",
  "HIPAA-compliant data handling",
  "Scalable fleet management",
  "Real-time telemetry dashboard",
];

export default function SevaSahayakSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="seva-sahayak" className="py-16 md:py-24 lg:py-32 bg-[var(--color-surface-2)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Image side - stack on top for mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8 }}
            className="relative order-first lg:order-first"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-xl md:shadow-2xl shadow-black/40">
              <Image
                src="/images/seva-sahayak-compressed.jpg"
                alt="Seva Sahayak — Autonomous Healthcare Robot"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-2)]/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-xl">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center">
                  <Bot className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-[var(--color-text)] text-xs md:text-sm font-semibold">Seva Sahayak</p>
                  <p className="text-[var(--color-muted-dark)] text-[10px] md:text-xs">Healthcare Robot</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            <Badge variant="default" className="mb-3 md:mb-4 text-xs font-medium">
              PRODUCT
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-3 md:mb-4">
              Seva Sahayak —{" "}
              <span className="gradient-text">Autonomous Healthcare Robot</span>
            </h2>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-5 md:mb-6">
              A humanoid, mecanium-wheeled robot built for hospitals and
              healthcare facilities across India. Seva Sahayak handles medicine
              dispensary, patient reception, indoor delivery, and no-touch vital
              signs assessment — speaking fluently in multiple languages.
            </p>

            {/* Feature list */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--color-text)] font-semibold text-xs md:text-sm mb-0.5 md:mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-5 md:mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-1.5 md:gap-2">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-[var(--color-muted)] text-[10px] md:text-xs">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              <Button asChild>
                <a href="/contact">Learn More</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Request Demo</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
