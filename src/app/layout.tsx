import MainLayout from "@/components/MainLayout";
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import type { Metadata } from "next";
import { Major_Mono_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const majorMonoDisplay = Major_Mono_Display({
  variable: "--font-major-mono-display",
  subsets: ["latin"],
  weight: ["400"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lindsey Lam",
  description: "Lindsey Lam's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        
        <ColorSchemeScript />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
        <link rel="manifest" href="./site.webmanifest"/>
      </head>
      <body className={`${majorMonoDisplay.variable} ${ibmPlexMono.variable}`}>
          <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
