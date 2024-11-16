'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:underline" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="hover:underline" onClick={toggleMenu}>About</Link>
            <Link href="/events" className="hover:underline" onClick={toggleMenu}>Events</Link>
            <Link href="/news" className="hover:underline" onClick={toggleMenu}>News</Link>
            <Link href="/contact" className="hover:underline" onClick={toggleMenu}>Contact</Link>
          </nav>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  )
}