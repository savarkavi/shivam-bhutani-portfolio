"use client";

import { stardom } from "@/fonts/fonts";
import Image from "next/image";

// import featuredImg1 from "@/assets/featured-img-1.jpg";
// import featuredImg2 from "@/assets/featured-img-2.jpg";
// import featuredImg3 from "@/assets/featured-img-3.jpg";
// import featuredImg4 from "@/assets/featured-img-4.jpg";
// import featuredImg5 from "@/assets/featured-img-5.jpg";
// import featuredImg6 from "@/assets/featured-img-6.jpg";
// import featuredImg7 from "@/assets/featured-img-7.jpg";
// import featuredImg8 from "@/assets/featured-img-8.jpg";
// import featuredImg9 from "@/assets/featured-img-9.jpg";
// import featuredImg10 from "@/assets/featured-img-10.jpg";
// import featuredImg11 from "@/assets/featured-img-11.jpg";
// import featuredImg12 from "@/assets/featured-img-12.jpg";
// import featuredImg13 from "@/assets/featured-img-13.jpg";
// import featuredImg14 from "@/assets/featured-img-14.jpg";
// import featuredImg15 from "@/assets/featured-img-15.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Featured = () => {
  const featuredImages = [
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTPxezkwbrwAU5lKgR8P3bVkLJy4QBZIv96HhG",
      alt: "Featured work 1",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTICnPwuASRfBah873y0IlMgeKxwLC6NPkEObo",
      alt: "Featured work 2",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTRDpESFzxgjWHwbN1oSJmipUCzeDFZTrK3E9h",
      alt: "Featured work 3",
    },
    {
      src: "https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTiHP93jy0mCeHfS5RkUJMloYKwnpAOjItibdP",
      alt: "Featured work 4",
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

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        toggleActions: "play none none reverse",
      },
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
  });

  return (
    <div ref={container} className="min-h-screen">
      <div
        className={`text-container flex flex-col items-center gap-2 ${stardom.className} pt-32`}
      >
        <div className="overflow-hidden">
          <h2 className="text-4xl section-title">Featured</h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="text-9xl section-title">Works</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mt-12">
        {featuredImages.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-contain w-full h-auto"
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
