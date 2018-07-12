import { storiesOf } from '@storybook/vue'
import TipeMembersPage from '@/pages/members'
import { mocks } from '@tipe/tipe-test-utils'

const user = mocks.user()
const folders = mocks.createManyMocks(() => mocks.file({ type: 'folder' }), 20)
const members = mocks.createManyMocks(mocks.user, 12)
const navLinks = [
  mocks.navLink({ icon: 'file', active: true }),
  mocks.navLink({ icon: 'image' }),
  mocks.navLink({ icon: 'layout' }),
  mocks.navLink({ icon: 'settings' })
]

storiesOf('Members Page', module).add('default', () => ({
  components: { TipeMembersPage },
  data() {
    return {
      user,
      folders,
      navLinks,
      members
    }
  },
  template: `<tipe-members-page
      :user="user"
      :folders="folders"
      :navLinks="navLinks"
      :members="members"
    />`
}))
