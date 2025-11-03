
import Hero from './components/Hero'
import FeaturedTours from './components/FeaturedTours'
import Testimonials from './components/Testimonials'
export default function Home() {
  return (
    <>
    <main className="min-h-screen">
      <Hero />
      <FeaturedTours />
      <Testimonials />
      {/* We'll add more sections */}
    </main>
    
    </>
  )
}