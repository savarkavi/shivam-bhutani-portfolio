"use client";

import { stardom } from "@/fonts/fonts";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import LinkWrapper from "../LinkWrapper";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Featured = () => {
  const featuredImages = [
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTPxezkwbrwAU5lKgR8P3bVkLJy4QBZIv96HhG",
      alt: "Featured work 1",
      color: "bg-white",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTICnPwuASRfBah873y0IlMgeKxwLC6NPkEObo",
      alt: "Featured work 2",
      color: "bg-[#eddec1]",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTRDpESFzxgjWHwbN1oSJmipUCzeDFZTrK3E9h",
      alt: "Featured work 3",
      color: "bg-[#f1f1f1]",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTiHP93jy0mCeHfS5RkUJMloYKwnpAOjItibdP",
      alt: "Featured work 4",
      color: "bg-[#fdf6f0]",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTkNAcyiBvzilW7V5Hup3rPX1qe62QngZT0U9d",
      alt: "Featured work 5",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTwdODsxIDSX6IfgHFiWBNuLP4EyUjvc53ARJZ",
      alt: "Featured work 6",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyT0upPZLJhCByGPsTMWZXKRAiI3qk6No4VcY1w",
      alt: "Featured work 7",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTNTYJYFU2t23iM9pNjdQ0IyZnFPVuloGfqSmT",
      alt: "Featured work 8",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTTv3A8zUcxg7Xn9G5Y6jQLwRsDJzlf02ZHSPu",
      alt: "Featured work 9",
    },
  ];

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
      <div
        className={`text-container flex flex-col items-center gap-2 ${stardom.className} pt-10`}
      >
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
              <Link href="/potraits">Potraits</Link>
            </LinkWrapper>
            <LinkWrapper color="bg-white">
              <Link href="/fashion">Fashion</Link>
            </LinkWrapper>
            <LinkWrapper color="bg-white">
              <Link href="/personal">Personal</Link>
            </LinkWrapper>
            <LinkWrapper color="bg-white">
              <Link href="/commercial">Commercial</Link>
            </LinkWrapper>
          </div>
          <LinkWrapper color="bg-white">
            <Link href="/contact" className="hidden lg:block">
              Contact
            </Link>
          </LinkWrapper>
        </div>
        {featuredImages.map((image, index) => (
          <div
            key={index}
            className="image-item-wrapper flex h-full w-full shrink-0 items-center justify-center p-4 xl:p-0"
          >
            <div className="relative mx-auto h-full w-full shrink-0 xl:max-w-[1200px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        ))}

        <p className="slide-text absolute top-1/2 hidden text-3xl uppercase lg:left-6 lg:block xl:left-10">
          Shivam Bhutani
        </p>

        <div className="slide-text absolute top-1/2 hidden uppercase lg:right-6 lg:block xl:right-10">
          <LinkWrapper color="bg-white">
            <Link href="/work">Explore More</Link>
          </LinkWrapper>
        </div>
      </div>
    </div>
  );
};

export default Featured;
