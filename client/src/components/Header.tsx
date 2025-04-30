"use client";

import { navigationItems } from "@/lib/constants";
import Link from "next/link";
import LinkWrapper from "./LinkWrapper";
import { boska } from "@/fonts/fonts";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Header = () => {
  const pathname = usePathname();

  const container = useRef<HTMLDivElement>(null);

  const isHome = pathname.endsWith("/");
  const isGallery = pathname.includes("/gallery");

  useGSAP(
    () => {
      if (isHome) {
        gsap.from(".title-reveal", {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 4.8,
        });

        gsap.from(".link-reveal", {
          yPercent: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.1,
          delay: 4.8,
        });
      }
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className={`header z-[10] flex h-[100px] w-full justify-center px-4 lg:px-8 xl:justify-between ${
        isHome
          ? "sticky top-0 items-center xl:h-[160px]"
          : "h-fit items-start pt-8 text-cyan-900"
      }`}
    >
      <div className="overflow-hidden">
        <h1
          className={`${boska.className} title-reveal ${
            isHome
              ? "text-center 2xl:text-9xl"
              : isGallery
                ? "2xl:text-6xl"
                : "2xl:text-[12rem]"
          } hidden font-bold uppercase xl:block xl:text-8xl`}
        >
          {isHome || isGallery ? (
            "Shivam Bhutani"
          ) : (
            <>
              Shivam
              <br />
              Bhutani
            </>
          )}
        </h1>
      </div>

      <div className="text-lg font-semibold uppercase lg:text-xl">
        <div className="flex items-center gap-6 font-bold sm:gap-8">
          {navigationItems.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <LinkWrapper
                color="bg-emerald-700"
                containerClassName="link-reveal block"
              >
                <Link href={item.href}>{item.name}</Link>
              </LinkWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
