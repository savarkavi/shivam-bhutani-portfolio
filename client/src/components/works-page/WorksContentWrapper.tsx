"use client";

import { worksCategories } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import LinkWrapper from "../LinkWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WorksContentWrapper = () => {
  const container = useRef(null);

  return (
    <div ref={container} className="h-full w-full px-10 py-16">
      <div className="section-title z-[10] mt-6 w-full border-t pt-10">
        <h1 className={`text-9xl uppercase`}>Works</h1>
      </div>
      <div className="mx-auto mt-20 flex h-full w-full flex-col items-center justify-between gap-16">
        <div className="flex flex-[30%] gap-12">
          <span className="text-xl text-gray-600 uppercase">Index</span>
          <div className="flex gap-12">
            {worksCategories.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="w-fit text-xl font-semibold"
              >
                {`[${item.id}] ${item.link}`}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex h-full w-full flex-col gap-20">
          {worksCategories.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center gap-20 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="group relative h-[1200px] w-full cursor-pointer overflow-hidden transition-all hover:grayscale-75">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="scale-105 object-cover transition-all duration-500 group-hover:scale-100"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-6xl uppercase">{item.name}</h2>
                  <p>{`${item.totalPhotos} photos`}</p>
                </div>
                <p className="max-w-[1000px] text-lg">{item.desc}</p>
                <LinkWrapper color="bg-black">
                  <Link href={item.href} className="text-lg">
                    See album
                  </Link>
                </LinkWrapper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksContentWrapper;
