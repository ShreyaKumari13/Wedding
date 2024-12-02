"use client"

import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Cinzel } from 'next/font/google'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
})

export default function HomeSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

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
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="w-full max-w-xl mx-auto">
              <Slider {...settings}>
                <div>
                  <Image
                    src="/images/about us image 1.png"
                    alt="Wedding rings"
                    width={646}
                    height={346}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <Image
                    src="/images/about us image 2.png"
                    alt="Wedding party"
                    width={646}
                    height={346}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <Image
                    src="/images/about us image 3.png"
                    alt="Table setting"
                    width={646}
                    height={346}
                    className="rounded-lg object-cover"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}