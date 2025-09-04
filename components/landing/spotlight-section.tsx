/**
 * In the Spotlight section featuring news and blog articles
 * Displays featured content in blog-style cards
 */
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const spotlightItems = [
  {
    id: 1,
    title: 'Why Sohna is the Next Big Thing in NCR Real Estate',
    category: 'Market Insights',
    date: 'December 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Sohna is emerging as a prime real estate destination with excellent connectivity and infrastructure development.',
    author: 'Real Estate Team'
  },
  {
    id: 2,
    title: 'Designing Homes with Heart: How GLS Prioritises Wellness',
    category: 'Design Philosophy',
    date: 'December 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Our approach to creating living spaces that enhance well-being and promote healthy lifestyles.',
    author: 'Design Team'
  }
]

export function SpotlightSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            FROM THE NEWSROOM
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            In the <em className="text-orange-500 not-italic">Spotlight</em>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {spotlightItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                {/* Article Image */}
                <div className="aspect-video overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                
                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {item.author}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
