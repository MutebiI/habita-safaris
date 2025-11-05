// 'use client'

// import { useState } from 'react'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="text-2xl font-bold text-green-700">
//             Igara Tour & Safaris
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
//             <a href="/about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
//             <a href="/tours" className="text-gray-700 hover:text-green-600 font-medium">Tours</a>
//             <a href="/destinations" className="text-gray-700 hover:text-green-600 font-medium">Destinations</a>
//             <a href="/gallery" className="text-gray-700 hover:text-green-600 font-medium">Gallery</a>
//             <a href="/blog" className="text-gray-700 hover:text-green-600 font-medium">Blog</a>
//             <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:block">
            
//            <a href="/book" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300 text-center block">
//               Book Now</a>
//             </div>

//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div className="w-6 flex flex-col space-y-1">
//               <div className="h-0.5 w-6 bg-gray-700"></div>
//               <div className="h-0.5 w-6 bg-gray-700"></div>
//               <div className="h-0.5 w-6 bg-gray-700"></div>
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white py-4 border-t">
//             <div className="flex flex-col space-y-4">
//               <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
//               <a href="/about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
//               <a href="/tours" className="text-gray-700 hover:text-green-600 font-medium">Tours</a>
//               <a href="/destinations" className="text-gray-700 hover:text-green-600 font-medium">Destinations</a>
//               <a href="/gallery" className="text-gray-700 hover:text-green-600 font-medium">Gallery</a>
//               <a href="/blog" className="text-gray-700 hover:text-green-600 font-medium">Blog</a>
//               <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
//              <a href="/book" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300 text-center block">
//               Book Now</a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
              Book Now</a>
            </div>

          {/* Mobile menu button - NOW WITH CLOSE ICON */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close Icon (X) - Red color
              <div className="w-6 h-6 relative">
                <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-red-600 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-red-600 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
              </div>
            ) : (
              // Hamburger Icon (three lines)
              <div className="w-6 flex flex-col space-y-1">
                <div className="h-0.5 w-6 bg-gray-700"></div>
                <div className="h-0.5 w-6 bg-gray-700"></div>
                <div className="h-0.5 w-6 bg-gray-700"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="/tours" className="text-gray-700 hover:text-green-600 font-medium">Tours</a>
              <a href="/destinations" className="text-gray-700 hover:text-green-600 font-medium">Destinations</a>
              <a href="/gallery" className="text-gray-700 hover:text-green-600 font-medium">Gallery</a>
              <a href="/blog" className="text-gray-700 hover:text-green-600 font-medium">Blog</a>
              <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
             <a href="/book" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300 text-center block">
              Book Now</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}