"use client";

import { navigationItems, soacialItems } from "@/lib/constants";
import Link from "next/link";
import LinkWrapper from "./LinkWrapper";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 flex h-[450px] w-full flex-col justify-between bg-stone-950 px-4 py-16 text-white xl:px-16 xl:py-20">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <h2 className={`text-2xl uppercase`}>Shivam Bhutani</h2>
        <div className="flex justify-between text-lg lg:gap-40">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Navigation</span>
            {navigationItems.map((item) => (
              <LinkWrapper key={item.id} color="bg-white">
                <Link href={item.href}>{item.name}</Link>
              </LinkWrapper>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Follow on</span>
            {soacialItems.map((item) => (
              <LinkWrapper key={item.id} color="bg-white">
                <Link href={item.href}>{item.name}</Link>
              </LinkWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
