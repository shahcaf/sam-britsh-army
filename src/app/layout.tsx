import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam's British Army | Roblox Military Roleplay & Gaming Community",
  description:
    "The official website for Sam's British Army Roblox roleplay and gaming community. Build leadership, discipline, and teamwork through immersive operations, regimental training, and community events.",
  keywords: [
    "Sam's British Army",
    "SBA",
    "Roblox British Army",
    "Roblox Military Roleplay",
    "British Army Community",
    "Roblox Gaming Clan",
    "Military Roleplay Community",
    "Roblox Grenadier Guards",
    "British Army Discord",
  ],
  authors: [{ name: "Sam's British Army" }],
  openGraph: {
    title: "Sam's British Army | Roblox Military Roleplay & Gaming Community",
    description:
      "Build leadership, discipline, and teamwork through immersive operations, regimental training, and community events in Sam's British Army.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam's British Army | Roblox Military Roleplay & Gaming Community",
    description:
      "Build leadership, discipline, and teamwork through immersive operations, regimental training, and community events in Sam's British Army.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-army-dark text-gray-200 min-h-screen flex flex-col antialiased selection:bg-army-gold selection:text-army-dark">
        {children}
      </body>
    </html>
  );
}
