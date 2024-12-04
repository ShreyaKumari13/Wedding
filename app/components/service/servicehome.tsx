'use client'

import Image from 'next/image'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['900'],
    display: 'swap',
})

export default function ServiceHome() {
    return (
        <div className="relative min-h-screen">
            <div className="relative h-screen">
                <Image
                    src="/imgservice/Banner.jpg"
                    alt="Our Services Banner"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="text-center text-white px-4">
                        <h1 className={`${cinzel.className} text-[55px] font-[900] leading-[74.14px] text-center text-[#FFFFFF] `}>
                            Our Services
                        </h1>
                    </div>
                    <div className="text-center text-white px-4 mt-4 max-w-4xl mx-auto">
                        <h1 className={`${cinzel.className} text-[27px] font-[900] leading-[36.4px] text-center text-[#FFFFFF] `}>
                            At Princess Wedding, we offer a variety of services designed to meet your unique needs
                        </h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}