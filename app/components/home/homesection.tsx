"use client"

import Image from "next/image"
import { Cinzel } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { useState, useEffect, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation';

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
})

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})

const images = [
    {
        src: "/images/about us image 1.png",
        alt: "Wedding rings",
        width: "259.9px",
        height: "319.28px"
    },
    {
        src: "/images/about us image 2.jpg",
        alt: "Wedding party",
        width: "252.21px",
        height: "291.15px",
        position: {
            top: "50%",
            transform: "translateY(-50%)"
        }
    },
    {
        src: "/images/3.jpg",
        alt: "Table setting",
        width: "250.13px",
        height: "291.15px",
        position: {
            top: "50%",
            transform: "translateY(-50%)"
        }
    },
    {
        src: "/images/5.jpg",
        alt: "Wedding party",
        width: "259.9px",
        height: "319.28px"
    },
    {
        src: "/images/1.jpg",
        alt: "Wedding rings",
        width: "252.21px",
        height: "291.62px",
        position: {
            top: "50%",
            transform: "translateY(-50%)"
        }
    },
    {
        src: "/images/about us image 3.png",
        alt: "Table setting",
        width: "250.13px",
        height: "291.15px",
        position: {
            top: "50%",
            transform: "translateY(-50%)"
        }
    },
    {
        src: "/images/6.jpg",
        alt: "Table setting",
        width: "259.9px",
        height: "319.28px"
    },
    {
        src: "/images/2.jpg",
        alt: "Wedding party",
        width: "252.21px",
        height: "291.62px",
        position: {
            top: "50%",
            transform: "translateY(-50%)"
        }
    },
    {
        src: "/images/4.jpg",
        alt: "Wedding rings",
        width: "250.13px",
        height: "291.15px",
        position: {
            top: "50%",
            transform: "translateY(-50%)"
        }
    }
]

export default function HomeSection() {
    const router = useRouter();

    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = Math.ceil(images.length / 3)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000) // Auto-advance every 5 seconds
        return () => clearInterval(timer)
    }, [nextSlide])

    const handleSeeMoreClick = () => {
        router.push('/about');
    };

    return (
        <div className="relative h-[610px]">
            <div className="absolute right-[750px] top-0 h-full pt-[15vh]">
                <div className="h-[570px] p-10 w-[600px] shadow-lg drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]">
                    <div className="max-w-[550px] flex flex-col items-center justify-center ">
                        <h2 className={`text-[45px] font-black leading-[60.66px] text-[#1A281F] pb-4 ${cinzel.className} text-left`}>
                            ABOUT PRINCESS WEDDING
                        </h2>
                        <p className={`text-[20px] font-normal leading-[40px] text-[#1A281F] pb-4 ${raleway.className} text-left`}>
                            Welcome to Princess Wedding, where we make your dream wedding a reality! With our extensive range of services and dedicated team, we ensure that every detail is perfect. Whether you&apos;re looking for a breathtaking venue, exquisite floral arrangements, or a complete wedding package, we have you covered.
                        </p>
                        <div className="flex justify-start w-full">
                            <button
                                onClick={handleSeeMoreClick}
                                className={`group flex items-center justify-center bg-[#1E1E1E] text-white w-[180px] h-[45px] rounded-tl-[20px] rounded-br-[20px] ${cinzel.className} border-2 border-[#B17406CC] pr-2`}
                            >
                                <span className="font-black text-[18px] leading-none flex-grow whitespace-nowrap text-center">SEE MORE</span>
                                <div className="w-[50px] h-[32px] bg-white rounded-tl-[20px] rounded-br-[20px] flex items-center justify-center">
                                    <ArrowRight className="text-[#1A281F]" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[750px] z-10">
                <div className="overflow-hidden rounded-lg shadow-lg ">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <div key={index} className="flex-shrink-0 w-full">
                                <div className="grid grid-cols-3 gap-0">
                                    {images.slice(index * 3, (index + 1) * 3).map((image, i) => (
                                        <div
                                            key={i}
                                            className="relative overflow-hidden"
                                            style={{
                                                width: image.width,
                                                height: image.height,
                                                zIndex: i === 1 ? -1 : (i === 2 ? 1 : 2),
                                                position: 'relative',
                                                top: image.position?.top || '0',
                                                transform: image.position?.transform || 'none'
                                            }}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={parseFloat(image.width)}
                                                height={parseFloat(image.height)}
                                                className="object-cover"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === index
                                    ? 'bg-[#1E1E1E]'
                                    : 'bg-[#D9D9D9]'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute right-0 top-0 w-[715.23px] h-[900px] pointer-events-none">
                <Image
                    src="/images/about flower.png"
                    alt="Decorative flowers"
                    width={715}
                    height={753}
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    )
}
