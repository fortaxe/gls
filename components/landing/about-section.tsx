/**
 * About GLS Infra section with company statistics and overview
 * Features impressive metrics and company description
 */
import React from 'react'

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About<br />
              <em className="text-orange-500 not-italic">GLS Infra</em>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At GLS Infra, we believe that homes are love, breathing and creating stories. 
              Each space we craft is a thoughtful response to the needs of the modern 
              homeowner. Whether residential or commercial, contemporary or traditional, 
              each space we design speaks with confidence and clarity - always creating a 
              story that adds value and meaning to one's life.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">13+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  Years legacy
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">3800+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  Happy families
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">38 lakh</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  Sq ft delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
