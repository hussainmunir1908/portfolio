import { ThemeProvider } from "./components/theme-provider";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "./components/navbar/app-navbar";
import SmoothScroll from "./components/smooth-scroll";
import PageTransition from "./components/page-transition";
import FloatingShootToggleHost from "./components/floating-shoot-toggle-host";
import CollaborativeCursors from "./components/collaborative-cursors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hussainmunir.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hussain Munir",
  description: "Hussain Munir is a Computer Engineering student and Full-Stack Developer who builds high-performance, real-time applications. From hardware to the web.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Hussain Munir | Computer Engineer & Full-Stack Developer",
    description: "Hussain Munir is a Computer Engineering student and Full-Stack Developer who builds high-performance, real-time applications. From hardware to the web.",
    images: "/images/portfolio/HussainPicture.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussain Munir | Computer Engineer & Full-Stack Developer",
    description: "Hussain Munir is a Computer Engineering student and Full-Stack Developer who builds high-performance, real-time applications. From hardware to the web.",
    images: ["/images/portfolio/HussainPicture.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <AppNavbar />
          <CollaborativeCursors />
          <FloatingShootToggleHost />
          <SmoothScroll>
            <PageTransition>{children}</PageTransition>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
