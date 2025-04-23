import {defineField, defineType} from 'sanity'

export const workSection = defineType({
  name: 'workSection',
  title: 'Works Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier to generate a category page on the website.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility. Describe the image.',
          validation: (Rule) => Rule.required(),
        },
      ],
      description: 'A representative image for this section.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
