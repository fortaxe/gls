/**
 * Latest Launch section featuring project showcase with carousel
 * Displays recent projects with auto-sliding functionality
 */
import React from "react";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Villa Project",
    location: "Premium Residential Complex",
    description: "Experience luxury living at its finest",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Large 3 Bed Homes",
    location: "North India ideal for 60% living",
    description: "Spacious homes designed for modern families",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Commercial Complex",
    location: "International Architecture",
    description: "Designed by leading international architects",
  },
];

export function LatestLaunchSection() {
  return (
    <section className="py-[96px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="mb-8">
          <Carousel
            autoSlide={true}
            autoSlideInterval={4000}
            showArrows={true}
            showDots={true}
            className="h-96"
          >
            {projects.map((project) => (
              <div key={project.id} className="relative h-96 w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 rounded-lg" />
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg mb-1">{project.location}</p>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-2"
          >
            View more
          </Button>
        </div>
      </div>
    </section>
  );
}
