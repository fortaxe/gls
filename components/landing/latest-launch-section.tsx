"use client"

/**
 * Latest Launch section featuring project showcase with carousel
 * Displays recent projects with auto-sliding functionality
 */
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { latestLaunch } from "@/lib/data";
import LatestLaunchCard from "./latest-launch";
import { LaunchCarousel } from "../ui/launch-carousel";
import PrimaryButton from "../buttons/primary";

export function LatestLaunchSection() {
  return (
    <section className="py-[96px] ">
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
        <div className=" ">
        <div className="flex flex-row ">
          <LaunchCarousel
            autoSlide={true}
            autoSlideInterval={4000}
            showArrows={true}
            showDots={true}
            className="pb-16"
          >
            {latestLaunch.map((project, index) => (
              <LatestLaunchCard
                key={index}
                firstText={project.firstText}
                secondText={project.secondText}
                image={project.image}
                link={project.link}
              />
            ))}
            </LaunchCarousel>
        </div>
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
