"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

/**
 * Reusable service card component with icon, title, description, and link.
 * Features hover effects and smooth transitions.
 */
export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block h-full rounded-xl p-6",
        "bg-[var(--color-surface)] border border-[var(--color-border)]",
        "transition-all duration-300 ease-out",
        "hover:border-[var(--color-border-strong)]",
        "hover:shadow-lg hover:shadow-[var(--color-accent)]/5",
        "hover:-translate-y-1"
      )}
    >
      {/* Icon container */}
      <div
        className={cn(
          "w-14 h-14 rounded-xl mb-5",
          "flex items-center justify-center",
          "bg-[var(--color-accent-subtle)]",
          "transition-transform duration-300 group-hover:scale-110"
        )}
      >
        <div className="text-[var(--color-accent)]">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Learn more link */}
      <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
