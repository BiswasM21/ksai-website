import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-[var(--color-accent)]/30 bg-[var(--color-accent-subtle)] text-[var(--color-accent)]",
        secondary:
          "border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-muted)]",
        outline: "border border-[var(--color-border)] bg-transparent text-[var(--color-muted)]",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
