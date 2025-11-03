export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Bwindi National Park",
      type: "Gorilla Trekking",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Home to nearly half of the world's remaining mountain gorillas",
      bestTime: "June-August, Dec-Feb",
      highlights: ["Mountain Gorillas", "Primates", "Rainforest"]
    },
    {
      id: 2,
      name: "Queen Elizabeth NP",
      type: "Wildlife Safari",
      image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Uganda's most popular savanna park with diverse wildlife",
      bestTime: "January-February, June-July",
      highlights: ["Tree Lions", "Elephants", "Boat Safari"]
    },
    {
      id: 3,
      name: "Murchison Falls",
      type: "Adventure & Wildlife",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "The Nile forces through a 7m gorge creating spectacular falls",
      bestTime: "December-February",
      highlights: ["Waterfalls", "Nile River", "Game Drives"]
    },
    {
      id: 4,
      name: "Lake Bunyonyi",
      type: "Scenic & Relaxation",
      image: "https://images.unsplash.com/photo-1544568157-8a7ecc5d5d70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Africa's second deepest lake with 29 beautiful islands",
      bestTime: "All Year Round",
      highlights: ["Islands", "Canoeing", "Birding"]
    },
    {
      id: 5,
      name: "Kibale Forest",
      type: "Primate Watching",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "The primate capital of the world with 13 species",
      bestTime: "March-May, Sept-November",
      highlights: ["Chimpanzees", "Monkeys", "Birding"]
    },
    {
      id: 6,
      name: "Kidepo Valley NP",
      type: "Wilderness Adventure",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Remote wilderness with stunning landscapes and unique wildlife",
      bestTime: "November-April",
      highlights: ["Wilderness", "Culture", "Game Viewing"]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Uganda's Wonders</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Explore the diverse landscapes and wildlife that make Uganda the Pearl of Africa
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Discover Uganda's Gems
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From mountain gorillas to spectacular waterfalls, explore the best of Uganda with Habita Safaris
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{destination.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Best Time to Visit:</h4>
                    <p className="text-green-600 font-medium">{destination.bestTime}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Explore Tours
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}