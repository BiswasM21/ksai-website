"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold text-[var(--color-primary)] opacity-20">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="font-semibold">
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}