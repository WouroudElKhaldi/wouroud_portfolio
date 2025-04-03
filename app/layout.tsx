import type React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

interface HeaderData {
  headerTitle: string;
  headerSubtitle: string;
  headerGenerator: string;
}

// Define the header data
const headerData: HeaderData = {
  headerTitle: "Wouroud EL Khaldi",
  headerSubtitle:
    "Portfolio of Wouroud EL Khaldi, a Full Stack Software Engineer, UI/UX Designer, and Cybersecurity Enthusiast",
  headerGenerator: "Next.js",
};

export const metadata: Metadata = {
  title: "Wouroud EL Khaldi - Full Stack Engineer Software Engineer",
  description:
    "Portfolio of Wouroud EL Khaldi, a Full Stack Software Engineer, UI/UX Designer, and Cybersecurity Enthusiast",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{headerData.headerTitle}</title>
        <meta name="description" content={headerData.headerSubtitle} />
        <meta name="generator" content={headerData.headerGenerator} />

        <meta property="og:title" content={headerData.headerTitle} />
        <meta property="og:description" content={headerData.headerSubtitle} />
        <meta property="og:image" content="URL to your image" />
        <meta property="og:type" content="wesbsite" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={headerData.headerTitle} />
        <meta name="twitter:description" content={headerData.headerSubtitle} />
        <meta name="twitter:image" content="URL to your image" />
        <link rel="canonical" href="https://wouroud.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
