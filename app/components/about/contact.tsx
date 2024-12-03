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
}

function Button({ children, className = '' }: ButtonProps) {
  return (
    <button className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </button>
  )
}

export default function ContactCTA() {
  return (
    <div className="w-full bg-[#f5f5f5] relative overflow-hidden">
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          width: '200%',
          height: '200%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className={`${cinzel.className} text-[45px] font-[900] leading-[54px] text-[#1A281F]`}>
            Let us help you bring your wedding vision to life!
          </h2>
          
          <div>
            <Link href="/contact">
              <Button 
                className={`${raleway.className} bg-[#B17406] hover:bg-[#8B5D05] text-white px-12 py-4 text-[20px] font-[400] rounded-md transition-colors duration-200`}
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
