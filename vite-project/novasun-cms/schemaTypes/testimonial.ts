export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Customer Name' },
    { name: 'location', type: 'string', title: 'Location' },
    { name: 'rating', type: 'number', title: 'Rating' },
    { name: 'text', type: 'text', title: 'Feedback' },
  ],
}
