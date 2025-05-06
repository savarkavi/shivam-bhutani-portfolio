"use client";

import Image from "next/image";
import Link from "next/link";
import LinkWrapper from "../LinkWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { urlFor } from "../../lib/utils";
import { TotalImagesData, WorksPageData } from "@/sanity/customTypes";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WorksContentWrapper = ({
  data,
  totalImagesData,
}: {
  data: WorksPageData;
  totalImagesData: TotalImagesData;
}) => {
  const container = useRef(null);

  return (
    <div ref={container} className="h-full w-full py-16 xl:px-10">
      <div className="section-title z-[10] mt-6 w-full px-8 text-center xl:px-0 xl:text-start">
        <div className="w-full border-t pt-10">
          <h1 className="text-8xl uppercase xl:text-9xl">{data.pageTitle}</h1>
        </div>
      </div>
      <div className="mx-auto mt-20 flex h-full w-full flex-col items-center justify-between gap-16">
        <div className="flex flex-[30%] flex-col items-center gap-6 px-8 xl:flex-row xl:gap-12 xl:px-0">
          <span className="text-xl text-gray-600 uppercase">Index</span>
          <div className="flex flex-wrap justify-center gap-8 xl:gap-12">
            {data.workCategories?.map((item, i) => (
              <Link
                key={item._key}
                href={`/gallery/${item.slug?.current}`}
                className="w-fit text-xl font-semibold transition-all duration-300 hover:text-gray-500"
              >
                {`[${i}] ${item.sectionTitle}`}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-20 flex h-full w-full flex-col gap-20 xl:mt-0">
          {data.workCategories?.map((item, index) => {
            const coverImageUrl = item.coverImage
              ? urlFor(item.coverImage)?.url()
              : null;

            const album = totalImagesData?.albumsWithCounts?.find(
              (album) => album?.albumName === item.sectionTitle,
            );

            const coverImageLQIP = item.coverImage?.asset?.metadata?.lqip;
            return (
              <div
                key={item._key}
                className={`flex flex-col items-center gap-20 xl:flex-row ${
                  index % 2 === 1 ? "xl:flex-row-reverse" : ""
                }`}
              >
                <div className="group relative h-[600px] w-full cursor-pointer overflow-hidden transition-all hover:grayscale-100 2xl:h-[1200px]">
                  <Image
                    src={coverImageUrl || "https://placeholder.co/550x310/png"}
                    alt={item.coverImage?.alt || "cover image"}
                    fill
                    className="scale-105 object-contain transition-all duration-500 group-hover:scale-100 2xl:object-cover"
                    placeholder={coverImageLQIP ? "blur" : "empty"}
                    blurDataURL={coverImageLQIP}
                  />
                </div>
                <div className="flex flex-col gap-10 px-4 xl:px-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl uppercase lg:text-6xl">
                      {item.sectionTitle}
                    </h2>
                    <p>{album?.imageCount && `${album?.imageCount} photos`}</p>
                  </div>
                  <p className="max-w-[800px] text-sm lg:text-lg xl:max-w-[1000px]">
                    {item.description}
                  </p>
                  <LinkWrapper color="bg-black">
                    <Link
                      href={`/gallery/${item.slug?.current}`}
                      className="text-lg"
                    >
                      See album
                    </Link>
                  </LinkWrapper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorksContentWrapper;
