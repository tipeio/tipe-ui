import faker from 'faker'

export default file => ({
  label: faker.lorem.words(faker.random.number({ min: 1, max: 3 })),
  type: ['document', 'folder'][faker.random.number(1)],
  ...file
})
