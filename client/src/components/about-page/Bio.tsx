import { urlFor } from "@/lib/utils";
import { AboutPageData } from "@/sanity/customTypes";
import Image from "next/image";

const Bio = ({ data }: { data: AboutPageData }) => {
  const bioImageUrl = data.biography?.bioImage
    ? urlFor(data.biography.bioImage)?.url()
    : null;

  const bioImageLQIP = data.biography?.bioImage?.asset?.metadata?.lqip;

  return (
    <div className="mt-16 flex h-full flex-col gap-12 lg:flex-row 2xl:mt-32 2xl:gap-24">
      <div className="relative h-[400px] w-full lg:h-[500px] lg:max-w-[60%] lg:rounded-md 2xl:h-[800px]">
        <Image
          src={bioImageUrl || "/shivam-portrait.webp"}
          alt={
            data.biography?.bioImage?.alt ||
            "shivam bhutani photgrapher portrait"
          }
          fill
          className="h-auto object-cover lg:rounded-md"
          placeholder={bioImageLQIP ? "blur" : "empty"}
          blurDataURL={bioImageLQIP}
        />
      </div>
      <div className="flex flex-col items-center gap-16 px-4 lg:px-0">
        <h2 className="w-fit border-b border-gray-400 pb-6 text-center text-lg uppercase lg:text-start">
          Biography
        </h2>
        <p
          className="max-w-[450px] text-justify text-2xl xl:text-3xl 2xl:text-4xl"
          style={{ wordSpacing: "5px" }}
        >
          {data.biography?.biographyContent ||
            "I am a portrait, fashion and street photographer based in India, Delhi. I picked up a camera while I was going through a negative phase in my life. For me photography is about capturing beauty in ordinary moments. I want to communicate stories, ideas, truth about life through my pictures. I absolutely love what I am doing and can not think of anything other than making pictures."}
        </p>
      </div>
    </div>
  );
};

export default Bio;
