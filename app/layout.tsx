import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const bodyFont = Zen_Kaku_Gothic_New({
  variable: "--font-body",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const displayFont = Zen_Old_Mincho({
  variable: "--font-display",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社Allora",
    template: "%s | 株式会社Allora",
  },
  description:
    "株式会社AlloraはWeb制作・Webアプリ・iOSアプリのデザインと開発を行うクリエイティブチームです。",
  openGraph: {
    title: "株式会社Allora",
    description:
      "温かみのあるデザインと確かな実装で、ビジネスの価値をわかりやすく伝えます。",
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社Allora",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Allora",
    description:
      "Web制作・Webアプリ・iOSアプリのデザインと開発を行う株式会社Alloraの公式サイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
