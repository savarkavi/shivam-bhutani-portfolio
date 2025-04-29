import WorksContentWrapper from "@/components/works-page/WorksContentWrapper";
import { client } from "@/sanity/client";
import { WorksPageData } from "@/sanity/customTypes";

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

export default async function Page() {
  const data: WorksPageData = await client.fetch(WORKS_QUERY);

  return (
    <div className="min-h-screen">
      <WorksContentWrapper data={data} />
    </div>
  );
}
