import { storiesOf } from '@storybook/vue'
import TipeMembersPage from '@/pages/members'
import userMock from '@/mocks/User'
import fileMock from '@/mocks/File'
import navLinkMock from '@/mocks/NavLink'
import { createManyMocks } from '@/mocks'

const user = userMock()
const folders = createManyMocks(() => fileMock({ type: 'folder' }), 20)
const members = createManyMocks(userMock, 12)
const navLinks = [
  navLinkMock({ icon: 'file', active: true }),
  navLinkMock({ icon: 'image' }),
  navLinkMock({ icon: 'layout' }),
  navLinkMock({ icon: 'settings' })
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
