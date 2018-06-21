import faker from 'faker'
import { getBlockTypes } from '@/libs/blocks'
import documentBlockValidationMock from '@/mocks/DocumentBlockValidation'

export default documentBlock => ({
  type: getBlockTypes()[
    faker.random.number({ min: 0, max: getBlockTypes().length - 1 })
  ],
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
