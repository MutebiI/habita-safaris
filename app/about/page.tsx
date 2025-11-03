import Image from 'next/image'
//igb- 320

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Igara Tour & Safaris</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner for unforgettable Uganda safari experiences since 2015
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by Begumisa Simon, Habita Safaris emerged from a deep passion for Uganda's 
                incredible wildlife and rich cultural heritage. What started as a small family business 
                has grown into one of Uganda's most trusted safari companies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in creating personalized safari experiences that connect travelers with 
                the authentic beauty of Uganda - from gorilla trekking in Bwindi to wildlife safaris 
                in Queen Elizabeth National Park.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">Safari Packages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">Team Photo - Begumisa Simon & Guides</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainable Tourism</h3>
              <p className="text-gray-600">
                We promote eco-friendly practices and support local communities through our operations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Guides</h3>
              <p className="text-gray-600">
                Our certified guides have extensive knowledge of Uganda's wildlife and culture.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Every safari is customized to match your interests, budget, and travel style.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}