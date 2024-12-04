'use client'

import Link from "next/link"
import Image from "next/image"
import { Cinzel } from 'next/font/google'
import { usePathname } from 'next/navigation'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700', '900'],
})

const navigationItems = [
  {
    title: "Wedding Dresses & Attire",
    href: "/catalogue",
    id: "dresses"
  },
  {
    title: "Decorations & Accessories",
    href: "/catalogue/decorations",
    id: "decorations"
  },
  {
    title: "Invitations & Stationery",
    href: "/catalogue/invitations",
    id: "invitations"
  },
  {
    title: "Favors & Gifts",
    href: "/catalogue/favors",
    id: "favors"
  },
]

const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

interface CataHeaderProps {
  activeSection?: string;
}

export function CataHeader({ activeSection }: CataHeaderProps) {
  const pathname = usePathname();
  
  return (
    <header className="max-w-7xl mx-auto border-b bg-white py-4">
      <div className="px-4 py-6">
        <h1 className={`${cinzel.className} mb-6 text-left text-[27px] font-[700] leading-[36.4px] text-[#1A281F]`}>
          Discover Our Extensive Catalog Filled With Everything You Need
          <br />
          For Your Special Day:
        </h1>
        <nav>
          <ul className="flex items-center justify-between">
            {navigationItems.map((item) => {
              const isActive = activeSection ? item.id === activeSection : pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      `${cinzel.className} inline-block whitespace-nowrap rounded-md px-4 py-2 text-[21px] font-[900] leading-[25.2px] text-left transition-colors`,
                      isActive
                        ? "bg-[#B17406] text-[#FFFFFF] hover:bg-[#D9A441] hover:text-[#FFFFFF]"
                        : "bg-white text-[#1A281F] hover:bg-[#F0E6D2] hover:text-[#1A281F]"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="px-4 py-16">
        <div className="grid grid-cols-8 grid-rows-8 gap-8 relative min-h-[800px]">
          {/* Venue Selection */}
          <div className="col-span-3 row-span-5 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src="/imgservice/1.png"
                alt="Elegant white-themed outdoor venue with floral arch"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Catering */}
          <div className="col-start-4 col-span-5 row-span-3 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src="/imgservice/2.png"
                alt="Elegant multi-tiered dessert and catering display"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Section (Floral) */}
          <div className="col-start-1 col-span-4 row-start-6 row-span-3 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src="/imgservice/3.png"
                alt="Luxurious hanging floral installation with crystal decorations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Photography */}
          <div className="col-start-5 col-span-4 row-start-4 row-span-5 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src="/imgservice/4.png"
                alt="Romantic couple photo at historic venue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Grid Section - Duplicate */}
        <div className="grid grid-cols-8 grid-rows-8 gap-8 relative min-h-[800px] mt-16 mb-16">
          {/* Venue Selection */}
          <div className="col-span-3 row-span-5 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src="/imgservice/1.png"
                alt="Elegant white-themed outdoor venue with floral arch"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Catering */}
          <div className="col-start-4 col-span-5 row-span-3 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src="/imgservice/2.png"
                alt="Elegant multi-tiered dessert and catering display"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Section (Floral) */}
          <div className="col-start-1 col-span-4 row-start-6 row-span-3 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src="/imgservice/3.png"
                alt="Luxurious hanging floral installation with crystal decorations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Photography */}
          <div className="col-start-5 col-span-4 row-start-4 row-span-5 relative flex flex-col">
            <div className="relative flex-1">
              <Image
                src="/imgservice/4.png"
                alt="Romantic couple photo at historic venue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

