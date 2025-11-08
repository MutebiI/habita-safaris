
"use client"
import { useState } from 'react';

// Types for TypeScript
type Region = 'all' | 'western' | 'central' | 'eastern' | 'northern';
type Category = 'all' | 'gorilla-trekking' | 'wildlife-safari' | 'adventure' | 'scenic' | 'primate-watching' | 'wilderness' | 'cultural';

interface Destination {
  id: number;
  name: string;
  region: Region;
  type: string;
  categories: Category[];
  image: string;
  description: string;
  bestTime: string;
  highlights: string[];
  duration: string;
  itineraryPreview: string[];
}

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<Region>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [expandedItinerary, setExpandedItinerary] = useState<number | null>(null);

  // COMPLETE DESTINATIONS DATA WITH PROPER REGION/CATEGORY DISTRIBUTION
  const destinations: Destination[] = [
    // WESTERN REGION BUNYORO 
    {
      id: 1,
      name: "Bwindi Impenetrable Forest",
      type: "Gorilla Trekking",
      region: "western",
      categories: ["gorilla-trekking", "wildlife-safari"],

      // image: "/images/destinations/bwindi-gorillas.jpg", 
       image: "/gallery/bwindi.jpg",
      description: "Home to nearly half of the world's remaining mountain gorillas",
      bestTime: "June-August, Dec-Feb",
      highlights: ["Mountain Gorillas", "Primates", "Rainforest", "UNESCO Site"],
      duration: "3 Days / 2 Nights",
      itineraryPreview: [
        "Day 1: Arrival & Transfer to Bwindi",
        "Day 2: Gorilla Trekking Experience", 
        "Day 3: Community Visit & Departure"
      ]
    },
    {
      id: 2,
      name: "Queen Elizabeth National Park",
      type: "Wildlife Safari",
      region: "western", 
      categories: ["wildlife-safari", "adventure"],
      image: "/images/destinations/queen-elizabeth.jpg",
      description: "Uganda's most popular savanna park with diverse wildlife",
      bestTime: "January-February, June-July",
      highlights: ["Tree Lions", "Elephants", "Boat Safari", "Birding"],
      duration: "4 Days / 3 Nights",
      itineraryPreview: [
        "Day 1: Game Drive & Transfer",
        "Day 2: Morning Game Drive & Boat Cruise",
        "Day 3: Lion Tracking & Bird Watching",
        "Day 4: Nature Walk & Departure"
      ]
    },
    {
      id: 3,
      name: "Lake Bunyonyi",
      type: "Scenic & Relaxation",
      region: "western",
      categories: ["scenic", "adventure"],
      // image: "/gallery/destinations/lake-bunyonyi.jpg", 
      image: "/gallery/bunyonyi.jpg", 
      description: "Africa's second deepest lake with 29 beautiful islands",
      bestTime: "All Year Round",
      highlights: ["Islands", "Canoeing", "Birding", "Relaxation"],
      duration: "2 Days / 1 Night",
      itineraryPreview: [
        "Day 1: Canoeing & Island Hopping",
        "Day 2: Bird Watching & Cultural Experience"
      ]
    },
    {
      id: 4,
      name: "Kibale Forest National Park",
      type: "Primate Watching",
      region: "western",
      categories: ["primate-watching", "wildlife-safari"],
      image: "/images/destinations/kibale-forest.jpg",
      description: "The primate capital of the world with 13 species",
      bestTime: "March-May, Sept-November", 
      highlights: ["Chimpanzees", "Monkeys", "Birding", "Forest Walks"],
      duration: "3 Days / 2 Nights",
      itineraryPreview: [
        "Day 1: Transfer & Bigodi Wetland Walk",
        "Day 2: Chimpanzee Tracking Experience",
        "Day 3: Bird Watching & Departure"
      ]
    },
    {
      id: 5,
      name: "Mgahinga Gorilla Park",
      type: "Gorilla Trekking",
      region: "western",
      categories: ["gorilla-trekking", "adventure"],
      image: "/images/destinations/mgahinga.jpg",
      description: "Volcanic landscapes with golden monkeys and gorillas",
      bestTime: "June-September, December-February",
      highlights: ["Golden Monkeys", "Volcano Hiking", "Gorillas"],
      duration: "3 Days / 2 Nights",
      itineraryPreview: [
        "Day 1: Arrival & Community Visit",
        "Day 2: Gorilla or Golden Monkey Trekking",
        "Day 3: Volcano Hike & Departure"
      ]
    },

    // NORTHERN REGION LUO 
    {
      id: 6,
      name: "Murchison Falls National Park",
      type: "Adventure & Wildlife", 
      region: "northern",
      categories: ["adventure", "wildlife-safari", "scenic"],
      // image: "/images/destinations/murchison-falls.jpg",
      image: "/gallery/Murchison.jpg",
      description: "The Nile forces through a 7m gorge creating spectacular falls",
      bestTime: "December-February",
      highlights: ["Waterfalls", "Nile River", "Game Drives", "Hiking"],
      duration: "5 Days / 4 Nights",
      itineraryPreview: [
        "Day 1: Transfer to Murchison Falls",
        "Day 2: Game Drive & Top of Falls Hike",
        "Day 3: Nile Boat Cruise & Fishing",
        "Day 4: Rhino Tracking & Nature Walk",
        "Day 5: Final Game Drive & Departure"
      ]
    },
    {
      id: 7,
      name: "Kidepo Valley National Park", 
      type: "Wilderness Adventure",
      region: "northern",
      categories: ["wilderness", "wildlife-safari", "adventure"],
      image: "/images/destinations/kidepo-valley.jpg",
      description: "Remote wilderness with stunning landscapes and unique wildlife",
      bestTime: "November-April",
      highlights: ["Wilderness", "Culture", "Game Viewing", "Landscapes"],
      duration: "6 Days / 5 Nights",
      itineraryPreview: [
        "Day 1: Scenic Transfer to Kidepo",
        "Day 2: Morning & Evening Game Drives",
        "Day 3: Karamojong Cultural Experience",
        "Day 4: Mountain Hiking & Birding",
        "Day 5: Wilderness Walking Safari",
        "Day 6: Final Game Viewing & Departure"
      ]
    },
    {
      id: 8,
      name: "Ziwa Rhino Sanctuary",
      type: "Wildlife Conservation",
      region: "northern",
      categories: ["wildlife-safari", "adventure"],
      image: "/images/destinations/ziwa-rhino.jpg",
      description: "Uganda's only place to see wild rhinos in their natural habitat",
      bestTime: "All Year Round",
      highlights: ["Rhino Tracking", "Birding", "Conservation"],
      duration: "1 Day",
      itineraryPreview: [
        "Day 1: Rhino Tracking Experience",
        "Bird Watching & Nature Walk"
      ]
    },

    // EASTERN REGION BUSOGA
    {
      id: 9,
      name: "Mount Elgon National Park",
      type: "Hiking Adventure",
      region: "eastern",
      categories: ["adventure", "wilderness"],
      image: "/images/destinations/mount-elgon.jpg",
      description: "Ancient volcano with the world's largest caldera",
      bestTime: "December-March",
      highlights: ["Hiking", "Waterfalls", "Caves", "Birding"],
      duration: "4 Days / 3 Nights",
      itineraryPreview: [
        "Day 1: Transfer & Sipi Falls Visit",
        "Day 2: Start Mountain Trekking",
        "Day 3: Summit & Caldera Exploration",
        "Day 4: Descent & Departure"
      ]
    },
    {
      id: 10,
      name: "Sipi Falls",
      type: "Scenic Adventure",
      region: "eastern",
      categories: ["scenic", "adventure", "cultural"],
      image: "/images/destinations/sipi-falls.jpg",
      description: "Series of three stunning waterfalls on Mount Elgon",
      bestTime: "June-September, December-February",
      highlights: ["Waterfalls", "Hiking", "Coffee Tours", "Abseiling"],
      duration: "2 Days / 1 Night",
      itineraryPreview: [
        "Day 1: Waterfall Hiking & Coffee Experience",
        "Day 2: Abseiling & Cultural Visit"
      ]
    },

    // CENTRAL REGION / BUGANDA REGION 
    // BUGANDA REGION / CENTRAL REGION
    // 
    {
      id: 11,
      name: "Kampala City Tour",
      type: "Cultural Experience",
      region: "central",
      categories: ["cultural", "scenic"],
      image: "/images/destinations/kampala-city.jpg",
      description: "Uganda's vibrant capital city with rich history and culture",
      bestTime: "All Year Round",
      highlights: ["Historical Sites", "Markets", "Nightlife", "Cultural Centers"],
      duration: "1 Day",
      itineraryPreview: [
        "Morning: Kasubi Tombs & Bahai Temple",
        "Afternoon: Uganda Museum & Craft Markets",
        "Evening: Cultural Dance & Local Cuisine"
      ]
    },
    {
      id: 12,
      name: "Entebbe & Botanical Gardens",
      type: "Scenic Relaxation",
      region: "central",
      categories: ["scenic", "cultural"],
      image: "/images/destinations/entebbe-gardens.jpg",
      description: "Lakeside town with beautiful botanical gardens and wildlife",
      bestTime: "All Year Round",
      highlights: ["Botanical Gardens", "Zoo", "Lake Victoria", "Beaches"],
      duration: "1 Day",
      itineraryPreview: [
        "Morning: Botanical Garden Tour",
        "Afternoon: Uganda Wildlife Education Centre",
        "Evening: Lake Victoria Sunset Cruise"
      ]
    }
  ];

  // Filter destinations based on selections - THIS NOW WORKS PROPERLY
  const filteredDestinations = destinations.filter(destination => {
    const regionMatch = selectedRegion === 'all' || destination.region === selectedRegion;
    const categoryMatch = selectedCategory === 'all' || destination.categories.includes(selectedCategory);
    return regionMatch && categoryMatch;
  });

  const toggleItinerary = (id: number) => {
    setExpandedItinerary(expandedItinerary === id ? null : id);
  };

  // Count destinations for each filter to show numbers
  const regionCounts = {
    all: destinations.length,
    western: destinations.filter(d => d.region === 'western').length,
    central: destinations.filter(d => d.region === 'central').length,
    eastern: destinations.filter(d => d.region === 'eastern').length,
    northern: destinations.filter(d => d.region === 'northern').length,
  };

  const categoryCounts = {
    all: destinations.length,
    'gorilla-trekking': destinations.filter(d => d.categories.includes('gorilla-trekking')).length,
    'wildlife-safari': destinations.filter(d => d.categories.includes('wildlife-safari')).length,
    'adventure': destinations.filter(d => d.categories.includes('adventure')).length,
    'scenic': destinations.filter(d => d.categories.includes('scenic')).length,
    'primate-watching': destinations.filter(d => d.categories.includes('primate-watching')).length,
    'wilderness': destinations.filter(d => d.categories.includes('wilderness')).length,
    'cultural': destinations.filter(d => d.categories.includes('cultural')).length,
  };

//...
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'url("/gallery/cover.jpg")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Uganda's Wonders</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Explore the diverse landscapes and wildlife that make Uganda the Pearl of Africa
          </p>
        </div>
      </section>
      
      {/* Region Filter - NOW WITH COUNTS */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore by Region</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: 'all', label: 'All Uganda' },
              { value: 'western', label: 'Western Region' },
              { value: 'central', label: 'Central Region' }, 
              { value: 'eastern', label: 'Eastern Region' },
              { value: 'northern', label: 'Northern Region' }
            ].map((region) => (
              <button
                key={region.value}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedRegion === region.value
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
                onClick={() => setSelectedRegion(region.value as Region)}
              >
                {region.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedRegion === region.value 
                    ? 'bg-white text-green-600' 
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {regionCounts[region.value as keyof typeof regionCounts]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs - NOW WITH COUNTS */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Filter by Experience</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: 'all', label: 'All Experiences' },
              { value: 'gorilla-trekking', label: 'Gorilla Trekking' },
              { value: 'wildlife-safari', label: 'Wildlife Safari' },
              { value: 'adventure', label: 'Adventure' },
              { value: 'scenic', label: 'Scenic & Relaxation' },
              { value: 'primate-watching', label: 'Primate Watching' },
              { value: 'wilderness', label: 'Wilderness' },
              { value: 'cultural', label: 'Cultural' }
            ].map((category) => (
              <button
                key={category.value}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
                onClick={() => setSelectedCategory(category.value as Category)}
              >
                {category.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.value 
                    ? 'bg-white text-blue-600' 
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {categoryCounts[category.value as keyof typeof categoryCounts]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-4 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-700">
            Showing <span className="font-bold text-green-600">{filteredDestinations.length}</span> destinations
            {selectedRegion !== 'all' && ` in ${selectedRegion} region`}
            {selectedCategory !== 'all' && ` for ${selectedCategory.replace('-', ' ')}`}
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
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
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {destination.region}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {destination.duration}
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

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Itinerary Preview Section */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-800">Sample Itinerary:</h4>
                      <button 
                        onClick={() => toggleItinerary(destination.id)}
                        className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1"
                      >
                        {expandedItinerary === destination.id ? 'Show Less' : 'Show More'}
                        <svg 
                          className={`w-4 h-4 transition-transform ${expandedItinerary === destination.id ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className={`space-y-2 transition-all duration-300 ${
                      expandedItinerary === destination.id ? 'max-h-96 opacity-100' : 'max-h-24 opacity-90 overflow-hidden'
                    }`}>
                      {destination.itineraryPreview.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-600 font-medium mt-0.5">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    {expandedItinerary !== destination.id && (
                      <div className="mt-2 text-xs text-gray-500">
                        Showing {Math.min(2, destination.itineraryPreview.length)} of {destination.itineraryPreview.length} days
                      </div>
                    )}
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    View Detailed Itinerary
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No destinations found for the selected filters.</p>
              <button 
                onClick={() => {
                  setSelectedRegion('all');
                  setSelectedCategory('all');
                }}
                className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}