import type { Metadata } from "next";
import Header from "@/components/Header";
import { ReactLenis } from "lenis/react";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { cormorantGaramond } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Shivam Bhutani Photographer",
    absolute: "Shivam Bhutani - Fashion and Potrait Photographer",
  },
  description:
    "Shivam Bhutani - The best fashion, potrait and wedding photographer in India, Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${cormorantGaramond.className} antialiased`}>
          <div className="z-[99] flex h-full min-h-screen flex-col justify-between bg-white">
            <Header />
            {children}
            <Footer />
          </div>
          <SpeedInsights />
        </body>
      </ReactLenis>
    </html>
  );
}
