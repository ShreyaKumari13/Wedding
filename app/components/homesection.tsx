"use client"

import Image from "next/image"
import { Cinzel } from 'next/font/google'
import { useState, useEffect } from 'react'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
})

const images = [
  {
    src: "/images/about us image 1.png",
    alt: "Wedding rings"
  },
  {
    src: "/images/about us image 2.png",
    alt: "Wedding party"
  },
  {
    src: "/images/about us image 3.png",
    alt: "Table setting"
  }
]

export default function HomeSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(timer)
  }, []) 

  return (
    <div className="relative bg-white py-16">
      {/* Decorative Flower */}
      <div className="absolute top-0 right-0 w-64 h-64 -z-10">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative flowers"
          width={256}
          height={256}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className={`${cinzel.className} text-4xl font-bold tracking-tight text-[#B17406]`}>
              ABOUT PRINCESS WEDDING
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Princess Wedding, where we make your dream wedding a reality! With our extensive range of services and dedicated team, we ensure that every detail is perfect. Whether you&apos;re looking for a breathtaking venue, exquisite floral arrangements, or a complete wedding package, we have you covered.
            </p>
            <button 
              className="group flex items-center border-2 border-[#B17406] rounded-full px-6 py-2 hover:bg-[#B17406] hover:text-white transition-colors"
            >
              <span>SEE MORE</span>
            </button>
          </div>

          {/* Simple HTML Carousel with Dots */}
          <div className="relative w-full max-w-xl mx-auto">
            <div className="overflow-hidden relative">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                {images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={646}
                    height={346}
                    className="rounded-lg object-cover flex-shrink-0 w-full"
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImage ? 'bg-[#B17406]' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}