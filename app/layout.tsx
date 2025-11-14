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

const siteUrl = "https://swiftnetsolutions.net";
const siteName = "SwiftNet Solutions";
const description = "No fluff. No excuses. Just results. Building lightning-fast websites that drive real business growth.";

export const metadata: Metadata = {
  title: "SwiftNet Solutions | High-Performance Web Development",
  description: description,
  keywords: [
    "web development",
    "performance optimization",
    "Boston MA",
    "React",
    "Next.js",
    "TypeScript",
    "conversion-focused design",
    "AI-enhanced development",
    "full-stack development",
  ],
  authors: [{ name: "Jaymison Sanchez" }],
  creator: "Jaymison Sanchez",
  publisher: "SwiftNet Solutions",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    title: "SwiftNet Solutions | High-Performance Web Development",
    description: description,
    url: siteUrl,
    siteName: siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftNet Solutions | High-Performance Web Development",
    description: description,
    creator: "@JROTHEFINEST",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
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
    url: siteUrl,
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body
        className={`${playfairDisplay.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased font-space-grotesk`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
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
