import { Lavishly_Yours } from "next/font/google";
import localFont from "next/font/local";

export const lavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  weight: ["400"],
});

export const stardom = localFont({
  src: "../fonts/Stardom-Regular.otf",
});

export const boska = localFont({
  src: "../fonts/Boska-Bold.otf",
});
