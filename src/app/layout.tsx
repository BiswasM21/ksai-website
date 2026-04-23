import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "Kalinga Sovereign AI — Sovereign AI Solutions for the Global South",
    template: "%s | Kalinga Sovereign AI",
  },
  description:
    "Kalinga Sovereign AI builds custom AI integrations, workflow automation, and intelligent applications for SMEs, enterprises, and institutions across India and the Global South.",
  keywords: [
    "AI solutions",
    "artificial intelligence",
    "India AI",
    "Global South AI",
    "workflow automation",
    "custom AI development",
    "AI consulting",
    "Sovereign AI",
    "Kalinga AI",
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kalinga Sovereign AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalinga Sovereign AI — Sovereign AI Solutions for the Global South",
    description:
      "Custom AI integrations built for scale, speed, and results.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = localStorage.getItem('ksai-theme');
                var theme = (stored === 'light') ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col text-white antialiased">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
