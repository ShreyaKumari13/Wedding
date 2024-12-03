"use client"

import { useState } from "react"
import { Cinzel, Raleway } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['900'],
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    terms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex">
        {/* Left Column - 45% */}
        <div className="w-[45%] pr-8">
          <div className="mb-8">
            <h1 className={`${cinzel.className} text-[45px] font-[900] leading-[54px] text-left text-[#1A281F]`}>
              We will plan
              <br />
              your day, your
              <br />
              way.
            </h1>
            <h2 className={`${cinzel.className} text-[27px] font-[700] leading-[40.5px] text-left text-[#787878]`}>
              READY TO GET IN TOUCH?
            </h2>
            <p className={`${raleway.className} text-[24px] font-[400] leading-[36px] text-left text-[#787878]`}>
              At Princess Wedding, we're here to assist you every step of the way!
            </p>
          </div>
        </div>

        {/* Right Column - 55% */}
        <div className="w-[55%] pl-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label 
                htmlFor="name" 
                className={`${raleway.className} block text-[#1A281F] mb-2`}
              >
                Your Name:
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`${raleway.className} w-full p-3 border border-[#B17406] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B17406]`}
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="phone" 
                className={`${raleway.className} block text-[#1A281F] mb-2`}
              >
                Your Phone:
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`${raleway.className} w-full p-3 border border-[#B17406] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B17406]`}
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className={`${raleway.className} block text-[#1A281F] mb-2`}
              >
                Your Email:
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`${raleway.className} w-full p-3 border border-[#B17406] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B17406]`}
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="message" 
                className={`${raleway.className} block text-[#1A281F] mb-2`}
              >
                Message:
              </label>
              <textarea
                id="message"
                required
                placeholder="Write your message here"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${raleway.className} w-full p-3 border border-[#B17406] rounded-md min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#B17406]`}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={(e) =>
                  setFormData({ ...formData, terms: e.target.checked })
                }
                className="h-4 w-4 text-[#B17406] focus:ring-[#B17406] border-gray-300 rounded"
              />
              <label 
                htmlFor="terms" 
                className={`${raleway.className} text-sm text-[#1A281F]`}
              >
                I agree to the Terms
              </label>
            </div>

            <button
              type="submit"
              className={`${raleway.className} w-[85px] bg-[#B17406] hover:bg-[#9A7209] text-white py-3 rounded-md font-semibold transition-colors duration-300`}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
