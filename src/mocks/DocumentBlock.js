import faker from 'faker'
import { getBlockTypes, getBlockLabel } from '@/libs/blocks'
import documentBlockValidationMock from '@/mocks/DocumentBlockValidation'

export default documentBlock => {
  const type = getBlockTypes()[
    faker.random.number({ min: 0, max: getBlockTypes().length - 1 })
  ]

  return {
    type,
    label: getBlockLabel(type),
    value: '',
    name: faker.lorem.word(),
    apiId: faker.random.word(),
    description: faker.lorem.sentence(),
    status: ['success', 'warning', 'error', undefined][
      faker.random.number({ min: 0, max: 3 })
    ],
    successMessage: faker.lorem.sentence(),
    errorMessage: faker.lorem.sentence(),
    warningMessage: faker.lorem.sentence(),
    waiting: faker.random.boolean(),
    disabled: faker.random.boolean(),
    validation: documentBlockValidationMock(),
    ...documentBlock
  }
}
