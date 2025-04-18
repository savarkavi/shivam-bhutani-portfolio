import React from "react";
import Bio from "./Bio";
import MyPhilosophy from "./MyPhilosophy";
import Instagram from "./Instagram";

const AboutContentWrapper = () => {
  return (
    <div className="h-full w-full px-10 py-16">
      <div className="section-title z-[10] mt-6 w-full border-t pt-10">
        <h1 className={`text-9xl uppercase`}>About</h1>
      </div>
      <Bio />
      <MyPhilosophy />
      <Instagram />
    </div>
  );
};

export default AboutContentWrapper;
