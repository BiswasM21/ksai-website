import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kalinga Sovereign AI — Web Dev, App Dev & AI Automation Company",
    template: "%s | Kalinga Sovereign AI",
  },
  description:
    "Expert web development, mobile app development & AI automation for startups & SMEs. Custom solutions with React, Next.js, Flutter & cutting-edge AI. Based in Odisha, serving globally.",
  keywords: [
    "web development company",
    "app development company",
    "AI automation services",
    "custom software development",
    "React developer",
    "Next.js development",
    "Flutter app development",
    "AI chatbot development",
    "custom AI agents",
    "deep tech company",
    "AI company India",
    "software development company",
    "startup development services",
    "SME technology solutions",
    "mobile app development India",
    "web design company",
    "digital transformation",
    "AI integration services",
    "business automation",
    "custom software Odisha",
  ],
  authors: [{ name: "Kalinga Sovereign AI Pvt. Ltd." }],
  creator: "Kalinga Sovereign AI Pvt. Ltd.",
  publisher: "Kalinga Sovereign AI Pvt. Ltd.",
  metadataBase: new URL("https://kalingasovereignai.com"),
  verification: {
    // google: "your-google-verification-code", // Add when ready
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kalingasovereignai.com",
    siteName: "Kalinga Sovereign AI",
    title: "Kalinga Sovereign AI — Web Dev, App Dev & AI Automation Company",
    description:
      "Expert web development, mobile app development & AI automation for startups & SMEs. Custom solutions built with cutting-edge technology.",
    images: [
      {
        url: "/images/ksai-logo-clean.png",
        width: 500,
        height: 500,
        alt: "Kalinga Sovereign AI - Web Development, App Development & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalinga Sovereign AI — Web Dev, App Dev & AI Automation",
    description:
      "Expert web development, mobile apps & AI automation for startups & SMEs. Based in Odisha.",
    images: ["/images/ksai-logo-clean.png"],
    creator: "@Kalinga_Sov_Ai",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kalingasovereignai.com",
    languages: {
      "en-IN": "https://kalingasovereignai.com",
      "hi": "https://kalingasovereignai.com?lang=hi",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kalingasovereignai.com/#organization",
      name: "Kalinga Sovereign AI Pvt. Ltd.",
      url: "https://kalingasovereignai.com",
      logo: "https://kalingasovereignai.com/images/ksai-logo-clean.png",
      image: "https://kalingasovereignai.com/images/ksai-logo-clean.png",
      description: "Expert web development, mobile app development & AI automation for startups & SMEs. Custom software solutions with cutting-edge technology.",
      foundingDate: "2025",
      foundingLocation: "Odisha, Odisha, India",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "2-10",
      },
      knowsAbout: [
        "Web Development",
        "Mobile App Development",
        "AI Automation",
        "Custom Software Development",
        "React",
        "Next.js",
        "Flutter",
        "AI Agents",
      ],
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Global" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Odisha",
        addressLocality: "Odisha",
        addressRegion: "Odisha",
        postalCode: "751001",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "Kalingasovereignai@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://linkedin.com/company/kalinga-sovereign-ai",
        "https://x.com/Kalinga_Sov_Ai",
        "https://www.instagram.com/kalingasovereignai/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kalingasovereignai.com/#website",
      url: "https://kalingasovereignai.com",
      name: "Kalinga Sovereign AI",
      publisher: { "@id": "https://kalingasovereignai.com/#organization" },
      description: "Expert web development, mobile app development & AI automation for startups & SMEs.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kalingasovereignai.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://kalingasovereignai.com/#localbusiness",
      name: "Kalinga Sovereign AI Pvt. Ltd.",
      image: "https://kalingasovereignai.com/images/ksai-logo-clean.png",
      url: "https://kalingasovereignai.com",
      telephone: "+91-9692000359",
      email: "Kalingasovereignai@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Odisha",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
      serviceType: [
        "Web Development",
        "App Development",
        "AI Automation",
        "Custom Software Development",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://kalingasovereignai.com/#professional",
      name: "Kalinga Sovereign AI",
      description: "Technology consulting and software development services for startups and SMEs.",
      provider: { "@id": "https://kalingasovereignai.com/#organization" },
      areaServed: "Worldwide",
      serviceType: "Software Development",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('ksai-theme');
                  if (!theme || (theme !== 'light' && theme !== 'dark')) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
