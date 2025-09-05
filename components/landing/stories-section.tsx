'use client'
/**
 * Stories from the Heart section with customer testimonials
 * Features video testimonials in a carousel format
 */
import React from 'react'
import { LaunchCarousel } from '../ui/launch-carousel'

import PrimaryButton from '../buttons/primary'

import StoryCard from './story-card'


const stories = [
  {
    id: 1,
    name: 'Subhranshi Agarwal',
    title: 'Happy Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    name: 'Khushi Joshi',
    title: 'Satisfied Customer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    title: 'Property Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://samplelib.com/mp4/sample-5s.mp4',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    title: 'First-Time Buyer',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 5,
    name: 'Amit Verma',
    title: 'Investor',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://filesamples.com/samples/video/mp4/sample_640x360.mp4',
  },
]

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
