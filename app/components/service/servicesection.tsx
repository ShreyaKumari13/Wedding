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
  weight: ['400'],
  display: 'swap',
})

export default function ServicesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-red-100">
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="col-span-1 space-y-4">
          {/* Venue Selection */}
          <div className="space-y-4">
            <div className="relative h-[500px]">
              <Image
                src="/imgservice/1.png"
                alt="Elegant wedding venue with white drapes and floral arch"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className={`${cinzel.className} text-2xl`}>Venue Selection</h2>
            <p className={`${raleway.className} text-gray-600`}>
              Choose from a range of stunning venues that suit your style and budget.
            </p>
          </div>

          {/* Floral Arrangements */}
          <div className="space-y-4">
            <div className="relative h-[250px]">
              <Image
                src="/imgservice/3.png"
                alt="Beautiful hanging floral installations with crystal elements"
                fill
                className="object-cover"
              />
            </div>
            <h2 className={`${cinzel.className} text-2xl`}>Floral Arrangements</h2>
            <p className={`${raleway.className} text-gray-600`}>
              Beautiful floral designs that complement your wedding theme.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-1 space-y-4">
          {/* Catering Services */}
          <div className="space-y-4">
            <div className="relative h-[320px]">
              <Image
                src="/imgservice/2.png"
                alt="Elegant multi-tiered display of appetizers and treats"
                fill
                className="object-cover"
              />
            </div>
            <h2 className={`${cinzel.className} text-2xl`}>Catering Services</h2>
            <p className={`${raleway.className} text-gray-600`}>
              Delight your guests with exquisite catering options tailored to your preferences.
            </p>
          </div>

          {/* Photography & Videography */}
          <div className="space-y-4 max-w-[25rem] mx-auto">
            <div className="relative h-[350px]">
              <Image
                src="/imgservice/4.png"
                alt="Romantic couple photo on a stone balcony"
                fill
                className="object-cover"
              />
            </div>
            <h2 className={`${cinzel.className} text-2xl`}>Photography & Videography</h2>
            <p className={`${raleway.className} text-gray-600`}>
              Capture every moment with our professional photography and videography services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
