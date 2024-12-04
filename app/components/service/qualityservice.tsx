import Image from "next/image"
import Link from "next/link"
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

export default function QualityService() {
  return (
    <div className="relative min-h-screen pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column with Table Setting Image */}
          <div className="relative h-[300px] md:h-[570px]">
            <Image
              src="/imgservice/quality service 1.png"
              alt="Elegant table setting with wine glasses and floral decorations"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Right Column with Content */}
          <div className="relative space-y-6">
            <h1 className={`${cinzel.className} text-[45px] font-black leading-[60.66px] tracking-[0.05em] pt-10 text-left text-[#555555]`}>
              QUALITY SERVICE
            </h1>
            
            <div className="bg-gray-50 p-6 md:p-3 space-y-6">
              <p className={`${raleway.className} text-[27px] font-normal leading-[31.7px] tracking-[0.05em] text-left text-[#000000]`}>
                Reach out to us for exceptional wedding services crafted to match your vision. From planning to design, we ensure every moment is truly unforgettable.
              </p>
              
              <Link 
                href="/contact"
                className={`${cinzel.className} inline-block bg-[#B17406] text-[24px] font-black leading-[32.35px] text-left text-white px-3 py-2 uppercase tracking-wider hover:bg-[#986C0E] transition-colors rounded-md`}
              >
                Enquire now
              </Link>
            </div>
            
            {/* Wedding Rings Image */}
            <div className="relative h-[300px] mt-8">
              <Image
                src="/imgservice/quality service 2.png"
                alt="Gold wedding rings on lace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
