/**
 * GLS Infra Homepage
 * Main landing page featuring all company sections and project showcases
 */
import { HeroSection } from "@/components/landing/hero-section";
import { LatestLaunchSection } from "@/components/landing/latest-launch-section";
import { AboutSection } from "@/components/landing/about-section";
import { BoardDirectorsSection } from "@/components/landing/board-directors-section";
import { StoriesSection } from "@/components/landing/stories-section";
import { SpotlightSection } from "@/components/landing/spotlight-section";
import PropertyCarousel from "@/components/landing/property-coursel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        {/* <LatestLaunchSection /> */}
        <PropertyCarousel />
        <AboutSection />
        <BoardDirectorsSection />
        <StoriesSection />
        <SpotlightSection />
      </main>
    </div>
  );
}
