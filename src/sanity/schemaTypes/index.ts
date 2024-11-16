import { type SchemaTypeDefinition } from 'sanity'
import eventSchema from '../schemas/event'
import articleSchema from '../schemas/article'
import teamMemberSchema from '../schemas/teamMember'
import testimonialSchema from '../schemas/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventSchema, articleSchema, teamMemberSchema, testimonialSchema],
}
