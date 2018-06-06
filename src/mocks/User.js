import faker from 'faker'
import role from './Role'

export default user => ({
  id: faker.random.uuid(),
  profileImageUrl: 'http://placekitten.com/g/200/300',
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  updatedAt: Date.parse(faker.date.past()),
  createdAt: Date.parse(faker.date.past()),
  role: role(),
  status: ['Active', 'Offline'][faker.random.number(1)],
  ...user
})
