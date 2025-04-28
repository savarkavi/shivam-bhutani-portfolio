import AlbumContainer from "@/components/gallery-pages/AlbumContainer";
import { client } from "@/sanity/client";
import { GalleryPage } from "@/sanity/types";

const GALLERY_QUERY = `*[_type == "galleryPage"][0]`;

export default async function Page({
  params,
}: {
  params: Promise<{ album: string }>;
}) {
  const { album } = await params;

  const data: GalleryPage = await client.fetch(GALLERY_QUERY);

  return (
    <div className="h-fit">
      <AlbumContainer album={album} data={data} />
    </div>
  );
}
