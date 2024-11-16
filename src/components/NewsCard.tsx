// components/NewsCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Article } from "@/types"
import Link from "next/link"


export function NewsCard({ title, date, excerpt, slug }: Article) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{date}</p>
        <p>{excerpt}</p>
        <Link href={`/news/${slug.current}`} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </CardContent>
    </Card>
  )
}