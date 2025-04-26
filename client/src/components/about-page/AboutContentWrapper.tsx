import React from "react";
import Bio from "./Bio";
import MyPhilosophy from "./MyPhilosophy";
import Instagram from "./Instagram";
import { AboutPageData } from "@/sanity/customTypes";

const AboutContentWrapper = ({ data }: { data: AboutPageData }) => {
  return (
    <div className="h-full w-full overflow-x-hidden py-16 lg:px-8">
      <div className="section-title lg::px-0 z-[10] mt-6 w-full px-8 text-center xl:text-start">
        <div className="w-full border-t pt-10">
          <h1 className="text-8xl uppercase xl:text-9xl">
            {data.pageTitle || "About"}
          </h1>
        </div>
      </div>
      <Bio data={data} />
      <MyPhilosophy data={data} />
      <Instagram data={data} />
    </div>
  );
};

export default AboutContentWrapper;
