// import Image from 'next/image'
// import Link from 'next/link'

// export default function About() {
//   return (
//     <div className="pt-20">
//       {/* Modern Hero Section with Background Image */}
//       <section className="relative py-24 overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/gallery/unforgetableExperience.jpg"
//             alt="Uganda Safari Background"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
//         </div>
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
//             Igara Tour & Safaris
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white font-light">
//             Crafting Unforgettable Uganda Safari Experiences Since 2015
//           </p>
//           <div className="w-24 h-1 bg-emerald-300 mx-auto mt-8 rounded-full"></div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/gallery/aboutUs.jpg"
//                   alt="Begumisa Simon & Team - Igara Tour & Safaris"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-100 rounded-full z-0"></div>
//             </div>
            
//             <div className="lg:pl-8">
//               <div className="inline-block mb-4">
//                 <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
//                 From Passion to Premier Safari Experiences
//               </h2>
//               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                 Founded by <strong>Begumisa Simon</strong>, Igara Tour & Safaris was born from a deep-rooted passion 
//                 for Uganda's breathtaking wildlife and rich cultural tapestry. What began as a humble family venture 
//                 has blossomed into one of Uganda's most trusted and innovative safari companies.
//               </p>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 We specialize in crafting bespoke safari adventures that immerse travelers in the authentic beauty 
//                 of Uganda - from intimate gorilla encounters in Bwindi to spectacular wildlife viewing in Queen 
//                 Elizabeth National Park.
//               </p>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//                 <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
//                   <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
//                   <div className="text-gray-600 font-medium">Happy Travelers</div>
//                 </div>
//                 <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
//                   <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
//                   <div className="text-gray-600 font-medium">Years Excellence</div>
//                 </div>
//                 <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
//                   <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
//                   <div className="text-gray-600 font-medium">Unique Packages</div>
//                 </div>
//                 <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
//                   <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
//                   <div className="text-gray-600 font-medium">Success Rate</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <div className="inline-block mb-4">
//               <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Excellence</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//               Why Choose Igara Safaris
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Discover what sets us apart in creating extraordinary Ugandan adventures
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
//                 🌍
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Tourism</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Eco-friendly practices and community support are at the heart of every adventure we create.
//               </p>
//             </div>

//             <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
//                 ⭐
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Local Guides</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Our certified guides bring Uganda's wildlife and culture to life with unparalleled expertise.
//               </p>
//             </div>

//             <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
//                 💝
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Tailored Experiences</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Every journey is meticulously customized to match your dreams, style, and budget.
//               </p>
//             </div>

//             <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
//                 🤝
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Community First</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 We invest in local communities and empower them through responsible tourism initiatives.
//               </p>
//             </div>

//             <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
//                 ✨
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Quality</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Exceptional service, luxury accommodations, and attention to every detail define our safaris.
//               </p>
//             </div>

//             <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
//                 🛡️
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Safety First</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Your safety is our top priority with comprehensive measures and emergency protocols in place.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Values Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <div className="inline-block mb-4">
//                 <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
//                 Mission & Vision
//               </h2>
              
//               <div className="space-y-8">
//                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
//                     <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
//                     Our Mission
//                   </h3>
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     To create extraordinary, personalized safari experiences that showcase Uganda's natural wonders 
//                     while fostering sustainable tourism practices and empowering local communities.
//                   </p>
//                 </div>

//                 <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-500">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
//                     <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
//                     Our Vision
//                   </h3>
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     To be Uganda's most trusted and innovative safari company, renowned for exceptional service, 
//                     authentic experiences, and meaningful contributions to conservation and community development.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
//               <div className="relative z-10">
//                 <h3 className="text-3xl font-bold mb-8">Our Core Values</h3>
//                 <div className="space-y-6">
//                   {[
//                     { icon: "❤️", title: "Passion", desc: "Genuine love for Uganda's wildlife and culture" },
//                     { icon: "🤝", title: "Integrity", desc: "Honest, transparent, and ethical practices" },
//                     { icon: "🌱", title: "Sustainability", desc: "Protecting nature for future generations" },
//                     { icon: "⭐", title: "Excellence", desc: "Uncompromising quality in every detail" },
//                     { icon: "👥", title: "Community", desc: "Empowering and supporting local people" }
//                   ].map((value, index) => (
//                     <div key={index} className="flex items-start space-x-4 group">
//                       <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
//                         {value.icon}
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-lg mb-1">{value.title}</h4>
//                         <p className="text-white/80 text-sm">{value.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-green-700 via-emerald-800 to-green-900 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
//         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready for Your Adventure?
//           </h2>
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 font-light">
//             Let's craft your perfect Ugandan safari experience together
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <Link 
//               href="/contact"
//               className="bg-white text-green-700 px-10 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 text-center text-lg shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
//             >
//               Start Planning Today
//             </Link>
//           </div>
//           <p className="mt-6 text-green-200 text-sm">
//             ✨ 100% Satisfaction Guarantee • Best Price Promise • 24/7 Support
//           </p>
//         </div>
//       </section>
//     </div>
//   )
// }
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Modern Hero Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/unforgetableExperience.jpg"
            alt="Uganda Safari Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 max-w-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white px-2">
            Igara Tour & Safaris
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-white font-light px-4">
            Crafting Unforgettable Uganda Safari Experiences Since 2015
          </p>
          <div className="w-24 h-1 bg-emerald-300 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative max-w-full">
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl max-w-full">
                <Image
                  src="/gallery/aboutUs.jpg"
                  alt="Begumisa Simon & Team - Igara Tour & Safaris"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 lg:w-24 lg:h-24 bg-green-100 rounded-full z-0"></div>
            </div>
            
            <div className="lg:pl-8 max-w-full">
              <div className="inline-block mb-4">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                From Passion to Premier Safari Experiences
              </h2>
              <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by <strong>Begumisa Simon</strong>, Igara Tour & Safaris was born from a deep-rooted passion 
                for Uganda's breathtaking wildlife and rich cultural tapestry. What began as a humble family venture 
                has blossomed into one of Uganda's most trusted and innovative safari companies.
              </p>
              <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in crafting bespoke safari adventures that immerse travelers in the authentic beauty 
                of Uganda - from intimate gorilla encounters in Bwindi to spectacular wildlife viewing in Queen 
                Elizabeth National Park.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-12 max-w-full">
                <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">Happy Travelers</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">8+</div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">Years Excellence</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">Unique Packages</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4">
              Why Choose Igara Safaris
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Discover what sets us apart in creating extraordinary Ugandan adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-full">
            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group mx-2">
              <div className="mx-auto w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 text-white text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">Sustainable Tourism</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Eco-friendly practices and community support are at the heart of every adventure we create.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group mx-2">
              <div className="mx-auto w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 text-white text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
                ⭐
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">Expert Local Guides</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Our certified guides bring Uganda's wildlife and culture to life with unparalleled expertise.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group mx-2">
              <div className="mx-auto w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 text-white text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
                💝
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">Tailored Experiences</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Every journey is meticulously customized to match your dreams, style, and budget.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group mx-2">
              <div className="mx-auto w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 text-white text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
                🤝
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">Community First</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                We invest in local communities and empower them through responsible tourism initiatives.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group mx-2">
              <div className="mx-auto w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 text-white text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
                ✨
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Exceptional service, luxury accommodations, and attention to every detail define our safaris.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group mx-2">
              <div className="mx-auto w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 text-white text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
                🛡️
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">Safety First</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Your safety is our top priority with comprehensive measures and emergency protocols in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-full">
              <div className="inline-block mb-4">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                Mission & Vision
              </h2>
              
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 lg:p-8 border-l-4 border-green-500">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Our Mission
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    To create extraordinary, personalized safari experiences that showcase Uganda's natural wonders 
                    while fostering sustainable tourism practices and empowering local communities.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border-l-4 border-blue-500">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Our Vision
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    To be Uganda's most trusted and innovative safari company, renowned for exceptional service, 
                    authentic experiences, and meaningful contributions to conservation and community development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden max-w-full">
              <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full -translate-y-12 lg:-translate-y-16 translate-x-12 lg:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full translate-y-8 lg:translate-y-12 -translate-x-8 lg:-translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Our Core Values</h3>
                <div className="space-y-4 lg:space-y-6">
                  {[
                    { icon: "❤️", title: "Passion", desc: "Genuine love for Uganda's wildlife and culture" },
                    { icon: "🤝", title: "Integrity", desc: "Honest, transparent, and ethical practices" },
                    { icon: "🌱", title: "Sustainability", desc: "Protecting nature for future generations" },
                    { icon: "⭐", title: "Excellence", desc: "Uncompromising quality in every detail" },
                    { icon: "👥", title: "Community", desc: "Empowering and supporting local people" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-3 lg:space-x-4 group">
                      <div className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {value.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base lg:text-lg mb-1">{value.title}</h4>
                        <p className="text-white/80 text-xs lg:text-sm">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-700 via-emerald-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-white/5 rounded-full -translate-y-24 lg:-translate-y-32 translate-x-24 lg:translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 lg:w-48 lg:h-48 bg-white/5 rounded-full translate-y-16 lg:translate-y-24 -translate-x-16 lg:-translate-x-24"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 max-w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-95 font-light px-4">
            Let's craft your perfect Ugandan safari experience together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-green-700 px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 text-center text-base lg:text-lg shadow-2xl hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Start Planning Today
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm px-4">
            ✨ 100% Satisfaction Guarantee • Best Price Promise • 24/7 Support
          </p>
        </div>
      </section>
    </div>
  )
}