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

export const getFormattedLines = (
  text: string | undefined,
  numOfWords: number,
) => {
  if (!text) return [];

  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine: string[] = [];

  words.forEach((word) => {
    if (currentLine.length >= numOfWords) {
      lines.push(currentLine.join(" "));
      currentLine = [];
    }
    currentLine.push(word);
  });

  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  return lines;
};
