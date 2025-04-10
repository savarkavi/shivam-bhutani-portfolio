import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import { ReactLenis } from "lenis/react";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
          <Footer />
          <div className="bg-white z-[99] mb-[100vh]">
            <Header />
            {children}
          </div>
        </body>
      </ReactLenis>
    </html>
  );
}
