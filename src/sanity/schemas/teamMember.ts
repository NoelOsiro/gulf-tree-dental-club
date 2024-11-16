import { Rule } from "sanity";

// sanity/schemas/teamMember.ts
const teamMemberSchema = {
    name: 'teamMember',
    title: 'Team Member',
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
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
    ],
  }

  export default teamMemberSchema;