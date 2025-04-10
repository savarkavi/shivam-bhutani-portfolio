"use client";

import { lavishlyYours, stardom } from "@/fonts/fonts";
import { navigationItems, soacialItems } from "@/lib/constants";
import Link from "next/link";
import LinkWrapper from "./LinkWrapper";

const Footer = () => {
  return (
    <div className="h-screen fixed w-full bottom-0 left-0 bg-stone-950 flex flex-col z-[-10] gap-20 items-center justify-between text-white py-28">
      <div className="text-center">
        <h2 className={`${lavishlyYours.className} text-8xl`}>
          Shivam Bhutani
        </h2>
        <h2 className={`${stardom.className} text-9xl`}>Photography</h2>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-10 text-7xl font-bold">
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="hover:text-gray-500 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 text-3xl">
          <span className="text-gray-500">Follow on</span>
          {soacialItems.map((item) => (
            <LinkWrapper key={item.id} color="bg-white">
              <Link href={item.href}>{item.name}</Link>
            </LinkWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
