"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle2, ArrowLeft, Loader2, Calendar, Clock, Globe, CreditCard, Copy, ExternalLink, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RAZORPAY_ME_LINK = "https://razorpay.me/@kalingasovereignaiprivatelimi?amount=6zcPuaHTrIB8Jllw5habFw%3D%3D";

const SERVICES = {
  "ai-agents": { name: "AI Agents & Intelligent Chatbots", description: "Autonomous Intelligence, Available 24/7" },
  "workflow": { name: "Workflow Automation", description: "Eliminate Repetitive Work" },
  "web": { name: "Custom Web Development", description: "Fast, Beautiful, Scalable" },
  "mobile": { name: "Mobile App Development", description: "Native & Cross-Platform Apps" },
  "embedded": { name: "Edge AI & Embedded Systems", description: "AI That Runs Where Data Lives" },
  "ai-integration": { name: "AI Integration Services", description: "Add Intelligence to Your Stack" },
};

const PRICING = {
  india: { currency: "INR", symbol: "₹", consultation: 0, consultation60: 4999, label: "India" },
  global: { currency: "USD", symbol: "$", consultation: 0, consultation60: 149, label: "Global" },
};

function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceId = searchParams.get("service") || "ai-agents";
  const service = SERVICES[serviceId as keyof typeof SERVICES] || SERVICES["ai-agents"];

  const [step, setStep] = useState(1);
  const [clientType, setClientType] = useState<"india" | "global">("india");
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "", callDuration: "20",
  });

  const pricing = PRICING[clientType];
  const totalAmount = formData.callDuration === "20" ? pricing.consultation : pricing.consultation60;

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: serviceId,
          serviceName: service.name,
          clientType,
          totalAmount,
          currency: pricing.currency,
        }),
      });

      const data = await res.json();

      if (res.ok && data.booking) {
        setBookingId(data.booking.id);
        setStep(3); // Go to payment step
      } else {
        alert(data.error || "Failed to create booking");
      }
    } catch {
      alert("Failed to create booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyPaymentLink = () => {
    const amountText = `${pricing.symbol}${totalAmount}`;
    const text = `Payment for Consultation\nService: ${service.name}\nAmount: ${amountText}\nBooking ID: ${bookingId}\n\nPay here: ${RAZORPAY_ME_LINK}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const confirmPayment = () => {
    router.push(`/book/success?booking=${bookingId}`);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button onClick={() => step > 1 ? setStep(step - 1) : router.push("/services")} className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] mb-4">
            <ArrowLeft className="w-4 h-4" />
            {step > 1 ? "Back" : "Back to Services"}
          </button>
          <h1 className="text-3xl font-bold text-[var(--color-text)]">Book a Consultation</h1>
          <p className="text-[var(--color-text-secondary)] mt-2">{service.name} — {service.description}</p>
        </div>

        {/* Client Type Toggle */}
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6 mb-6">
          <div className="flex gap-4">
            <button onClick={() => setClientType("india")} className={`flex-1 p-4 rounded-lg border-2 transition-all ${clientType === "india" ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10" : "border-[var(--color-border)] hover:border-[var(--color-primary)]"}`}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">🇮🇳</span>
                <span className="font-semibold">India</span>
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">₹4999 for 60 min</div>
            </button>
            <button onClick={() => setClientType("global")} className={`flex-1 p-4 rounded-lg border-2 transition-all ${clientType === "global" ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10" : "border-[var(--color-border)] hover:border-[var(--color-primary)]"}`}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Global</span>
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">$149 for 60 min</div>
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-transparent rounded-xl border border-[var(--color-primary)]/20 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-[var(--color-text)]">Pricing</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Based on your location</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[var(--color-primary)]">{pricing.symbol}{totalAmount}</div>
              <div className="text-sm text-[var(--color-text-secondary)]">{formData.callDuration === "20" ? "Free consultation" : `${formData.callDuration} minutes`}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded">✓ 20 min free discovery call</span>
            <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded">✓ {pricing.symbol}{pricing.consultation60}/60 min</span>
          </div>
        </div>

        {/* Step 1: Duration Selection */}
        {step === 1 && (
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6 mb-6">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Select Duration</h3>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setFormData({ ...formData, callDuration: "20" })} className={`p-4 rounded-lg border-2 text-left transition-all ${formData.callDuration === "20" ? "border-green-500 bg-green-500/10" : "border-[var(--color-border)] hover:border-[var(--color-primary)]"}`}>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">20 Minutes</span>
                </div>
                <div className="text-green-500 font-bold">FREE</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Discovery call</div>
              </button>
              <button onClick={() => setFormData({ ...formData, callDuration: "60" })} className={`p-4 rounded-lg border-2 text-left transition-all ${formData.callDuration === "60" ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10" : "border-[var(--color-border)] hover:border-[var(--color-primary)]"}`}>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="font-semibold">60 Minutes</span>
                </div>
                <div className="text-[var(--color-primary)] font-bold">{pricing.symbol}{pricing.consultation60}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Deep dive session</div>
              </button>
            </div>
            <Button onClick={() => setStep(2)} className="w-full mt-6">Continue <ArrowLeft className="w-4 h-4 rotate-180 ml-2" /></Button>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {step === 2 && (
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6 mb-6">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Your Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Name *</label>
                <Input placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Email *</label>
                <Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Phone/WhatsApp *</label>
                <Input type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Company (optional)</label>
                <Input placeholder="Your company name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Tell us about your project</label>
                <Textarea placeholder="Brief description of what you're looking for..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
              <Button onClick={handleSubmit} disabled={loading} className="flex-1">
                {loading ? <><Loader className="w-4 h-4 mr-2 animate-spin" />Processing...</> : "Continue to Payment"}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-6">
            {/* Booking Summary */}
            <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
              <h3 className="font-semibold text-[var(--color-text)] mb-4">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-[var(--color-text-secondary)]">Service</span><span className="font-medium">{service.name}</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-text-secondary)]">Duration</span><span className="font-medium">{formData.callDuration} minutes</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-text-secondary)]">Client Type</span><span className="font-medium">{clientType === "india" ? "🇮🇳 India" : "🌍 Global"}</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-text-secondary)]">Name</span><span>{formData.name}</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-text-secondary)]">Email</span><span>{formData.email}</span></div>
                <div className="flex justify-between pt-2 border-t border-[var(--color-border)]">
                  <span className="font-semibold">Amount Due</span>
                  <span className="text-xl font-bold text-[var(--color-primary)]">{pricing.symbol}{totalAmount}</span>
                </div>
              </div>
            </div>

            {/* Payment Instructions */}
            {totalAmount > 0 ? (
              <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
                <h3 className="font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Instructions
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Click the button below to pay <span className="font-bold text-[var(--color-primary)]">{pricing.symbol}{totalAmount}</span> via Razorpay. After payment, click "I've Completed Payment" to confirm your booking.
                </p>

                <div className="bg-[var(--color-bg)] rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--color-text-secondary)]">Booking ID</span>
                    <code className="text-sm font-mono text-[var(--color-primary)]">{bookingId}</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-secondary)]">Amount to Pay</span>
                    <span className="font-bold text-[var(--color-primary)]">{pricing.symbol}{totalAmount}</span>
                  </div>
                </div>

                <a href={RAZORPAY_ME_LINK} target="_blank" rel="noopener noreferrer" className="block mb-4">
                  <Button className="w-full" size="lg">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Pay {pricing.symbol}{totalAmount} via Razorpay
                  </Button>
                </a>

                <Button onClick={confirmPayment} variant="outline" className="w-full">
                  I've Completed Payment
                </Button>

                <p className="text-xs text-[var(--color-text-muted)] text-center mt-4">
                  After payment, our team will contact you via email/WhatsApp to schedule the consultation.
                </p>
              </div>
            ) : (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)]">Free Consultation</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">No payment required</p>
                  </div>
                </div>
                <Button onClick={confirmPayment} className="w-full" size="lg">
                  Confirm Free Consultation
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" /></div>}>
      <BookingForm />
    </Suspense>
  );
}
