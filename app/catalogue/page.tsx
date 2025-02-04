"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Wrench,
  Zap,
  Paintbrush,
  Car,
  Hammer,
  Home,
  Scissors,
  Utensils,
  Laptop,
  Dog,
  Shirt,
  Leaf,
  Truck,
  Camera,
  Dumbbell,
} from "lucide-react"

const categories = [
  { name: "Plumber", icon: Wrench, color: "bg-blue-100 text-blue-600" },
  { name: "Electrician", icon: Zap, color: "bg-yellow-100 text-yellow-600" },
  { name: "Painter", icon: Paintbrush, color: "bg-red-100 text-red-600" },
  { name: "Mechanic", icon: Car, color: "bg-green-100 text-green-600" },
  { name: "Carpenter", icon: Hammer, color: "bg-orange-100 text-orange-600" },
  { name: "Housekeeper", icon: Home, color: "bg-purple-100 text-purple-600" },
  { name: "Hairdresser", icon: Scissors, color: "bg-pink-100 text-pink-600" },
  { name: "Chef", icon: Utensils, color: "bg-indigo-100 text-indigo-600" },
  { name: "IT Support", icon: Laptop, color: "bg-cyan-100 text-cyan-600" },
  { name: "Pet Sitter", icon: Dog, color: "bg-teal-100 text-teal-600" },
  { name: "Tailor", icon: Shirt, color: "bg-lime-100 text-lime-600" },
  { name: "Gardener", icon: Leaf, color: "bg-emerald-100 text-emerald-600" },
  { name: "Mover", icon: Truck, color: "bg-amber-100 text-amber-600" },
  { name: "Photographer", icon: Camera, color: "bg-fuchsia-100 text-fuchsia-600" },
  { name: "Personal Trainer", icon: Dumbbell, color: "bg-rose-100 text-rose-600" },
]

export default function Catalogue() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 gradient-text heading-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Service Catalogue
        </motion.h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                href={`/catalogue/${encodeURIComponent(category.name.toLowerCase())}`}
                className={`${category.color} rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg section-bg`}
              >
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <category.icon className="w-16 h-16 mb-4" />
                  <h2 className="text-lg font-semibold text-center">{category.name}</h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

