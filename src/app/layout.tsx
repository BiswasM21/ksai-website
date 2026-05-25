import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bebas_Neue } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";

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

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kalinga Sovereign AI — Sovereign AI Solutions for the Global South",
    template: "%s | Kalinga Sovereign AI",
  },
  description:
    "Kalinga Sovereign AI builds custom AI integrations, workflow automation, and intelligent applications for SMEs, enterprises, and institutions across India and the Global South.",
  keywords: [
    "custom AI agents",
    "AI agent development",
    "AI solutions",
    "AI automation",
    "artificial intelligence",
    "AI integration",
    "workflow automation",
    "custom AI development",
    "AI consulting",
    "India AI",
    "Global South AI",
    "Sovereign AI",
    "Kalinga AI",
    "AI development company",
    "AI bot development",
  ],
  authors: [{ name: "Kalinga Sovereign AI Pvt. Ltd." }],
  creator: "Kalinga Sovereign AI Pvt. Ltd.",
  metadataBase: new URL("https://kalinga-ai.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kalinga-ai.com",
    siteName: "Kalinga Sovereign AI",
    title: "Kalinga Sovereign AI — Sovereign AI Solutions for the Global South",
    description:
      "Custom AI integrations built for scale, speed, and results. Serving SMEs and enterprises across India and the Global South.",
    images: [
      {
        url: "/images/ksai-favicon.png",
        width: 512,
        height: 512,
        alt: "Kalinga Sovereign AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalinga Sovereign AI — Sovereign AI Solutions for the Global South",
    description:
      "Custom AI integrations built for scale, speed, and results.",
    images: ["/images/ksai-favicon.png"],
  },
  icons: {
    icon: [
      { url: "/images/ksai-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/ksai-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/ksai-favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: "/images/ksai-favicon.png",
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedTheme = cookieStore.get("ksai-theme")?.value;
  const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" href="/images/ksai-favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/ksai-favicon.png" sizes="any" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kalinga Sovereign AI Pvt. Ltd.",
              url: "https://kalinga-ai.com",
              logo: "https://kalinga-ai.com/images/kalinga-logo.png",
              description:
                "Kalinga Sovereign AI builds custom AI agents, workflow automation, and intelligent applications for SMEs, enterprises, and institutions across India and the Global South.",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhubaneswar",
                addressRegion: "Odisha",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "Kalingasovereignai@gmail.com",
                contactType: "customer service",
              },
              sameAs: [
                "https://linkedin.com/company/kalinga-sovereign-ai",
                "https://x.com/Kalinga_Sov_Ai",
                "https://www.instagram.com/kalingasovereignai/",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Custom AI Agent Development",
                "Workflow Automation",
                "LLM Integration",
                "AI Consulting",
              ],
              areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "Place", name: "Global South" },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Custom AI Agent Development",
              description:
                "We build custom AI agents that run 24/7 — automating workflows, answering queries, processing documents, and integrating with your existing systems. Built for SMEs, enterprises, and institutions.",
              provider: {
                "@type": "Organization",
                name: "Kalinga Sovereign AI Pvt. Ltd.",
                url: "https://kalinga-ai.com",
              },
              serviceType: "Custom AI Agent Development",
              areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "Place", name: "Global South" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workflow Automation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom App Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Consulting" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider initialTheme={initialTheme}>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
