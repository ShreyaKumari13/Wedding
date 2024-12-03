'use client'

import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-red-100">
            {/* Hero Section with Background Image */}
            <div className="relative h-screen ">
                {/* Background Image with Next.js Image component */}
                <div className="absolute ">
                    {/* <Image
                        src="/images/about-banner.png"
                        alt="About Us Banner"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                    /> */}
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <div className="bg-[#1A281F4D] p-8 rounded-lg ">
                        <h1 className="text-[45px] leading-[60.66px] font-[900] text-white text-center mb-4">
                            About Princess Wedding
                        </h1>
                        <p className="text-[32px] leading-[43.14px] font-[700] text-white text-center mb-8">
                            Your Trusted Wedding Planning Partner
                        </p>
                        <button
                            className="bg-[#B17406] hover:bg-[#A66F10] text-white text-[24px] leading-[32.35px] font-[700] px-4 py-2 transition-colors duration-300 rounded-lg"
                        >
                            Our Services
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}