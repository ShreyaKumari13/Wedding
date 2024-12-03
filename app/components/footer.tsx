import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400',
})

export default function Footer() {
  return (
    <footer className="bg-[#1a2721] text-white  py-4 px-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image 
                src="/images/image 2.png"
                alt="Princess Wedding Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center  md:gap-12 mb-4 md:mb-0">
            <Link 
              href="/about" 
              className={`${raleway.className} text-[16px] leading-[24px] text-left text-[#F5F5F5] hover:text-[#E4A853]`}
            >
              About us
            </Link>
            <Link 
              href="/terms" 
              className={`${raleway.className} text-[16px] leading-[24px] text-left text-[#F5F5F5] hover:text-[#E4A853]`}
            >
              Terms of Service
            </Link>
            <Link 
              href="/privacy" 
              className={`${raleway.className} text-[16px] leading-[24px] text-left text-[#F5F5F5] hover:text-[#E4A853]`}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/faq" 
              className={`${raleway.className} text-[16px] leading-[24px] text-left text-[#F5F5F5] hover:text-[#E4A853]`}
            >
              FAQ
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Link 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4a853] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4a853] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4a853] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
