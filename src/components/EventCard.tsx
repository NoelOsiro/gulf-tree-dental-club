// components/EventCard.tsx
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { EventRegistrationForm } from "@/components/EventRegistrationForm"

interface EventCardProps {
  _id: string
  title: string
  date: string
  description: string
  start: Date
  end: Date
}

export function EventCard({ _id, title, date, description }: EventCardProps) {
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegistration = () => {
    setIsRegistered(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{date}</p>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        {isRegistered ? (
          <p className="text-green-600">You&apos;re registered for this event!</p>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button>Register</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Register for {title}</DialogTitle>
              </DialogHeader>
              <EventRegistrationForm eventId={_id} onSuccess={handleRegistration} />
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  )
}