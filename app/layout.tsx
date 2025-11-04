import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "ROKVILLA - Design & Build Co.",
  description: "ROKVILLA Design & Build Co. - Leading architecture and construction firm in Karnataka specializing in residential and commercial design, sustainable architecture, and innovative building solutions.",
  keywords: ["architecture", "design", "construction", "residential", "commercial", "sustainable", "Karnataka", "Hubli", "Dharwad", "Bengaluru", "Ballari", "Vijayapura"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased font-sans`}>
        <Navbar />
        <main>
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  );
}

