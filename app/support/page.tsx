"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Support() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Implement actual form submission
    console.log("Form submitted:", { name, email, message })
    // Reset form
    setName("")
    setEmail("")
    setMessage("")
    alert("Your message has been sent. We will get back to you soon.")
  }

  return (
    <div className="colorful-gradient min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-12 gradient-text text-center heading-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Support
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="section-bg p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6 gradient-text heading-shadow">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center"
              >
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
          <motion.div
            className="section-bg p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6 gradient-text heading-shadow">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                  How do I book a service?
                </h3>
                <p className="text-gray-600">
                  To book a service, navigate to the catalogue, select a service provider, choose an available time
                  slot, and confirm your booking.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                  What if I need to cancel my booking?
                </h3>
                <p className="text-gray-600">
                  You can cancel your booking up to 24 hours before the scheduled time without any charges. Go to your
                  account and select the booking you wish to cancel.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                  How can I become a service provider?
                </h3>
                <p className="text-gray-600">
                  If you're interested in becoming a service provider, please contact our support team, and we'll guide
                  you through the process.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

