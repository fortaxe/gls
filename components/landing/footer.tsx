"use client";

/**
 * Footer component with contact information and site links
 * Features comprehensive company information and navigation
 */
import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const socialMedia = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/gls.infra",
  },

  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/gls.infra",
  },

  {
    name: "Twitter",
    icon: Twitter,
    url: "https://www.twitter.com/gls.infra",
  },

  {
    name: "Youtube",
    icon: Youtube,
    url: "https://www.youtube.com/gls.infra",
  },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/media", label: "Media Centre" },
  { href: "/contact", label: "Contact Us" },
];

// Contact information for existing and new customers
const existingCustomerPhone = "+91-8046810781";
const newCustomerPhone = "011-43099673";
const businessHours = "9 AM TO 5:30 PM";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#241A0F] text-white pt-[86px] pb-10 uppercase">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company Info */}
          <div className="mr-[130px]">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/footer.png" alt="GLS" />
            </div>
            <div className="flex flex-row gap-3">
              {socialMedia.map((item) => (
                <Link
                  className="border border-[#FFFFFF33] px-3 py-3 rounded-full"
                  href={item.url}
                  key={item.name}
                >
                  <item.icon className="w-4 h-4 text-[#A7A39F]" />
                </Link>
              ))}
            </div>
          </div>
          <div className="max-w-[297px]">
            <p className="block uppercase  text-white text-[16px] transition-colors  leading-[160%] tracking-[0] pb-2 font-medium">
              Address
            </p>
            <nav className="">
              <p className="block text-[16px] leading-[160%] tracking-[0] transition-colors uppercase mb-4 text-[#FFFFFF99] font-medium">
                GLS Infracon Private Limited, JMD Pacific Square , 707 , 7th
                Floor Sector-15 , Part II , Gurugram 122001
              </p>

              <p className="block uppercase  text-white text-[16px] transition-colors  leading-[160%] tracking-[0] pb-2 font-medium">
                Email
              </p>
              <Link
                href="mailto:customercare@glsho.com"
                className="block uppercase  hover:text-white text-sm transition-colors text-[#FFFFFF99] font-medium "
              >
                customercare@glsho.com
              </Link>
            </nav>
          </div>

          {/* For Existing Customers */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="block uppercase  text-white text-[16px] transition-colors  leading-[160%] tracking-[0] pb-2 font-medium">
                For Existing Customers
              </p>
              <nav className="space-y-3">
                <Link
                  href={`tel:8046810781`}
                  className="block hover:text-white text-[16px] transition-colors text-[#FFFFFF99] font-medium leading-[160%] tracking-[0]"
                >
                  {existingCustomerPhone}
                </Link>
              </nav>
            </div>

            {/* For New Customers */}
            <div>
              <p className="block uppercase  text-white text-[16px] transition-colors  leading-[160%] tracking-[0] pb-2 font-medium">
                For New Customers
              </p>
              <nav className="space-y-3">
                <Link
                  href={`tel:011-43099673`}
                  className="block hover:text-white text-[16px] transition-colors text-[#FFFFFF99] font-medium leading-[160%] tracking-[0]"
                >
                  {newCustomerPhone}
                </Link>
              </nav>
            </div>

            {/* Business Hours */}
            <div>
              <p className="block uppercase  text-white text-[16px] transition-colors  leading-[160%] tracking-[0] pb-2 font-medium">
                Business Hours
              </p>
              <nav className="space-y-3">
                <p className="block text-[16px] transition-colors text-[#FFFFFF99] font-medium leading-[160%] tracking-[0]">
                  {businessHours}
                </p>
              </nav>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="block uppercase  text-white text-[16px] transition-colors  leading-[160%] tracking-[0] pb-2 font-medium">
              Quick Links
            </p>
            <nav className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block   hover:text-white text-[16px] transition-colors text-[#FFFFFF99] font-medium leading-[160%] tracking-[0] "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="block uppercase  text-white text-[16px] transition-colors  leading-[160%] tracking-[0] pb-2 font-medium">
              Legal
            </p>
            <nav className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block   hover:text-white text-[16px] transition-colors text-[#FFFFFF99] font-medium leading-[160%] tracking-[0] "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="mt-[68px] mb-[40px] bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white text-[14px] leading-[150%] tracking-[0]">
            © 2024 GLS INFRATECH LIMITED. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            className="text-white text-[14px] leading-[150%] tracking-[0] hover:text-gray-300 transition-colors cursor-pointer"
          >
            BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
