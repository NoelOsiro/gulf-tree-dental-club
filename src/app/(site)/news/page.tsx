import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateMetadata } from '@/app/seo'
import { Metadata } from 'next'
import { Article } from '@/types'

export const metadata: Metadata = generateMetadata(
  'News & Updates',
  'Stay up to date with the latest news and updates from our organization.',
  '/news'
)

async function getArticles() {
  return await client.fetch(`*[_type == "article"] | order(publishedAt desc)`)
}


export default async function NewsPage() {
  const articles = await getArticles()

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">News & Updates</h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article: Article) => (
        <Card key={article._id}>
          <CardHeader>
            <CardTitle>
              <Link href={`/news/${article.slug.current}`} className="hover:underline">
                {article.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700">{article.excerpt}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
  )
}