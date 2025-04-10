import Featured from "@/components/home-page/Featured";
import Hero from "@/components/home-page/Hero";
import Works from "@/components/home-page/Works";
import IntroOverlay from "@/components/IntroOverlay";

export default function Home() {
  return (
    <IntroOverlay>
      <div>
        <Hero />
        <Works />
        <Featured />
      </div>
    </IntroOverlay>
  );
}
