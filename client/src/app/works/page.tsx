import WorksContentWrapper from "@/components/works-page/WorksContentWrapper";
import { client } from "@/sanity/client";
import { TotalImagesData, WorksPageData } from "@/sanity/customTypes";

const WORKS_QUERY = `*[_type == "worksPage"][0] {
  ...,
  workCategories[] {
    ...,
    coverImage {
      ...,
      asset-> {
        ...,
        metadata {
          lqip,
          dimensions
        }
      }
    }
  }
}`;

const TOTAL_IMAGES_QUERY = `*[_type == "galleryPage"][0] {
  "albumsWithCounts": albums[] {
    _key,
    albumName,
    "imageCount": count(images) // Count the items in the 'images' array for this album
  }
}`;

export const revalidate = 10;

export async function generateMetadata() {
  return {
    title: "Works",
    description: "Portraits and fashion works by Shivam Bhutani Photographer",
  };
}

export default async function Page() {
  const data: WorksPageData = await client.fetch(WORKS_QUERY);

  const totalImagesData: TotalImagesData =
    await client.fetch(TOTAL_IMAGES_QUERY);

  return (
    <div className="min-h-screen">
      <WorksContentWrapper data={data} totalImagesData={totalImagesData} />
    </div>
  );
}
