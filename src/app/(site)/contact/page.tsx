'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from '@/hooks/use-toast'


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    
    // Show a success toast
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })

    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Address:</strong> 123 Dental Street, Dubai, UAE</p>
          <p className="mb-2"><strong>Phone:</strong> +971 4 123 4567</p>
          <p className="mb-2"><strong>Email:</strong> info@gulftreedentalclub.com</p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178787573568!2d55.2707!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuNSJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}