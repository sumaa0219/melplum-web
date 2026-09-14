import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Kiwi_Maru } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mplus",
  display: "swap",
  preload: false,
});

const kiwiMaru = Kiwi_Maru({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-kiwi",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "めるぷらむ | ここに集まる、ここから繋がる",
  description:
    "VRChat内プラムちゃんカフェ＆Barイベント「めるぷらむ」公式サイト。毎週火曜日22:00〜開催！VRChat初心者も大歓迎♪",
  openGraph: {
    title: "めるぷらむ",
    description:
      "ここに集まる、ここから繋がる。プラムちゃんと過ごす甘くて可愛いカフェ＆Bar",
    images: ["/assets/rogobanner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${mPlusRounded.variable} ${kiwiMaru.variable}`}>
      <body className="font-mplus bg-cream text-choco-dark antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
