/**
 * Board of Directors section showcasing leadership team
 * Features profile cards with photos and descriptions
 */
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const directors = [
  {
    id: 1,
    name: 'Mr. Surinder Singh',
    position: 'DIRECTOR | GLS INFRA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'A seasoned entrepreneur and engineering graduate from DY Patil College of Engineering, Pune, Mr. Goyal brings a legacy of operational acumen. Having led multiple ventures in the manufacturing sector, his expertise now powers GLS Infra’s execution capabilities and project leadership.'
  },
  {
    id: 2,
    name: 'Board Member',
    position: 'DIRECTOR  |   GLS INFRA',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'A seasoned entrepreneur and engineering graduate from DY Patil College of Engineering, Pune, Mr. Goyal brings a legacy of operational acumen. Having led multiple ventures in the manufacturing sector, his expertise now powers GLS Infra’s execution capabilities and project leadership.',
    isHighlighted: true
  },
  {
    id: 3,
    name: 'Mr. Sandeep Goyal',
    position: 'DIRECTOR  |   GLS INFRA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'A seasoned entrepreneur and engineering graduate from DY Patil College of Engineering, Pune, Mr. Goyal brings a legacy of operational acumen. Having led multiple ventures in the manufacturing sector, his expertise now powers GLS Infra’s execution capabilities and project leadership.'
  }
]

export function BoardDirectorsSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
        {/* Section Header */}
        <div className="text-center mb-12">
        <p
          className={cn(
            "flex text-[14px] items-center text-center font-medium text-[#1E1E1E]",
            "leading-[110%] tracking-[5%]",
            "before:flex-1 before:border-t before:border-gray-300 before:mr-2",
            "after:flex-1 after:border-t after:border-gray-300 after:ml-2"
          )}
        >
          MEET THE
        </p>
          <h2 className="text-[64px] font-medium text-[#1E1E1E]  pt-6 leading-[110%] tracking-[-3%]">
            Board of <em className=" font-[300] font-light">Directors</em>
          </h2>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 rounded-[16px]">
          {directors.map((director) => (
            <div className="relative rounded-[16px] overflow-hidden">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover rounded-[16px]"
              />
              {/* Overlay with same border radius, using a gradient for better look */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full rounded-[16px] bg-black/50"></div>
              </div>
              <div className="absolute bottom-12 left-12  flex flex-col gap-4 z-10">
                <p className="text-[32px] font-medium text-white leading-[110%] tracking-[-3%]">
                  {director.name}
                </p>
                <p className="text-[16px] font-medium text-white">
                  {director.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
