import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aliboxingclub.com"),
  title: "ALI Boxing Club — Train Like a Champion",
  description:
    "Elite boxing training for kids, women, amateurs and pros. Join ALI Boxing Club — 10+ years, 120+ medals, certified coaches.",
  applicationName: "ALI Boxing Club",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ALI Boxing Club",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/favicon.ico",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "ALI Boxing Club — Train Like a Champion",
    description: "Elite boxing training for kids, women, amateurs and pros. Book a free class today.",
    type: "website",
    locale: "en_US",
    url: "https://aliboxingclub.com",
    siteName: "ALI Boxing Club",
    images: [{ url: "/logo.jpg", width: 512, height: 512, alt: "ALI Boxing Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALI Boxing Club — Train Like a Champion",
    description: "Elite boxing training for kids, women, amateurs and pros.",
    images: ["/logo.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
