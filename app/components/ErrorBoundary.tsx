"use client"

import { useEffect } from "react"
import * as Sentry from "@sentry/nextjs"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Oops, something went wrong!</h2>
      <p className="text-gray-600 mb-4">We're sorry for the inconvenience. Our team has been notified.</p>
      <button onClick={reset} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Try again
      </button>
    </div>
  )
}

