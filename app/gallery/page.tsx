'use client'

import { useState } from 'react'

interface GalleryImage {
  id: number
  src: string
  category: string
  title: string
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wildlife",
      title: "Mountain Gorilla Family"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Landscape", 
      title: "Savanna Sunset"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure",
      title: "Gorilla Trekking"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544568157-8a7ecc5d5d70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Culture",
      title: "Local Community"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wildlife",
      title: "Elephant Herd"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Landscape",
      title: "Murchison Falls"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure",
      title: "Safari Vehicle"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Culture",
      title: "Traditional Dance"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wildlife",
      title: "Lion Pride"
    }
  ]

  const categories = ["All", "Wildlife", "Landscape", "Adventure", "Culture"]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Capturing the magic of Uganda through our travelers' eyes
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition duration-500"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-yellow-400 transition duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}