'use client'

import Image from 'next/image'
import { Cinzel } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['700', '900'],
    display: 'swap',
})

export default function Homepage() {
    const router = useRouter();

    const handleExploreServices = () => {
        router.push('/services');
    };

    return (
        <div className="relative min-h-screen">
            {/* Hero Section with Background Image */}
            <div className="relative h-screen">
                {/* Background Image with Next.js Image component */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/Banner.jpg"
                        alt="Wedding Banner"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <div className="bg-[#1A281F4D] p-8 rounded-lg ">
                        <h1 className="text-[45px] leading-[60.66px] font-[900] text-white text-center mb-4">
                            Welcome to Princess Wedding
                        </h1>
                        <p className="text-[32px] leading-[43.14px] font-[700] text-white text-center mb-8">
                            Creating Unforgettable Moments
                        </p>
                        <button
                            onClick={handleExploreServices}
                            className="bg-[#B17406] hover:bg-[#A66F10] text-white text-[24px] leading-[32.35px] font-[700] px-4 py-2 transition-colors duration-300 rounded-lg"
                        >
                            Explore Our Services
                        </button>
                    </div>
                </div>

                {/* Curved Bottom Edge */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                    <svg
                        viewBox="0 0 1440 120"
                        className="w-full h-[120px] fill-white"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,120 C480,-40 960,-40 1440,120 L1440,120 L0,120 Z" />
                    </svg>
                </div>

                {/* Content Section */}
                <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-[60px]">
                    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                        <h2 className={`${cinzel.className} text-[55px] font-[700] leading-[74.14px] text-center text-[#B17406]`}>
                            Princess Wedding -
                        </h2>
                        {/* Add additional content here */}
                    </div>
                </div>
            </div>

            {/* Second Content Section */}
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
                    <h2 className={`${cinzel.className} text-[55px] font-[700] leading-[74.14px] text-center text-[#B17406]`}>
                        Your Dream Wedding Awaits
                    </h2>
                </div>
            </div>
        </div>
    )
}
