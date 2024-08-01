import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { FloatingNavDemo } from "./components/flotingbar";
import { HeroParallaxDemo } from "./components/herp-para";
import { InfiniteMovingCardsDemo } from "./components/footer";
import { HeroScrollDemo } from "./components/dscroll";
import { SparklesPreview } from "./components/header";

export default function App() {
  return (
    <main>
      
      <FloatingNavDemo />
      <SparklesPreview/>
      <HeroScrollDemo />
      <HeroParallaxDemo />
      <InfiniteMovingCardsDemo />
    </main>
  );
}


