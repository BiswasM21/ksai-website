"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "919692000359";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const formData: FormData = {
      name: data.get("name") as string,
      company: data.get("company") as string || "",
      email: data.get("email") as string,
      message: data.get("message") as string,
    };

    // Simulate a brief loading delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const text = [
      `*New enquiry from KSAI website*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Company:* ${formData.company || "—"}`,
      `*Email:* ${formData.email}`,
      ``,
      `*Message:*`,
      formData.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setIsLoading(false);
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
        <p className="text-[var(--color-text-secondary)]">
          Your message has been pre-filled. Send it from WhatsApp to connect with us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-[var(--color-text)]">
          Full Name <span className="text-red-400">*</span>
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          required
          autoComplete="name"
          disabled={isLoading}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[var(--color-text)]">
            Email <span className="text-red-400">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            autoComplete="email"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-[var(--color-text)]">
            Company <span className="text-[var(--color-text-muted)]">(optional)</span>
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Company name"
            autoComplete="organization"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-text)]">
          Message <span className="text-red-400">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe what you're trying to build or solve. The more detail, the better the scoping."
          required
          rows={5}
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto font-semibold"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Opening WhatsApp...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Message on WhatsApp
          </>
        )}
      </Button>
    </form>
  );
}
