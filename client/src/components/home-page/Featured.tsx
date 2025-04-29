"use client";

import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import LinkWrapper from "../LinkWrapper";
import Link from "next/link";
import { urlFor } from "@/lib/utils";
import { HomePageData } from "@/sanity/customTypes";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Featured = ({ data }: { data: HomePageData }) => {
  const featuredImgUrls =
    data.featuredSection?.map((file) => urlFor(file)?.format("webp").url()) ||
    [];

  const featuredImgLQIP = data.featuredSection?.map(
    (file) => file.asset?.metadata?.lqip,
  );

  const featuredImgDimensions = data.featuredSection?.map(
    (file) => file.asset?.metadata?.dimensions?.aspectRatio,
  );

  const container = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(container.current, {
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
      backgroundColor: "black",
      color: "white",
    });

    gsap.from(".links-container", {
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: -100,
    });

    gsap.from(".section-title", {
      scrollTrigger: {
        trigger: ".text-container",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      yPercent: 100,
      opacity: 0,
    });

    gsap.from(".slide-text", {
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
      x: -100,
      opacity: 0,
    });

    const images = gsap.utils.toArray<HTMLDivElement>(".image-item-wrapper");

    if (imageContainer.current) {
      let totalWidth = 0;
      images.forEach((imgWrapper) => {
        totalWidth += imgWrapper.offsetWidth;
      });

      const scrollDistance = totalWidth - window.innerWidth;

      gsap.to(".image-item-wrapper", {
        scrollTrigger: {
          trigger: imageContainer.current,
          start: "top top",
          end: scrollDistance,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        x: -scrollDistance,
        ease: "linear",
      });
    }
  });

  return (
    <div ref={container} className="min-h-screen">
      <div className={`text-container flex flex-col items-center gap-2 pt-10`}>
        <div className="overflow-hidden">
          <h2 className="section-title text-2xl xl:text-4xl">Featured</h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="section-title text-8xl xl:text-9xl">Works</h2>
        </div>
      </div>
      <div
        ref={imageContainer}
        className="relative mt-12 flex h-screen items-center overflow-hidden"
      >
        <div className="links-container absolute top-4 left-0 z-[20] flex w-full items-center justify-between px-2 text-sm uppercase lg:px-8">
          <div className="flex w-full items-center justify-center gap-4 lg:justify-start xl:gap-6">
            <LinkWrapper color="bg-white">
              <Link href="/gallery/portraits">Potraits</Link>
            </LinkWrapper>
            <LinkWrapper color="bg-white">
              <Link href="/gallery/fashion">Fashion</Link>
            </LinkWrapper>
            <LinkWrapper color="bg-white">
              <Link href="/gallery/commercial">Commercial</Link>
            </LinkWrapper>
            <LinkWrapper color="bg-white">
              <Link href="/gallery/fine-art">Fine art</Link>
            </LinkWrapper>
          </div>
          <LinkWrapper color="bg-white">
            <Link href="/contact" className="hidden lg:block">
              Contact
            </Link>
          </LinkWrapper>
        </div>
        {data.featuredSection?.map((file, index) => (
          <div
            key={file._key}
            className="image-item-wrapper flex h-full w-full shrink-0 items-center justify-center p-4 xl:p-0"
          >
            <div
              className="relative mx-auto w-full shrink-0 xl:h-full xl:w-auto xl:max-w-[1200px]"
              style={{ aspectRatio: featuredImgDimensions?.[index] }}
            >
              <Image
                src={featuredImgUrls[index] || "/"}
                alt={file.alt || "shivam bhutani photography featured work"}
                fill
                className="h-auto w-full object-contain"
                placeholder={featuredImgLQIP?.[index] ? "blur" : "empty"}
                blurDataURL={featuredImgLQIP?.[index]}
              />
            </div>
          </div>
        ))}

        <p className="slide-text absolute top-1/2 hidden text-3xl uppercase lg:left-6 lg:block xl:left-10">
          Shivam Bhutani
        </p>

        <div className="slide-text absolute top-1/2 hidden uppercase lg:right-6 lg:block xl:right-10">
          <LinkWrapper color="bg-white">
            <Link href="/works">Explore More</Link>
          </LinkWrapper>
        </div>
      </div>
    </div>
  );
};

export default Featured;
