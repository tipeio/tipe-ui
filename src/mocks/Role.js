import faker from 'faker'

export default role => ({
  name: ['Owner', 'Member'][faker.random.number(1)],
  ...role
})
