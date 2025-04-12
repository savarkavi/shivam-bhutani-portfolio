"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactNode, useRef } from "react";

const LinkWrapper = ({
  children,
  containerClassName,
  color,
}: {
  children: ReactNode;
  containerClassName?: string;
  color: string;
}) => {
  const underlineTl = useRef<gsap.core.Timeline>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    underlineTl.current = gsap
      .timeline({ paused: true })
      .to(underlineRef.current, { width: "100%" });
  });

  const handleHover = () => {
    underlineTl.current?.play();
  };

  const handleLeave = () => {
    underlineTl.current?.reverse();
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`flex flex-col w-fit ${containerClassName}`}
    >
      {children}
      <div ref={underlineRef} className={`w-0 h-[1px] ${color}`} />
    </div>
  );
};

export default LinkWrapper;
