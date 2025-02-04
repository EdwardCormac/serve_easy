"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, DollarSign, ShieldCheck, HeadphonesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

export default function AboutPage() {
  return (
    <div className="colorful-gradient min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1
          className="text-6xl font-bold text-center mb-12 gradient-text heading-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Serve Easy
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-semibold mb-6 gradient-text heading-shadow">Our Mission</h2>
            <p className="text-xl mb-6 text-gray-700 leading-relaxed">
              At Serve Easy, we're on a mission to simplify your life by connecting you with trusted local service
              providers. We believe that everyone deserves access to quality services without the hassle of endless
              searching and uncertainty.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our platform is designed to make finding and booking services as easy as a few clicks, saving you time and
              giving you peace of mind.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serve_easy_logo-removebg-preview%20(1)-mlsviHFrEMA5WRobHgK0C9am9jCUjd.png"
              alt="Serve Easy Services"
              className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        <motion.h2
          className="text-5xl font-bold text-center mb-12 gradient-text heading-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Why Choose Serve Easy?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyChooseReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <Card className="section-bg h-full">
                <CardHeader>
                  <reason.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{reason.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text heading-shadow">Ready to get started?</h2>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white font-semibold transition-colors duration-300"
          >
            <Link href="/catalogue" className="inline-flex items-center">
              Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="section-bg p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text heading-shadow">Contact Us</h2>
          <p className="mb-6 text-lg">Have questions or feedback? We'd love to hear from you!</p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <HeadphonesIcon className="w-6 h-6 mr-4 text-primary" />
              <span>Email: support@serveeasy.com</span>
            </li>
            <li className="flex items-center">
              <Clock className="w-6 h-6 mr-4 text-primary" />
              <span>Phone: (123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-6 h-6 mr-4 text-primary" />
              <span>Address: 123 Service Street, Cityville, State 12345</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

