"use client"

import { useState, useEffect } from "react"

export default function Transition({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTransitioned, setIsTransitioned] = useState(false)

  useEffect(() => {
    const loadedTimeout = setTimeout(() => setIsLoaded(true), 500)
    const transitionTimeout = setTimeout(() => setIsTransitioned(true), 2000)

    return () => {
      clearTimeout(loadedTimeout)
      clearTimeout(transitionTimeout)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <h1
        className={`fixed z-50 left-0 right-0 text-4xl font-bold text-center transition-all duration-1000 ${
          !isLoaded
            ? "opacity-0 transform translate-y-10"
            : isTransitioned
              ? "top-6 text-2xl"
              : "top-1/2 -translate-y-1/2"
        }`}
      >
        Serve Easy
      </h1>
      <div className={`flex-grow transition-opacity duration-1000 ${isTransitioned ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </div>
  )
}

