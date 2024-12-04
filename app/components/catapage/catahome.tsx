'use client'

import Image from "next/image"
import { Cinzel } from 'next/font/google'
import React from 'react'
import Head from 'next/head'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['900'],
})

const ConnectingThreads = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Left connecting thread - Golden yellow */}
      <div className="absolute left-[25%] top-1/2 h-[2px] w-[25%] -translate-y-1/2 rotate-12 bg-gradient-to-r from-amber-400/80 to-yellow-300/60" />

      {/* Right connecting thread - Silver white */}
      <div className="absolute right-[25%] top-1/2 h-[2px] w-[25%] -translate-y-1/2 -rotate-12 bg-gradient-to-r from-gray-300/60 to-white/80" />
    </div>
  )
}

const GlitterEffects = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {[...Array(1000)].map((_, i) => {
        const size = Math.random() * 6 + 1; // Random size between 1-7px
        const opacity = Math.random() * 0.7 + 0.3; // Random opacity between 0.3-1
        return (
          <div
            key={`glitter-${i}`}
            className="absolute bg-[#F2EED8] rounded-full animate-twinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              transform: `rotate(${Math.random() * 360}deg) translate(${Math.random() * 30}px, ${Math.random() * 30}px)`,
            }}
          />
        );
      })}
    </div>
  )
}

const CataHome = () => {
  return (
    <>
      <Head>
        {/* Preload critical images */}
        <link 
          rel="preload" 
          href="/imgcata/3.png" 
          as="image" 
          type="image/png" 
        />
        <link 
          rel="preload" 
          href="/imgcata/1.1.png" 
          as="image" 
          type="image/png" 
        />
        <link 
          rel="preload" 
          href="/imgcata/1.png" 
          as="image" 
          type="image/png" 
        />
        <link 
          rel="preload" 
          href="/imgcata/2.png" 
          as="image" 
          type="image/png" 
        />
      </Head>
      
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="relative min-h-screen">
        {/* Background div that covers bottom 60% */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[#19381F] z-0" />
        
        {/* Glitter Effects */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] z-0">
          <GlitterEffects />
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-4 py-16 flex items-center justify-between min-h-screen">
          {/* Left image set */}
          <div className="relative h-[300px] w-80 md:w-96 -translate-y-28">
            {/* Main image */}
            <Image
              src="/imgcata/3.png"
              alt="Wedding Catering Left"
              fill
              className="object-contain"
              priority
            />
            
            {/* Overlay image */}
            <div className="absolute top-11 -translate-y-1/2 inset-x-0 h-1/2 flex items-start justify-end">
              <div className="relative w-80 md:w-96 h-[365px]">
                <Image
                  src="/imgcata/1.1.png"
                  alt="Small Wedding Image Left"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Center image set */}
          <div className="relative h-[450px] w-80 md:w-96">
            {/* Main image */}
            <Image
              src="/imgcata/1.png"
              alt="Wedding Catering Center"
              fill
              className="object-contain"
              priority
            />
            
            {/* Overlay image */}
            <div className="absolute inset-0 flex items-center justify-end pl-4">
              <div className="relative w-80 md:w-96 h-[570px]">
                <Image
                  src="/imgcata/1.1.png"
                  alt="Small Wedding Image Center"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex flex-col items-center">
            <h1 className={`${cinzel.className} text-white text-[45px] font-black leading-[60.66px] whitespace-nowrap`}>
              Explore Our Collection
            </h1>
            <h2 className={`${cinzel.className} text-white text-[27px] font-bold leading-[36.4px] whitespace-nowrap mt-2`}>
              Shop Online for Your Wedding Needs
            </h2>
          </div>

          {/* Connecting Threads */}
          <div className="absolute inset-0 -z-10">
            <ConnectingThreads />
          </div>

          {/* Right image set */}
          <div className="relative h-[300px] w-80 md:w-96 -translate-y-28">
            {/* Main image */}
            <Image
              src="/imgcata/2.png"
              alt="Wedding Catering Right"
              fill
              className="object-contain"
              priority
            />
            
            {/* Overlay image */}
            <div className="absolute top-11 -translate-y-1/2 inset-x-0 h-1/2 flex items-start justify-end">
              <div className="relative w-80 md:w-96 h-[365px]">
                <Image
                  src="/imgcata/1.1.png"
                  alt="Small Wedding Image Right"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CataHome
