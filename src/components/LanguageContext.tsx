"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "hi";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Get in Touch",
    "footer.tagline": "Sovereign AI infrastructure for the Global South",
    "footer.copyright": "© 2026 Kalinga Sovereign AI Pvt. Ltd. All rights reserved.",
  },
  hi: {
    "nav.home": "होम",
    "nav.services": "सेवाएं",
    "nav.portfolio": "पोर्टफोलियो",
    "nav.blog": "ब्लॉग",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क करें",
    "footer.tagline": "वैश्विक दक्षिण के लिए संप्रभु AI अवसंरचना",
    "footer.copyright": "© 2026 कलिंगा सार्वभौमिक AI प्रा. लि. सर्वाधिकार सुरक्षित।",
  },
};

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("ksai-language") as Language | null;
    if (stored && (stored === "en" || stored === "hi")) {
      requestAnimationFrame(() => {
        setLanguageState(stored);
      });
    }
    document.documentElement.lang = stored || "en";
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("ksai-language", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
