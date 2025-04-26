import Featured from "@/components/home-page/Featured";
import Hero from "@/components/home-page/Hero";
import About from "@/components/home-page/About";
import IntroOverlay from "@/components/IntroOverlay";
import { HomePage } from "@/sanity/types";
import { client } from "@/sanity/client";

const HOME_QUERY = `*[_type == "homePage"][0]`;

export default async function Home() {
  const data: HomePage = await client.fetch(HOME_QUERY);

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
