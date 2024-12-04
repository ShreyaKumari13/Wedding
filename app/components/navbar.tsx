'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Raleway } from 'next/font/google';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '700'],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkStyle = (path: string) => {
    const isSpecialPage = pathname.includes('/catalogue') || pathname === '/about';
    const isCurrentPath = path === '/catalogue' ? pathname.includes('/catalogue') : pathname === path;

    if (isSpecialPage) {
      return `${raleway.className} text-[20px] ${isCurrentPath ? 'font-bold' : 'font-light'} leading-[23.48px] text-[#1A281F] hover:font-bold transition-all`;
    }

    return `${raleway.className} text-[20px] leading-[23.48px] ${isCurrentPath ? 'text-white font-[700]' : ''} hover:text-white hover:font-[700] transition-all`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 ${isMenuOpen ? 'h-screen' : ''}`}>
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
              className={getLinkStyle('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={getLinkStyle('/about')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={getLinkStyle('/services')}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/catalogue" 
              className={getLinkStyle('/catalogue')}
            >
              Catalogue
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={getLinkStyle('/contact')}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <div className="flex items-center gap-4">
              <button
                className={`${pathname === '/about' ? 'text-[#1A281F]' : 'text-[#F5F5F5] hover:text-white'} transition-colors`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
