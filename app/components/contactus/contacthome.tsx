'use client'

import Image from 'next/image'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['900'],
    display: 'swap',
})

export default function ContactHome() {
    return (
        <div className="relative min-h-screen">
            <div className="relative h-screen">
                <Image
                    src="/imgcontact/Banner.png"
                    alt="Contact Us Banner"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white px-4">
                        <h1 className={`${cinzel.className} text-[55px] font-[900] leading-[74.14px] text-center text-white`}>
                        Contact us
                        </h1>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}