import faker from 'faker'
import userMock from '@/mocks/User'

export default file => ({
  label: faker.lorem.words(faker.random.number({ min: 1, max: 3 })),
  type: ['document', 'folder'][faker.random.number(1)],
  createdAt: Date.parse(faker.date.past()),
  updatedAt: Date.parse(faker.date.past()),
  createdBy: userMock(),
  ...file
})
