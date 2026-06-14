"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function Logo({ size = 48, className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div
        className="relative transition-transform group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/ksai-logo-clean.png"
          alt="Kalinga Sovereign AI"
          width={size}
          height={size}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="font-bold text-lg text-[var(--color-text)] tracking-tight group-hover:text-[var(--color-primary)] transition-colors hidden sm:block whitespace-nowrap">
          Kalinga Sovereign AI
        </span>
      )}
    </Link>
  );
}
