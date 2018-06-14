import faker from 'faker'

export default documentBlockValidation => ({
  required: faker.random.boolean(),
  ...documentBlockValidation
})
