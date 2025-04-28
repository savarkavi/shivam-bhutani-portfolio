import {defineField, defineType} from 'sanity'

export const galleryAlbum = defineType({
  name: 'galleryAlbum',
  title: 'Gallery album',
  type: 'object',
  fields: [
    defineField({
      name: 'albumName',
      title: 'Album name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier to generate an album page on the website.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
