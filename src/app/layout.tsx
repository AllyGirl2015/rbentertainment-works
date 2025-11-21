import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "RBEW - Reality Builders Entertainment Works",
    template: "%s | RBEW"
  },
  description: "Where imagination isn't just explored, it's engineered. Crafting stories yet untold across novels, games, mods, and cinematic creations.",
  keywords: [
    "entertainment",
    "storytelling",
    "game development",
    "roleplay",
    "books",
    "animation",
    "RBEW",
    "FiveM",
    "Minecraft",
    "indie games",
    "creative studio",
    "Alissa Eldridge",
    "transgender author",
    "LGBTQ+ fiction",
    "transformation stories"
  ],
  authors: [{ name: "Alissa M.R. Eldridge", url: "https://www.rbew.com/team" }],
  creator: "Reality Builders Entertainment Works",
  publisher: "Reality Builders Entertainment Works",
  metadataBase: new URL('https://www.rbew.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Reality Builders Entertainment Works',
    title: 'RBEW - Reality Builders Entertainment Works',
    description: 'Where imagination isn\'t just explored, it\'s engineered.',
    url: 'https://www.rbew.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RBEW - Reality Builders Entertainment Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBEW - Reality Builders Entertainment Works',
    description: 'Where imagination isn\'t just explored, it\'s engineered.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you set them up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'entertainment',
  icons: {
    icon: '/RBEW_logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Reality Builders Entertainment Works",
              "alternateName": "RBEW",
              "url": "https://www.rbew.com",
              "logo": "https://www.rbew.com/RBEW_logo.jpg",
              "description": "Where imagination isn't just explored, it's engineered. Crafting stories yet untold across novels, games, mods, and cinematic creations.",
              "foundingDate": "2015",
              "founder": {
                "@type": "Person",
                "name": "Alissa M.R. Eldridge",
                "jobTitle": "Founder & Creative Director",
                "email": "alissarobbin2015@gmail.com"
              },
              "sameAs": [
                "https://discord.gg/R27pqnfp5v",
                "https://www.realitycentral.net"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "General Inquiries",
                "email": "alissarobbin2015@gmail.com"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <SpaceBackground />
        {/* Global Background Overlay for Smooth Transitions */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80 pointer-events-none z-0"></div>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00f3ff] focus:text-black focus:rounded-lg focus:font-semibold">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
