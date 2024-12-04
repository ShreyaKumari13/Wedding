'use client'

import React from 'react';
import Image from 'next/image';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['900'],
    display: 'swap',
})

const CataHome = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative h-screen flex">
        {/* Left Content - 40% */}
        <div className="w-[45%] h-full flex items-center justify-center px-8">
          <div className="p-8 rounded-lg w-full">
            <h1 className={`${cinzel.className} text-[55px] leading-[74.14px] font-[900] text-[#B17406] text-center mb-4`}>
              Our Wedding Collection
            </h1>
            <p className="text-lg text-gray-600 text-center mt-4">
              Discover our beautiful collection of wedding dresses, decorations, and accessories
            </p>
          </div>
        </div>

        {/* Right Content - 60% */}
        <div className="w-[55%] h-full relative">
          <Image
            src="/imgservice/quality service 1.png"
            alt="Wedding Collection"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CataHome;