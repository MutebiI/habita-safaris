import Image from 'next/image'

export default function About() {
  return (
    <div className="pt-20">
      {/* Modern Hero Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/aboutme.jpg" // Replace with your preferred image path
            alt="Uganda Safari Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Optional: Gradient overlay for extra depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Igara Tour & Safaris
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white font-light">
            Crafting Unforgettable Uganda Safari Experiences Since 2015
          </p>
          <div className="w-24 h-1 bg-emerald-300 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* Rest of your existing code remains the same */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/gallery/aboutUs.jpg"
                  alt="Begumisa Simon & Team - Igara Tour & Safaris"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-100 rounded-full z-0"></div>
            </div>
            
            <div className="lg:pl-8">
              <div className="inline-block mb-4">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                From Passion to Premier Safari Experiences
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by <strong>Begumisa Simon</strong>, Igara Tour & Safaris was born from a deep-rooted passion 
                for Uganda's breathtaking wildlife and rich cultural tapestry. What began as a humble family venture 
                has blossomed into one of Uganda's most trusted and innovative safari companies.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in crafting bespoke safari adventures that immerse travelers in the authentic beauty 
                of Uganda - from intimate gorilla encounters in Bwindi to spectacular wildlife viewing in Queen 
                Elizabeth National Park.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Happy Travelers</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                  <div className="text-gray-600 font-medium">Years Excellence</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Unique Packages</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Igara Safaris
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional experiences while preserving Uganda's natural wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl">
                🌍
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Tourism</h3>
              <p className="text-gray-600 leading-relaxed">
                Eco-friendly practices and community support are at the heart of every adventure we create.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Local Guides</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified guides bring Uganda's wildlife and culture to life with unparalleled expertise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl">
                💝
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tailored Experiences</h3>
              <p className="text-gray-600 leading-relaxed">
                Every journey is meticulously customized to match your dreams, style, and budget.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                We invest in local communities and empower them through responsible tourism initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Ugandan Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create your perfect safari experience together. Contact us to start planning your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Plan Your Safari
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
              View Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}