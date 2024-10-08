import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay.woff",
  variable: "--font-display",
  weight: "100 900",
});

const manrope = Manrope({
  variable: "--font-body",
  preload: true,
  subsets: ["cyrillic", "latin", "cyrillic-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "#BUILDALONG",
  description: "Become an expert in web development before the end of 2024",
  openGraph: {
    title: "#BUILDALONG",
    description: "Become an expert in web development before the end of 2024",
    images: ["image/ba-cover.png"],
    siteName: "Dome Academy",
    url: "https://buildalong.domeinitiative.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: "Become an expert in web development before the end of 2024",
    title: "#BUILDALONG",
    images: ["image/ba-cover.png"],
    site: "@joindomeacademy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable} ${manrope.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
      <Script async src='https://tally.so/widgets/embed.js' />
    </html>
  );
}
