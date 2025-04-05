function skillsMember() {
  return {
    name: 'skills',
    description: 'Skills and expertise of the member.',
    type: 'array',
    items: {
      type: 'string',
      description: 'A skill or area of expertise.',
    },
  };
}