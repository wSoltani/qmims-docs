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
  title: "qmims Documentation",
  description: "AI-Powered README Generation & Editing - v0.0.2",
  generator: "v0.dev",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://qmims.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qmims.vercel.app",
    title: "qmims - AI-Powered README Generation & Editing",
    description:
      "Generate and edit README files with AI using a simple CLI tool",
    siteName: "qmims Documentation",
    images: [
      {
        url: "/qmims-banner.webp",
        width: 1200,
        height: 630,
        alt: "qmims CLI tool for README generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "qmims - AI-Powered README Generation & Editing",
    description:
      "Generate and edit README files with AI using a simple CLI tool",
    images: ["/qmims-banner.webp"],
    creator: "@wSoltani",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
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
