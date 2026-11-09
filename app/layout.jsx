import { Cormorant_Garamond, Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hind",
  display: "swap",
});

const serifBn = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-bn",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://trymakebd.com"),
  title: "TryMake — Interior, Exterior & Renovation in Dhaka | TryMakebd.com",
  description:
    "অফিস, কর্পোরেট, শোরুম ও রিটেইল ইন্টেরিয়র, এক্সটেরিয়র ও ব্র্যান্ডিং, রেনোভেশন এবং 2D/3D ডিজাইন কনসালটেন্সি — ডিজাইন থেকে এক্সিকিউশন, এক ছাদের নিচে। TryMake — Make Your Dream Perfect.",
  keywords: [
    "interior design Dhaka",
    "office interior Bangladesh",
    "showroom interior",
    "অফিস ইন্টেরিয়র ডিজাইন",
    "শোরুম ইন্টেরিয়র",
    "TryMake",
    "TryMakebd",
  ],
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "TryMake — Make Your Dream Perfect",
    description: "অফিস, শোরুম ও কমার্শিয়াল স্পেসের ইন্টেরিয়র — ডিজাইন থেকে এক্সিকিউশন।",
    url: "https://trymakebd.com",
    siteName: "TryMake",
    images: [{ url: "/images/og-cover.webp" }],
    locale: "bn_BD",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#14110f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${cormorant.variable} ${hind.variable} ${serifBn.variable}`}>
      <body>{children}</body>
    </html>
  );
}
