/**
 * Stories from the Heart section with customer testimonials
 * Features video testimonials in a carousel format
 */
import React from 'react'
import { Carousel } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Play } from 'lucide-react'

const stories = [
  {
    id: 1,
    name: 'Subhranshi Agarwal',
    title: 'Happy Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    quote: 'GLS has transformed our dream into reality with exceptional quality and service.'
  },
  {
    id: 2,
    name: 'Khushi Joshi',
    title: 'Satisfied Customer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    quote: 'The attention to detail and commitment to excellence is truly remarkable.'
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    title: 'Property Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    videoThumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    quote: 'A seamless experience from start to finish. Highly recommended!'
  }
]

export function StoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stories from the <em className="text-orange-500 not-italic">Heart</em>
          </h2>
        </div>

        {/* Stories Carousel */}
        <Carousel 
          autoSlide={true} 
          autoSlideInterval={6000}
          showArrows={true}
          showDots={true}
          className="h-80"
        >
          {stories.map((story) => (
            <div key={story.id} className="px-4">
              <Card className="overflow-hidden h-80">
                <CardContent className="p-0 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Video Thumbnail */}
                    <div className="relative bg-gray-900">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${story.videoThumbnail})` }}
                      >
                        <div className="absolute inset-0 bg-black/40" />
                      </div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Play className="w-6 h-6 text-white ml-1" fill="white" />
                        </button>
                      </div>
                      
                      {/* Customer Info Overlay */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold text-lg">{story.name}</h3>
                        <p className="text-sm opacity-90">{story.title}</p>
                      </div>
                    </div>

                    {/* Customer Profile */}
                    <div className="p-8 flex flex-col justify-center bg-gray-50">
                      <div className="flex items-center mb-6">
                        <div 
                          className="w-16 h-16 rounded-full bg-cover bg-center mr-4"
                          style={{ backgroundImage: `url(${story.image})` }}
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{story.name}</h4>
                          <p className="text-sm text-gray-600">{story.title}</p>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic leading-relaxed">
                        "{story.quote}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
