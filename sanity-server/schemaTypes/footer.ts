import {defineField, defineType} from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This is just a page title. Will not affect anything in the website.',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'footerLinkName',
              title: 'Link name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'footerLinkUrl',
              title: 'Link URL',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
    }),
  ],
})
