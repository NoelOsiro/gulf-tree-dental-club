import { generateMetadata } from '@/app/seo'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'


export const metadata: Metadata = generateMetadata(
  'News & Updates',
  'Stay up to date with the latest news and updates from our organization.',
  '/news'
)

async function getArticle(slug: string) {
  return await client.fetch(`*[_type == "article" && slug.current == $slug][0]`, { slug })
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-8">
        Published on {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <div className="prose lg:prose-xl">
        <PortableText value={article.body} />
      </div>
    </div>
  )
}