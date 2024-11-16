// app/page.tsx
import { Hero } from '@/components/Hero'
import { EventCard } from "@/components/EventCard"
import { NewsCard } from "@/components/NewsCard"
import { TestimonialCard } from "@/components/TestimonialCard"
import { client } from '@/sanity/lib/client'
import { Article, Event, Testimonial } from '@/types'

async function getHomePageData() {
  const events = await client.fetch(`*[_type == "event"] | order(date asc)[0...3]`)
  const news = await client.fetch(`*[_type == "article"] | order(publishedAt desc)[0...3]`)
  const testimonials = await client.fetch(`*[_type == "testimonial"][0...2]`)
  return { events, news, testimonials }
}


export default async function Home() {
  const { events, news, testimonials } = await getHomePageData()

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        {/* Upcoming Events Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event: Event) => (
              <EventCard
                key={event._id}
                _id={event._id}
                title={event.title}
                date={new Date(event.date).toLocaleDateString()}
                description={event.description}
                start={event.start}
                end={event.end}
              />
            ))}
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article: Article) => (
              <NewsCard
                key={article._id}
                _id={article._id}
                publishedAt={article.publishedAt}
                title={article.title}
                date={new Date(article.publishedAt).toLocaleDateString()}
                excerpt={article.excerpt}
                slug={article.slug}
              />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard
                key={testimonial._id}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.content}
                imageUrl={testimonial.image ? testimonial.image.asset.url : '/placeholder.svg'}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}