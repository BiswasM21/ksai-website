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
    "nav.products": "Products",
    "nav.contact": "Get in Touch",
    "footer.tagline": "Sovereign AI infrastructure for the Global South",
    "footer.copyright": "© 2026 Kalinga Sovereign AI Pvt. Ltd. All rights reserved.",
    "hero.partnerWithUs": "Partner with Us",
    "hero.investorEnquiry": "Investor Enquiry",
    "hero.projectsDelivered": "Projects Delivered",
    "hero.clientSatisfaction": "Client Satisfaction",
    "hero.supportAvailable": "Support Available",
    "hero.explore": "Explore",
    "hero.registeredInOdisha": "Registered in Odisha",
    "hero.enterpriseGrade": "Enterprise Grade Performance",
    "hero.dataSovereignty": "Data Sovereignty Guaranteed",
    "services.whatWeBuild": "What We Build",
  },
  hi: {
    "nav.home": "होम",
    "nav.services": "सेवाएं",
    "nav.portfolio": "पोर्टफोलियो",
    "nav.blog": "ब्लॉग",
    "nav.about": "हमारे बारे में",
    "nav.products": "उत्पाद",
    "nav.contact": "संपर्क करें",
    "footer.tagline": "वैश्विक दक्षिण के लिए संप्रभु AI अवसंरचना",
    "footer.copyright": "© 2026 कलिंगा सार्वभौमिक AI प्रा. लि. सर्वाधिकार सुरक्षित।",
    "hero.partnerWithUs": "हमसे जुड़ें",
    "hero.investorEnquiry": "निवेशक पूछताछ",
    "hero.projectsDelivered": "प्रोजेक्ट डिलीवर किए",
    "hero.clientSatisfaction": "क्लाइंट संतुष्टि",
    "hero.supportAvailable": "सपोर्ट उपलब्ध",
    "hero.explore": "एक्सप्लोर करें",
    "hero.registeredInOdisha": "ओडिशा में पंजीकृत",
    "hero.enterpriseGrade": "एंटरप्राइज ग्रेड परफॉर्मेंस",
    "hero.dataSovereignty": "डेटा संप्रभुता की गारंटी",
    "services.whatWeBuild": "हम क्या बनाते हैं",
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