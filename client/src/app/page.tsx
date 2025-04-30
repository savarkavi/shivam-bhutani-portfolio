import Featured from "@/components/home-page/Featured";
import Hero from "@/components/home-page/Hero";
import About from "@/components/home-page/About";
import IntroOverlay from "@/components/IntroOverlay";
import { client } from "@/sanity/client";
import { HomePageData } from "@/sanity/customTypes";

const HOME_QUERY = `*[_type == "homePage"][0] {
  ...,
  heroSection {
    heroImage {
      asset-> {
        ...,
        metadata {
          lqip,
          dimensions
        }
      }
    },
    heroText  
  },
  featuredSection {
    ...,
    featuredImages[] {
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
}`;

export default async function Home() {
  const data: HomePageData = await client.fetch(HOME_QUERY);

  return (
    <IntroOverlay>
      <div>
        <Hero data={data} />
        <Featured data={data} />
        <About data={data} />
      </div>
    </IntroOverlay>
  );
}
