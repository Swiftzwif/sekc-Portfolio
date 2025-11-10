import type { Metadata } from "next";
import { Space_Grotesk, Inter, Playfair_Display } from "next/font/google";
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
  title: "Jaymison Sanchez | Full-Stack Developer",
  description: "Fast, AI-assisted web development for businesses that need results. Building modern websites that make businesses money.",
  openGraph: {
    title: "Jaymison Sanchez | Full-Stack Developer",
    description: "Fast, AI-assisted web development for businesses that need results.",
    type: "website",
  },
  keywords: ["web development", "full-stack developer", "Lawrence MA", "React", "Next.js", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased font-space-grotesk bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
