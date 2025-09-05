"use client"

import React, { useCallback, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { cn } from '@/lib/utils'

interface CarouselProps {
  children: React.ReactNode[]
  autoSlide?: boolean
  autoSlideInterval?: number
  showArrows?: boolean
  showDots?: boolean
  className?: string
  onSlideChange?: (index: number) => void
}

export interface CarouselRef {
  goToSlide: (index: number) => void
}

export const Carousel = forwardRef<CarouselRef, CarouselProps>(({
  children,
  autoSlide = true,
  autoSlideInterval = 5000,
  showArrows = true,
  showDots = false,
  className,
  onSlideChange
}, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    onSlideChange?.(index)
  }, [onSlideChange])

  useImperativeHandle(ref, () => ({
    goToSlide
  }), [goToSlide])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === children.length - 1 ? 0 : prevIndex + 1
      onSlideChange?.(newIndex)
      return newIndex
    })
  }, [children.length, onSlideChange])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? children.length - 1 : prevIndex - 1
      onSlideChange?.(newIndex)
      return newIndex
    })
  }, [children.length, onSlideChange])

  useEffect(() => {
    if (!autoSlide) return

    const interval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(interval)
  }, [autoSlide, autoSlideInterval, nextSlide])

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>


      {showDots && (
        <div className="flex justify-center items-center space-x-2 mt-8 z-30">
          {/* Left Arrow */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-200 mr-2"
            onClick={prevSlide}
            aria-label="Previous Slide"
            type="button"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M13 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Dots */}
          {children.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-1 transition-all duration-300 rounded-full",
                currentIndex === index 
                  ? "w-8 bg-black" 
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
          {/* Right Arrow */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-200 ml-2"
            onClick={nextSlide}
            aria-label="Next Slide"
            type="button"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
})

Carousel.displayName = "Carousel"
