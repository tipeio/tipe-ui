import userFixture from '@/fixtures/User'

export default file => ({
  type: 'document',
  label: 'test-label',
  createdAt: 1528319349428,
  updatedAt: 1528319349428,
  createdBy: userFixture()
})
