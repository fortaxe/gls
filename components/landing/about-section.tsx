"use client"


/**
 * About GLS Infra section with company statistics and overview
 * Features impressive metrics and company description
 */
import React from "react";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function AboutSection() {
  const router = useRouter();
  return (
    <section className="py-[70px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
        <div className="flex flex-col  justify-between ">
          {/* Left Content */}
          <div className=" flex flex-col items-start">
            <h2 className="text-[64px] font-medium text-[#1E1E1E] mb-6 leading-[110%] tracking-[-3%] text-left">
              About
              <br />
              <em className="italic font-[300]">GLS Infra</em>
            </h2>
          </div>
          {/* Right Content: Heading and Stats */}
          <div className="flex flex-row justify-start">
            <div className="w-1/2 mt-auto">
              <p 
              
              className="text-left text-[18px]   text-[#105446]/60 leading-[150%] tracking-[-3%] flex flex-row gap-4 items-center">
                Learn more about us
                <MoveRight className="w-5 h-5" />
              </p>
            </div>
            <div className="w-1/2 mb-auto">
              <p className="text-[#030303] text-[16px] leading-[150%] tracking-[-3%] mb-[58px]">
              At GLS Infra, we believe that homes are living, breathing sanctuaries where architecture meets emotion, lifestyle meets legacy and form and function blend.  Each space we craft is a thoughtful response to the needs of the modern, discerning homeowner, resonating with elegance, functionality and long-term value.
              </p>

              {/* Statistics */}
              <div
                className="flex flex-row justify-start gap-[25px]"
              >
                <div className="text-start">
                  <div className="
           
                  text-[42px] font-medium text-[#1e1e1e] mb-[15px] leading-[16.1px] tracking-[-0.04%]">
                    13+
                  </div>
                  <div className="text-[14px] text-[#1e1e1e] leading-[16.1px] tracking-[-0.04%]r">
                    Years legacy
                  </div>
                </div>
                <div className="text-start">
                <div className="
                text-[42px] font-medium text-[#1e1e1e] mb-[15px] leading-[16.1px] tracking-[-0.04%]">
                    3800+
                  </div>
                  <div className="text-[14px] font-medium text-[#1e1e1e]  leading-[16.1px] tracking-[-0.04%]">
                  Happy Homes delivered on time
                                    </div>
                </div>
                <div className="text-start">
                <div className="text-[42px] font-medium text-[#1e1e1e] mb-[15px] leading-[16.1px] tracking-[-0.04%]">
                    38 lakh
                  </div>
                  <div className="text-[14px] font-medium text-[#1e1e1e] leading-[16.1px] tracking-[-0.04%]">
                  sq. ft. of developments till date
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
