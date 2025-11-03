
import Hero from './components/Hero'
import FeaturedTours from './components/FeaturedTours'
import Testimonials from './components/Testimonials'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen">
      <Hero />
      <FeaturedTours />
      <Testimonials />
      {/* We'll add more sections */}
    </main>
    <Footer/>
    </>
  )
}