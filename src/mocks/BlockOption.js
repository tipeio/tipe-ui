import faker from 'faker'

export default blockOption => ({
  type: faker.lorem.word(),
  label: faker.lorem.word(),
  description: faker.lorem.sentence(),
  icon: 'image',
  ...blockOption
})
