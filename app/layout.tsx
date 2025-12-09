import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solvify",
  description:
    "Use powerful online tools like Text Cleaner and Clean & Compare to remove extra spaces, clean formatting, and instantly compare two texts with highlighted differences.",
  keywords: [
    "text cleaner",
    "clean text online",
    "remove extra spaces",
    "remove blank lines",
    "text compare tool",
    "clean and compare",
    "highlight text differences",
    "text formatting tools",
    "online productivity tools"
  ],
  openGraph: {
    title: "Smart Text Tools – Clean, Compare & Optimize Your Text",
    description:
      "Clean text, remove blank lines, fix spaces, and compare two texts with highlighted differences. Fast, accurate and free.",
    url: "https://solvify.in",
    siteName: "Solvify",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){
            try {
              var saved = localStorage.getItem('theme');
              var isDark = saved ? saved === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
              document.documentElement.classList.toggle('dark', !!isDark);
            } catch (e) {}
          })();`}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
