"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "919692000359";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const company = data.get("company") as string;
    const email = data.get("email") as string;
    const budget = data.get("budget") as string;
    const message = data.get("message") as string;

    const budgetLabels: Record<string, string> = {
      "under-5": "Under ₹5 Lakhs",
      "5-15": "₹5–15 Lakhs",
      "15-50": "₹15–50 Lakhs",
      "50-plus": "₹50 Lakhs+",
      "not-sure": "Not sure yet",
    };

    const text = [
      `*New enquiry from KSAI website*`,
      ``,
      `*Name:* ${name}`,
      `*Company:* ${company || "—"}`,
      `*Email:* ${email}`,
      `*Budget:* ${budget ? budgetLabels[budget] || budget : "—"}`,
      ``,
      `*Message:*`,
      message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
          Opening WhatsApp
        </h3>
        <p className="text-[var(--color-muted)]">
          Your message has been pre-filled. Send it from WhatsApp to connect with us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-[var(--color-text)]">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            required
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-[var(--color-text)]">
            Company
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Company name"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[var(--color-text)]">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-[var(--color-text)]">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="flex h-11 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-3)] px-4 py-2 text-sm text-[var(--color-muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:border-transparent cursor-pointer"
          >
            <option value="">Select range</option>
            <option value="under-5">Under ₹5 Lakhs</option>
            <option value="5-15">₹5–15 Lakhs</option>
            <option value="15-50">₹15–50 Lakhs</option>
            <option value="50-plus">₹50 Lakhs+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-text)]">
          Project Brief
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe what you're trying to build or solve. The more detail, the better the scoping."
          required
          rows={5}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto font-semibold"
      >
        <Send className="w-4 h-4" />
        Message on WhatsApp
      </Button>
    </form>
  );
}
