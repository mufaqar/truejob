"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Inter } from "next/font/google";
import { SettingsProvider } from "@/context/setting-context";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-dark-gray ${inter.className}`} >
        <SettingsProvider>
          <ThemeProvider enableSystem={false} attribute="class">{children}</ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}

