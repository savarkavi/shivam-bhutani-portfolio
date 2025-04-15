"use client";

import { navigationItems } from "@/lib/constants";
import Link from "next/link";
import LinkWrapper from "./LinkWrapper";
import { boska } from "@/fonts/fonts";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const isHome = pathname.endsWith("/");

  return (
    <div
      className={`header z-[10] flex h-[100px] w-full justify-center px-4 lg:px-8 xl:justify-between ${isHome ? "sticky top-0 items-center xl:h-[160px]" : "h-fit items-start pt-8 text-emerald-700"}`}
    >
      <h1
        className={`${boska.className} ${isHome ? "text-center 2xl:text-9xl" : "2xl:text-[12rem]"} hidden font-bold uppercase xl:block xl:text-8xl`}
      >
        {isHome ? (
          "Shivam Bhutani"
        ) : (
          <>
            Shivam
            <br />
            Bhutani
          </>
        )}{" "}
      </h1>

      <div className="text-lg font-semibold uppercase lg:text-xl">
        <div className="flex items-center gap-6 font-bold sm:gap-8">
          {navigationItems.map((item) => (
            <LinkWrapper key={item.id} color="bg-emerald-700">
              <Link href={item.href}>{item.name}</Link>
            </LinkWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
