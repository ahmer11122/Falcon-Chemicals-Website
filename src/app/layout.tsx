import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Manrope } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Falcon Chemical Construction | Waterproofing & Heat Proofing Experts",
    template: "%s | Falcon Chemical Construction",
  },
  description:
    "Premium chemical construction solutions in Pakistan. Specialists in roof waterproofing, heat proofing, termite control, and water tank treatments. 5-year warranty.",
  keywords: [
    "waterproofing",
    "heat proofing",
    "chemical construction",
    "roof leakage solution",
    "termite control",
    "water tank waterproofing",
    "Falcon Chemicals",
    "Pakistan",
    "Islamabad",
    "Lahore",
  ],
  authors: [{ name: "Falcon Chemical Construction" }],
  creator: "Falcon Chemical Construction",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://falconchemicals.com", // Replace with actual domain if known, otherwise placeholder
    title: "Falcon Chemical Construction | Waterproofing & Heat Proofing Experts",
    description:
      "Premium chemical construction solutions in Pakistan. Specialists in roof waterproofing, heat proofing, termite control, and water tank treatments.",
    siteName: "Falcon Chemical Construction",
    images: [
      {
        url: "/opengraph-image.png", // We should ideally ensure this image exists or is generated
        width: 1200,
        height: 630,
        alt: "Falcon Chemical Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Falcon Chemical Construction | Waterproofing & Heat Proofing Experts",
    description:
      "Premium chemical construction solutions in Pakistan. Specialists in roof waterproofing, heat proofing, termite control, and water tank treatments.",
    images: ["/opengraph-image.png"],
  },
  metadataBase: new URL("https://falconchemicals.com"), // Replace with actual domain
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${manrope.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
