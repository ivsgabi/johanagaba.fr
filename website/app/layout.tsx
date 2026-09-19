import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Johana Gaba — Portfolio",
  description:
    "Software engineering, creative development, and data-driven analytics projects.",
  keywords: [
    "Johana Gaba",
    "Portfolio",
    "Software Engineer",
    "Data Analytics",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Johana Gaba" }],
  metadataBase: new URL("https://johanagaba.fr"), // Remplace par ton URL Vercel finale

  openGraph: {
    title: "Johana Gaba — Portfolio",
    description:
      "Software engineering, creative development, and data-driven analytics projects.",
    url: "https://johanagaba.fr",
    siteName: "Johana Gaba",
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Johana Gaba — Portfolio",
    description:
      "Software engineering, creative development, and data-driven analytics projects.",
  },
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${geist.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
