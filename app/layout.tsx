import type { Metadata } from "next";
import { Space_Grotesk, Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SwiftNet Solutions | High-Performance Web Development",
  description: "No fluff. No excuses. Just results. Building lightning-fast websites that drive real business growth.",
  keywords: ["web development", "performance optimization", "Boston MA", "React", "Next.js", "TypeScript", "conversion-focused design"],
  authors: [{ name: "Jaymison Sanchez" }],
  creator: "Jaymison Sanchez",
  publisher: "SwiftNet Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://swiftnetsolutions.com'),
  openGraph: {
    title: "SwiftNet Solutions | High-Performance Web Development",
    description: "No fluff. No excuses. Just results. Building lightning-fast websites that drive real business growth.",
    type: "website",
    locale: "en_US",
    siteName: "SwiftNet Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftNet Solutions | High-Performance Web Development",
    description: "No fluff. No excuses. Just results. Building lightning-fast websites that drive real business growth.",
    creator: "@JROTHEFINEST",
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
    // Add verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaymison Sanchez',
    jobTitle: 'Full-Stack Developer',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://swiftnetsolutions.com',
    sameAs: [
      'https://www.linkedin.com/in/jaymison-sanchez-339639320/',
      'https://github.com/swiftzwif',
      'https://twitter.com/JROTHEFINEST',
      'https://instagram.com/swiftzwifi',
    ],
    email: 'jsanchez@trajectorygroup.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'SwiftNet Solutions',
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased font-space-grotesk`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
