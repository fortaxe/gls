"use client"

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { stories } from "@/lib/data";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const VideoReviewCard = ({
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
        className={`relative w-full h-[450px] rounded-[16px] overflow-hidden transition-all duration-500 ${
          isCenter ? "scale-100 opacity-100" : "scale-100 opacity-85"
        }`}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Dialog>
          <DialogTrigger asChild>
            <button 
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src="/play.png"
                  alt="play"
                  className="hover:scale-101 transition-transform duration-200 drop-shadow-sm"
                />
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-101 transition-transform duration-300"></div>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-[90vw] p-0 border-none shadow-2xl bg-black/95 backdrop-blur-sm">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <video
                src={item.videoUrl}
                title={`${item.name} - ${item.title}`}
                className="w-full h-full object-cover"
                controls
                autoPlay
                preload="metadata"
              />
            </div>
          
          </DialogContent>
        </Dialog>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
  
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-0">
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-12">
            <p className="text-white text-[32px] font-semibold leading-[110%] mb-3">
              {item.name}
            </p>
            <p className="text-white text-[16px] font-normal leading-[110%] max-w-[450px]">
              {item.title}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  const VideoReviewCoursel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
    // Auto-slide functionality
    useEffect(() => {
      if (isAutoPlaying) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === stories.length - 1 ? 0 : prevIndex + 1
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
        prevIndex === stories.length - 1 ? 0 : prevIndex + 1
      );
  
      // Restart auto-play after manual navigation
      if (isAutoPlaying) {
        setTimeout(() => {
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === stories.length - 1 ? 0 : prevIndex + 1
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
        prevIndex === 0 ? stories.length - 1 : prevIndex - 1
      );
  
      // Restart auto-play after manual navigation
      if (isAutoPlaying) {
        setTimeout(() => {
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === stories.length - 1 ? 0 : prevIndex + 1
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
              prevIndex === stories.length - 1 ? 0 : prevIndex + 1
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
      const totalItems = stories.length;
  
      // Get previous, current, and next items
      for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + totalItems) % totalItems;
        items.push({
          item: stories[index],
          isCenter: i === 0,
          index: index,
          position: i,
        });
      }
  
      return items;
    };
  
    return (
        <div className="bg-[#98A2A426] pb-12">
      <div className="w-full mx-auto px-[96px] max-w-[1440px] ">
      <div className="text-center py-12">
          <h2 className="text-[64px] font-medium text-[#1E1E1E]  leading-[110%] tracking-[-3%]">
          Stories from the  <em className="font-italic font-[300]">Heart</em>
          </h2>
        
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
                  <VideoReviewCard
                    item={item}
                    isCenter={isCenter}
                    isVisible={true}

                  />
                </div>
              ))}
            </div>
          </div>
  
          {/* Indicators */}
          <div className="flex justify-center items-center mt-12">
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
              {stories.map((_, index) => (
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
  
          
        
        </div>
      </div>
      </div>
    );
  };
  
  export default VideoReviewCoursel;
  