'use client'
import { Suspense } from 'react'


// Import the client component dynamically
import  BookSafariForm from '../components/BookSafariForm'

export default function BookPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading form...</div>}>
        <BookSafariForm />
      </Suspense>
    </div>
  )
}
