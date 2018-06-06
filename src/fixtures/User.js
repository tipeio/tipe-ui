import roleFixture from '@/fixtures/Role'

export default user => ({
  id: 'test-id',
  profileImageUrl: 'test-profileImageUrl',
  email: 'test-email',
  firstName: 'test-firstName',
  lastName: 'test-lastName',
  role: roleFixture(),
  status: 'online',
  createdAt: 1528319349428,
  updatedAt: 1528319349428,
  ...user
})
