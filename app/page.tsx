"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Search,
  Calendar,
  ThumbsUp,
  Star,
  CheckCircle,
  Clock,
  DollarSign,
  HeadphonesIcon,
  ShieldCheck,
  Wrench,
  Zap,
  Paintbrush,
  Car,
  Hammer,
  HomeIcon,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import TelegramBot from "@/components/TelegramBot"

const categories = [
  { name: "Plumber", icon: Wrench, color: "bg-blue-100 text-blue-600" },
  { name: "Electrician", icon: Zap, color: "bg-yellow-100 text-yellow-600" },
  { name: "Painter", icon: Paintbrush, color: "bg-red-100 text-red-600" },
  { name: "Mechanic", icon: Car, color: "bg-green-100 text-green-600" },
  { name: "Carpenter", icon: Hammer, color: "bg-orange-100 text-orange-600" },
  { name: "Housekeeper", icon: HomeIcon, color: "bg-purple-100 text-purple-600" },
]

const allReviews = [
  {
    name: "John D.",
    rating: 5,
    text: "Excellent service! The plumber was professional and fixed the issue quickly.",
  },
  {
    name: "Sarah M.",
    rating: 4,
    text: "Great experience with the electrician. Arrived on time and did a thorough job.",
  },
  { name: "Mike R.", rating: 5, text: "The house painter was fantastic. Attention to detail was impressive." },
  { name: "Emily L.", rating: 4, text: "Very satisfied with the carpentry work. Will definitely use again." },
  { name: "David W.", rating: 5, text: "The mechanic was knowledgeable and fixed my car promptly." },
]

const whyChooseReasons = [
  {
    icon: CheckCircle,
    title: "Verified Professionals",
    description: "All our service providers are thoroughly vetted and background-checked.",
  },
  {
    icon: Clock,
    title: "Convenient Booking",
    description: "Easy online booking process, available 24/7 at your fingertips.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Transparent pricing with no hidden fees or surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guarantee",
    description: "We stand behind our service quality with a 100% satisfaction guarantee.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our customer support team is always ready to assist you.",
  },
]

export default function Home() {
  const [displayedReviews, setDisplayedReviews] = useState(allReviews)
  const [searchQuery, setSearchQuery] = useState("")
  const [showTelegramBot, setShowTelegramBot] = useState(false)

  useEffect(() => {
    const shuffleReviews = () => {
      const shuffled = [...allReviews].sort(() => 0.5 - Math.random())
      setDisplayedReviews(shuffled.slice(0, 3))
    }

    shuffleReviews()
    const intervalId = setInterval(shuffleReviews, 10000) // Change reviews every 10 seconds

    return () => clearInterval(intervalId)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would trigger a search
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="min-h-screen colorful-gradient">
      <div className="container mx-auto px-4 py-16 space-y-32">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:space-x-16 items-center section-bg p-8"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 gradient-text heading-shadow">Welcome to Serve Easy</h1>
            <p className="text-xl mb-8 text-gray-700">Find and book local services with ease</p>
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for a service..."
                  className="input-primary flex-grow"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="btn-primary ml-2">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </form>
            <Button asChild className="btn-secondary">
              <Link href="/catalogue" className="inline-flex items-center">
                Explore Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serve_easy_logo-removebg-preview%20(1)-mlsviHFrEMA5WRobHgK0C9am9jCUjd.png"
              alt="Serve Easy Services"
              className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.section>

        <section className="section-bg p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center section-heading">What are you looking for?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/catalogue/${encodeURIComponent(category.name.toLowerCase())}`}
                  className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${category.color} card-hover`}
                >
                  <category.icon className="w-12 h-12 mb-4" />
                  <span className="text-lg font-medium text-center">{category.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-bg p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center section-heading">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Search,
                title: "Search",
                description: "Find the service you need from our wide range of categories.",
              },
              { icon: Calendar, title: "Book", description: "Choose a convenient time slot and book your service." },
              {
                icon: ThumbsUp,
                title: "Enjoy",
                description: "Sit back and relax while our professionals take care of your needs.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-primary bg-opacity-10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{step.title}</h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-bg p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center section-heading">Why Choose Serve Easy?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-md transition-all duration-300 card-hover bg-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <reason.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-bg p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center section-heading">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {displayedReviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <h3 className="font-semibold text-lg mr-2">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          className="text-center section-bg p-12 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 section-heading">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="btn-primary w-full sm:w-auto">
              <Link href="/catalogue" className="inline-flex items-center justify-center">
                Explore Our Catalogue <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild className="btn-secondary w-full sm:w-auto text-lg py-6 px-8">
              <a
                href="https://web.telegram.org/a/#7730490816"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <Send className="w-6 h-6 mr-2" />
                Chat on Telegram
              </a>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

