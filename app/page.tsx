/**
 * GLS Infra Homepage
 * Main landing page featuring all company sections and project showcases
 */
import { HeroSection } from "@/components/landing/hero-section";

import { AboutSection } from "@/components/landing/about-section";
import { BoardDirectorsSection } from "@/components/landing/board-directors-section";

import { SpotlightSection } from "@/components/landing/spotlight-section";
import PropertyCarousel from "@/components/landing/property-coursel";
import VideoReviewCoursel from "@/components/landing/video-review";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        {/* <LatestLaunchSection /> */}
        <PropertyCarousel />
        <AboutSection />
        <BoardDirectorsSection />
        <VideoReviewCoursel />
        <SpotlightSection />
      </main>
    </div>
  );
}
