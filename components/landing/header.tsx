"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import PrimaryButton from "../buttons/primary";

const navItems = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "About Us", url: "/about-us" },
  { name: "Media Center", url: "/media-center" },
  { name: "Contact Us", url: "/contact-us" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  // active nav
  const activeNav = navItems.find((item) => item.url === pathname);

  return (
    <header className="relative">
      <nav className="py-4 sm:py-[25px] border-gray-200 relative z-50">
        <div className="flex w-full max-w-[1440px] flex-wrap items-center justify-center md:justify-between mx-auto px-4 md:px-[90px]">
          {/* Mobile layout: Hamburger (left) + Logo (center) */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div
              onClick={() => router.push("/")}
              className="flex gap-[6px] sm:gap-2 items-center"
            >
              <img
                src="/logo.png"
                alt="logo"
                className=" h-[30px] text-white cursor-pointer "
              />
            </div>
            <p
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-[14px] cursor-pointer text-white leading-1 tracking-0 font-instrument-italic"
            >
              Menu
            </p>
          </div>

          {/* Desktop Logo - Left side */}
          <div
            onClick={() => router.push("/")}
            className="hidden md:flex gap-[6px] sm:gap-2 items-center"
          >
            <img
              src="/logo.png"
              alt="logo"
              className=" h-[30px] text-white cursor-pointer "
            />
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-[32px] ">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.url}
                  className={cn(
                    activeNav?.url === item.url ? "font-bold" : "font-normal",
                    "text-white text-[16px] tracking-[0]"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="ml-[32px]">
              <PrimaryButton 
              name="Contact Us" onClick={() => router.push("/contact-us")} />
            </div>
          </ul>
        
        </div>

        {/* Mobile Full Screen Menu */}
        <div
          id="mobile-menu"
          className={`${
            isOpen ? "fixed" : "hidden"
          } md:hidden inset-0 z-[100] flex bg-black`}
        >
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={handleMenuClose}
          ></div>

          {/* Sidebar Menu - Prevent scrolling on this container */}
          <div className="w-full bg-black min-h-screen flex flex-col py-4 pt-4 px-4 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              {/* <a
                href="/"
                className="text-white text-[14px]  leading-none tracking-0"
              >
                Digital Studio USA
              </a> */}

              <img
                onClick={() => router.push("/")}
                src="/logo.png"
                alt="logo"
                className="  h-[30px] text-white cursor-pointer"
              />
              <button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center  text-white rounded-lg z-50"
              >
                <span className="sr-only">Open main menu</span>
                <span className="text-[14px] cursor-pointer text-white leading-1 tracking-0 font-instrument-italic">
                  Go Back
                </span>
              </button>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col flex-1 mt-6 pt-[75px]">
              {/* Navigation Menu */}
              <div className="">
                <ul className=" ">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer pushed to bottom */}
              <div className="pt-[25px] space-y-[10px] ">
                <div className="rounded-[10px]">
                  <p className="text-[#C2C2C2] text-[12px] mb-1 font-instrument-italic flex items-center  leading-none tracking-0">
                    <img src="/dot1.svg" className="w-[6px] h-[6px] mr-1" />
                    Address
                  </p>
                  <p className="text-white text-[14px]  leading-none tracking-0 pt-[10px]">
                    1001 Peachtree Rd, Atlanta, Georgia
                  </p>
                </div>

                <div className="rounded-[10px]">
                  <p className="text-[#C2C2C2] text-[12px] mb-1 font-instrument-italic flex items-center  leading-none tracking-0">
                    <img src="/dot2.svg" className="w-[6px] h-[6px] mr-1" />
                    Contact
                  </p>
                  <a
                    href="tel:+19982125786"
                    className="hover:underline text-white text-[14px]  leading-none tracking-0 mt-[10px]"
                  >
                    998 212 5786
                  </a>
                </div>

                <div className="rounded-[10px]">
                  <p className="text-[#C2C2C2] text-[12px] mb-1 font-instrument-italic flex items-center  leading-none tracking-0">
                    <img src="/dot3.svg" className="w-[6px] h-[6px] mr-1" />
                    Email
                  </p>
                  <a
                    href="mailto:glc@gmail.com"
                    className="hover:underline text-white text-[14px]  leading-none tracking-0 mt-[10px]"
                  >
                    glc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
