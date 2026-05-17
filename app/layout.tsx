import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-oswald" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-inter" });

export const metadata: Metadata = { title: "HANCELLI WORLD", description: "GLOBAL VISION. TIMELESS STYLE." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${oswald.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-black text-white antialiased font-inter overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
