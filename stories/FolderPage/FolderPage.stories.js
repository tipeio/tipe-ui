import { storiesOf } from '@storybook/vue'
import TipeFolderPage from '@/pages/folder'
import userMock from '@/mocks/User'
import fileMock from '@/mocks/File'
import linkMock from '@/mocks/Link'
import navLinkMock from '@/mocks/NavLink'
import createManyMocks from '@/mocks/createManyMocks'

const user = userMock()
const navLinks = createManyMocks(() => navLinkMock(), 3)
const documents = createManyMocks(() => fileMock({ type: 'document' }), 20)
const folders = createManyMocks(() => fileMock({ type: 'folder' }), 20)
const breadcrumbLinks = createManyMocks(() => linkMock(), 3)

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
