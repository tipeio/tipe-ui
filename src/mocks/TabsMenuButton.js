import faker from 'faker'

export default tabMenuButton => ({
  icon: 'files',
  label: faker.lorem.word(),
  active: faker.random.boolean(),
  ...tabMenuButton
})
