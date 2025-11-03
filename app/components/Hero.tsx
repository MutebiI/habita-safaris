'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/gallery/cover.jpg',
      title: 'Discover Uganda',
      subtitle: 'The Pearl of Africa with Habita Safaris'
    },
    {
      image: '/gallery/mountaingorillas.jpg',
      title: 'Mountain Gorillas',
      subtitle: 'Experience rare gorilla trekking adventures'
    },
    {
      image: '/gallery/wildlife.jpg',
      title: 'Wildlife Safaris',
      subtitle: 'Encounter the Big Five in their natural habitat'
    },
    {
      image: '/gallery/stunninglandscape.jpg',
      title: 'Stunning Landscapes',
      subtitle: 'From mighty waterfalls to serene lakes'
    },
    {
      image: '/gallery/culture.jpg',
      title: 'Cultural Experiences',
      subtitle: 'Immerse yourself in Uganda\'s rich heritage'
    }
  ]

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        />
      ))}
      
      {/* GRADIENT OVERLAY LAYER - You can adjust these! */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-blue-900/40 to-purple-900/30 mix-blend-multiply"></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {slides[currentSlide].title}
          <span className="block text-3xl md:text-4xl mt-2">
            {slides[currentSlide].subtitle}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
          Experience the wild, the culture, and the adventure of a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book a Safari
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Packages
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300 backdrop-blur-sm"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300 backdrop-blur-sm"
      >
        ›
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}