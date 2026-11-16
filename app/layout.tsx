import type { Metadata } from "next";
import "./globals.css";
import OpeningCurtain from "@/components/splash/OpeningCurtain";

export const metadata: Metadata = {
  title: "Arkan Technologies Limited | Hardware, Software & Infrastructure",
  description: "Official portal for Arkan Technologies Limited (RC: 9950778). Engineering deep-tech energy telemetry (SunStaker) and real-world asset solutions (Binaa Homes).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050914] text-slate-100 antialiased selection:bg-emerald-500 selection:text-black">
        <OpeningCurtain />
        {children}
      </body>
    </html>
  );
}