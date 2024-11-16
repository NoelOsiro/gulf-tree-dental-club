// components/Hero.tsx
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function Hero() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl">
          Gulf Tree Implant Centre Dental Club
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Advancing dental excellence through community and education
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/about">Learn More</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/events">Upcoming Events</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}