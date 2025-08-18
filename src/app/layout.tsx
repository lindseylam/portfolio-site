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
  //const [opened, { toggle }] = useDisclosure(false);
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${majorMonoDisplay.variable} ${ibmPlexMono.variable}`}>
          <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
