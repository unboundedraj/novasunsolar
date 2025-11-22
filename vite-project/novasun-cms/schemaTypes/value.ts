export default {
  name: 'valueItem',
  title: 'Value Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for this value',
    },
    { name: 'icon', type: 'string', title: 'Icon Name (e.g., FileText, Settings)' },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the value',
    },
    {
      name: 'color',
      title: 'Text Color',
      type: 'string',
      description: 'Tailwind CSS text color class (e.g., text-blue-500)',
    },
  ],
};
