'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Raleway } from 'next/font/google';
import { Search } from 'lucide-react';

const raleway = Raleway({
  weight: ['300', '700'],
  subsets: ['latin'],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full bg-red-300 ${isMenuOpen ? 'h-screen' : ''}`}>
      <div className="container mx-auto flex justify-between items-center py-4 lg:px-32">
        {/* Logo */}
        <div className="flex items-center ">
          <Link href="/">
            <div className="relative w-[150px] h-[50px] bg-white">
              <Image
                src="/images/image 2.png"
                alt="Wedding Planner Logo"
                fill
                sizes="150px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Desktop Menu Links */}
        <ul className={`hidden md:flex gap-10 text-[#F5F5F5] items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link 
              href="/" 
              className={`${raleway.className} text-[20px] leading-[23.48px] hover:text-white hover:font-[700] transition-all`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`${raleway.className} text-[20px] leading-[23.48px] hover:text-white hover:font-[700] transition-all`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={`${raleway.className} text-[20px] leading-[23.48px] hover:text-white hover:font-[700] transition-all`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/catalogue" 
              className={`${raleway.className} text-[20px] leading-[23.48px] hover:text-white hover:font-[700] transition-all`}
            >
              Catalogue
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`${raleway.className} text-[20px] leading-[23.48px] hover:text-white hover:font-[700] transition-all`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <button
              className="text-[#F5F5F5] hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
