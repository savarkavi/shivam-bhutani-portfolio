import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const boska = localFont({
  src: "../fonts/Boska-Bold.otf",
  display: "swap",
  variable: "--font-boska",
});
