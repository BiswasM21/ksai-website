"use client";

import { useFormStatus } from "react-dom";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full sm:w-auto font-semibold"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

interface ContactFormProps {
  success?: boolean;
}

export default function ContactForm({ success }: ContactFormProps) {
  if (success) {
    return (
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
          Message Received
        </h3>
        <p className="text-[var(--color-muted)]">
          We&apos;ll get back to you within 24 hours. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
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

      <SubmitButton />
    </div>
  );
}
