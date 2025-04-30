"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { boska } from "@/fonts/fonts";

gsap.registerPlugin(useGSAP);

const IntroOverlay = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const timerText = ".timer-text";
      const overlayText = ".overlay-text";
      const upperRevealer = ".upper-revealer";
      const lowerRevealer = ".lower-revealer";
      const overlay = ".overlay";

      gsap.set(overlay, { opacity: 1 });
      gsap.set(timerText, { opacity: 0, yPercent: -50 });
      gsap.set(overlayText, { opacity: 0, yPercent: 0 });
      gsap.set(upperRevealer, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)",
      });
      gsap.set(lowerRevealer, {
        clipPath: "polygon(0% 49%, 100% 49%, 100% 100%, 0% 100%)",
      });

      tl.to(timerText, {
        opacity: 1,
        duration: 0.5,
        ease: "none",
      });

      const counter = { value: 0 };
      tl.to(
        counter,
        {
          value: 99,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            const timerElement = containerRef.current?.querySelector(timerText);
            if (timerElement) {
              timerElement.textContent = Math.floor(counter.value)
                .toString()
                .padStart(2, "0");
            }
          },

          onComplete: () => {
            const timerElement = containerRef.current?.querySelector(timerText);
            if (timerElement) {
              timerElement.textContent = "99";
            }
          },
        },
        "+=0.1",
      );

      tl.to(timerText, {
        opacity: 0,
        duration: 0.3,
        ease: "none",
      });

      tl.to(overlayText, {
        translateY: "-50%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      tl.to(
        upperRevealer,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "power3.out",
        },
        "+=0.8",
      ).to(
        lowerRevealer,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power3.out",
          onComplete: () => setShowContent(true),
        },
        "<",
      );

      tl.to(overlayText, { opacity: 0, duration: 0.3 }, "<");
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      {!showContent && (
        <div className="overlay fixed top-0 left-0 z-50 h-screen w-full overflow-hidden">
          <div className="upper-revealer absolute top-0 left-0 h-full w-full bg-stone-900"></div>
          <div className="lower-revealer absolute bottom-0 left-0 h-full w-full bg-stone-900"></div>
          <div
            className={`timer-text absolute top-1/2 left-1/2 -translate-x-1/2 text-9xl text-white uppercase opacity-0 ${boska.className}`}
            style={{ willChange: "opacity, transform" }}
          >
            00
          </div>

          <div
            className={`overlay-text absolute top-1/2 left-1/2 -translate-x-1/2 text-center text-5xl text-white uppercase opacity-0 lg:text-7xl xl:text-9xl ${boska.className}`}
            style={{ willChange: "opacity, transform" }}
          >
            <h2>Shivam Bhutani</h2>
          </div>
        </div>
      )}

      <div>{children}</div>
    </div>
  );
};

export default IntroOverlay;
