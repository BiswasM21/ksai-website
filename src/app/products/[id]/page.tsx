"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle2, ArrowLeft, Loader2, CreditCard, ExternalLink, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RAZORPAY_ME_LINK = "https://razorpay.me/@kalingasovereignaiprivatelimi?amount=6zcPuaHTrIB8Jllw5habFw%3D%3D";

const PRODUCTS: Record<string, { name: string; price: number; priceUSD: number; currency: string; symbol: string }> = {
  "claude-skills-bundle": {
    name: "Claude Skills Bundle (2,000+ Skills)",
    price: 4999,
    priceUSD: 59,
    currency: "INR",
    symbol: "₹",
  },
};

function PurchaseForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("id") || "claude-skills-bundle";
  const product = PRODUCTS[productId] || PRODUCTS["claude-skills-bundle"];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "India",
  });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleBuyNow = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/products/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          productName: product.name,
          amount: product.price,
          currency: product.currency,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          country: formData.country,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setOrderId(data.orderId);
        setStep(2);
      } else {
        alert(data.error || "Failed to create order");
      }
    } catch {
      alert("Failed to create order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const confirmPayment = () => {
    router.push(`/products/success?order=${orderId}&product=${productId}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => step > 1 ? setStep(step - 1) : router.push("/products")}
        className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        {step > 1 ? "Back" : "Back to Products"}
      </button>

      <div className="flex items-center gap-4 mb-8">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"}`}>
          1
        </div>
        <div className="flex-1 h-0.5 bg-[var(--color-border)]">
          <div className={`h-full bg-[var(--color-primary)] transition-all ${step >= 2 ? "w-full" : "w-0"}`} />
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"}`}>
          2
        </div>
      </div>

      {step === 1 && (
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">Your Details</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Full Name *</label>
              <Input
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Email *</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Phone/WhatsApp *</label>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Country</label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[var(--color-text-secondary)]">Product</span>
              <span className="font-medium">{product.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--color-text-secondary)]">Total</span>
              <span className="text-2xl font-bold text-[var(--color-primary)]">
                {product.symbol}{product.price.toLocaleString()}
              </span>
            </div>
          </div>

          <Button
            onClick={handleBuyNow}
            disabled={loading}
            className="w-full mt-6"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </>
            )}
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">Complete Payment</h2>

          <div className="bg-[var(--color-bg)] rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-[var(--color-text-secondary)]">Order ID</span>
              <code className="text-sm font-mono text-[var(--color-primary)]">{orderId}</code>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--color-text-secondary)]">Amount</span>
              <span className="font-bold text-[var(--color-primary)]">{product.symbol}{product.price.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            Click the button below to pay via Razorpay. After payment, click "I've Completed Payment" to receive your product access.
          </p>

          <a href={RAZORPAY_ME_LINK} target="_blank" rel="noopener noreferrer" className="block mb-4">
            <Button className="w-full" size="lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Pay {product.symbol}{product.price.toLocaleString()} via Razorpay
            </Button>
          </a>

          <Button onClick={confirmPayment} variant="outline" className="w-full">
            I've Completed Payment
          </Button>
        </div>
      )}
    </div>
  );
}

export default function PurchasePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 py-12">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
          </div>
        }>
          <PurchaseForm />
        </Suspense>
      </div>
    </div>
  );
}
