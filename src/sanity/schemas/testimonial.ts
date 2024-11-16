import { Rule } from "sanity";

// sanity/schemas/testimonial.ts
const testimonialSchema = {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'testimonial',
        title: 'Testimonial',
        type: 'text',
        validation: (Rule: Rule) => Rule.required(),
      },
    ],
  }

  export default testimonialSchema;