import Featured from "@/components/home-page/Featured";
import Hero from "@/components/home-page/Hero";
import About from "@/components/home-page/About";
import IntroOverlay from "@/components/IntroOverlay";

export default function Home() {
  return (
    <IntroOverlay>
      <div>
        <Hero />
        <Featured />
        <About />
      </div>
    </IntroOverlay>
  );
}
