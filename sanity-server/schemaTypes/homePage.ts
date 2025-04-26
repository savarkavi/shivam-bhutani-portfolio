import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page title',
      type: 'string',
      description: 'The main title displayed at the top of the page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero section',
      type: 'object',
      fields: [
        defineField({
          name: 'heroImage',
          title: 'Hero image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'heroText',
          title: 'Hero text',
          type: 'text',
          description:
            'A small intoduction text of yourself or your work displayed in the hero section.',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'featuredSection',
      title: 'Featured section',
      type: 'array',
      description: 'Add images to be featured in your home page.',
      of: [
        {
          type: 'image',
          title: 'Image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (rule) => rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aboutText',
      title: 'About text',
      description:
        'Write something intresting about your work or your philosophy of work. A link from here will lead to your about page.',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
