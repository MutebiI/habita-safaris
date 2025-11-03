export default function FeaturedTours() {
  const tours = [
    {
      id: 1,
      name: "Gorilla Trekking Adventure",
      duration: "3 Days",
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Wildlife Safari Experience",
      duration: "5 Days",
      price: "$1,800",
      image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Cultural Tour & Nature",
      duration: "4 Days",
      price: "$950",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Safari Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences that showcase the best of Uganda's wildlife and culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-600 font-semibold">{tour.duration}</span>
                  <span className="text-2xl font-bold text-yellow-600">{tour.price}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}