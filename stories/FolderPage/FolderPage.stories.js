import { storiesOf } from '@storybook/vue'
import TipeFolderPage from '@/pages/folder'
import { mocks } from '@tipe/tipe-test-utils'

const user = mocks.user()
const navLinks = mocks.createManyMocks(() => mocks.navLink(), 3)
const documents = mocks.createManyMocks(
  () => mocks.file({ type: 'document' }),
  20
)
const folders = mocks.createManyMocks(() => mocks.file({ type: 'folder' }), 20)
const breadcrumbLinks = mocks.createManyMocks(() => mocks.link(), 3)

storiesOf('Folder Page', module).add('default', () => ({
  components: { TipeFolderPage },
  data() {
    return {
      user,
      navLinks,
      documents,
      folders,
      breadcrumbLinks
    }
  },
  template: `<tipe-folder-page
      :user="user"
      :navLinks="navLinks"
      :documents="documents"
      :folders="folders"
      :breadcrumbLinks="breadcrumbLinks"
    />`
}))
