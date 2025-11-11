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
  openGraph: {
    title: "SwiftNet Solutions | High-Performance Web Development",
    description: "No fluff. No excuses. Just results. Building lightning-fast websites that drive real business growth.",
    type: "website",
  },
  keywords: ["web development", "performance optimization", "Boston MA", "React", "Next.js", "TypeScript", "conversion-focused design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased font-space-grotesk`}
      >
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
