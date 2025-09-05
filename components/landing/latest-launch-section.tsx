"use client"

/**
 * Latest Launch section featuring project showcase with carousel
 * Displays recent projects with auto-sliding functionality
 */
import React from "react";
import { cn } from "@/lib/utils";
import { latestLaunch } from "@/lib/data";
import { UnifiedLaunchCarousel } from "../ui/unified-launch-carousel";
import PrimaryButton from "../buttons/primary";

export function LatestLaunchSection() {
  return (
    <section className="pt-[96px] pb-12">
      <div className=" ">
        <p
          className={cn(
            "flex text-[14px] items-center text-center font-medium text-[#1E1E1E]",
            "leading-[110%] tracking-[5%]",
            "before:flex-1 before:border-t before:border-gray-300 before:mr-2",
            "after:flex-1 after:border-t after:border-gray-300 after:ml-2"
          )}
        >
          FEATURED PROJECTS
        </p>

        {/* Section Header */}
        <div className="text-center py-6">
          <h2 className="text-[64px] font-medium text-[#1E1E1E] mb-4 leading-[110%] tracking-[-3%]">
            Latest <em className="font-italic font-[300]">Launch</em>
          </h2>
          <p className="text-[#1E1E1E]/60 max-w-2xl mx-auto">
            Realty fresh. thoughtfully crafted.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="">
          <UnifiedLaunchCarousel
            items={latestLaunch}
            autoSlide={true}
            autoSlideInterval={4000}
            className="pb-16"
          />
        </div>

        {/* View More Button */}
        <div className="text-center">
         <PrimaryButton 
         name="Explore Now" 
         onClick={() => {}} 
         variant="secondary" 
         />
        </div>
      </div>
    </section>
  );
}
