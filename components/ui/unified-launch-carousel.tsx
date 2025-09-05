"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LaunchItem {
  firstText: string;
  secondText: string;
  image: string;
  link: string;
  thirdText?: string;
}

interface UnifiedLaunchCarouselProps {
  items: LaunchItem[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  className?: string;
}

const LaunchCard = ({ 
  item, 
  isCenter, 
  position 
}: { 
  item: LaunchItem; 
  isCenter: boolean; 
  position: number;
}) => {
  return (
    <div 
      className={cn(
        "relative w-full h-[450px] rounded-2xl overflow-hidden transition-all duration-500",
        "bg-white shadow-lg",
        isCenter ? "scale-100 opacity-100" : "scale-95 opacity-75"
      )}
    >
      <div className="relative h-full">
        <img
          src={item.image}
          alt="latest launch"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay - same as latest launch */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
          <div className="space-y-2">
            <p className="text-white text-[28px] font-semibold leading-[110%] mb-1">
              {item.firstText}
            </p>
            <p className="text-white text-[16px] font-normal leading-[120%] max-w-[90%]">
              {item.secondText}
            </p>
            {item.thirdText && (
              <p className="text-white text-[16px] font-normal leading-[120%] max-w-[90%]">
                {item.thirdText}
              </p>
            )}
          </div>
        </div>
        {/* See Details button - same positioning as latest launch */}
        <button className="absolute bottom-8 right-8 text-white hover:text-gray-200 transition-all font-medium text-[16px] hover:underline">
          See Details
        </button>
      </div>
    </div>
  );
};

export const UnifiedLaunchCarousel = ({ 
  items, 
  autoSlide = false, 
  autoSlideInterval = 4000,
  className 
}: UnifiedLaunchCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto advance to next slide
  const autoNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  // Manual navigation functions
  const nextSlide = () => {
    setUserInteracted(true);
    setIsPaused(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setUserInteracted(true);
    setIsPaused(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setUserInteracted(true);
    setIsPaused(true);
    setCurrentIndex(index);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide || isPaused) return;

    const interval = setInterval(autoNextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, isPaused, autoNextSlide]);

  // Resume auto-slide after user interaction
  useEffect(() => {
    if (!userInteracted || !autoSlide) return;

    const resumeTimer = setTimeout(() => {
      setIsPaused(false);
      setUserInteracted(false);
    }, autoSlideInterval * 1.5); // Resume after 1.5x the normal interval

    return () => clearTimeout(resumeTimer);
  }, [userInteracted, autoSlide, autoSlideInterval]);

  const getVisibleItems = () => {
    const visibleItems = [];
    const totalItems = items.length;
    
    // Get previous, current, and next items
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalItems) % totalItems;
      visibleItems.push({
        item: items[index],
        isCenter: i === 0,
        index: index,
        position: i
      });
    }
    
    return visibleItems;
  };

  return (
    <div className={cn("w-full mx-auto px-[96px] py-8 max-w-[1440px]", className)}>
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-center">
          {/* Left Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all duration-300 hover-lift animate-slide-in-left"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Cards Container with smooth sliding */}
          <div className="relative w-full max-w-[1433px] overflow-hidden px-16">
            <div 
              className="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${items.length * 100}%`
              }}
            >
              {items.map((item, index) => {
                // Calculate relative position for each item
                const relativePosition = index - currentIndex;
                const isCenter = relativePosition === 0;
                const isLeft = relativePosition === -1;
                const isRight = relativePosition === 1;
                const isVisible = Math.abs(relativePosition) <= 1;
                
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center"
                    style={{ 
                      width: `${100 / items.length}%`,
                      minWidth: `${100 / items.length}%`
                    }}
                  >
                    <div
                      className={cn(
                        "transition-all duration-700 ease-out",
                        isLeft 
                          ? "w-[410px] -ml-8 overflow-hidden" // Left card - partially hidden
                          : isCenter 
                          ? "w-[623px]" // Center card - fully visible
                          : isRight 
                          ? "w-[400px] -mr-8 overflow-hidden" // Right card - partially hidden
                          : "w-[623px] opacity-0" // Hidden cards
                      )}
                      style={{
                        clipPath: isLeft 
                          ? "inset(0 0 0 25%)" // Clip left side of left card
                          : isRight 
                          ? "inset(0 25% 0 0)" // Clip right side of right card
                          : "none", // No clipping for center card
                        opacity: isVisible ? 1 : 0,
                        pointerEvents: isVisible ? "auto" : "none"
                      }}
                    >
                      <LaunchCard 
                        item={item} 
                        isCenter={isCenter}
                        position={relativePosition}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Navigation */}
          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all duration-300 hover-lift animate-slide-in-right"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Indicators - same style as latest launch section */}
        <div className="flex justify-center items-center space-x-2 mt-16">
          {items.map((_, index) => (
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
        </div>
      </div>
    </div>
  );
};
