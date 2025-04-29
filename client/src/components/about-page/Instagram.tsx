"use client";

import { urlFor } from "@/lib/utils";
import { AboutPageData } from "@/sanity/customTypes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Instagram = ({ data }: { data: AboutPageData }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef1 = useRef<HTMLDivElement | null>(null);
  const imgRef2 = useRef<HTMLDivElement | null>(null);
  const imgRef3 = useRef<HTMLDivElement | null>(null);
  const imgRef4 = useRef<HTMLDivElement | null>(null);

  const smallScreen = useMediaQuery("(max-width: 1280px)");

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .to(imgRef1.current, { left: "20%", ease: "linear" })
      .to(
        imgRef2.current,
        { left: smallScreen ? "-45%" : "20%", ease: "linear" },
        "<",
      )
      .to(imgRef3.current, { right: "20%", ease: "linear" }, "<")
      .to(
        imgRef4.current,
        { right: smallScreen ? "-45%" : "20%", ease: "linear" },
        "<",
      );
  });

  const firstImageFile =
    data.instagramSection?.leftSideImages?.instagramLeftSidePhotos?.[0];
  const secondImageFile =
    data.instagramSection?.leftSideImages?.instagramLeftSidePhotos?.[1];
  const thirdImageFile =
    data.instagramSection?.rightSideImages?.instagramRightSidePhotos?.[0];
  const fourthImageFile =
    data.instagramSection?.rightSideImages?.instagramRightSidePhotos?.[1];

  const firstImageUrl = firstImageFile ? urlFor(firstImageFile)?.url() : null;
  const secondImageUrl = secondImageFile
    ? urlFor(secondImageFile)?.url()
    : null;
  const thirdImageUrl = thirdImageFile ? urlFor(thirdImageFile)?.url() : null;
  const fourthImageUrl = fourthImageFile
    ? urlFor(fourthImageFile)?.url()
    : null;

  const firstImageLQIP = firstImageFile?.asset?.metadata?.lqip;
  const secondImageLQIP = secondImageFile?.asset?.metadata?.lqip;
  const thirdImageLQIP = thirdImageFile?.asset?.metadata?.lqip;
  const fourthImageLQIP = fourthImageFile?.asset?.metadata?.lqip;

  return (
    <div
      ref={containerRef}
      className="relative mt-46 flex h-screen w-full items-center justify-center"
    >
      <div
        ref={imgRef1}
        className="absolute top-1/2 left-[35%] hidden h-[600px] w-[500px] -translate-x-1/2 -translate-y-1/2 -rotate-10 lg:h-[800px] 2xl:block"
      >
        <Image
          src={firstImageUrl || ""}
          alt="insta img"
          fill
          className="object-cover shadow-xl lg:rounded-lg"
          placeholder={firstImageLQIP ? "blur" : "empty"}
          blurDataURL={firstImageLQIP}
        />
      </div>
      <div
        ref={imgRef2}
        className="absolute top-1/2 left-[20%] h-[600px] w-[500px] shrink-0 -translate-x-1/2 -translate-y-1/2 -rotate-6 lg:h-[800px] xl:left-[40%]"
      >
        <Image
          src={secondImageUrl || ""}
          alt="insta img"
          fill
          className="rounded-lg object-cover shadow-xl"
          placeholder={secondImageLQIP ? "blur" : "empty"}
          blurDataURL={secondImageLQIP}
        />
      </div>
      <div
        ref={imgRef3}
        className="absolute top-1/2 right-[35%] hidden h-[600px] w-[500px] translate-x-1/2 -translate-y-1/2 rotate-10 lg:h-[800px] 2xl:block"
      >
        <Image
          src={thirdImageUrl || ""}
          alt="insta img"
          fill
          className="rounded-lg object-cover shadow-xl"
          placeholder={thirdImageLQIP ? "blur" : "empty"}
          blurDataURL={thirdImageLQIP}
        />
      </div>
      <div
        ref={imgRef4}
        className="absolute top-1/2 right-[20%] h-[600px] w-[500px] shrink-0 translate-x-1/2 -translate-y-1/2 rotate-6 lg:h-[800px] xl:right-[40%]"
      >
        <Image
          src={fourthImageUrl || ""}
          alt="insta img"
          fill
          className="rounded-lg object-cover shadow-xl"
          placeholder={fourthImageLQIP ? "blur" : "empty"}
          blurDataURL={fourthImageLQIP}
        />
      </div>
      <div className="flex flex-col items-center text-4xl font-bold sm:text-6xl md:gap-2 md:text-7xl">
        <h2 className="md:leading-14">Visit</h2>
        <Link
          href="https://www.instagram.com/shivambhutanii/"
          target="_blank"
          className="underline md:leading-14"
        >
          Instagram
        </Link>
        <p className="mt-6 max-w-[200px] text-center text-sm font-normal md:max-w-[250px] md:text-lg">
          I am most active on instagram. Follow me there to stay updated on my
          latest works.
        </p>
      </div>
    </div>
  );
};

export default Instagram;
