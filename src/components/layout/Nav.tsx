"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Globe } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageContext";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", labelKey: "nav.home", labelEn: "Home", labelHi: "होम" },
  { href: "/services", labelKey: "nav.services", labelEn: "Services", labelHi: "सेवाएं" },
  { href: "/products", labelKey: "nav.products", labelEn: "Products", labelHi: "उत्पाद" },
  { href: "/portfolio", labelKey: "nav.portfolio", labelEn: "Portfolio", labelHi: "पोर्टफोलियो" },
  { href: "/blog", labelKey: "nav.blog", labelEn: "Blog", labelHi: "ब्लॉग" },
  { href: "/about", labelKey: "nav.about", labelEn: "About", labelHi: "हमारे बारे में" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLabel = (link: typeof navLinks[0]) => {
    if (language === "hi") return link.labelHi;
    return link.labelEn;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo size={36} />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors rounded-lg hover:bg-[var(--color-surface)]"
            >
              {getLabel(link)}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <div className="relative group">
            <button
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors flex items-center gap-1"
              aria-label="Switch language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </button>
            <div className="absolute right-0 top-full mt-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button
                onClick={() => setLanguage("en")}
                className={`block w-full px-4 py-2 text-sm text-left hover:bg-[var(--color-bg)] transition-colors first:rounded-t-lg last:rounded-b-lg ${language === "en" ? "text-[var(--color-primary)] font-medium" : "text-[var(--color-text-secondary)]"}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`block w-full px-4 py-2 text-sm text-left hover:bg-[var(--color-bg)] transition-colors first:rounded-t-lg last:rounded-b-lg ${language === "hi" ? "text-[var(--color-primary)] font-medium" : "text-[var(--color-text-secondary)]"}`}
              >
                हिंदी
              </button>
            </div>
          </div>

          <Link href="/contact">
            <Button size="sm" className="font-semibold ml-2">
              {language === "hi" ? "संपर्क करें" : "Get in Touch"}
            </Button>
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[var(--color-text)]">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[var(--color-surface)] border-[var(--color-border)] w-72">
            <div className="flex flex-col gap-6 mt-8">
              <Logo size={40} className="mb-4" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                >
                  {getLabel(link)}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border)]">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-colors"
                >
                  {theme === "dark" ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${language === "en" ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-bg)] text-[var(--color-text-secondary)]"}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage("hi")}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${language === "hi" ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-bg)] text-[var(--color-text-secondary)]"}`}
                  >
                    हिं
                  </button>
                </div>
              </div>
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full font-semibold">
                  {language === "hi" ? "संपर्क करें" : "Get in Touch"}
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
