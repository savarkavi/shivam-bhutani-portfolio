"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { GalleryPage } from "@/sanity/types";
import { urlFor } from "@/lib/utils";
import { useState } from "react";
import { LuGalleryHorizontal } from "react-icons/lu";
import { RiGalleryView2 } from "react-icons/ri";

const AlbumContainer = ({
  album,
  data,
}: {
  album: string;
  data: GalleryPage;
}) => {
  const [isAlbumMode, setIsAlbumMode] = useState(false);

  const albumData = data.albums?.filter(
    (item) => item.slug?.current === album,
  )[0];

  const albumImages = albumData?.images?.map((item) => item);
  const albumImagesUrl = albumImages?.map((item) =>
    item ? urlFor(item)?.format("webp").quality(20).url() : null,
  );

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    easing: "linear",
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between gap-10 pt-10 pb-6">
      {!isAlbumMode ? (
        <Slider {...settings} className="w-full overflow-hidden">
          {albumImages?.map((item, i) => (
            <div key={item._key} className="h-[700px] p-1 hover:cursor-grab">
              <Image
                src={albumImagesUrl?.[i] || ""}
                alt="portrait image"
                width={1200}
                height={700}
                className="h-[700px] w-auto"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="mt-10 flex w-full flex-wrap gap-16 px-10">
          {albumImages?.map((item, i) => (
            <div key={item._key} className="h-500px] shadow-lg">
              <Image
                src={albumImagesUrl?.[i] || ""}
                alt="portrait image"
                width={1200}
                height={700}
                className="h-[500px] w-auto"
              />
            </div>
          ))}
        </div>
      )}
      <div className="sticky bottom-6 z-10 flex w-fit items-center gap-2 rounded-md border border-gray-400 p-1">
        <div
          className={`cursor-pointer rounded-sm p-2 hover:bg-gray-300 ${!isAlbumMode && "bg-gray-300"}`}
          onClick={() => setIsAlbumMode(false)}
        >
          <LuGalleryHorizontal />
        </div>
        <div
          className={`cursor-pointer rounded-sm p-2 hover:bg-gray-300 ${isAlbumMode && "bg-gray-300"}`}
          onClick={() => setIsAlbumMode(true)}
        >
          <RiGalleryView2 />
        </div>
      </div>
    </div>
  );
};

export default AlbumContainer;
