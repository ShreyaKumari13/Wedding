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

    return `${raleway.className} text-[20px] leading-[23.48px] ${isCurrentPath ? 'text-white font-[700]' : 'text-[#F5F5F5]'} hover:text-white hover:font-[700] transition-all`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-32">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Desktop Navigation */}
          <div className={`hidden lg:block flex-1 ml-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex items-center justify-end gap-10">
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
                <button
                  className={`${pathname.includes('/catalogue') ? 'text-[#1A281F] hover:text-[#1A281F]' : (pathname === '/about' ? 'text-[#1A281F]' : 'text-[#F5F5F5] hover:text-white')} transition-colors flex items-center gap-2`}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-[#1A281F] pt-20">
              <ul className="flex flex-col items-center gap-6">
                <li>
                  <Link 
                    href="/" 
                    className={getLinkStyle('/')}
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className={getLinkStyle('/about')}
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services" 
                    className={getLinkStyle('/services')}
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/catalogue" 
                    className={getLinkStyle('/catalogue')}
                    onClick={toggleMenu}
                  >
                    Catalogue
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className={getLinkStyle('/contact')}
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <button
                    className={`${pathname.includes('/catalogue') ? 'text-[#1A281F] hover:text-[#1A281F]' : (pathname === '/about' ? 'text-[#1A281F]' : 'text-[#F5F5F5] hover:text-white')} transition-colors flex items-center gap-2`}
                    aria-label="Search"
                    onClick={toggleMenu}
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
