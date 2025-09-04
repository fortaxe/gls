"use client"

import React, { useCallback, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'

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

      {showArrows && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {children.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 hover:scale-110",
                currentIndex === index ? "bg-white shadow-lg" : "bg-white/60 hover:bg-white/80" 
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
})

Carousel.displayName = "Carousel"
