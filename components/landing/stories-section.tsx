'use client'
/**
 * Stories from the Heart section with customer testimonials
 * Features video testimonials in a carousel format
 */
import React from 'react'
import { LaunchCarousel } from '../ui/launch-carousel'

import PrimaryButton from '../buttons/primary'

import StoryCard from './story-card'
import { stories } from "@/lib/data";



export function StoriesSection() {
  return (
    <section className="py-[50px] bg-[#98A2A426]">
      <div className=" ">
      
        {/* Section Header */}
        <div className="text-center py-6">
          <h2 className="text-[64px] font-medium text-[#1E1E1E] mb-12 leading-[110%] tracking-[-3%]">
          Stories from the  <em className="font-italic font-[300]">Heart</em>
          </h2>
        
        </div>

        {/* Projects Carousel */}
        <div className=" ">
        <div className="flex flex-row  ">
          <LaunchCarousel
            autoSlide={true}
            autoSlideInterval={4000}
            showArrows={true}
            showDots={true}
            className="pb-16"
          >
            {stories.map((project, index) => (
              <StoryCard
                key={index}
                name={project.name}
                title={project.title}
                
                image={project.image}
                videoUrl={project.videoUrl}
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
  )
}
