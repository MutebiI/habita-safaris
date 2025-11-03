'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function BookSafari() {
  const searchParams = useSearchParams()
  const selectedPackage = searchParams.get('package')
  
  const [formData, setFormData] = useState({
    prefix: '',
    name: '',
    nationality: '',
    email: '',
    whatsapp: '',
    destination: '',
    tourLength: '',
    peopleCount: '',
    travelDate: '',
    budget: '',
    accommodation: '',
    activities: [] as string[],
    specialRequests: selectedPackage ? `Interested in: ${selectedPackage}` : '',
    foundUs: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission with Nodemailer
    console.log('Booking submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleActivityChange = (activity: string) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }))
  }

  // Success Message Component
  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center bg-white rounded-3xl shadow-2xl p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✅</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
          
          <p className="text-gray-600 mb-6">
            Your safari inquiry has been received! Our team will contact you within 24 hours to start planning your adventure.
          </p>

          <div className="space-y-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Back to Home
            </button>
            <button 
              onClick={() => window.location.href = '/tours'}
              className="w-full border border-gray-300 hover:border-green-600 text-gray-700 py-3 rounded-lg font-semibold transition duration-300"
            >
              Browse More Tours
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Dream Safari</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Start your Uganda adventure! Fill out this form and our safari experts will craft your perfect itinerary.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Progress Header */}
              <div className="text-center mb-12">
                <div className="flex justify-center items-center space-x-4 mb-6">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                        {step}
                      </div>
                      {step < 3 && <div className="w-16 h-1 bg-green-200 mx-2"></div>}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  🎯 Complete this form in 3 simple steps
                </p>
              </div>

              {/* Package Message - NEW! */}
              {selectedPackage && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-blue-600 text-lg mr-3">🎯</span>
                    <div>
                      <p className="text-blue-800 font-semibold">
                        You're inquiring about: <span className="underline">{selectedPackage}</span>
                      </p>
                      <p className="text-blue-600 text-sm mt-1">
                        We've pre-filled this in your special requests. Feel free to modify or add more details!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Personal Information */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">👤</span>
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Prefix *</label>
                      <select
                        name="prefix"
                        value={formData.prefix}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      >
                        <option value="">Select Prefix</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                        <option value="Prof">Prof</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Nationality *</label>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                        placeholder="Your nationality"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2 font-semibold">WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                        placeholder="+256 XXX XXX XXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Safari Details */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">🦁</span>
                    Safari Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Destination *</label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      >
                        <option value="">Select Destination</option>
                        <option value="Uganda">🇺🇬 Uganda</option>
                        <option value="Rwanda">🇷🇼 Rwanda</option>
                        <option value="Congo">🇨🇩 Congo</option>
                        <option value="Kenya">🇰🇪 Kenya</option>
                        <option value="Tanzania">🇹🇿 Tanzania</option>
                        <option value="Zanzibar">🏝️ Zanzibar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Length of Tour *</label>
                      <select
                        name="tourLength"
                        value={formData.tourLength}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      >
                        <option value="">Select Duration</option>
                        <option value="1-3 days">1-3 Days</option>
                        <option value="4-7 days">4-7 Days</option>
                        <option value="8-14 days">8-14 Days</option>
                        <option value="15+ days">15+ Days</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Number of People *</label>
                      <select
                        name="peopleCount"
                        value={formData.peopleCount}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      >
                        <option value="">Select Number</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3-4">3-4 People</option>
                        <option value="5-6">5-6 People</option>
                        <option value="7+">7+ People</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Travel Date *</label>
                      <input
                        type="month"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Budget Range *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      >
                        <option value="">Select Budget</option>
                        <option value="0-1000">$0 - $1,000</option>
                        <option value="1001-2500">$1,001 - $2,500</option>
                        <option value="2501-5000">$2,501 - $5,000</option>
                        <option value="5001-10000">$5,001 - $10,000</option>
                        <option value="10000+">$10,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Accommodation Style *</label>
                      <select
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      >
                        <option value="">Select Style</option>
                        <option value="Budget">💰 Budget</option>
                        <option value="Mid-range">🏨 Mid-range</option>
                        <option value="Luxury">⭐ Luxury</option>
                        <option value="Mixed">🔀 Mixed</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Activities & Preferences */}
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-3">🎯</span>
                    Activities & Preferences
                  </h3>

                  <div className="mb-8">
                    <label className="block text-gray-700 mb-4 font-semibold">Preferred Activities *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {[
                        'Gorilla Tracking', 'Chimpanzee Tracking', 'Mountaineering', 'White Water Rafting',
                        'Wildlife Viewing', 'Birding', 'Honeymoon', 'Culture', 'Nature Tours', 'Primate Safaris'
                      ].map((activity) => (
                        <label key={activity} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.activities.includes(activity)}
                            onChange={() => handleActivityChange(activity)}
                            className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                          />
                          <span className="text-gray-700">{activity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-semibold">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      placeholder="Any dietary requirements, accessibility needs, or special requests..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">How did you find us? *</label>
                    <select
                      name="foundUs"
                      value={formData.foundUs}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    >
                      <option value="">Select Option</option>
                      <option value="Google">Google Search</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Recommendation">Friend Recommendation</option>
                      <option value="Travel Agency">Travel Agency</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    🚀 Submit Safari Inquiry
                  </button>
                  <p className="text-gray-500 mt-4 text-sm">
                    We'll contact you within 24 hours to start planning your adventure!
                  </p>
                </div>
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-2">⏰</div>
                <h4 className="font-semibold text-gray-800 mb-2">24-Hour Response</h4>
                <p className="text-gray-600 text-sm">We guarantee a response within 24 hours</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-800 mb-2">Custom Itinerary</h4>
                <p className="text-gray-600 text-sm">Tailored safari plans just for you</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="font-semibold text-gray-800 mb-2">No Commitment</h4>
                <p className="text-gray-600 text-sm">Get a free quote with no obligations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}