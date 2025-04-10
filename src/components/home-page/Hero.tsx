"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current || !containerRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 160",
          end: "bottom 50%",
          scrub: true,
          pin: true,
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
        "<"
      );

    gsap.to(".header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 160",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
      yPercent: -100,
      ease: "linear",
    });
  });

  return (
    <div
      ref={containerRef}
      className="hero-container w-full h-[calc(100vh-132px)] flex justify-center items-center overflow-hidden p-8 relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[800px] text-center text-2xl">
        <p>
          I am a portrait, fashion and wedding photographer based in Delhi. For
          me photography is about capturing beauty in ordinary moments. I want
          to communicate stories, ideas, truth about life through my pictures. I
          absolutely love what I am doing and cant think of anything other than
          making pictures.
        </p>
      </div>
      <div
        ref={imageContainerRef}
        className="w-full h-full relative rounded-xl overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        <Image
          ref={imageRef}
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTGnH0n7aLYlxvh3w6yZGA81TSoOgq9feBskP4"
          alt="shivam potrait"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
