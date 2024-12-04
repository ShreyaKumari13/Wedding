'use client'

import Image from 'next/image'
import { Cinzel } from 'next/font/google'
import { useRouter } from 'next/navigation';

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['900'],
    display: 'swap',
})

export default function AboutPage() {
    const router = useRouter();

    const handleExploreClick = () => {
        router.push('/services');
    };

    return (
        <div className="relative min-h-screen ">
            <div className="relative h-screen flex">
                {/* Left Content - 40% */}
                <div className="w-[45%] h-full flex items-center justify-center px-8">
                    <div className=" p-8 rounded-lg w-full">
                        <h1 className={`${cinzel.className} text-[55px] leading-[74.14px] font-[900] text-[#B17406] text-center mb-4`}>
                        Let&apos;s Plan your dream wedding
                        </h1>
                        <p className={`${cinzel.className} text-[32px] leading-[43.14px] font-[700] text-[#1A281F] text-center mb-8`}>
                        life is an event
                        </p>
                        <div className="flex justify-center mt-8">
                            <button 
                                onClick={handleExploreClick}
                                className="bg-[#B17406] hover:bg-[#A66F10] text-white text-[24px] leading-[32.35px] font-[700] px-4 py-2 transition-colors duration-300 rounded-lg"
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image - 60% */}
                <div className="w-[55%] h-full relative">
                    <div className="absolute inset-0 pb-16 pt-14">
                        <div className="relative w-full h-[630px]">
                            <Image
                                src="/about/Banner_Mask group.png"
                                alt="About Us Banner"
                                fill
                                priority
                                className="object-cover"
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}