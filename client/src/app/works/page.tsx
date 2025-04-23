import WorksContentWrapper from "@/components/works-page/WorksContentWrapper";
import { client } from "@/sanity/client";
import { WorksPage } from "@/sanity/types";

const WORKS_QUERY = `*[_type == "worksPage"][0]`;

export default async function Page() {
  const data: WorksPage = await client.fetch(WORKS_QUERY);

  return (
    <div className="min-h-screen">
      <WorksContentWrapper data={data} />
    </div>
  );
}
