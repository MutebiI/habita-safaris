export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Ultimate Guide to Gorilla Trekking in Uganda",
      excerpt: "Everything you need to know about tracking mountain gorillas in Bwindi Impenetrable Forest - permits, preparation, and what to expect.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Gorilla Trekking",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Begumisa Simon"
    },
    {
      id: 2,
      title: "Best Time to Visit Uganda for Wildlife Safaris",
      excerpt: "Discover the perfect seasons for game viewing, bird watching, and primate tracking in Uganda's national parks.",
      image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Travel Tips",
      readTime: "6 min read", 
      date: "Dec 10, 2024",
      author: "Habita Team"
    },
    {
      id: 3,
      title: "Cultural Experiences in Western Uganda",
      excerpt: "From Batwa pygmies to Bakiga traditions - immerse yourself in Uganda's rich cultural heritage during your safari.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Culture",
      readTime: "5 min read",
      date: "Dec 5, 2024",
      author: "Begumisa Simon"
    },
    {
      id: 4,
      title: "Photography Tips for Safari Beginners",
      excerpt: "Capture stunning wildlife and landscape photos with our expert tips on equipment, settings, and techniques.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Photography", 
      readTime: "7 min read",
      date: "Nov 28, 2024",
      author: "Habita Team"
    },
    {
      id: 5,
      title: "Why Choose Uganda Over Other Safari Destinations",
      excerpt: "Compare Uganda's unique offerings with Kenya and Tanzania - from affordability to diverse experiences.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Safari Guide",
      readTime: "10 min read",
      date: "Nov 20, 2024", 
      author: "Begumisa Simon"
    },
    {
      id: 6,
      title: "Family-Friendly Safari Activities in Uganda",
      excerpt: "Safe and exciting adventures for travelers with children - creating unforgettable family memories.",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Family Travel",
      readTime: "6 min read",
      date: "Nov 15, 2024",
      author: "Habita Team"
    }
  ]

  const categories = ["All", "Gorilla Trekking", "Travel Tips", "Culture", "Photography", "Safari Guide", "Family Travel"]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-400 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Habita Safari Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert insights, travel tips, and stories from the heart of Uganda's wilderness
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white flex flex-col justify-center">
                <span className="bg-white text-green-600 px-4 py-1 rounded-full text-sm font-semibold w-fit mb-4">
                  Featured
                </span>
                <h2 className="text-4xl font-bold mb-4">Mountain Gorillas: Uganda's Priceless Treasure</h2>
                <p className="text-lg mb-6 opacity-90">
                  An in-depth look at conservation efforts and why Uganda remains the best place for gorilla trekking adventures in Africa.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span>By Begumisa Simon</span>
                  <span>•</span>
                  <span>Dec 18, 2024</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold mt-6 w-fit hover:bg-gray-100 transition duration-300">
                  Read Article
                </button>
              </div>
              <div className="h-96 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Featured Gorilla"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>By {article.author}</span>
                  </div>

                  <button className="w-full mt-4 bg-transparent border-2 border-green-600 text-green-600 py-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition duration-300">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}