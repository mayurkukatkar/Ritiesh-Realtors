import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ritieshrealtors.in'),
  title: "Ritiesh Realtors | Premium Plots at Nagpur",
  description: "Premium NA sanctioned residential plots at Nimba, Temasna, and Pandharkawada, Nagpur. Clear titles, 0% EMI options, and immediate possession by Ritiesh Realtors.",
  keywords: "Ritiesh Realtors, NA plots Nagpur, residential plots, Nimba, Temasna, Pandharkawada, real estate, EMI plots, property in Nagpur, buy land Nagpur",
  authors: [{ name: "Ritiesh Realtors" }],
  creator: "Ritiesh Realtors",
  publisher: "Ritiesh Realtors",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ritiesh Realtors | Premium Plots in Nagpur",
    description: "Premium NA sanctioned plots with 0% EMI options. 3 prime locations in Nagpur.",
    url: 'https://ritieshrealtors.in',
    siteName: 'Ritiesh Realtors',
    type: "website",
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ritiesh Realtors | Premium Plots in Nagpur",
    description: "Premium NA sanctioned plots with 0% EMI options in Nagpur.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`font-sans antialiased text-slate-50 overflow-x-hidden`} style={{ backgroundColor: '#0F281E', color: '#f8fafc' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
