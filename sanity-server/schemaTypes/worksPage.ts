import {defineField, defineType} from 'sanity'

export const worksPage = defineType({
  name: 'worksPage',
  title: 'Works page',
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
      name: 'workCategories',
      title: 'Work categories',
      description:
        'Add, remove, and reorder the photography categories displayed on the Works page.',
      type: 'array',
      of: [{type: 'workSection'}],
      validation: (rule) => rule.required().min(1).error('Atleast 1 category is required.'),
    }),
  ],
})
