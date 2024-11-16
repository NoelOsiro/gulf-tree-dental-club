export type Event = {
    _id: string
    title: string
    date: string
    description: string
    start: Date
    end: Date
}
export type News = {
    _id: string
    title: string
    date: string
    excerpt: string
    slug: string
}

export type Testimonial = {
    _id: string
    name: string
    quote: string
    image: {
        asset: {
            url: string
        }
    }
    role: string
    content: string
}

export type Article = {
    _id: string
    title: string
    date: string
    excerpt: string
    publishedAt: string
    slug: {
        current: string
    }
}

export type HomePageData = {
    events: Event[]
    news: News[]
    testimonials: Testimonial[]
}
export type HomePageProps = {
    data: HomePageData
}
export type DialogProps = {
    children: React.ReactNode
}