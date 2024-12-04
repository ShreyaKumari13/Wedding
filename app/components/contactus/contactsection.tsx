'use client'

import Image from 'next/image'
import { Cinzel, Raleway } from 'next/font/google'
import { Mail, Phone, MapPin } from 'lucide-react'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['900'],
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

export default function ContactSection() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className={`${cinzel.className} text-[45px] font-[900] leading-[60.66px] tracking-[0.05em] text-center text-[#B17406]`}>
          Enquire Now!
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className={`${cinzel.className} text-[27px] font-[700] leading-[36.4px] text-center text-[#1A281F]`}>
          &quot;YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.&quot;
        </h2>
      </div>
      <div className="relative w-full h-[590px]">
        <Image
          src="/imgcontact/Enquiry.jpg"
          alt="Wedding table decoration with white draping and floral arrangements"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute right-[60px] h-full w-[360px] bg-white bg-opacity-90 flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="space-y-6 text-center">
              <ContactItem icon={Mail} title="EMAIL">
                <a href="mailto:princesswedding@yahoo.com" className="hover:text-[#B8860B] transition-colors">
                  princesswedding@yahoo.com
                </a>
              </ContactItem>
              <ContactItem icon={Phone} title="PHONE">
                <a href="tel:+85223921618" className="hover:text-[#B8860B] transition-colors">
                  +852 2392 1618
                </a>
              </ContactItem>
              <ContactItem icon={MapPin} title="ADDRESS">
                <p>UNIT A AND D , 5TH</p>
                <p>FLOOR KEE SHING CENTRE</p>
                <p>NO.74-76 KIMBERLEY ROAD</p>
                <p>KOWLOON</p>
              </ContactItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactItem({ icon: Icon, title, children }: { icon: React.ComponentType<{className?: string}>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <Icon className="w-14 h-14 text-[#B8860B]" />
      <h3 className={`${raleway.className} text-[24px] font-[400] leading-[28.18px] text-center text-[#1A281F]`}>{title}</h3>
      <div className={`${raleway.className} text-[20px] font-[400] leading-[23.48px] text-center text-[#1A281F]`}>{children}</div>
    </div>
  )
}
