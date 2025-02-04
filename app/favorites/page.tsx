"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    // TODO: Implement actual API call to fetch favorites
    const fetchFavorites = async () => {
      // Simulating an API call
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              { id: 1, name: "John Doe", category: "Plumber", rating: 4.5 },
              { id: 2, name: "Jane Smith", category: "Electrician", rating: 4.8 },
              { id: 3, name: "Bob Johnson", category: "House Cleaner", rating: 4.2 },
            ]),
          1000,
        ),
      )
      setFavorites(response)
    }
    fetchFavorites()
  }, [])

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-12 gradient-text text-center heading-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Favorites
        </motion.h1>
        {favorites.length === 0 ? (
          <motion.p
            className="text-center text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            You haven't added any service providers to your favorites yet.
          </motion.p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((provider, index) => (
              <motion.div
                key={provider.id}
                className="section-bg rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-2 gradient-text heading-shadow">{provider.name}</h2>
                <p className="text-gray-600 mb-4">{provider.category}</p>
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 w-6 h-6 mr-1" />
                  <span className="text-lg font-medium">{provider.rating.toFixed(1)}</span>
                </div>
                <Link
                  href={`/catalogue/${provider.category.toLowerCase()}/${provider.id}`}
                  className="inline-flex items-center bg-white text-primary font-semibold px-4 py-2 rounded-full hover:bg-gray-100 border-2 border-primary transition-colors duration-300"
                >
                  View Profile <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

