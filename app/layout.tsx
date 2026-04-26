import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "qmims Documentation",
    template: "%s | qmims Documentation",
  },
  description:
    "Official documentation for qmims, a Kiro CLI-powered tool for generating, editing, and maintaining README files.",
  applicationName: "qmims Documentation",
  keywords: [
    "qmims",
    "Kiro CLI",
    "README generator",
    "documentation",
    "CLI",
    "Markdown",
    "templates",
    "embedded instructions",
  ],
  authors: [{ name: "Wassim Soltani" }],
  creator: "Wassim Soltani",
  publisher: "Wassim Soltani",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://qmims.vercel.app",
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qmims.vercel.app",
    title: "qmims Documentation",
    description:
      "Learn how to install, configure, and use qmims with Kiro CLI for AI-powered README generation and editing.",
    siteName: "qmims Documentation",
    images: [
      {
        url: "/qmims-banner.webp",
        width: 1200,
        height: 630,
        alt: "qmims documentation site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "qmims Documentation",
    description:
      "Official docs for qmims, a Kiro CLI-powered README generation and editing tool.",
    images: ["/qmims-banner.webp"],
    creator: "@wSoltani",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-y-auto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
