import AboutContentWrapper from "@/components/about-page/AboutContentWrapper";
import { client } from "@/sanity/client";
import { AboutPageData } from "@/sanity/customTypes";

const ABOUT_QUERY = `*[_type == "aboutPage"][0] {
  _id,
  pageTitle,
  biography,
  instagramSection,
  myPhilosophySection {
    myPhilosophyContent,
    aboutVideos[] {
      asset-> {
        _id,
        url,
        originalFilename,
        mimeType
      }
    }
  }
}`;

export default async function Page() {
  const data: AboutPageData = await client.fetch(ABOUT_QUERY);

  return (
    <div>
      <AboutContentWrapper data={data} />
    </div>
  );
}
