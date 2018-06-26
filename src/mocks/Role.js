import faker from 'faker'

export default role => {
  const label = ['Owner', 'Member'][faker.random.number(1)]

  return {
    label,
    value: label.toLowerCase(),
    ...role
  }
}
