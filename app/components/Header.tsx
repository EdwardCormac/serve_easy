"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isSticky ? "bg-white shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="w-48">{/* Placeholder for the transitioning title */}</div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/account" className="hover:text-blue-600">
                Account
              </Link>
            </li>
            <li>
              <Link href="/favorites" className="hover:text-blue-600">
                Favorites
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-blue-600">
                Support
              </Link>
            </li>
            <li>
              <Link href="/catalogue" className="hover:text-blue-600">
                Catalogue
              </Link>
            </li>
          </ul>
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              className="pl-10 pr-4 py-2 border rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </nav>
      </div>
    </header>
  )
}

