import { storiesOf } from '@storybook/vue'
import TipeContentPage from '@/pages/content'
import { mocks } from '@tipe/tipe-test-utils'

const user = mocks.user()
const documents = mocks.createManyMocks(
  () => mocks.file({ type: 'document' }),
  20
)
const folders = mocks.createManyMocks(() => mocks.file({ type: 'folder' }), 20)
const navLinks = [
  mocks.navLink({ icon: 'file', active: true }),
  mocks.navLink({ icon: 'image' }),
  mocks.navLink({ icon: 'layout' }),
  mocks.navLink({ icon: 'settings' })
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
