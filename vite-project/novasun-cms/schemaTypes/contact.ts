export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    { name: 'label', type: 'string', title: 'Label' },
    { name: 'value', type: 'string', title: 'Value' },
    { name: 'icon', type: 'string', title: 'Icon Name' }, // e.g., Phone, Mail, MapPin
    { name: 'href', type: 'string', title: 'Href (optional)' },
    { name: 'isEmail', type: 'boolean', title: 'Is Email?', initialValue: false },
    { name: 'isWebsite', type: 'boolean', title: 'Is Website?', initialValue: false },
  ],
};
