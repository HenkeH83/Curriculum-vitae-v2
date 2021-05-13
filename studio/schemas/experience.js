export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'organization',
        maxLength: 96,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      options: {
        dateFormat: 'MMM YYYY',
      }
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      options: {
        dateFormat: 'MMM YYYY',
      }
    },
    {
      name: 'relevance',
      title: 'Relevance',
      type: 'reference',
      to: { type: 'relevance' }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
