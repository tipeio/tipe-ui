import faker from 'faker'
import blockTypes from '@/types/BlockTypes'
import documentBlockValidationMock from '@/mocks/DocumentBlockValidation'

export default documentBlock => ({
  type: blockTypes[faker.random.number({ min: 0, max: blockTypes.length - 1 })],
  value: '',
  name: faker.lorem.word(),
  status: ['success', 'warning', 'error', ''][
    faker.random.number({ min: 0, max: 2 })
  ],
  successMessage: faker.lorem.sentence(),
  errorMessage: faker.lorem.sentence(),
  warningMessage: faker.lorem.sentence(),
  waiting: faker.random.boolean(),
  disabled: faker.random.boolean(),
  validation: documentBlockValidationMock(),
  ...documentBlock
})
