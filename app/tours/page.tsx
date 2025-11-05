// // 'use client'

// // import { useRouter, useSearchParams } from 'next/navigation'
// // import { useState, useEffect, useRef } from 'react'
// // import Image from 'next/image'

// // export default function Tours() {
// //   const router = useRouter()
// //   const searchParams = useSearchParams()
// //   const highlightedTourId = searchParams.get('highlight')
// //   const detailSectionRef = useRef(null)

// //   const tours = [
// //     {
// //       id: 1,
// //       name: "Luxury Gorilla Trekking",
// //       duration: "3 Days",
// //       price: "$1,200",
// //       difficulty: "Moderate",
// //       groupSize: "8 people max",
// //       image: "/gallery/grok.jpg",
// //       type: "Wildlife",
// //       description: "An unforgettable journey into the heart of Bwindi Impenetrable Forest to encounter the majestic mountain gorillas in their natural habitat. This premium experience includes luxury accommodation and expert guides.",
// //       highlights: ["Bwindi Forest", "Mountain Gorillas", "Premium Lodges", "Expert Guides", "Photography Opportunities"],
// //       itinerary: [
// //         "Day 1: Arrival and orientation at luxury lodge",
// //         "Day 2: Gorilla trekking experience with expert guides", 
// //         "Day 3: Community visit and departure"
// //       ],
// //       includes: ["Gorilla permits", "Luxury accommodation", "All meals", "Expert guides", "Transportation"],
// //       excludes: ["International flights", "Travel insurance", "Personal expenses"]
// //     },
// //     {
// //       id: 2,
// //       name: "Premium Wildlife Safari", 
// //       duration: "5 Days",
// //       price: "$1,800",
// //       difficulty: "Easy",
// //       groupSize: "12 people max",
// //       image: "/gallery/wildlife.jpg",
// //       type: "Safari",
// //       description: "Explore the diverse ecosystems of Queen Elizabeth National Park with game drives, boat cruises, and exceptional wildlife viewing opportunities including tree-climbing lions.",
// //       highlights: ["Queen Elizabeth NP", "Tree Climbing Lions", "Boat Cruise", "Game Drives", "Bird Watching"],
// //       itinerary: [
// //         "Day 1: Arrival and afternoon game drive",
// //         "Day 2: Morning game drive and boat cruise",
// //         "Day 3: Full day wildlife exploration",
// //         "Day 4: Cultural experiences and relaxation",
// //         "Day 5: Departure"
// //       ],
// //       includes: ["Park fees", "Accommodation", "All meals", "Game drives", "Boat cruise"],
// //       excludes: ["International flights", "Travel insurance", "Personal expenses"]
// //     },
// //     {
// //       id: 3,
// //       name: "Cultural Immersion Experience",
// //       duration: "4 Days",
// //       price: "$950",
// //       difficulty: "Easy", 
// //       groupSize: "10 people max",
// //       image: "/gallery/culture.jpg",
// //       type: "Cultural",
// //       description: "Immerse yourself in Uganda's rich cultural heritage with visits to local communities, traditional performances, and exploration of stunning natural waterfalls.",
// //       highlights: ["Local Tribes", "Waterfalls", "Traditional Dances", "Craft Markets", "Community Projects"],
// //       itinerary: [
// //         "Day 1: Arrival and cultural orientation",
// //         "Day 2: Community visits and traditional performances",
// //         "Day 3: Waterfall exploration and craft workshops",
// //         "Day 4: Departure with farewell ceremony"
// //       ],
// //       includes: ["Cultural experiences", "Accommodation", "All meals", "Local guides", "Entrance fees"],
// //       excludes: ["International flights", "Travel insurance", "Personal expenses"]
// //     },
// //     {
// //       id: 4,
// //       name: "Elephant Safari Adventure",
// //       duration: "4 Days",
// //       price: "$1,100",
// //       difficulty: "Easy",
// //       groupSize: "8 people max", 
// //       image: "/gallery/elephants.jpg",
// //       type: "Wildlife",
// //       description: "Witness the magnificent elephant herds in their natural habitat with guided game drives and exceptional wildlife photography opportunities.",
// //       highlights: ["Elephant Herds", "Game Drives", "Bird Watching", "Nature Walks", "Sunset Views"],
// //       itinerary: [
// //         "Day 1: Arrival and introductory game drive",
// //         "Day 2: Full day elephant tracking and observation",
// //         "Day 3: Bird watching and nature walks",
// //         "Day 4: Morning game drive and departure"
// //       ],
// //       includes: ["Park fees", "Accommodation", "All meals", "Game drives", "Expert guides"],
// //       excludes: ["International flights", "Travel insurance", "Personal expenses"]
// //     },
// //     {
// //       id: 5,
// //       name: "Boutique Lodge Retreat",
// //       duration: "3 Days",
// //       price: "$1,500",
// //       difficulty: "Easy", 
// //       groupSize: "6 people max",
// //       image: "/gallery/boutique1.jpg",
// //       type: "Luxury",
// //       description: "Experience ultimate luxury in our exclusive boutique lodges with spa treatments, fine dining, and personalized service in breathtaking natural settings.",
// //       highlights: ["Luxury Accommodation", "Spa Treatments", "Fine Dining", "Private Guides", "Scenic Views"],
// //       itinerary: [
// //         "Day 1: Arrival and spa welcome treatment",
// //         "Day 2: Private guided experiences and gourmet dining",
// //         "Day 3: Leisure activities and departure"
// //       ],
// //       includes: ["Luxury accommodation", "All meals", "Spa treatments", "Private guides", "Airport transfers"],
// //       excludes: ["International flights", "Travel insurance", "Personal expenses"]
// //     },
// //     {
// //       id: 6,
// //       name: "Adventure Tour Package",
// //       duration: "6 Days",
// //       price: "$2,200",
// //       difficulty: "Moderate",
// //       groupSize: "8 people max",
// //       image: "/gallery/tourists.jpg",
// //       type: "Adventure", 
// //       description: "The ultimate adventure package combining multiple national parks, guided tours, and photography opportunities for the adventurous traveler.",
// //       highlights: ["Multiple Parks", "Guided Tours", "Photography", "Hiking", "Wildlife Encounters"],
// //       itinerary: [
// //         "Day 1: Arrival and orientation",
// //         "Day 2-3: Park exploration and wildlife tracking",
// //         "Day 4-5: Adventure activities and cultural experiences",
// //         "Day 6: Departure"
// //       ],
// //       includes: ["All park fees", "Accommodation", "All meals", "Expert guides", "Adventure activities"],
// //       excludes: ["International flights", "Travel insurance", "Personal expenses"]
// //     },
// //     {
// //       id: 7,
// //       name: "Chimpanzee Tracking Experience",
// //       duration: "2 Days",
// //       price: "$700",
// //       difficulty: "Moderate",
// //       groupSize: "6 people max",
// //       image: "/gallery/chimpanzee.jpg",
// //       type: "Wildlife",
// //       description: "Get up close with our closest relatives in the wild. This immersive experience takes you deep into the forests to observe chimpanzees in their natural habitat.",
// //       highlights: ["Kibale Forest", "Chimpanzee Families", "Primate Watching", "Forest Walks", "Birding"],
// //       itinerary: [
// //         "Day 1: Arrival and chimpanzee tracking preparation",
// //         "Day 2: Chimpanzee tracking experience and departure"
// //       ],
// //       includes: ["Chimpanzee permits", "Accommodation", "All meals", "Expert guides", "Forest walks"],
// //       excludes: ["International flights", "Travel insurance", "Personal expenses"]
// //     },
// //     {
// //       id: 8,
// //       name: "Bird Watching Paradise",
// //       duration: "4 Days",
// //       price: "$900",
// //       difficulty: "Easy",
// //       groupSize: "8 people max",
// //       image: "/gallery/birding.jpg", 
// //       type: "Wildlife",
// //       description: "Uganda is a bird watcher's paradise with over 1000 species. This specialized tour takes you to the best birding spots with expert ornithologists.",
// //       highlights: ["Expert Bird Guides", "Multiple Habitats", "Rare Species", "Photography", "Nature Walks"],
// //       itinerary: [
// //         "Day 1: Arrival and introductory birding session",
// //         "Day 2: Wetland and forest bird watching",
// //         "Day 3: Savannah and specialized habitats",
// //         "Day 4: Final birding session and departure"
// //       ],
// //       includes: ["Expert bird guides", "Accommodation", "All meals", "Binoculars provided", "Transportation"],
// //       excludes: ["International flights", "Travel insurance", "Personal expenses"]
// //     }
// //   ]

// //   const [selectedTour, setSelectedTour] = useState(tours[0])

// //   useEffect(() => {
// //     if (highlightedTourId) {
// //       const tour = tours.find(t => t.id === parseInt(highlightedTourId))
// //       if (tour) {
// //         setSelectedTour(tour)
// //         // Scroll to top when coming from homepage
// //         setTimeout(() => {
// //           window.scrollTo({ top: 0, behavior: 'smooth' })
// //         }, 100)
// //       }
// //     }
// //   }, [highlightedTourId])

// //   const handleTourSelect = (tour) => {
// //     setSelectedTour(tour)
    
// //     // On mobile, scroll to the top to show the detailed view
// //     if (window.innerWidth < 1024) { // 1024px is lg breakpoint
// //       setTimeout(() => {
// //         window.scrollTo({ 
// //           top: 0, 
// //           behavior: 'smooth' 
// //         })
// //       }, 100)
// //     }
// //   }

// //   return (
// //     <div className="pt-20">
// //       {/* Hero with Background Image */}
// //       <section className="relative py-24 overflow-hidden">
// //         {/* Background Image */}
// //         <div className="absolute inset-0">
// //           <Image
// //             src="/gallery/aboutme.jpg" // You can change this to any safari background image
// //             alt="Uganda Safari Background"
// //             fill
// //             className="object-cover"
// //             priority
// //           />
// //           {/* Dark overlay for better text readability */}
// //           <div className="absolute inset-0 bg-black/50"></div>
// //           {/* Optional gradient overlay */}
// //           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
// //         </div>
        
// //         <div className="container mx-auto px-4 text-center relative z-10">
// //           <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
// //             Safari Packages
// //           </h1>
// //           <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white font-light">
// //             Handcrafted Uganda safari experiences tailored for unforgettable adventures
// //           </p>
// //         </div>
// //       </section>

// //       {/* Master-Detail Layout */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //             {/* Left Column - Detailed View (2/3 width on large screens) */}
// //             <div className="lg:col-span-2" ref={detailSectionRef}>
// //               <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-green-100">
// //                 {/* Tour Image */}
// //                 <div className="relative h-96 overflow-hidden">
// //                   <Image 
// //                     src={selectedTour.image} 
// //                     alt={selectedTour.name}
// //                     fill
// //                     className="object-cover"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
// //                   <div className="absolute bottom-6 left-6">
// //                     <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
// //                       {selectedTour.type}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* Tour Details */}
// //                 <div className="p-8">
// //                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
// //                     <div>
// //                       <h2 className="text-4xl font-bold text-gray-800 mb-2">{selectedTour.name}</h2>
// //                       <div className="flex items-center gap-4 text-gray-600 mb-4">
// //                         <span className="flex items-center">
// //                           <span className="text-lg mr-2">🕒</span>
// //                           {selectedTour.duration}
// //                         </span>
// //                         <span className="flex items-center">
// //                           <span className="text-lg mr-2">⚡</span>
// //                           {selectedTour.difficulty}
// //                         </span>
// //                         <span className="flex items-center">
// //                           <span className="text-lg mr-2">👥</span>
// //                           {selectedTour.groupSize}
// //                         </span>
// //                       </div>
// //                     </div>
// //                     <div className="text-3xl font-bold text-green-600 mb-4 lg:mb-0">
// //                       {selectedTour.price}
// //                     </div>
// //                   </div>

// //                   {/* Description */}
// //                   <p className="text-lg text-gray-700 mb-8 leading-relaxed">
// //                     {selectedTour.description}
// //                   </p>

// //                   {/* Highlights */}
// //                   <div className="mb-8">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience Highlights</h3>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
// //                       {selectedTour.highlights.map((highlight, index) => (
// //                         <div key={index} className="flex items-center bg-green-50 rounded-lg p-3">
// //                           <span className="text-green-600 mr-3">✓</span>
// //                           <span className="text-gray-700 font-medium">{highlight}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* Itinerary */}
// //                   <div className="mb-8">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-4">Tour Itinerary</h3>
// //                     <div className="space-y-3">
// //                       {selectedTour.itinerary.map((day, index) => (
// //                         <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
// //                           <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
// //                             {index + 1}
// //                           </span>
// //                           <span className="text-gray-700">{day}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* Includes/Excludes */}
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
// //                     <div>
// //                       <h4 className="text-xl font-bold text-gray-800 mb-3 text-green-600">What's Included</h4>
// //                       <ul className="space-y-2">
// //                         {selectedTour.includes.map((item, index) => (
// //                           <li key={index} className="flex items-center text-gray-700">
// //                             <span className="text-green-500 mr-2">✓</span>
// //                             {item}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                     <div>
// //                       <h4 className="text-xl font-bold text-gray-800 mb-3 text-red-500">What's Excluded</h4>
// //                       <ul className="space-y-2">
// //                         {selectedTour.excludes.map((item, index) => (
// //                           <li key={index} className="flex items-center text-gray-700">
// //                             <span className="text-red-500 mr-2">✗</span>
// //                             {item}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   </div>

// //                   {/* Book Now Button */}
// //                   <button 
// //                     onClick={() => router.push(`/book?package=${encodeURIComponent(selectedTour.name)}`)}
// //                     className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
// //                   >
// //                     Book This Package - {selectedTour.price}
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column - Tour List (1/3 width on large screens) */}
// //             <div className="lg:h-[1490px] lg:overflow-y-auto lg:pr-4 lg:pb-6">
// //               <div className="space-y-6">
// //                 {tours.map((tour) => (
// //                   <div 
// //                     key={tour.id}
// //                     onClick={() => handleTourSelect(tour)}
// //                     className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
// //                       selectedTour.id === tour.id ? 'border-green-500' : 'border-transparent'
// //                     }`}
// //                   >
// //                     <div className="relative h-48 overflow-hidden">
// //                       <Image 
// //                         src={tour.image} 
// //                         alt={tour.name}
// //                         fill
// //                         className="object-cover hover:scale-110 transition duration-500"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
// //                       <div className="absolute bottom-4 left-4">
// //                         <h3 className="text-xl font-bold text-white">{tour.name}</h3>
// //                       </div>
// //                       <div className="absolute top-4 right-4">
// //                         <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
// //                           {tour.type}
// //                         </span>
// //                       </div>
// //                     </div>
// //                     <div className="p-4">
// //                       <div className="flex justify-between items-center mb-2">
// //                         <span className="text-gray-600 text-sm font-medium">🕒 {tour.duration}</span>
// //                         <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
// //                           tour.difficulty === 'Moderate' 
// //                             ? 'bg-orange-100 text-orange-700' 
// //                             : 'bg-green-100 text-green-700'
// //                         }`}>
// //                           {tour.difficulty}
// //                         </span>
// //                       </div>
// //                       <div className="flex items-center text-sm text-gray-600">
// //                         <span>👥 {tour.groupSize}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }

// 'use client'

// import { useRouter, useSearchParams } from 'next/navigation'
// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// // Define the Tour type
// interface Tour {
//   id: number
//   name: string
//   duration: string
//   price: string
//   difficulty: string
//   groupSize: string
//   image: string
//   type: string
//   description: string
//   highlights: string[]
//   itinerary: string[]
//   includes: string[]
//   excludes: string[]
// }

// export default function Tours() {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const highlightedTourId = searchParams.get('highlight')
//   const detailSectionRef = useRef<HTMLDivElement>(null)

//   const tours: Tour[] = [
//     {
//       id: 1,
//       name: "Luxury Gorilla Trekking",
//       duration: "3 Days",
//       price: "$1,200",
//       difficulty: "Moderate",
//       groupSize: "8 people max",
//       image: "/gallery/grok.jpg",
//       type: "Wildlife",
//       description: "An unforgettable journey into the heart of Bwindi Impenetrable Forest to encounter the majestic mountain gorillas in their natural habitat. This premium experience includes luxury accommodation and expert guides.",
//       highlights: ["Bwindi Forest", "Mountain Gorillas", "Premium Lodges", "Expert Guides", "Photography Opportunities"],
//       itinerary: [
//         "Day 1: Arrival and orientation at luxury lodge",
//         "Day 2: Gorilla trekking experience with expert guides", 
//         "Day 3: Community visit and departure"
//       ],
//       includes: ["Gorilla permits", "Luxury accommodation", "All meals", "Expert guides", "Transportation"],
//       excludes: ["International flights", "Travel insurance", "Personal expenses"]
//     },
//     {
//       id: 2,
//       name: "Premium Wildlife Safari", 
//       duration: "5 Days",
//       price: "$1,800",
//       difficulty: "Easy",
//       groupSize: "12 people max",
//       image: "/gallery/wildlife.jpg",
//       type: "Safari",
//       description: "Explore the diverse ecosystems of Queen Elizabeth National Park with game drives, boat cruises, and exceptional wildlife viewing opportunities including tree-climbing lions.",
//       highlights: ["Queen Elizabeth NP", "Tree Climbing Lions", "Boat Cruise", "Game Drives", "Bird Watching"],
//       itinerary: [
//         "Day 1: Arrival and afternoon game drive",
//         "Day 2: Morning game drive and boat cruise",
//         "Day 3: Full day wildlife exploration",
//         "Day 4: Cultural experiences and relaxation",
//         "Day 5: Departure"
//       ],
//       includes: ["Park fees", "Accommodation", "All meals", "Game drives", "Boat cruise"],
//       excludes: ["International flights", "Travel insurance", "Personal expenses"]
//     },
//     {
//       id: 3,
//       name: "Cultural Immersion Experience",
//       duration: "4 Days",
//       price: "$950",
//       difficulty: "Easy", 
//       groupSize: "10 people max",
//       image: "/gallery/culture.jpg",
//       type: "Cultural",
//       description: "Immerse yourself in Uganda's rich cultural heritage with visits to local communities, traditional performances, and exploration of stunning natural waterfalls.",
//       highlights: ["Local Tribes", "Waterfalls", "Traditional Dances", "Craft Markets", "Community Projects"],
//       itinerary: [
//         "Day 1: Arrival and cultural orientation",
//         "Day 2: Community visits and traditional performances",
//         "Day 3: Waterfall exploration and craft workshops",
//         "Day 4: Departure with farewell ceremony"
//       ],
//       includes: ["Cultural experiences", "Accommodation", "All meals", "Local guides", "Entrance fees"],
//       excludes: ["International flights", "Travel insurance", "Personal expenses"]
//     },
//     {
//       id: 4,
//       name: "Elephant Safari Adventure",
//       duration: "4 Days",
//       price: "$1,100",
//       difficulty: "Easy",
//       groupSize: "8 people max", 
//       image: "/gallery/elephants.jpg",
//       type: "Wildlife",
//       description: "Witness the magnificent elephant herds in their natural habitat with guided game drives and exceptional wildlife photography opportunities.",
//       highlights: ["Elephant Herds", "Game Drives", "Bird Watching", "Nature Walks", "Sunset Views"],
//       itinerary: [
//         "Day 1: Arrival and introductory game drive",
//         "Day 2: Full day elephant tracking and observation",
//         "Day 3: Bird watching and nature walks",
//         "Day 4: Morning game drive and departure"
//       ],
//       includes: ["Park fees", "Accommodation", "All meals", "Game drives", "Expert guides"],
//       excludes: ["International flights", "Travel insurance", "Personal expenses"]
//     },
//     {
//       id: 5,
//       name: "Boutique Lodge Retreat",
//       duration: "3 Days",
//       price: "$1,500",
//       difficulty: "Easy", 
//       groupSize: "6 people max",
//       image: "/gallery/boutique1.jpg",
//       type: "Luxury",
//       description: "Experience ultimate luxury in our exclusive boutique lodges with spa treatments, fine dining, and personalized service in breathtaking natural settings.",
//       highlights: ["Luxury Accommodation", "Spa Treatments", "Fine Dining", "Private Guides", "Scenic Views"],
//       itinerary: [
//         "Day 1: Arrival and spa welcome treatment",
//         "Day 2: Private guided experiences and gourmet dining",
//         "Day 3: Leisure activities and departure"
//       ],
//       includes: ["Luxury accommodation", "All meals", "Spa treatments", "Private guides", "Airport transfers"],
//       excludes: ["International flights", "Travel insurance", "Personal expenses"]
//     },
//     {
//       id: 6,
//       name: "Adventure Tour Package",
//       duration: "6 Days",
//       price: "$2,200",
//       difficulty: "Moderate",
//       groupSize: "8 people max",
//       image: "/gallery/tourists.jpg",
//       type: "Adventure", 
//       description: "The ultimate adventure package combining multiple national parks, guided tours, and photography opportunities for the adventurous traveler.",
//       highlights: ["Multiple Parks", "Guided Tours", "Photography", "Hiking", "Wildlife Encounters"],
//       itinerary: [
//         "Day 1: Arrival and orientation",
//         "Day 2-3: Park exploration and wildlife tracking",
//         "Day 4-5: Adventure activities and cultural experiences",
//         "Day 6: Departure"
//       ],
//       includes: ["All park fees", "Accommodation", "All meals", "Expert guides", "Adventure activities"],
//       excludes: ["International flights", "Travel insurance", "Personal expenses"]
//     },
//     {
//       id: 7,
//       name: "Chimpanzee Tracking Experience",
//       duration: "2 Days",
//       price: "$700",
//       difficulty: "Moderate",
//       groupSize: "6 people max",
//       image: "/gallery/chimpanzee.jpg",
//       type: "Wildlife",
//       description: "Get up close with our closest relatives in the wild. This immersive experience takes you deep into the forests to observe chimpanzees in their natural habitat.",
//       highlights: ["Kibale Forest", "Chimpanzee Families", "Primate Watching", "Forest Walks", "Birding"],
//       itinerary: [
//         "Day 1: Arrival and chimpanzee tracking preparation",
//         "Day 2: Chimpanzee tracking experience and departure"
//       ],
//       includes: ["Chimpanzee permits", "Accommodation", "All meals", "Expert guides", "Forest walks"],
//       excludes: ["International flights", "Travel insurance", "Personal expenses"]
//     },
//     {
//       id: 8,
//       name: "Bird Watching Paradise",
//       duration: "4 Days",
//       price: "$900",
//       difficulty: "Easy",
//       groupSize: "8 people max",
//       image: "/gallery/birding.jpg", 
//       type: "Wildlife",
//       description: "Uganda is a bird watcher's paradise with over 1000 species. This specialized tour takes you to the best birding spots with expert ornithologists.",
//       highlights: ["Expert Bird Guides", "Multiple Habitats", "Rare Species", "Photography", "Nature Walks"],
//       itinerary: [
//         "Day 1: Arrival and introductory birding session",
//         "Day 2: Wetland and forest bird watching",
//         "Day 3: Savannah and specialized habitats",
//         "Day 4: Final birding session and departure"
//       ],
//       includes: ["Expert bird guides", "Accommodation", "All meals", "Binoculars provided", "Transportation"],
//       excludes: ["International flights", "Travel insurance", "Personal expenses"]
//     }
//   ]

//   const [selectedTour, setSelectedTour] = useState<Tour>(tours[0])

//   useEffect(() => {
//     if (highlightedTourId) {
//       const tour = tours.find(t => t.id === parseInt(highlightedTourId))
//       if (tour) {
//         setSelectedTour(tour)
//         setTimeout(() => {
//           window.scrollTo({ top: 0, behavior: 'smooth' })
//         }, 100)
//       }
//     }
//   }, [highlightedTourId])

//   const handleTourSelect = (tour: Tour) => {
//     setSelectedTour(tour)
//     if (window.innerWidth < 1024) {
//       setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: 'smooth' })
//       }, 100)
//     }
//   }
//   return (
//     <div className="pt-20">
//       {/* Hero with Background Image */}
//       <section className="relative py-24 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/gallery/aboutme.jpg" // You can change this to any safari background image
//             alt="Uganda Safari Background"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black/50"></div>
//           {/* Optional gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
//         </div>
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
//             Safari Packages
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white font-light">
//             Handcrafted Uganda safari experiences tailored for unforgettable adventures
//           </p>
//         </div>
//       </section>

//       {/* Master-Detail Layout */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column - Detailed View (2/3 width on large screens) */}
//             <div className="lg:col-span-2" ref={detailSectionRef}>
//               <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-green-100">
//                 {/* Tour Image */}
//                 <div className="relative h-96 overflow-hidden">
//                   <Image 
//                     src={selectedTour.image} 
//                     alt={selectedTour.name}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   <div className="absolute bottom-6 left-6">
//                     <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
//                       {selectedTour.type}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Tour Details */}
//                 <div className="p-8">
//                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
//                     <div>
//                       <h2 className="text-4xl font-bold text-gray-800 mb-2">{selectedTour.name}</h2>
//                       <div className="flex items-center gap-4 text-gray-600 mb-4">
//                         <span className="flex items-center">
//                           <span className="text-lg mr-2">🕒</span>
//                           {selectedTour.duration}
//                         </span>
//                         <span className="flex items-center">
//                           <span className="text-lg mr-2">⚡</span>
//                           {selectedTour.difficulty}
//                         </span>
//                         <span className="flex items-center">
//                           <span className="text-lg mr-2">👥</span>
//                           {selectedTour.groupSize}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="text-3xl font-bold text-green-600 mb-4 lg:mb-0">
//                       {selectedTour.price}
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                     {selectedTour.description}
//                   </p>

//                   {/* Highlights */}
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience Highlights</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       {selectedTour.highlights.map((highlight, index) => (
//                         <div key={index} className="flex items-center bg-green-50 rounded-lg p-3">
//                           <span className="text-green-600 mr-3">✓</span>
//                           <span className="text-gray-700 font-medium">{highlight}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Itinerary */}
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-4">Tour Itinerary</h3>
//                     <div className="space-y-3">
//                       {selectedTour.itinerary.map((day, index) => (
//                         <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
//                           <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
//                             {index + 1}
//                           </span>
//                           <span className="text-gray-700">{day}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Includes/Excludes */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                     <div>
//                       <h4 className="text-xl font-bold text-gray-800 mb-3 text-green-600">What's Included</h4>
//                       <ul className="space-y-2">
//                         {selectedTour.includes.map((item, index) => (
//                           <li key={index} className="flex items-center text-gray-700">
//                             <span className="text-green-500 mr-2">✓</span>
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-bold text-gray-800 mb-3 text-red-500">What's Excluded</h4>
//                       <ul className="space-y-2">
//                         {selectedTour.excludes.map((item, index) => (
//                           <li key={index} className="flex items-center text-gray-700">
//                             <span className="text-red-500 mr-2">✗</span>
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   {/* Book Now Button */}
//                   <button 
//                     onClick={() => router.push(`/book?package=${encodeURIComponent(selectedTour.name)}`)}
//                     className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//                   >
//                     Book This Package - {selectedTour.price}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Tour List (1/3 width on large screens) */}
//             <div className="lg:h-[1490px] lg:overflow-y-auto lg:pr-4 lg:pb-6">
//               <div className="space-y-6">
//                 {tours.map((tour) => (
//                   <div 
//                     key={tour.id}
//                     onClick={() => handleTourSelect(tour)}
//                     className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
//                       selectedTour.id === tour.id ? 'border-green-500' : 'border-transparent'
//                     }`}
//                   >
//                     <div className="relative h-48 overflow-hidden">
//                       <Image 
//                         src={tour.image} 
//                         alt={tour.name}
//                         fill
//                         className="object-cover hover:scale-110 transition duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                       <div className="absolute bottom-4 left-4">
//                         <h3 className="text-xl font-bold text-white">{tour.name}</h3>
//                       </div>
//                       <div className="absolute top-4 right-4">
//                         <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
//                           {tour.type}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-gray-600 text-sm font-medium">🕒 {tour.duration}</span>
//                         <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                           tour.difficulty === 'Moderate' 
//                             ? 'bg-orange-100 text-orange-700' 
//                             : 'bg-green-100 text-green-700'
//                         }`}>
//                           {tour.difficulty}
//                         </span>
//                       </div>
//                       <div className="flex items-center text-sm text-gray-600">
//                         <span>👥 {tour.groupSize}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }




// app/tours/page.tsx

"use client"
import { Suspense } from 'react'
import dynamic from 'next/dynamic'


const ToursContent = dynamic(() => import('./tourscontent/page'), { ssr: false })

export default function ToursPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading tours...</div>}>
        <ToursContent />
      </Suspense>
    </div>
  )
}
