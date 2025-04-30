"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCameraRetro } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".camera-icon", {
        y: 60,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center backdrop-blur-sm dark:bg-black/80"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="camera-icon">
        <FaCameraRetro className="text-5xl text-blue-600 md:text-6xl" />
      </div>
    </div>
  );
}
