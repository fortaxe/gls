"use client";

/**
 * Hero section component featuring the SOHNA project introduction
 * Displays the main value proposition with background image and CTA
 */
import React, { useRef } from "react";
import PrimaryButton from "../buttons/primary";
import Header from "./header";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/lib/data";
import { Carousel, CarouselRef } from "../ui/carousel";

export function HeroSection() {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleBottomNavClick = (slideIndex: number) => {
    carouselRef.current?.goToSlide(slideIndex);
    setCurrentSlide(slideIndex);
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[900px] overflow-hidden">
      <Carousel 
        ref={carouselRef}
        autoSlide={true} 
        autoSlideInterval={5000}
        showArrows={false}
        showDots={false}
        className="h-full"
        onSlideChange={handleSlideChange}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative h-[900px] flex items-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Header positioned at top */}
            <div className="absolute top-0 left-0 right-0 z-30">
              <Header />
            </div>
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            
            {/* Content */}
            <div className={cn(
              "relative z-20 max-w-[1440px] px-4 md:px-[96px] mx-auto",
              "flex items-center justify-start w-full"
            )}>
              <div className="w-full max-w-2xl">
                {/* Title */}
                <p className={cn(
                  "text-white text-[42px] ",
                  "tracking-[0] font-medium leading-[110%] mb-[50px]"
                )}>
                  {slide.title.includes("biggest") ? (
                    <>
                      "The <span className="italic font-normal">biggest</span> opportunity in Sohna - coming soon"
                    </>
                  ) : slide.title.includes("Plot") ? (
                    <div
                    className="text-[64px] tracking-[0] font-medium leading-[110%]"
                    >
                      Plot a <span className="italic font-normal">better</span><br />
                      Life for You
                    </div>
                  ) : (
                    <div
                    className="text-[64px] tracking-[0] font-medium leading-[110%]"
                    >
                      Open Doors to<br />
                      a better Life
                    </div>
                  )}
                </p>

                

                {/* For non-Sohna slides, show project name and logo */}
                {!slide.subtitle && (
                  <div className="mb-3 flex flex-col  gap-4">
                    {slide.logoImage && (
                      <img 
                        src={slide.logoImage} 
                        alt={slide.projectName}
                        className={slide.title.startsWith("The") ? "w-[333px] h-[100px]" : "w-[121px] h-[38px]"}
                      />
                    )}
                    <p className="text-white text-3xl md:text-[52px] leading-[130%] font-tenor-sans">
                      {slide.projectName}
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                {slide.title.startsWith("The") && (
                <div className="mt-8">
                  <PrimaryButton 
                  variant="primary"
                    name={slide.buttonText}
                    onClick={() => {
                      // Add enquiry functionality here
                      console.log('Enquire clicked for', slide.projectName);
                    }}
                  />
                </div>
                )}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
              <div className="max-w-[1440px] px-4 md:px-[90px] mx-auto">
                <div className=" py-6">
                  {/* Full width border line */}
                  <div className="relative">
                    <div className="flex justify-between items-center relative">
                      <button 
                        onClick={() => handleBottomNavClick(0)}
                        className={cn(
                          "text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer",
                          "pb-4 relative z-10",
                          currentSlide === 0 
                            ? "text-white" 
                            : "text-white hover:text-white/50"
                        )}
                      >
                        {slide.footerLeft}
                      </button>
                      <button 
                        onClick={() => handleBottomNavClick(1)}
                        className={cn(
                          "text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer",
                          "pb-4 relative z-10",
                          currentSlide === 1 
                            ? "text-white" 
                            : "text-white hover:text-white/50"
                        )}
                      >
                        {slide.footerCenter}
                      </button>
                      <button 
                        onClick={() => handleBottomNavClick(2)}
                        className={cn(
                          "text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer",
                          "pb-4 relative z-10",
                          currentSlide === 2 
                            ? "text-white" 
                            : "text-white hover:text-white/50"
                        )}
                      >
                        {slide.footerRight}
                      </button>
                    </div>
                    
                    {/* Full width border base */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30"></div>
                    
                    {/* Active section border */}
                    <div 
                      className="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out"
                      style={{
                        left: `${(currentSlide / 3) * 100}%`,
                        width: `${100 / 3}%`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
