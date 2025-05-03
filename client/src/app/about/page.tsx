import AboutContentWrapper from "@/components/about-page/AboutContentWrapper";
import { client } from "@/sanity/client";
import { AboutPageData } from "@/sanity/customTypes";

const ABOUT_QUERY = `*[_type == "aboutPage"][0] {
  ...,
  biography {
    ...,
    bioImage {
      ...,
      asset-> {
        ...,
        metadata {
          lqip,
          dimensions
        }
      }
    }
  },
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
  },
  instagramSection {
    leftSideImages {
      instagramLeftSidePhotos[] {
        ...,
        asset-> {
          ...,
          metadata {
            lqip,
            dimensions
          }
        }
      }
    },
    rightSideImages {
      instagramRightSidePhotos[] {
        ...,
        asset-> {
          ...,
          metadata {
            lqip,
            dimensions
          }
        }
      }
    },
  }
}`;

export const revalidate = 10;

export async function generateMetadata() {
  return {
    title: "About",
    description: "About and Bio of Shivam Bhutani Photographer",
  };
}

export default async function Page() {
  const data: AboutPageData = await client.fetch(ABOUT_QUERY);

  return (
    <div>
      <AboutContentWrapper data={data} />
    </div>
  );
}
