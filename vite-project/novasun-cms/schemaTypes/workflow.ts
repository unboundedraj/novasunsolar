export default {
  name: 'workflowStep',
  title: 'Workflow Step',
  type: 'document',
  fields: [
    { name: 'number', type: 'string', title: 'Step Number' },
    { name: 'title', type: 'string', title: 'Step Title' },
    { name: 'icon', type: 'string', title: 'Icon Name (e.g., FileText, Settings)' },
    { name: 'image', type: 'url', title: 'Image URL' },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each point describing the step',
    },
    { name: 'color', type: 'string', title: 'Text Color Class (e.g., text-blue-400)' },
    { name: 'bgColor', type: 'string', title: 'Background Color Class (e.g., bg-blue-100)' },
    { name: 'duration', type: 'string', title: 'Duration (e.g., 2-4 weeks)' },
  ],
};
