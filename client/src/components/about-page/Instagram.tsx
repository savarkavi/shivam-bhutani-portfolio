"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Instagram = () => {
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
        { left: smallScreen ? "-35%" : "20%", ease: "linear" },
        "<",
      )
      .to(imgRef3.current, { right: "20%", ease: "linear" }, "<")
      .to(
        imgRef4.current,
        { right: smallScreen ? "-35%" : "20%", ease: "linear" },
        "<",
      );
  });

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
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyT8o1q66zP9T6oNfXxMkbwrpaUqSRtP2mGIzDu"
          alt="insta img"
          fill
          className="object-cover shadow-xl lg:rounded-lg"
        />
      </div>
      <div
        ref={imgRef2}
        className="absolute top-1/2 left-[20%] h-[600px] w-[500px] shrink-0 -translate-x-1/2 -translate-y-1/2 -rotate-6 lg:h-[800px] xl:left-[40%]"
      >
        <Image
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTXI0DTmdsEHf1pZIhqDagnOtuyScYWJ5RFK3d"
          alt="insta img"
          fill
          className="rounded-lg object-cover shadow-xl"
        />
      </div>
      <div
        ref={imgRef3}
        className="absolute top-1/2 right-[35%] hidden h-[600px] w-[500px] translate-x-1/2 -translate-y-1/2 rotate-10 lg:h-[800px] 2xl:block"
      >
        <Image
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTVen1jXsYL3zKZRfdWpCc5wxoM4g6hkTGeFAP"
          alt="insta img"
          fill
          className="rounded-lg object-cover shadow-xl"
        />
      </div>
      <div
        ref={imgRef4}
        className="absolute top-1/2 right-[20%] h-[600px] w-[500px] shrink-0 translate-x-1/2 -translate-y-1/2 rotate-6 lg:h-[800px] xl:right-[40%]"
      >
        <Image
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTkhHhwOBvzilW7V5Hup3rPX1qe62QngZT0U9d"
          alt="insta img"
          fill
          className="rounded-lg object-cover shadow-xl"
        />
      </div>
      <div className="flex flex-col items-center text-4xl font-bold sm:text-6xl md:gap-2 md:text-7xl">
        <h2 className="md:leading-14">Visit</h2>
        <h2 className="md:leading-14">Instagram</h2>
        <p className="mt-6 max-w-[200px] text-center text-sm font-normal md:max-w-[250px] md:text-lg">
          I am most active on instagram. Follow me there to stay updated on my
          latest works.
        </p>
      </div>
    </div>
  );
};

export default Instagram;
