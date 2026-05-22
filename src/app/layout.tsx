import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "МАССИВ | Премиальные чабани",
  description: "Мастерская эксклюзивных чабаней из реликтового мореного дуба и карагача. Мы сохраняем живую память земли в функциональных артефактах.",
  openGraph: {
    title: "МАССИВ | Премиальные чабани",
    description: "Эксклюзивные чабани из реликтового дерева. Сплав тысячелетней истории и лазерной точности.",
    url: "https://massiv-atelier.ru",
    siteName: "МАССИВ",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590059132718-5026939989d3?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "МАССИВ - Премиальные чабани",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "МАССИВ | Премиальные чабани",
    description: "Мастерская эксклюзивных чабаней из реликтового мореного дуба.",
    images: ["https://images.unsplash.com/photo-1590059132718-5026939989d3?q=80&w=1200"],
  },
  icons: {
    icon: '/icon.svg',
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-[#c4a484] selection:text-black`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
