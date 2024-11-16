// components/EventRegistrationForm.tsx
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EventRegistrationFormProps {
  eventId: string
  onSuccess: () => void
}

export function EventRegistrationForm({ eventId, onSuccess }: EventRegistrationFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the registration data to your backend
    console.log('Registration submitted:', { eventId, name, email })
    
    // Simulate a successful registration
    await new Promise(resolve => setTimeout(resolve, 1000))
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Complete Registration</Button>
    </form>
  )
}