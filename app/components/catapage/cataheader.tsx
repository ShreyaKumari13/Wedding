'use client'

import Link from "next/link"
import Image from "next/image"
import { Cinzel } from 'next/font/google'
import { usePathname } from 'next/navigation'
import React from 'react'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700', '900'],
})

const navigationItems = [
  {
    title: "Wedding Dress Rental",
    href: "/catalogue",
    id: "dresses"
  },
  {
    title: "Wedding Photography and Videography",
    href: "/catalogue/photography",
    id: "photography"
  },
  {
    title: "Pre-Wedding Photoshoot",
    href: "/catalogue/photoshoot",
    id: "photoshoot"
  },
  {
    title: "Bridal Makeup and Hairstyling",
    href: "/catalogue/makeup",
    id: "makeup"
  },
  {
    title: "Wedding Betrothal Ceremony",
    href: "/catalogue/ceremony",
    id: "ceremony"
  },
]

const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

interface CataHeaderProps {
  activeSection: string;
}

const getImagesForSection = (section: string) => {
  const imageMappings = {
    dresses: [
      '/imgcata/dresses/1.jpg',
      '/imgcata/dresses/2.jpg',
      '/imgcata/dresses/3.jpg',
      '/imgcata/dresses/4.jpg',
      '/imgcata/dresses/5.jpg',
      '/imgcata/dresses/6.jpg',
      '/imgcata/dresses/7.jpg',
      '/imgcata/dresses/8.jpg',
    ],
    photography: [
      '/imgcata/photography/1.jpg',
      '/imgcata/photography/2.jpg',
      '/imgcata/photography/3.jpg',
      '/imgcata/photography/4.jpg',
      '/imgcata/photography/5.jpg',
      '/imgcata/photography/6.jpg',
      '/imgcata/photography/7.jpg',
      '/imgcata/photography/8.jpg',
    ],
    photoshoot: [
      '/imgcata/photoshoot/1.jpg',
      '/imgcata/photoshoot/2.jpg',
      '/imgcata/photoshoot/3.jpg',
      '/imgcata/photoshoot/4.jpg',
      '/imgcata/photoshoot/5.jpg',
      '/imgcata/photoshoot/6.jpg',
      '/imgcata/photoshoot/7.jpg',
      '/imgcata/photoshoot/8.jpg',
    ],
    makeup: [
      '/imgcata/makeup/1.jpg',
      '/imgcata/makeup/2.jpg',
      '/imgcata/makeup/3.jpg',
      '/imgcata/makeup/4.jpg',
      '/imgcata/makeup/5.jpg',
      '/imgcata/makeup/6.jpg',
      '/imgcata/makeup/7.jpg',
      '/imgcata/makeup/8.jpg',
    ],
    ceremony: [
      '/imgcata/betrothal/1.png',
      '/imgcata/betrothal/2.jpg',
      '/imgcata/betrothal/3.jpg',
      '/imgcata/betrothal/4.jpg',
      '/imgcata/betrothal/5.jpg',
      '/imgcata/betrothal/6.jpg',
      '/imgcata/betrothal/7.jpg',
      '/imgcata/betrothal/8.jpg',
    ],
  };

  return imageMappings[section as keyof typeof imageMappings] || imageMappings.dresses;
};

export function CataHeader({ activeSection }: CataHeaderProps) {
  const pathname = usePathname();
  const images = getImagesForSection(activeSection);
  
  return (
    <header className="max-w-7xl mx-auto border-b bg-white py-4">
      <div className="px-4 py-6">
        <h1 className={`${cinzel.className} mb-6 text-center text-[27px] font-[700] leading-[36.4px] text-[#1A281F]`}>
          Discover Our Extensive Catalog Filled With Everything You Need
          <br />
          For Your Special Day:
        </h1>
        <nav className="overflow-x-auto">
          <ul className="flex flex-wrap items-center justify-center gap-4 min-w-max px-4">
            {navigationItems.map((item) => {
              const isActive = activeSection ? item.id === activeSection : pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      `${cinzel.className} inline-block whitespace-nowrap rounded-md px-3 py-2 text-[18px] md:text-[21px] font-[900] leading-[25.2px] text-left transition-colors`,
                      isActive
                        ? "bg-[#B17406] text-[#FFFFFF] hover:bg-[#D9A441] hover:text-[#FFFFFF]"
                        : "bg-white text-[#1A281F] hover:bg-[#F0E6D2] hover:text-[#1A281F]"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="px-4 py-16">
        <div className="grid grid-cols-8 grid-rows-8 gap-8 relative min-h-[800px]">
          {/* Venue Selection */}
          <div className="col-span-3 row-span-5 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src={images[0]}
                alt="Elegant white-themed outdoor venue with floral arch"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Catering */}
          <div className="col-start-4 col-span-5 row-span-3 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src={images[1]}
                alt="Elegant multi-tiered dessert and catering display"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Section (Floral) */}
          <div className="col-start-1 col-span-4 row-start-6 row-span-3 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src={images[2]}
                alt="Luxurious hanging floral installation with crystal decorations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Photography */}
          <div className="col-start-5 col-span-4 row-start-4 row-span-5 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src={images[3]}
                alt="Romantic couple photo at historic venue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Grid Section - Duplicate */}
        <div className="grid grid-cols-8 grid-rows-8 gap-8 relative min-h-[800px] mt-16 mb-16">
          {/* Venue Selection */}
          <div className="col-span-3 row-span-5 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src={images[4]}
                alt="Elegant white-themed outdoor venue with floral arch"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Catering */}
          <div className="col-start-4 col-span-5 row-span-3 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src={images[5]}
                alt="Elegant multi-tiered dessert and catering display"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Section (Floral) */}
          <div className="col-start-1 col-span-4 row-start-6 row-span-3 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src={images[6]}
                alt="Luxurious hanging floral installation with crystal decorations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Photography */}
          <div className="col-start-5 col-span-4 row-start-4 row-span-5 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src={images[7]}
                alt="Romantic couple photo at historic venue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
