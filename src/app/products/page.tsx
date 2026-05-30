import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products",
  description: "Premium AI tools and resources from Kalinga Sovereign AI - Claude Skills bundles, prompts, and more.",
  openGraph: {
    title: "Products | Kalinga Sovereign AI",
    description: "Premium AI tools and resources - Claude Skills bundles, prompts, and more.",
    url: "https://kalingasovereignai.com/products",
    type: "website",
  },
};

const products = [
  {
    id: "claude-skills-bundle",
    name: "Claude Skills Bundle",
    tagline: "2,000+ Premium Claude Skills",
    description: "The ultimate collection of Claude AI skills for professionals, developers, and businesses. Includes prompts for coding, writing, analysis, business, and more.",
    price: 4999,
    currency: "INR",
    priceUSD: 59,
    icon: Sparkles,
    features: [
      "2,000+ Claude AI skills included",
      "Coding & development prompts",
      "Business & marketing templates",
      "Writing & content creation",
      "Data analysis & visualization",
      "Customer support templates",
      "Sales & lead generation",
      "HR & recruitment prompts",
      "Legal & compliance templates",
      "Lifetime updates included",
      "Commercial license",
      "Priority support",
    ],
    badge: "Bestseller",
    badgeColor: "bg-green-500",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-transparent border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-[var(--color-text)]">Products</h1>
          <p className="text-[var(--color-text-secondary)] mt-2">Premium AI tools and resources</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-colors"
            >
              {/* Badge */}
              {product.badge && (
                <div className={`${product.badgeColor} text-white text-xs font-semibold px-4 py-1 inline-block rounded-br-lg`}>
                  {product.badge}
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>

                {/* Title & Tagline */}
                <h2 className="text-2xl font-bold text-[var(--color-text)]">{product.name}</h2>
                <p className="text-[var(--color-text-secondary)] mt-1">{product.tagline}</p>

                {/* Description */}
                <p className="text-[var(--color-text-muted)] mt-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-[var(--color-text)]">
                        ₹{product.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-[var(--color-text-muted)]">
                        or ${product.priceUSD} USD
                      </div>
                    </div>
                  </div>

                  <Link href={`/products/${product.id}`} className="block">
                    <Button size="lg" className="w-full">
                      Buy Now
                    </Button>
                  </Link>

                  <p className="text-xs text-center text-[var(--color-text-muted)] mt-3">
                    Secure payment via Razorpay • Instant delivery
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">More Products Coming Soon</h3>
          <p className="text-[var(--color-text-secondary)]">
            AI prompts bundles, custom solutions, and more
          </p>
        </div>
      </div>
    </div>
  );
}
