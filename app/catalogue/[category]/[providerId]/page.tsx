"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { Star, Calendar } from "lucide-react"

// This would typically come from a database
const mockProviders = {
  1: {
    id: 1,
    name: "John Doe",
    shopName: "Quick Fix Plumbing",
    rating: 4.5,
    location: "123 Main St, Anytown, USA",
    services: [
      { id: 1, name: "Basic Plumbing Service", price: 50 },
      { id: 2, name: "Pipe Repair", price: 100 },
      { id: 3, name: "Water Heater Installation", price: 200 },
    ],
  },
}

export default function ProviderDetail({ params }: { params: { category: string; providerId: string } }) {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)

  const provider = mockProviders[params.providerId]

  if (!provider) {
    notFound()
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"]

  const handleBooking = () => {
    if (selectedService && selectedTimeSlot) {
      // TODO: Implement actual booking logic
      alert(`Booking confirmed for ${selectedService.name} at ${selectedTimeSlot}`)
    } else {
      alert("Please select a service and time slot")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{provider.name}</h1>
      <p className="text-xl text-gray-600 mb-4">{provider.shopName}</p>
      <div className="flex items-center mb-4">
        <Star className="text-yellow-400 w-5 h-5 mr-1" />
        <span>{provider.rating.toFixed(1)}</span>
      </div>
      <p className="mb-6">{provider.location}</p>

      <h2 className="text-2xl font-semibold mb-4">Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {provider.services.map((service) => (
          <div
            key={service.id}
            className={`border rounded-lg p-4 cursor-pointer ${
              selectedService?.id === service.id ? "bg-blue-100 border-blue-500" : ""
            }`}
            onClick={() => setSelectedService(service)}
          >
            <h3 className="font-semibold">{service.name}</h3>
            <p>${service.price}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Available Time Slots</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            {timeSlots.map((slot) => (
              <div
                key={slot}
                className={`border rounded-lg p-2 text-center cursor-pointer ${
                  selectedTimeSlot === slot ? "bg-blue-100 border-blue-500" : ""
                }`}
                onClick={() => setSelectedTimeSlot(slot)}
              >
                {slot}
              </div>
            ))}
          </div>
        </>
      )}

      {selectedService && selectedTimeSlot && (
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
          <p>
            <strong>Service:</strong> {selectedService.name}
          </p>
          <p>
            <strong>Price:</strong> ${selectedService.price}
          </p>
          <p>
            <strong>Time Slot:</strong> {selectedTimeSlot}
          </p>
        </div>
      )}

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        onClick={handleBooking}
        disabled={!selectedService || !selectedTimeSlot}
      >
        Book Now <Calendar className="ml-2" />
      </button>
    </div>
  )
}

