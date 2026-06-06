import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { site } from "@/shared/config/site";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import { StickyCallBar } from "@/shared/components/layout/StickyCallBar";
import { LocalBusinessJsonLd } from "@/shared/components/seo/LocalBusinessJsonLd";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = `Pressure Washing in ${site.address.city}, ${site.address.state} | ${site.name}`;
const description =
  "Professional pressure washing in Roanoke, VA & nearby towns. House washing, " +
  "roof & driveway cleaning. 100% satisfaction guaranteed, licensed & insured. " +
  "Call for a fast free estimate.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  keywords: [
    "pressure washing Roanoke VA",
    "house washing Roanoke",
    "roof cleaning Roanoke",
    "driveway cleaning",
    "soft wash",
    "power washing near me",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#005981",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: "<!-- Built for PWMP trial by Camilo Suarez -->",
          }}
        />
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
