export default function Tours() {
  const tours = [
    {
      id: 1,
      name: "Gorilla Trekking Adventure",
      duration: "3 Days",
      price: "$1,200",
      difficulty: "Moderate",
      groupSize: "8 people max",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: ["Bwindi Forest", "Mountain Gorillas", "Local Community Visit"]
    },
    {
      id: 2,
      name: "Wildlife Safari Experience",
      duration: "5 Days",
      price: "$1,800", 
      difficulty: "Easy",
      groupSize: "12 people max",
      image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: ["Queen Elizabeth NP", "Tree Climbing Lions", "Boat Cruise"]
    },
    {
      id: 3,
      name: "Cultural Tour & Nature",
      duration: "4 Days",
      price: "$950",
      difficulty: "Easy", 
      groupSize: "10 people max",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: ["Local Tribes", "Waterfalls", "Traditional Dances"]
    },
    {
      id: 4,
      name: "Chimpanzee Tracking",
      duration: "2 Days", 
      price: "$700",
      difficulty: "Moderate",
      groupSize: "6 people max",
      image: "https://images.unsplash.com/photo-1544568157-8a7ecc5d5d70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      highlights: ["Kibale Forest", "Chimpanzees", "Bird Watching"]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Safari Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Handcrafted Uganda safari experiences tailored for unforgettable adventures
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{tour.name}</h3>
                    <span className="text-2xl font-bold text-yellow-600">{tour.price}</span>
                  </div>
                  
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span>🕒 {tour.duration}</span>
                    <span>⚡ {tour.difficulty}</span>
                    <span>👥 {tour.groupSize}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300">
                      Book Now
                    </button>
                    <button className="flex-1 border border-gray-300 hover:border-green-600 text-gray-700 py-3 rounded-lg font-semibold transition duration-300">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}