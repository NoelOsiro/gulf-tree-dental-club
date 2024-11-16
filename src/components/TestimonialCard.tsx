// components/TestimonialCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  imageUrl: string
}

export function TestimonialCard({ name, role, testimonial, imageUrl }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader>
        <Image src={imageUrl} alt={name} width={64} height={64} className="rounded-full" />
        <CardTitle>{name}</CardTitle>
        <p>{role}</p>
      </CardHeader>
      <CardContent>
        <p>{testimonial}</p>
      </CardContent>
    </Card>
  )
}