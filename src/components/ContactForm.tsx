"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, Loader2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/LanguageContext";

const WHATSAPP_NUMBER = "919692000359";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactFormProps {
  defaultType?: "partner" | "investor";
}

function ContactFormInner({ defaultType = "partner" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formType, setFormType] = useState<"partner" | "investor">(defaultType);
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const isHindi = language === "hi";

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "investor") {
      requestAnimationFrame(() => {
        setFormType("investor");
      });
    }
  }, [searchParams]);

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

    await new Promise((resolve) => setTimeout(resolve, 800));

    const enquiryType = formType === "investor" ? "Investor Enquiry" : "Partnership Enquiry";

    const text = [
      `*${enquiryType} from KSAI Website*`,
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
    <div>
      {formType === "investor" && (
        <div className="mb-6 p-4 rounded-lg bg-[var(--color-primary-subtle)] border border-[var(--color-primary)]/20 flex items-start gap-3">
          <Shield className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-[var(--color-text)]">Investor Portal Access</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">
              All investor enquiries are handled under strict NDA. Your information is kept confidential.
            </p>
          </div>
        </div>
      )}

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
            {formType === "investor"
              ? "Investment Focus & Questions"
              : "Project Details"
            } <span className="text-red-400">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder={
              formType === "investor"
                ? "Tell us about your investment thesis, fund size, and any specific questions about KSAI..."
                : "Describe what you're trying to build or solve. The more detail, the better the scoping."
            }
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
              {formType === "investor" ? "Request Confidential Call" : (isHindi ? "व्हाट्सएप पर संदेश भेजें" : "Message on WhatsApp")}
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense fallback={<div className="animate-pulse h-64 bg-[var(--color-surface)] rounded-xl" />}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}
