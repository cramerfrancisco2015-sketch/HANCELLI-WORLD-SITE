import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-oswald" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hancelliworld.com"),
  title: {
    default: "HANCELLI WORLD | Jeans feito à mão e dark luxury streetwear",
    template: "%s | HANCELLI WORLD"
  },
  description: "HANCELLI WORLD é uma marca de dark luxury streetwear focada em jeans feito à mão, memória cultural e drops de edição limitada.",
  keywords: [
    "HANCELLI WORLD",
    "Hancelli World",
    "Hancelli jeans",
    "Archive PT.01",
    "jeans feito à mão",
    "jeans artesanal",
    "dark luxury streetwear",
    "luxury streetwear Portugal",
    "streetwear português",
    "moda urbana premium",
    "jeans cultural",
    "jeans de edição limitada",
    "waitlist Hancelli World"
  ],
  authors: [{ name: "HANCELLI WORLD" }],
  creator: "HANCELLI WORLD",
  publisher: "HANCELLI WORLD",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.hancelliworld.com",
    siteName: "HANCELLI WORLD",
    title: "HANCELLI WORLD | Jeans feito à mão e dark luxury streetwear",
    description: "Jeans feito à mão. Memória cultural para vestir. Entra na waitlist do Archive PT.01.",
    images: [
      {
        url: "/images/hancelli/lookbook-archive.jpg",
        width: 1086,
        height: 1448,
        alt: "HANCELLI WORLD — Archive PT.01"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HANCELLI WORLD | Jeans feito à mão e dark luxury streetwear",
    description: "Jeans feito à mão. Memória cultural para vestir. Entra na waitlist do Archive PT.01.",
    images: ["/images/hancelli/lookbook-archive.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "GAouKDYBBJqJ7snC4iMbYIT8sdsUAbZLK3lrZWo4n0Q"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${oswald.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-black text-white antialiased font-inter overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
