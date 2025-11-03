import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
      <body className={`${spaceGrotesk.variable} antialiased font-sans`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

