import faker from 'faker'

export default () => ({
  label: faker.lorem.word(),
  url: faker.internet.url()
})
