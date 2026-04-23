"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3b82f6]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Ready to add AI to your{" "}
            <span className="gradient-text">business?</span>
          </h2>
          <p className="text-[var(--color-muted)] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re automating a workflow, building a product feature,
            or just exploring what&apos;s possible — let&apos;s talk. No sales pitch,
            just a scoped conversation.
          </p>

          <Button
            asChild
            size="lg"
            className="text-base px-10 py-6 font-semibold shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30"
          >
            <a href="/contact" className="inline-flex items-center gap-2">
              Talk to Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
