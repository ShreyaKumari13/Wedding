import { Cinzel, Raleway } from 'next/font/google'
import Link from 'next/link'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['900'],
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400'],
})

interface ButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

function Button({ children, className = '', size = 'md' }: ButtonProps) {
  return (
    <button className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </button>
  )
}

export default function Contact() {
  return (
    <div className="relative">
      {/* Base background color */}
      <div className="absolute inset-0 bg-[#B17406] opacity-10" />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/noise.svg")',
          backgroundSize: '500px 500px',
          opacity: 0.5,
          mixBlendMode: 'soft-light'
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className={`${cinzel.className} text-[45px] font-[900] leading-[54px] text-[#1A281F]`}>
            Let us help you bring your wedding vision to life!
          </h2>
          
          <div className="mt-8">
            <Link href="/contact">
              <Button 
                className={`${raleway.className} bg-[#B17406] hover:bg-[#8B5D05] text-white px-12 py-4 text-[20px] font-[400] rounded-md transition-colors duration-200`}
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
