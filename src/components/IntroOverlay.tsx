"use client";

import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const IntroOverlay = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(".overlay", { opacity: 1 });

    tl.to(".overlay-text", {
      translateY: "-50%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
      .to(".upper-revealer", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.out",
        delay: 1,
      })
      .to(
        ".lower-revealer",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power3.out",
          onComplete: () => setShowContent(true),
        },
        "<"
      )
      .set(".overlay-text", { opacity: 0 }, "<");
  });

  return (
    <div>
      {!showContent && (
        <div className="overlay fixed top-0 left-0 w-full h-screen z-50">
          <div
            className="upper-revealer bg-stone-900 w-full h-full absolute top-0 left-0"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)" }}
          ></div>
          <div
            className="lower-revealer bg-stone-900 w-full h-full absolute bottom-0 left-0"
            style={{
              clipPath: "polygon(0% 49%, 100% 49%, 100% 100%, 0% 100%)",
            }}
          ></div>
          <div
            className={`text-[8.5rem] absolute top-1/2 left-1/2 -translate-x-1/2 overlay-text opacity-0 text-white`}
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
