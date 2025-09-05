"use client"

import React, { useCallback, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { cn } from '@/lib/utils'

interface LaunchCarouselProps {
    children: React.ReactNode[]
    autoSlide?: boolean
    autoSlideInterval?: number
    showArrows?: boolean
    showDots?: boolean
    className?: string
    onSlideChange?: (index: number) => void
  }
  
  export interface LaunchCarouselRef {
    goToSlide: (index: number) => void
  }
  
  export const LaunchCarousel = forwardRef<LaunchCarouselRef, LaunchCarouselProps>(({
    children,
    autoSlide = true,
    autoSlideInterval = 5000,
    showArrows = true,
    showDots = false,
    className,
    onSlideChange
  }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    // For 3-card view, we want to show 3 cards and slide one at a time
  
    const goToSlide = useCallback((index: number) => {
      const clampedIndex = Math.max(0, Math.min(index, children.length - 1))
      setCurrentIndex(clampedIndex)
      onSlideChange?.(clampedIndex)
    }, [onSlideChange, children.length])
  
    useImperativeHandle(ref, () => ({
      goToSlide
    }), [goToSlide])
  
    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex >= children.length - 1 ? 0 : prevIndex + 1
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
      <div className={cn("relative w-full", className)}>
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `623px`
            }}
          >
            {children.map((child, index) => {
              const centerIndex = Math.min(children.length - 2, currentIndex + 1)
              const isCentered = index === centerIndex
              return (
                <div 
                  key={index} 
                  className={cn(
                    "flex-shrink-0 transition-transform duration-300",
                    isCentered ? "scale-[1.02]" : "scale-[0.96]"
                  )}
                  style={{ 
                    width: `623px`,
                    paddingLeft: index === 0 ? '0px' : '15px',
                    paddingRight: index === children.length - 1 ? '0px' : '15px'
                  }}
                >
                  {child}
                </div>
              )
            })}
          </div>
        </div>
  
        {showDots && (
          <div className="flex justify-center items-center space-x-2 mt-16 z-30">
            {/* Left Arrow */}
            {showArrows && (
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
            )}
            
            {/* Dots - page based (positions of the left-most card) */}
            {Array.from({ length: children.length }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1 transition-all duration-300 rounded-full",
                  currentIndex === index
                    ? "w-8 bg-black" 
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to page ${index + 1}`}
                type="button"
              />
            ))}
            
            {/* Right Arrow */}
            {showArrows && (
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
            )}
          </div>
        )}
      </div>
    )
  })
  
  LaunchCarousel.displayName = "LaunchCarousel"