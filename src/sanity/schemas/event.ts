import { Rule } from "sanity";

// sanity/schemas/event.ts
const eventSchema = {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'registrationLink',
        title: 'Registration Link',
        type: 'url',
      },
    ],
  }

export default eventSchema;