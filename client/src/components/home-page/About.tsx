"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import LinkWrapper from "../LinkWrapper";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const media = useRef(null);
  const main = useRef<HTMLDivElement>(null);
  const paragraphLinesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(media.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "center top",
          scrub: 1,
        },
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
            trigger: linesContainer,
            start: "top 90%",
            end: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: main },
  );

  const lines = [
    "Doing a portrait session is not just about making photographs which",
    "visually looks pretty but its more about trying to capture that one",
    "moment where the person reveals himself to you and allows you",
    "to see him as he really is which could be for a very brief moment.",
  ];

  return (
    <div ref={main} className="flex min-h-screen flex-col gap-24 pt-48">
      <div className="flex flex-col items-start gap-16 px-8">
        <div
          ref={paragraphLinesRef}
          className="max-w-[800px] text-2xl font-bold"
        >
          {lines.map((line, index) => (
            <div key={index} className="overflow-hidden py-[1px]">
              <p className="line-span">{line}</p>
            </div>
          ))}
        </div>
        <LinkWrapper color="bg-black">
          <button className="cursor-pointer font-semibold">Learn More</button>
        </LinkWrapper>
      </div>
      <div
        ref={container}
        className="relative h-[120vh] w-full overflow-hidden"
      >
        <div className="relative -mt-[10%] h-[140vh] w-full">
          <Image
            ref={media}
            src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTaEIpEvDkEnDItl6LXxvw3KS5QPWmzypukG0b"
            alt="model"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default About;
