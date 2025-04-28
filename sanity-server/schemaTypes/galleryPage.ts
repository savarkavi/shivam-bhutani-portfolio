import {defineField, defineType} from 'sanity'

export const galleryPage = defineType({
  name: 'galleryPage',
  title: 'Gallery page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'albums',
      title: 'Albums',
      description: 'Add, remove, and reorder the albums.',
      type: 'array',
      of: [{type: 'galleryAlbum'}],
      validation: (rule) => rule.required().min(1).error('Atleast 1 album is required.'),
    }),
  ],
})
