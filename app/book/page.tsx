import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Import the client component dynamically
const BookSafariForm = dynamic(() => import('../components/BookSafariForm'), { 
  ssr: false 
})

export default function BookPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading form...</div>}>
        <BookSafariForm />
      </Suspense>
    </div>
  )
}
