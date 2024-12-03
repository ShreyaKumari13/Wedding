import Image from "next/image"
import { Cinzel, Raleway } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['900'],
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="text-center space-y-6 mb-12">
        <h1 className={`${cinzel.className} text-[45px] font-[900] leading-[60.66px] tracking-[0.05em] text-[#1A281F]`}>
          ABOUT US
        </h1>
        <h2 className={`${raleway.className} text-[27px] font-[600] leading-[50px] tracking-[0.16em] text-[#1A281F]`}>
          Your Trusted Wedding Planner
        </h2>
        <p className={`${raleway.className} text-[24px] font-[400] leading-[28.18px] text-center max-w-6xl mx-auto text-[#1A281F]`}>
          At Princess Wedding, we believe every love story deserves a magical celebration.
          Located in the heart of Hong Kong, we specialize in making dream weddings come
          true with our exceptional collection of wedding gowns, accessories, and personalized
          planning services.
        </p>
      </div>

      <div className="flex justify-between items-start max-w-7xl mx-auto ">
        <div className="relative w-[400px] h-[467px] overflow-hidden">
          <Image
            src="/about/about us 1.png"
            alt="Outdoor wedding decoration with flowers on a pier"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="mt-[20vh]">
          <div className="relative w-[400px] h-[467px] overflow-hidden">
            <Image
              src="/about/about us 2.png"
              alt="Elegant indoor table setting with chandelier"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="relative w-[400px] h-[467px] overflow-hidden">
          <Image
            src="/about/about us 3.png"
            alt="Decorated dining table with floral arrangements"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
