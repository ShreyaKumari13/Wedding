import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold mb-4">WHY CHOOSE US?</h2>
        <p className="text-lg text-gray-600">
          Discover why we&apos;re the perfect partner for your special day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="space-y-6">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Bride in wedding dress"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <span className="text-6xl font-serif text-[#B8860B] font-bold">1</span>
            <h3 className="text-xl font-serif font-bold mt-4 mb-2">
              PERSONALIZED SERVICE
            </h3>
            <p className="text-gray-600">
              Tailored experiences to suit your unique vision.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="space-y-6">
          <div className="text-center order-2 lg:order-1">
            <span className="text-6xl font-serif text-[#B8860B] font-bold">2</span>
            <h3 className="text-xl font-serif font-bold mt-4 mb-2">
              EXPERIENCED PROFESSIONALS
            </h3>
            <p className="text-gray-600">
              Our team is dedicated to making your day unforgettable.
            </p>
          </div>
          <div className="relative aspect-[3/4] w-full order-1 lg:order-2">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Table setting with flowers"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="space-y-6">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Outdoor venue setup"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <span className="text-6xl font-serif text-[#B8860B] font-bold">3</span>
            <h3 className="text-xl font-serif font-bold mt-4 mb-2">
              WIDE SELECTION OF VENUES AND SERVICES
            </h3>
            <p className="text-gray-600">
              From venues to florals, we offer everything you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

