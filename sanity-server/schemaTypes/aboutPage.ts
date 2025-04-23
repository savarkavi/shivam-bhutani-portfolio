import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page title',
      type: 'string',
    }),
  ],
})
