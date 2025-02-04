"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProviderDashboard() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      if (parsedUser.role === "provider") {
        setUser(parsedUser)
      } else {
        router.push("/login")
      }
    } else {
      router.push("/login")
    }
  }, [router])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-8">Service Provider Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Services</CardTitle>
            <CardDescription>Manage your offered services</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push("/provider-dashboard/services")}>Manage Services</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>My Bookings</CardTitle>
            <CardDescription>View and manage your service bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push("/provider-dashboard/bookings")}>View Bookings</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
            <CardDescription>Update your professional profile</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push("/provider-dashboard/profile")}>Edit Profile</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

