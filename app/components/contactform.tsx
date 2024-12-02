'use client'

import { useState } from "react"
import Image from "next/image"
import { Cinzel, Raleway } from 'next/font/google'

const cinzel = Cinzel({ 
  weight: '700',
  subsets: ['latin'],
})

const raleway = Raleway({ 
  weight: '400',
  subsets: ['latin'],
})

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="h-[550px] max-w-7xl mx-auto grid lg:grid-cols-2 bg-red-300">
      {/* Form Section */}
      <div className="flex flex-col p-8 lg:p-16 justify-center h-[550px]">
        <div className="max-w-md">
          <p className={`${raleway.className} text-sm tracking-[0.2em] mb-2`}>
            CONTACT
          </p>
          <h1 className={`${cinzel.className} text-4xl lg:text-5xl mb-12 text-[#1A281F]`}>
            Get in Touch
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="NAME"
                required
                className={`${raleway.className} w-full border-b border-gray-300 py-2 placeholder:text-gray-500 focus:outline-none focus:border-[#E4A853] transition-colors bg-transparent`}
              />
            </div>

            <div className="space-y-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className={`${raleway.className} w-full border-b border-gray-300 py-2 placeholder:text-gray-500 focus:outline-none focus:border-[#E4A853] transition-colors bg-transparent`}
              />
            </div>

            <div className="space-y-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                required
                rows={4}
                className={`${raleway.className} w-full border-b border-gray-300 py-2 placeholder:text-gray-500 focus:outline-none focus:border-[#E4A853] transition-colors bg-transparent resize-none`}
              />
            </div>

            <button
              type="submit"
              className={`${cinzel.className} bg-[#E4A853] text-white px-12 py-3 rounded hover:bg-[#c28d3a] transition-colors`}
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative hidden lg:block w-[450px] h-[550px]">
        <Image
          src="/images/Get In touch.png"
          alt="Happy couple on their wedding day"
          fill
          className="object-cover"
          sizes="450px"
        />
      </div>
    </section>
  )
}
