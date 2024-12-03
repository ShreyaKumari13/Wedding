'use client'

import Image from 'next/image'
import { Cinzel, Raleway } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['900'],
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function ServicesSection() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-8 grid-rows-8 gap-8 relative min-h-[800px]">
        {/* Venue Selection */}
        <div className="col-span-3 row-span-5 relative flex flex-col">
          <div className="relative flex-1">
            <Image
              src="/imgservice/1.png"
              alt="Elegant white-themed outdoor venue with floral arch"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className={`${raleway.className} text-[24px] leading-[28.18px] font-bold text-[#1A281F]`}>Venue Selection</h3>
            <p className={`${raleway.className} text-[16px] leading-[18.78px] font-normal text-[#1A281F]`}>Choose from a range of stunning venues that suit your style and budget</p>
          </div>
        </div>

        {/* Catering */}
        <div className="col-start-4 col-span-5 row-span-3 relative flex flex-col">
          <div className="relative flex-1">
            <Image
              src="/imgservice/2.png"
              alt="Elegant multi-tiered dessert and catering display"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className={`${raleway.className} text-[24px] leading-[28.18px] font-bold text-[#1A281F]`}>Catering Services</h3>
            <p className={`${raleway.className} text-[16px] leading-[18.78px] font-normal text-[#1A281F]`}>Delight your guests with exquisite catering options tailored to your preferences</p>
          </div>
        </div>

        {/* Bottom Section (Floral) */}
        <div className="col-start-1 col-span-4 row-start-6 row-span-3 relative flex flex-col">
          <div className="relative flex-1">
            <Image
              src="/imgservice/3.png"
              alt="Luxurious hanging floral installation with crystal decorations"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className={`${raleway.className} text-[24px] leading-[28.18px] font-bold text-[#1A281F]`}>Floral Arrangements</h3>
            <p className={`${raleway.className} text-[16px] leading-[18.78px] font-normal text-[#1A281F]`}>Beautiful floral designs that complement your wedding theme</p>
          </div>
        </div>

        {/* Photography */}
        <div className="col-start-5 col-span-4 row-start-4 row-span-5 relative flex flex-col">
          <div className="relative flex-1">
            <Image
              src="/imgservice/4.png"
              alt="Romantic couple photo at historic venue"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className={`${raleway.className} text-[24px] leading-[28.18px] font-bold text-[#1A281F]`}>Photography & Videography</h3>
            <p className={`${raleway.className} text-[16px] leading-[18.78px] font-normal text-[#1A281F]`}>Capture every moment with our professional photography and videography services</p>
          </div>
        </div>
      </div>
    </div>
  )
}
