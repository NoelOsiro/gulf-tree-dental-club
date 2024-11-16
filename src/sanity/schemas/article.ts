import { Rule } from "sanity";

// sanity/schemas/article.ts
const articleSchema = {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        validation: (Rule: Rule) => Rule.max(200),
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }],
      },
    ],
  }

export default articleSchema;