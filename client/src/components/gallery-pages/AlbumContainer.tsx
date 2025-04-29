"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { urlFor } from "@/lib/utils";
import { useState } from "react";
import { LuGalleryHorizontal } from "react-icons/lu";
import { RiGalleryView2 } from "react-icons/ri";
import { GalleryPageData } from "@/sanity/customTypes";

const AlbumContainer = ({ data }: { album: string; data: GalleryPageData }) => {
  const [isAlbumMode, setIsAlbumMode] = useState(false);

  const albumImages = data?.album?.images?.map((item) => item);
  const albumImagesUrl = albumImages?.map((item) =>
    item ? urlFor(item)?.format("webp").quality(20).url() : null,
  );
  const albumImagesLQIP = data.album?.images?.map(
    (image) => image.asset?.metadata?.lqip,
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
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between gap-10 pt-10 pb-6">
      {!isAlbumMode ? (
        <Slider
          {...settings}
          className="h-[500px] w-full overflow-hidden lg:h-full"
        >
          {albumImages?.map((item, i) => (
            <div
              key={item._key}
              className="relative h-[500px] w-[500px] hover:cursor-grab lg:h-[700px]"
            >
              <Image
                src={albumImagesUrl?.[i] || ""}
                alt="portrait image"
                fill
                className="object-contain"
                placeholder={albumImagesLQIP?.[i] ? "blur" : "empty"}
                blurDataURL={albumImagesLQIP?.[i]}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="mt-10 flex w-full flex-wrap justify-center gap-16 px-10">
          {albumImages?.map((item, i) => (
            <div key={item._key} className="relative h-[500px] w-[500px]">
              <Image
                src={albumImagesUrl?.[i] || ""}
                alt="portrait image"
                fill
                className="h-[500px] w-auto object-contain"
                placeholder={albumImagesLQIP?.[i] ? "blur" : "empty"}
                blurDataURL={albumImagesLQIP?.[i]}
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
