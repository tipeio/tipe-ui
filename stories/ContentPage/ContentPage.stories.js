import { storiesOf } from '@storybook/vue'
import TipeContentPage from '@/pages/content'
import userMock from '@/mocks/User'
import fileMock from '@/mocks/File'
import navLinkMock from '@/mocks/NavLink'
import createManyMocks from '@/mocks/createManyMocks'

const user = userMock()
const documents = createManyMocks(() => fileMock({ type: 'document' }), 20)
const folders = createManyMocks(() => fileMock({ type: 'folder' }), 20)
const navLinks = [
  navLinkMock({ icon: 'file', active: true }),
  navLinkMock({ icon: 'image' }),
  navLinkMock({ icon: 'layout' }),
  navLinkMock({ icon: 'settings' })
]

storiesOf('Content Page', module).add('default', () => ({
  components: { TipeContentPage },
  data() {
    return {
      user,
      documents,
      folders,
      navLinks
    }
  },
  template: `<tipe-content-page
      :user="user"
      :documents="documents"
      :folders="folders"
      :navLinks="navLinks"
    />`
}))
