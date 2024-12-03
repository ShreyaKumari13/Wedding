import Image from 'next/image'
import { Award, Lightbulb } from 'lucide-react'
import { Cinzel, Raleway } from 'next/font/google'

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['900'],
})

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400'],
})

export default function AboutValue() {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-16">
            <div className="text-center mb-12">
                <h2 className={`${cinzel.className} text-[45px] font-[900] leading-[54px] text-[#1A281F]`}>
                Our Mission
                </h2>
                <p className={`${raleway.className} text-[20px] font-[400] leading-[30px] text-[#1A281F] max-w-6xl mx-auto`}>
                At Princess Wedding, we are passionate about turning your wedding dreams into reality. Our mission is to provide exceptional service and create unforgettable moments for every couple. With years of experience in the wedding industry, our dedicated team will guide you through every step of the planning journey, ensuring a stress-free and joyous experience.
                </p>
            </div>
            {/* Heading and Description */}
            <div className="text-center mb-12">
                <h2 className={`${cinzel.className} text-[45px] font-[900] leading-[54px] text-[#1A281F]`}>
                    OUR VALUES
                </h2>
                <p className={`${raleway.className} text-[20px] font-[400] leading-[30px] text-[#1A281F] max-w-6xl mx-auto`}>
                    We take pride in our commitment to exceptional customer service, meticulous attention to detail, and a heartfelt
                    approach to crafting one-of-a-kind weddings. Your happiness is our ultimate reward.
                </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {/* Integrity */}
                <div className="text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="w-16  h-16 rounded-full border-2 border-gray-200 flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl font-serif mb-3">Integrity</h3>
                    <p className={`${raleway.className} text-gray-600`}>
                        We prioritize honesty and transparency in all we do.
                    </p>
                </div>

                {/* Central Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                        src="/about/Values.png"
                        alt="Elegant wedding venue with glass ceiling"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Creativity */}
                <div className="text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-serif mb-3">Creativity</h3>
                    <p className={`${raleway.className} text-gray-600`}>
                        We bring your vision to life with innovative ideas.
                    </p>
                </div>
            </div>

            {/* Excellence - Bottom Center */}
            <div className="text-center mt-8 max-w-xs mx-auto">
                <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center">
                        <Award className="w-8 h-8" />
                    </div>
                </div>
                <h3 className="text-2xl font-serif mb-3">Excellence</h3>
                <p className={`${raleway.className} text-gray-600`}>
                    We strive for perfection in every detail.
                </p>
            </div>
        </section>
    )
}
