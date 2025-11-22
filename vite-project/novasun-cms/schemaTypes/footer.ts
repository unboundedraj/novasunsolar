export default {
  name: 'footer',
  title: 'Footer Section',
  type: 'document',
  fields: [
    {
      name: 'callUs',
      title: 'Call Us',
      type: 'object',
      fields: [
        { name: 'phone1', type: 'string', title: 'Phone 1' },
        { name: 'phone2', type: 'string', title: 'Phone 2' },
      ],
    },
    {
      name: 'emailUs',
      title: 'Email Us',
      type: 'object',
      fields: [
        { name: 'email1', type: 'string', title: 'Email 1' },
        { name: 'email2', type: 'string', title: 'Email 2' },
      ],
    },
    {
      name: 'visitUs',
      title: 'Visit Us',
      type: 'object',
      fields: [
        { name: 'address', type: 'text', title: 'Address' },
      ],
    },
    {
      name: 'companyInfo',
      title: 'Company Info',
      type: 'object',
      fields: [
        { name: 'cin', type: 'string', title: 'CIN Number' },
        { name: 'description', type: 'string', title: 'Company Description' },
      ],
    },
  ],
};
