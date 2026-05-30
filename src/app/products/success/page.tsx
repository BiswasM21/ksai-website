"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowLeft, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRODUCTS: Record<string, { name: string }> = {
  "claude-skills-bundle": {
    name: "Claude Skills Bundle (2,000+ Skills)",
  },
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order") || "";
  const productId = searchParams.get("product") || "claude-skills-bundle";
  const product = PRODUCTS[productId] || PRODUCTS["claude-skills-bundle"];

  return (
    <div className="max-w-xl mx-auto text-center">
      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-green-500" />
      </div>

      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">Payment Initiated!</h1>
      <p className="text-[var(--color-text-secondary)] mb-6">
        Thank you for your purchase. Your order has been received.
      </p>

      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6 mb-8">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-[var(--color-text-secondary)]">Order ID</span>
            <code className="font-mono text-[var(--color-primary)]">{orderId}</code>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-text-secondary)]">Product</span>
            <span className="font-medium">{product.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--color-text-secondary)]">Status</span>
            <span className="text-green-500 font-medium">Pending Payment</span>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-primary)]/10 rounded-xl p-6 mb-8 text-left">
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-[var(--color-primary)] mt-1" />
          <div>
            <h3 className="font-semibold text-[var(--color-text)]">What's Next?</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              After completing your payment on Razorpay, you will receive an email with:
            </p>
            <ul className="text-sm text-[var(--color-text-secondary)] mt-2 space-y-1">
              <li>• Download link for {product.name}</li>
              <li>• Access instructions</li>
              <li>• Invoice</li>
            </ul>
          </div>
        </div>
      </div>

      <Link href="/products">
        <Button variant="outline" className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 py-12">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <SuccessContent />
        </Suspense>
      </div>
    </div>
  );
}
