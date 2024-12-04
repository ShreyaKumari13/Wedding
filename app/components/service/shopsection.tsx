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

export default function ShopSection() {
  return (
    <div className="container max-w-7xl mx-auto px-4 min-h-[550px]">
      <div className="relative h-[350px] overflow-hidden mb-6">
        {/* Main Image */}
        <div className="absolute inset-0">
          <Image
            src="/imgservice/5.jpg"
            alt="Wedding essentials including silver bridal shoes and rose bouquet"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </div>
      </div>

      {/* Content */}
      <div className="text-[#1A281F]">
        <h2 className={`${raleway.className} text-[24px] font-bold leading-[28.18px] text-left pb-3`}>
          E-Shop For Wedding Essentials
        </h2>
        <p className={`${raleway.className} text-[16px] leading-[18.78px] font-normal text-left text-[#1A281F]`}>
          Browse Our Online Shop For Wedding Essentials, Including Invitations, Decorations, And Favors.
        </p>
      </div>
    </div>
  )
}
