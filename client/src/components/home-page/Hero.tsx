"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { boska } from "@/fonts/fonts";
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const paragraphLinesRef = useRef<HTMLDivElement>(null);

  const smallScreen = useMediaQuery("(max-width: 1280px)");

  useGSAP(() => {
    if (!imageRef.current || !heroRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: () => (smallScreen ? "top 100" : "top 160"),
          end: "bottom 50%",
          scrub: true,
          pin: heroRef.current,
        },
      })
      .to(imageContainerRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: "none",
      })
      .to(
        imageRef.current,
        {
          scale: 1.1,
        },
        "<",
      );

    gsap.to(".header", {
      scrollTrigger: {
        trigger: heroContentWrapperRef.current,
        start: "bottom center",
        toggleActions: "play none none reverse",
      },
      yPercent: -100,
      ease: "linear",
    });

    const linesContainer = paragraphLinesRef.current;
    if (linesContainer) {
      const lineSpans = gsap.utils.toArray(
        linesContainer.querySelectorAll(".line-span"),
      );

      gsap.from(lineSpans, {
        yPercent: 100,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: heroContentWrapperRef.current,
          start: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  const lines = [
    "I am a portrait, fashion and street photographer based in India, Delhi.",
    "For me photography is about capturing beauty in ordinary moments. I want to",
    "communicate stories, ideas, truth about life through my pictures. I absolutely ",
    "love what I am doing and cant think of anything other than making pictures.",
  ];

  return (
    <div
      ref={heroRef}
      className="h-[calc(100vh-100px)] w-full xl:h-[calc(100vh-160px)]"
    >
      <div
        ref={heroContentWrapperRef}
        className="relative flex h-full w-full flex-col items-center justify-between gap-2 overflow-hidden p-2 lg:p-8"
      >
        <h1
          className={`${boska.className} text-center text-8xl font-bold uppercase xl:hidden`}
        >
          Shivam Bhutani
        </h1>

        <div
          ref={paragraphLinesRef}
          className="absolute top-[50%] left-1/2 mx-auto w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 px-8 text-center lg:px-0 xl:top-[45%] xl:text-2xl"
        >
          {lines.map((line, index) => (
            <div key={index} className="overflow-hidden py-[1px]">
              <p className="line-span">{line}</p>
            </div>
          ))}
        </div>
        <div
          ref={imageContainerRef}
          className="relative h-full w-full rounded-xl"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            ref={imageRef}
            src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTGnH0n7aLYlxvh3w6yZGA81TSoOgq9feBskP4"
            alt="shivam potrait"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
