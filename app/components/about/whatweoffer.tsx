import { ClipboardList, ImageIcon } from 'lucide-react'
import { Cinzel, Raleway } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['900'],
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400'],
})

interface CardProps {
  children: React.ReactNode
  className?: string
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg p-6 ${className}`}>
      {children}
    </div>
  )
}

function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default function WhatWeOffer() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className={`${cinzel.className} text-[45px] font-[900] leading-[54px] text-[#1A281F]`}>
          WHAT WE OFFER
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Wedding Gowns Card */}
        <Card className="bg-[#B1740626] border-none">
          <CardContent className="pt-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <ClipboardList className="w-10 h-10 mx-auto text-[#1A281F]" />
                <div className="absolute w-16 h-[1px] bg-[#1A281F] -left-20 top-1/2" />
                <div className="absolute w-16 h-[1px] bg-[#1A281F] -right-20 top-1/2" />
              </div>
            </div>
            <h3 className={`${cinzel.className} text-[27px] font-[900] leading-[37.8px] text-[#1A281F]`}>
              Exquisite Wedding Gowns
            </h3>
            <p className={`${raleway.className} text-[24px] font-[400] leading-[36px] text-[#1A281F]`}>
              Explore a stunning collection of bridal gowns tailored to every style, from timeless classics to modern elegance.
            </p>
          </CardContent>
        </Card>

        {/* Wedding Planning Card */}
        <Card className="bg-[#B1740626] border-none">
          <CardContent className="pt-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <ImageIcon className="w-10 h-10 mx-auto text-[#1A281F]" />
                <div className="absolute w-16 h-[1px] bg-[#1A281F] -left-20 top-1/2" />
                <div className="absolute w-16 h-[1px] bg-[#1A281F] -right-20 top-1/2" />
              </div>
            </div>
            <h3 className={`${cinzel.className} text-[27px] font-[900] leading-[37.8px] text-[#1A281F]`}>
              Personalized Wedding Planning
            </h3>
            <p className={`${raleway.className} text-[24px] font-[400] leading-[36px] text-[#1A281F]`}>
              Enjoy bespoke planning services designed to ensure every aspect of your special day is perfect.
            </p>
          </CardContent>
        </Card>

        {/* Accessories Card */}
        <Card className="bg-[#B1740626] border-none">
          <CardContent className="pt-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <svg 
                  className="w-10 h-10 mx-auto text-[#1A281F]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="8" cy="12" r="4" />
                  <circle cx="16" cy="12" r="4" />
                </svg>
                <div className="absolute w-16 h-[1px] bg-[#1A281F] -left-20 top-1/2" />
                <div className="absolute w-16 h-[1px] bg-[#1A281F] -right-20 top-1/2" />
              </div>
            </div>
            <h3 className={`${cinzel.className} text-[27px] font-[900] leading-[37.8px] text-[#1A281F]`}>
              Elegant Accessories
            </h3>
            <p className={`${raleway.className} text-[24px] font-[400] leading-[36px] text-[#1A281F]`}>
              Find the perfect finishing touches for your bridal look, including veils, jewelry, and more.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
