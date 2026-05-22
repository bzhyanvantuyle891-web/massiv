import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "МАССИВ | Душа дерева в каждом прикосновении | Авторские чабани 2026",
  description: "Мастерская эксклюзивных чабаней из реликтового мореного дуба и карагача. Мы сохраняем живую память земли в функциональных артефактах для чайных церемоний.",
  other: {
    'ai-generated': 'true',
  }
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="ai-generated" content="true" />
      </head>
      <body className={`${inter.variable} antialiased selection:bg-[var(--color-accent-wood)] selection:text-white`}>
        <div className="noise-overlay" />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
