import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bodyFont = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const displayFont = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "CD Solutions | Construction, Materials & Logistics",
  description: "Integrated construction, project delivery, material supply, equipment hire, and site logistics services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body></html>;
}
