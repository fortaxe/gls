"use client";

import { useEffect, useRef, useState } from "react";
import { latestLaunch } from "@/lib/data";
import { cn } from "@/lib/utils";
import PrimaryButton from "../buttons/primary";

const PropertyCard = ({
  item,
  isCenter,
  isVisible,
}: {
  item: any;
  isCenter: boolean;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`relative w-full h-[450px] rounded-[16px] overflow-hidden transition-all duration-500 cursor-pointer ${
        isCenter ? "scale-100 opacity-100" : "scale-100 opacity-85"
      }`}
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="space-y-2">
          <p className="text-white text-[32px] font-semibold leading-[110%] mb-1">
            {item.firstText}
          </p>
          <p className="text-white text-[18px] font-normal leading-[110%] max-w-[450px]">
            {item.secondText}
          </p>
          {item.thirdText && (
            <p className="text-sm opacity-90 leading-relaxed">
              {item.thirdText}
            </p>
          )}
        </div>

        {/* See Details button */}
        <button className="absolute bottom-8 right-8 text-white  hover:no-underline transition-all font-medium text-[18px]">
          See Details
        </button>
      </div>
    </div>
  );
};

const PropertyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === latestLaunch.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Clear auto-slide when component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Next slide
  const nextSlide = () => {
    // Reset auto-play timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setCurrentIndex((prevIndex) =>
      prevIndex === latestLaunch.length - 1 ? 0 : prevIndex + 1
    );

    // Restart auto-play after manual navigation
    if (isAutoPlaying) {
      setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === latestLaunch.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
      }, 500);
    }
  };

  const prevSlide = () => {
    // Reset auto-play timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? latestLaunch.length - 1 : prevIndex - 1
    );

    // Restart auto-play after manual navigation
    if (isAutoPlaying) {
      setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === latestLaunch.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
      }, 500);
    }
  };

  const goToSlide = (index: number) => {
    // Reset auto-play timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setCurrentIndex(index);

    // Restart auto-play after manual navigation
    if (isAutoPlaying) {
      setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === latestLaunch.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
      }, 500);
    }
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const getVisibleItems = () => {
    const items = [];
    const totalItems = latestLaunch.length;

    // Get previous, current, and next items
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalItems) % totalItems;
      items.push({
        item: latestLaunch[index],
        isCenter: i === 0,
        index: index,
        position: i,
      });
    }

    return items;
  };

  return (
    <div className="w-full mx-auto px-[96px] pt-[96px] max-w-[1440px]">
       <p
          className={cn(
            "flex text-[14px] items-center text-center font-medium text-[#1E1E1E]",
            "leading-[110%] tracking-[5%]",
            "before:flex-1 before:border-t before:border-gray-300 before:mr-2",
            "after:flex-1 after:border-t after:border-gray-300 after:ml-2"
          )}
        >
          FEATURED PROJECTS
        </p>

         {/* Section Header */}
         <div className="text-center py-6">
          <h2 className="text-[64px] font-medium text-[#1E1E1E] mb-4 leading-[110%] tracking-[-3%]">
            Latest <em className="font-italic font-[300]">Launch</em>
          </h2>
          <p className="text-[#1E1E1E]/60 max-w-2xl mx-auto">
            Realty fresh. thoughtfully crafted.
          </p>
        </div>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center">
          {/* Cards Container */}
          <div className="flex items-center space-x-6 px-16">
            {getVisibleItems().map(({ item, isCenter, index, position }) => (
              <div
                key={`${index}-${currentIndex}`}
                className={`transition-all duration-500 ease-in-out ${
                  position === -1
                    ? "w-[400px] -ml-8 overflow-hidden" // Left card - partially hidden
                    : position === 0
                    ? "w-[623px]" // Center card - fully visible
                    : "w-[400px] -mr-8 overflow-hidden" // Right card - partially hidden
                }`}
                style={{
                  clipPath:
                    position === -1
                      ? "inset(0 0 0 25%)" // Clip left side of left card
                      : position === 1
                      ? "inset(0 25% 0 0)" // Clip right side of right card
                      : "none", // No clipping for center card
                }}
              >
                <PropertyCard
                  item={item}
                  isCenter={isCenter}
                  isVisible={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center mt-8">
          {/* Left Arrow */}
          <button
            className="flex items-center justify-center  rounded-full  transition-all duration-200 border border-[#1E1E1E] p-2 cursor-pointer"
            onClick={prevSlide}
            aria-label="Previous Slide"
            type="button"
            style={{ marginRight: 50 }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M13 15l-5-5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center space-x-2">
            {latestLaunch.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1 transition-all duration-300 rounded-[32px] cursor-pointer",
                  currentIndex === index
                    ? "w-[27px] bg-black"
                    : "w-[27px] bg-[#1E1E1E1A] hover:bg-gray-400"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to page ${index + 1}`}
                type="button"
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
          className="flex items-center justify-center  rounded-full  transition-all duration-200 border border-[#1E1E1E] p-2 cursor-pointer"
            onClick={nextSlide}
            aria-label="Next Slide"
            type="button"
            style={{ marginLeft: 50 }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                d="M7 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        
        {/* View More Button */}
        <div className="text-center py-12">
         <PrimaryButton 
         name="Explore Now" 
         onClick={() => {}} 
         variant="secondary" 
         />
        </div>
      </div>
    </div>
  );
};

export default PropertyCarousel;
