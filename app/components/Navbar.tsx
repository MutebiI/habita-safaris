'use client'

import { useState, useRef, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If mobile menu is open AND click is outside both menu and button
      if (isOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target as Node) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
   
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside)
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-700">
            Igara Tour & Safaris
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
            <a href="/tours" className="text-gray-700 hover:text-green-600 font-medium">Tours</a>
            <a href="/destinations" className="text-gray-700 hover:text-green-600 font-medium">Destinations</a>
            <a href="/gallery" className="text-gray-700 hover:text-green-600 font-medium">Gallery</a>
            <a href="/blog" className="text-gray-700 hover:text-green-600 font-medium">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/book" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300 text-center block">
              Book Now
            </a>
          </div>

          {/* Mobile menu button - ENHANCED CLOSE ICON */}
          <button 
            ref={menuButtonRef}
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Enhanced Close Icon (X) - Beautiful red with animation
              <div className="w-6 h-6 relative">
                <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-red-500 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full transition-all duration-300"></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-red-500 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full transition-all duration-300"></div>
              </div>
            ) : (
              // Enhanced Hamburger Icon with smooth animation
              <div className="w-6 flex flex-col space-y-1.5 transition-all duration-300">
                <div className="h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300"></div>
                <div className="h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300"></div>
                <div className="h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div ref={mobileMenuRef} className="md:hidden bg-white py-4 border-t animate-slideDown">
            <div className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="/tours" 
                className="text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </a>
              <a 
                href="/destinations" 
                className="text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </a>
              <a 
                href="/gallery" 
                className="text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="/blog" 
                className="text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a 
                href="/contact" 
                className="text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a 
                href="/book" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 text-center block mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}