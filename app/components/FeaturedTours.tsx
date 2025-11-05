'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function FeaturedTours() {
  const router = useRouter()

  const tours = [
    {
      id: 1,
      name: "Luxury Gorilla Trekking",
      duration: "3 Days",
      image: "/gallery/grok.jpg",
      highlights: ["Bwindi Forest", "Mountain Gorillas", "Premium Lodges"],
      difficulty: "Moderate",
      type: "Wildlife"
    },
    {
      id: 2,
      name: "Premium Wildlife Safari", 
      duration: "5 Days",
      image: "/gallery/wildlife.jpg",
      highlights: ["Queen Elizabeth NP", "Tree Lions", "Boat Cruise"],
      difficulty: "Easy",
      type: "Safari"
    },
    {
      id: 3,
      name: "Cultural Immersion Experience",
      duration: "4 Days", 
      image: "/gallery/culture.jpg",
      highlights: ["Local Tribes", "Waterfalls", "Traditional Dances"],
      difficulty: "Easy",
      type: "Cultural"
    },
    {
      id: 4,
      name: "Elephant Safari Adventure",
      duration: "4 Days",
      image: "/gallery/elephants.jpg",
      highlights: ["Elephant Herds", "Game Drives", "Bird Watching"],
      difficulty: "Easy",
      type: "Wildlife"
    },
    {
      id: 5,
      name: "Boutique Lodge Retreat",
      duration: "3 Days",
      image: "/gallery/boutique1.jpg",
      highlights: ["Luxury Accommodation", "Spa", "Fine Dining"],
      difficulty: "Easy", 
      type: "Luxury"
    },
    {
      id: 6,
      name: "Adventure Tour Package",
      duration: "6 Days",
      image: "/gallery/tourists.jpg",
      highlights: ["Multiple Parks", "Guided Tours", "Photography"],
      difficulty: "Moderate",
      type: "Adventure"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-green-50/30">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            ✨ Boutique Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Signature Safari Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated luxury journeys showcasing Uganda's wild beauty and exclusive accommodations
          </p>
        </div>

        {/* Enhanced Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100/50"
            >
              {/* Image with Overlay */}
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={tour.image} 
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 text-white px-3 py-2 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {tour.type}
                  </span>
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    tour.difficulty === 'Moderate' 
                      ? 'bg-orange-500/90 text-white' 
                      : 'bg-green-500/90 text-white'
                  }`}>
                    {tour.difficulty}
                  </span>
                </div>

                {/* Tour Title on Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tour.name}
                  </h3>
                  <div className="flex items-center text-white/90">
                    <span className="text-lg mr-2">🕒</span>
                    <span className="font-semibold">{tour.duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-white to-green-50/30">
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Experience Includes</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium border border-green-200/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Single View Details Button */}
                <button 
                  onClick={() => router.push(`/tours?highlight=${tour.id}`)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-green-700 via-emerald-800 to-green-900 rounded-3xl p-12 text-white max-w-5xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">Ready for Your Luxury Adventure?</h3>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Can't find what you're looking for? We specialize in creating bespoke safari experiences tailored to your dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => router.push('/book')}
                  className="bg-white text-green-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  ✨ Customize Your Safari
                </button>
                <button 
                  onClick={() => router.push('/tours')}
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  View All Packages
                </button>
              </div>
              <p className="mt-6 text-green-200 text-sm">
                🏆 Best Price Guarantee • 💫 24/7 Support • 🌍 Sustainable Tourism
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}