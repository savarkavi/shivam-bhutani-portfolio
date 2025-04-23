import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

export const urlFor = (src: SanityImageSource | undefined) => {
  const { projectId, dataset } = client.config();

  if (projectId && dataset && src) {
    const imageSrc = imageUrlBuilder({ projectId, dataset }).image(src);
    return imageSrc;
  }
};
