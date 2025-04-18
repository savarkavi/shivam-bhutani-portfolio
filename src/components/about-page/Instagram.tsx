"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Instagram = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef1 = useRef<HTMLDivElement | null>(null);
  const imgRef2 = useRef<HTMLDivElement | null>(null);
  const imgRef3 = useRef<HTMLDivElement | null>(null);
  const imgRef4 = useRef<HTMLDivElement | null>(null);

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
      .to(imgRef2.current, { left: "25%", ease: "linear" }, "<")
      .to(imgRef3.current, { right: "20%", ease: "linear" }, "<")
      .to(imgRef4.current, { right: "25%", ease: "linear" }, "<");
  });

  return (
    <div
      ref={containerRef}
      className="relative mt-46 flex h-screen w-full items-center justify-center"
    >
      <div
        ref={imgRef1}
        className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 -rotate-10"
      >
        <Image
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyT8o1q66zP9T6oNfXxMkbwrpaUqSRtP2mGIzDu"
          alt="insta img"
          width={500}
          height={500}
          className="h-[800px] rounded-lg object-cover shadow-xl"
        />
      </div>
      <div
        ref={imgRef2}
        className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-6"
      >
        <Image
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTXI0DTmdsEHf1pZIhqDagnOtuyScYWJ5RFK3d"
          alt="insta img"
          width={500}
          height={500}
          className="h-[800px] rounded-lg object-cover shadow-xl"
        />
      </div>
      <div
        ref={imgRef3}
        className="absolute top-1/2 right-[35%] translate-x-1/2 -translate-y-1/2 rotate-10"
      >
        <Image
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTkhHhwOBvzilW7V5Hup3rPX1qe62QngZT0U9d"
          alt="insta img"
          width={500}
          height={500}
          className="h-[800px] rounded-lg object-cover shadow-xl"
        />
      </div>
      <div
        ref={imgRef4}
        className="absolute top-1/2 right-[40%] translate-x-1/2 -translate-y-1/2 rotate-6"
      >
        <Image
          src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTVen1jXsYL3zKZRfdWpCc5wxoM4g6hkTGeFAP"
          alt="insta img"
          width={500}
          height={500}
          className="h-[800px] rounded-lg object-cover shadow-xl"
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-7xl font-bold">
        <h2 className="leading-14">Visit</h2>
        <h2 className="leading-14">Instagram</h2>
        <p className="mt-6 max-w-[250px] text-center text-lg font-normal">
          I am most active on instagram. Follow me there to stay updated on my
          latest works.
        </p>
      </div>
    </div>
  );
};

export default Instagram;
