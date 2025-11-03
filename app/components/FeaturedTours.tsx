'use client'

import { useRouter } from 'next/navigation'

export default function FeaturedTours() {
  const router = useRouter()

  const tours = [
    {
      id: 1,
      name: "Gorilla Trekking Adventure",
      duration: "3 Days",
      image: "/gallery/grok.jpg",
      highlights: ["Bwindi Forest", "Mountain Gorillas", "Local Community"],
      difficulty: "Moderate"
    },
    {
      id: 2,
      name: "Wildlife Safari Experience", 
      duration: "5 Days",
      image: "/gallery/wildlife.jpg",
      highlights: ["Queen Elizabeth NP", "Tree Lions", "Boat Safari"],
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Cultural Tour & Nature",
      duration: "4 Days", 
      image: "/gallery/culture.jpg",
      highlights: ["Local Tribes", "Waterfalls", "Traditional Dances"],
      difficulty: "Easy"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎯 Most Popular Adventures
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Signature Safari Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated journeys that capture the essence of Uganda's wild beauty and cultural richness
          </p>
        </div>

        {/* Enhanced Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Image with Overlay */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tour.difficulty === 'Moderate' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {tour.difficulty}
                  </span>
                </div>

                {/* Quick View on Hover */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <button 
                    onClick={() => router.push('/tours')}
                    className="w-full bg-white/90 hover:bg-white text-gray-800 py-2 rounded-lg font-semibold transition duration-300 backdrop-blur-sm"
                  >
                    Quick View
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition duration-300">
                  {tour.name}
                </h3>
                
                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Duration Only - No Price */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center text-green-600 font-semibold bg-green-50 px-4 py-2 rounded-lg">
                    <span className="text-lg">🕒</span>
                    <span className="ml-2">{tour.duration}</span>
                  </div>
                </div>

                {/* Action Buttons - Updated to pass package name */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => router.push(`/book?package=${encodeURIComponent(tour.name)}`)}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Book Now
                  </button>
                  <button 
                    onClick={() => router.push('/tours')}
                    className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 rounded-lg font-semibold transition duration-300"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready for Your Adventure?</h3>
            <p className="text-xl mb-6 opacity-90">
              Can't find what you're looking for? We specialize in creating custom safari experiences tailored to your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/book')}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105"
              >
                ✨ Customize Your Safari
              </button>
              <button 
                onClick={() => router.push('/tours')}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
              >
                View All Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}