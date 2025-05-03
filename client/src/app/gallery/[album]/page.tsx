import AlbumContainer from "@/components/gallery-pages/AlbumContainer";
import { client } from "@/sanity/client";
import { GalleryPageData } from "@/sanity/customTypes";
import { notFound } from "next/navigation";

const GALLERY_QUERY = `
*[_type == "galleryPage"][0] {
  ...,
  "album": albums[slug.current == $album][0] {
    albumName,
    slug,
    images[] {
      ...,
      asset-> {
        ...,
        metadata {
          dimensions { width, height },
          lqip
        }
      }
    }
  }
}
`;

interface PageProps {
  params: Promise<{ album: string }>;
}

export const revalidate = 10;

export async function generateMetadata({ params }: PageProps) {
  const { album } = await params;

  return {
    title: album,
    description: `${album} photography album by Shivam Bhutani Photographer`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ album: string }>;
}) {
  const { album } = await params;

  const data: GalleryPageData = await client.fetch(GALLERY_QUERY, {
    album: album,
  });

  if (!data.album) return notFound();

  return (
    <div className="h-fit">
      <AlbumContainer album={album} data={data} />
    </div>
  );
}
