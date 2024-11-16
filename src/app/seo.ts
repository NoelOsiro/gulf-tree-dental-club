// app/seo.ts
import { Metadata } from 'next'

export function generateMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = `https://gulftreedentalclub.com${path}`

  return {
    title: `${title} | Gulf Tree Implant Centre Dental Club`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Gulf Tree Implant Centre Dental Club',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}