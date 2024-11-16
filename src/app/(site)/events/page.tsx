// app/events/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { client } from '@/sanity/lib/client'
import { EventCard } from '@/components/EventCard'

moment.locale('en-GB')
const localizer = momentLocalizer(moment)

async function getEvents() {
  return await client.fetch(`*[_type == "event"] | order(date asc)`)
}
interface Event {
    _id: string
    title: string
    date: string
    description: string
    start: Date
    end: Date
    }

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState<Event|null>(null)

  useEffect(() => {
    getEvents().then((fetchedEvents) => {
      setEvents(fetchedEvents.map((event: Event) => ({
        ...event,
        start: new Date(event.date),
        end: new Date(event.date),
      })))
    })
  }, [])

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleSelectEvent}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event: Event) => (
              <EventCard
                key={event._id}
                _id={event._id}
                start={event.start}
                end={event.end}
                title={event.title}
                date={moment(event.date).format('MMMM D, YYYY')}
                description={event.description}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedEvent && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Selected Event</h2>
          <EventCard
            title={selectedEvent.title}
            _id={selectedEvent._id}
            start={selectedEvent.start}
            end={selectedEvent.end}
            date={moment(selectedEvent.date).format('MMMM D, YYYY')}
            description={selectedEvent.description}
          />
        </div>
      )}
    </div>
  )
}