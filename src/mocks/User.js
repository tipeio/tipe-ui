import faker from 'faker'
import uuid from 'uuid'
import role from './Role'

export default user => {
  return {
    id: uuid(),
    profileImageUrl: 'http://placekitten.com/g/200/300',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    updatedAt: faker.date.recent(),
    createdAt: '05/10/18',
    role: role(),
    status: ['Active', 'Offline'][faker.random.number(1)],
    ...user
  }
}
