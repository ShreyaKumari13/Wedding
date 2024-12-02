"use client"

import Image from "next/image"
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
})

const features = [
    {
        image: "/images/why choose us 1.png",
        imageAlt: "Bride in wedding dress holding bouquet"
    },
    {
      number: "1",
      title: "Personalized Service",
      description: "Tailored experiences to suit your unique vision.",
    },
    {
        image: "/images/why choose us 3.png",
        imageAlt: "Wedding table decorations with flowers"
    },
    {
        number: "2",
      title: "Experienced Professionals",
      description: "Our team is dedicated to making your day unforgettable.",
    },
    {
        image: "/images/why choose us 2.png",
        imageAlt: "Wedding planner discussing with couple"
    },
    {
        number: "3",
      title: "Wide Selection of Venues and Services",
      description: "From venues to florals, we offer everything you need.",
    }
]

export default function WhyChooseUs() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 ">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col h-full">
                            {feature.image ? (
                                <div className="relative aspect-square  flex-grow ">
                                    <Image
                                        src={feature.image}
                                        alt={feature.imageAlt}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            ) : (
                                <div className=" rounded-lg flex flex-col text-center h-full">
                                    <span 
                                        className={`${cinzel.className} text-6xl font-bold text-[#B17406] mb-4`}
                                    >
                                        {feature.number}
                                    </span>
                                    <div 
                                        className="w-[132px] border-t-2 border-[#B17406] opacity-1 mx-auto mb-4"
                                    ></div>
                                    <h3 
                                        className={`${cinzel.className} text-xl font-semibold text-[#1E1E1E] tracking-wide mb-4`}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
