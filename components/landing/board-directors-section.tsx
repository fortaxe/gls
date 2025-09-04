/**
 * Board of Directors section showcasing leadership team
 * Features profile cards with photos and descriptions
 */
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const directors = [
  {
    id: 1,
    name: 'Mr. Surinder Singh',
    position: 'Chairman & MD',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Visionary leader with extensive experience in real estate development.'
  },
  {
    id: 2,
    name: 'Board Member',
    position: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'A passionate entrepreneur and renowned business leader with expertise in transforming innovative business models and creating sustainable value for all stakeholders.',
    isHighlighted: true
  },
  {
    id: 3,
    name: 'Mr. Sandeep Goyal',
    position: 'Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Strategic advisor with deep expertise in business development and operations.'
  }
]

export function BoardDirectorsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            MEET THE
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Board of <em className="text-orange-500 not-italic">Directors</em>
          </h2>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directors.map((director) => (
            <Card key={director.id} className={`overflow-hidden ${director.isHighlighted ? 'bg-black text-white' : 'bg-white'}`}>
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="aspect-square overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${director.image})` }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {director.isHighlighted && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {director.description}
                      </p>
                    </div>
                  )}
                  
                  <h3 className={`text-xl font-bold mb-2 ${director.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                    {director.name}
                  </h3>
                  <p className={`text-sm ${director.isHighlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                    {director.position}
                  </p>
                  
                  {!director.isHighlighted && (
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      {director.description}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
