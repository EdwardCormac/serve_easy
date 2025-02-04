"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgotPassword({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send a request to the server to handle the password reset
    // For this example, we'll just simulate the process
    if (email) {
      setMessage(`If an account exists for ${email}, we have sent a password reset link.`)
      setError("")
    } else {
      setError("Please enter a valid email address.")
      setMessage("")
    }
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>Enter your email to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="resetEmail">Email</Label>
                <Input id="resetEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {message && <p className="text-green-500">{message}</p>}
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button variant="link" onClick={onBack}>
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

