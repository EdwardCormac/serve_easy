"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock user data
const mockUsers = [
  { email: "customer@example.com", password: "customer123", role: "customer" },
  { email: "provider@example.com", password: "provider123", role: "provider" },
  { email: "admin@example.com", password: "admin123", role: "admin" },
]

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("customer")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const message = params.get("message")
    if (message) {
      setMessage(message)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const user = mockUsers.find((u) => u.email === email && u.password === password && u.role === role)
    if (user) {
      localStorage.setItem("user", JSON.stringify({ email: user.email, role: user.role }))
      router.push(`/${user.role}-dashboard`)
    } else {
      setError("Invalid email, password, or role")
    }
  }

  return (
    <div className="container mx-auto mt-8 p-4 min-h-screen flex items-center justify-center">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Login to Serve Easy</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          {message && <p className="text-green-500 mb-4">{message}</p>}
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select onValueChange={setRole} defaultValue={role}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer">Customer</SelectItem>
                    <SelectItem value="provider">Service Provider</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-primary text-gray-900 font-bold hover:bg-primary-dark hover:text-white"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button variant="link" onClick={() => router.push("/forgot-password")}>
            Forgot password?
          </Button>
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Button
              variant="link"
              onClick={() => router.push("/signup")}
              className="text-primary font-bold hover:text-primary-dark"
            >
              Sign up
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

