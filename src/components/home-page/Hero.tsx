"use client";

import { lavishlyYours, stardom } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current || !imageRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();

      const containerCenterX = containerRect.left + containerRect.width / 2;
      const textCenterX = textRect.left + textRect.width / 2;
      const imageCenterX = imageRect.left + imageRect.width / 2;

      const textMoveX = containerCenterX - textCenterX;
      const imageMoveX = containerCenterX - imageCenterX;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 64",
          end: "+=500",
          scrub: true,
          pin: containerRef.current,
        },
      });

      tl.to(".fashion-text", {
        opacity: 0,
        duration: 0.1,
      })
        .to(
          textRef.current,
          {
            x: textMoveX,
            gap: 250,
            ease: "none",
          },
          "<"
        )
        .to(
          imageRef.current,
          {
            x: imageMoveX,
            ease: "none",
          },
          "<"
        )
        .set(".photography-text", { color: "#FFBF00" });
    },

    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="hero-container w-full h-[calc(100vh-80px)] flex justify-center items-center overflow-hidden"
    >
      <div
        ref={contentRef}
        className="flex gap-24 items-center justify-center relative"
      >
        <h1 ref={textRef} className="flex flex-col gap-16 items-center z-[10]">
          <span className={`${lavishlyYours.className} text-9xl leading-tight`}>
            Shivam Bhutani
          </span>
          <span
            className={`fashion-text fade-text ${stardom.className} text-4xl uppercase absolute top-1/2`}
          >
            Fashion and Potrait
          </span>
          <span className={`photography-text ${stardom.className} text-9xl`}>
            Photography
          </span>
        </h1>
        <div ref={imageRef} className="w-[350px] h-[450px] relative border">
          <Image
            src="/shivam-potrait.JPG"
            alt="Shivam potrait"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
