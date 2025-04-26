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
      description: 'The main title displayed at the top of the page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'biography',
      title: 'Biography section',
      type: 'object',
      fields: [
        defineField({
          name: 'biographyContent',
          title: 'Biography content',
          type: 'text',
          description: 'Write something about yourself.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'bioImage',
          title: 'Bio image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => Rule.required(),
            },
          ],
          description: 'An image to put into Biography section.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'myPhilosophySection',
      title: 'My philosophy section',
      type: 'object',
      fields: [
        defineField({
          name: 'myPhilosophyContent',
          title: 'My philosophy content',
          type: 'text',
          description: 'Write about how you work, your philosophy about photography, etc.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'aboutVideos',
          title: 'About Videos',
          description: 'Upload one or more videos related to your philosophy.',
          type: 'array',
          of: [
            {
              type: 'file',
              title: 'Video',
              options: {
                accept: 'video/*',
              },
            },
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'instagramSection',
      title: 'Instagram section',
      type: 'object',
      fields: [
        defineField({
          name: 'leftSideImages',
          title: 'Left side images',
          description:
            'These images will be shown on the left hand side. First image you add will be at bottom and second image at top.',
          type: 'object',
          fields: [
            defineField({
              name: 'instagramLeftSidePhotos',
              title: 'Instagram Left side photos',
              type: 'array',
              of: [
                {
                  type: 'image',
                  title: 'Image',
                },
              ],
              validation: (Rule) => Rule.required().min(2).max(2),
            }),
          ],
        }),
        defineField({
          name: 'rightSideImages',
          title: 'Right side images',
          description:
            'These images will be shown on the right hand side. First image you add will be at bottom and second image at top.',
          type: 'object',
          fields: [
            defineField({
              name: 'instagramRightSidePhotos',
              title: 'Instagram Right side photos',
              type: 'array',
              of: [
                {
                  type: 'image',
                  title: 'Image',
                },
              ],
              validation: (Rule) => Rule.required().min(2).max(2),
            }),
          ],
        }),
        defineField({
          name: 'instagramLink',
          title: 'Instagram link',
          description: "Paste your instagram's profile link.",
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
