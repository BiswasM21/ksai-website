"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <section id="seva-sahayak" className="py-24 md:py-32 bg-[var(--color-surface-2)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl shadow-black/40">
              <Image
                src="/images/seva-sahayak.png"
                alt="Seva Sahayak — Autonomous Healthcare Robot"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-2)]/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-[var(--color-text)] text-sm font-semibold">Seva Sahayak</p>
                  <p className="text-[var(--color-muted-dark)] text-xs">Healthcare Robot</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Badge variant="default" className="mb-4 text-xs font-mono">
              PRODUCT
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Seva Sahayak —{" "}
              <span className="gradient-text">Autonomous Healthcare Robot</span>
            </h2>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6">
              A humanoid, mecanium-wheeled robot built for hospitals and
              healthcare facilities across India. Seva Sahayak handles medicine
              dispensary, patient reception, indoor delivery, and no-touch vital
              signs assessment — speaking fluently in multiple languages.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--color-text)] font-semibold text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-[var(--color-muted)] text-xs">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
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
