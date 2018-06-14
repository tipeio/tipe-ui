import faker from 'faker'
import documentBlockMock from '@/mocks/DocumentBlock'

export default document => ({
  name: faker.lorem.word(),
  blocks: [documentBlockMock(), documentBlockMock(), documentBlockMock()],
  ...document
})
