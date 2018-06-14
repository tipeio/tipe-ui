import documentBlockFixture from '@/fixtures/DocumentBlock'

export default document => ({
  name: 'test-name',
  blocks: [
    documentBlockFixture(),
    documentBlockFixture(),
    documentBlockFixture()
  ],
  ...document
})
