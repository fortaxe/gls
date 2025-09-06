/**
 * In the Spotlight section featuring news and blog articles
 * Displays featured content in blog-style cards
 */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const spotlightItems = [
  {
    id: 1,
    title: "Why Sohna is the Next Big Thing in NCR Real Estate",
    image: "/blogs/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
  },
  {
    id: 2,
    title: "Why Sohna is the Next Big Thing in NCR Real Estate",
    image: "/blogs/1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.",
  },
];

export function SpotlightSection() {
  return (
    <section className="py-[94px] ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className={cn(
              "flex text-[14px] items-center text-center font-medium text-[#1E1E1E] mb-6",
              "leading-[110%] tracking-[5%]",
              "before:flex-1 before:border-t before:border-gray-300 before:mr-2",
              "after:flex-1 after:border-t after:border-gray-300 after:ml-2"
            )}
          >
            THE GLS JOURNAL{" "}
          </p>
           
          <h2 className="text-[64px] font-medium text-[#1E1E1E] mb-4 leading-[110%] tracking-[-3%]">
          In the <em className="font-italic font-[300] ">Spotlight</em>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {spotlightItems.map((item) => (
            <div className="flex flex-col gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-[16px] "
              />
              <div className="mt-6 flex flex-col gap-3">
                <p className="text-[32px] leading-[110%] font-medium text-[#1E1E1E]">
                  {item.title}
                </p>
                <p className="text-[16px] leading-[150%] font-normal text-[#1E1E1E]/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
