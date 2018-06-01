import { storiesOf } from '@storybook/vue'
import TipeNewFilePage from '@/pages/new_file'
import fileMock from '@/mocks/File'
import userMock from '@/mocks/User'
import navLinkMock from '@/mocks/NavLink'
import linkMock from '@/mocks/Link'
import createManyMocks from '@/mocks/createManyMocks'

storiesOf('NewFilePage', module).add('default', () => ({
  components: { TipeNewFilePage },
  computed: {
    user() {
      return userMock()
    },
    navLinks() {
      return createManyMocks(navLinkMock, 5)
    },
    breadcrumbLinks() {
      return createManyMocks(linkMock, 2)
    },
    templates() {
      return createManyMocks(() => fileMock({ type: 'document' }), 50)
    },
    folders() {
      return createManyMocks(() => fileMock({ type: 'document' }), 50)
    },
    styleObj() {
      return {
        height: '500px',
        width: '500px'
      }
    }
  },
  template: `
      <div :style="styleObj">
        <tipe-new-file-page
          :user="user"
          :nav-links="navLinks"
          :breadcrumb-links="breadcrumbLinks"
          :templates="templates"
          :folders="folders"
        />
      </div>`
}))
