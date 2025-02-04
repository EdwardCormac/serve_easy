"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { User, Mail, Edit, Calendar, MapPin, Star, MessageSquare } from "lucide-react"

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // TODO: Implement actual authentication check
    const checkAuth = async () => {
      // Simulating an API call
      const response = await new Promise((resolve) => setTimeout(() => resolve({ isLoggedIn: true }), 1000))
      setIsLoggedIn(response.isLoggedIn)
      if (response.isLoggedIn) {
        setUser({ name: "John Doe", email: "john@example.com" })
      }
    }
    checkAuth()
  }, [])

  if (!isLoggedIn) {
    return (
      <div className="colorful-gradient min-h-screen flex items-center justify-center">
        <motion.div
          className="section-bg p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6 gradient-text">Account</h1>
          <p className="mb-4 text-gray-700">Please log in to access your account.</p>
          <Link
            href="/login"
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Log In
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-12 gradient-text text-center heading-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome, {user.name}
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="section-bg p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6 gradient-text heading-shadow">Account Details</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="w-6 h-6 mr-4 text-primary" />
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-primary" />
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
              <Link
                href="/account/edit"
                className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
              >
                <Edit className="w-5 h-5 mr-2" />
                Edit Profile
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="section-bg p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6 gradient-text heading-shadow">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/account/bookings"
                  className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  <Calendar className="w-5 h-5 mr-4" />
                  View Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/account/addresses"
                  className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 mr-4" />
                  Manage Addresses
                </Link>
              </li>
              <li>
                <Link
                  href="/account/ratings"
                  className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  <Star className="w-5 h-5 mr-4" />
                  My Ratings
                </Link>
              </li>
              <li>
                <Link
                  href="/account/complaints"
                  className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  <MessageSquare className="w-5 h-5 mr-4" />
                  Submit a Complaint
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

