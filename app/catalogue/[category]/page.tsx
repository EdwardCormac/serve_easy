"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Star, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/ui/booking-modal"

// Mock data for service providers
const mockProviders = [
  {
    id: 1,
    name: "John Doe",
    rating: 4.8,
    photo: "/placeholder.svg?height=100&width=100",
    services: [
      { id: 1, name: "Basic Service", visitationFee: 50 },
      { id: 2, name: "Premium Service", visitationFee: 75 },
      { id: 3, name: "Deluxe Service", visitationFee: 100 },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4.5,
    photo: "/placeholder.svg?height=100&width=100",
    services: [
      { id: 4, name: "Quick Fix", visitationFee: 40 },
      { id: 5, name: "Comprehensive Service", visitationFee: 80 },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    rating: 4.2,
    photo: "/placeholder.svg?height=100&width=100",
    services: [
      { id: 6, name: "Standard Service", visitationFee: 60 },
      { id: 7, name: "Emergency Service", visitationFee: 120 },
    ],
  },
  {
    id: 4,
    name: "Alice Brown",
    rating: 4.7,
    photo: "/placeholder.svg?height=100&width=100",
    services: [
      { id: 8, name: "Basic Checkup", visitationFee: 45 },
      { id: 9, name: "Full Inspection", visitationFee: 90 },
    ],
  },
  {
    id: 5,
    name: "Charlie Wilson",
    rating: 4.4,
    photo: "/placeholder.svg?height=100&width=100",
    services: [
      { id: 10, name: "Quick Consultation", visitationFee: 35 },
      { id: 11, name: "Detailed Assessment", visitationFee: 70 },
    ],
  },
]

function ServiceProvider({ provider }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [bookingService, setBookingService] = useState(null)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src={provider.photo || "/placeholder.svg"}
            alt={provider.name}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{provider.name}</h3>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1">{provider.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`services-${provider.id}`}
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          <span className="sr-only">{isExpanded ? "Hide services" : "Show services"}</span>
        </Button>
      </div>
      {isExpanded && (
        <div id={`services-${provider.id}`}>
          <h4 className="text-lg font-semibold mb-2">Services Offered:</h4>
          <ul className="space-y-2">
            {provider.services.map((service) => (
              <li key={service.id} className="flex justify-between items-center">
                <span>{service.name}</span>
                <div>
                  <span className="font-semibold mr-2">Visitation Fee: ${service.visitationFee}</span>
                  <Button size="sm" onClick={() => setBookingService(service)}>
                    Book Now
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {bookingService && (
        <BookingModal
          isOpen={!!bookingService}
          onClose={() => setBookingService(null)}
          service={bookingService}
          providerName={provider.name}
        />
      )}
    </div>
  )
}

export default function CategoryPage() {
  const params = useParams()
  const category = decodeURIComponent(params.category)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 capitalize">{category} Services</h1>
        <div className="space-y-6">
          {mockProviders.map((provider) => (
            <ServiceProvider key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>
  )
}

