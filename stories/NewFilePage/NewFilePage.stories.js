import { storiesOf } from '@storybook/vue'
import TipeNewFilePage from '@/pages/new_file'
import { mocks } from '@tipe/tipe-test-utils'

storiesOf('NewFilePage', module).add('default', () => ({
  components: { TipeNewFilePage },
  computed: {
    user() {
      return mocks.user()
    },
    navLinks() {
      return mocks.createManyMocks(mocks.navLink, 5)
    },
    breadcrumbLinks() {
      return mocks.createManyMocks(mocks.link, 2)
    },
    templates() {
      return mocks.createManyMocks(() => mocks.file({ type: 'document' }), 50)
    },
    folders() {
      return mocks.createManyMocks(() => mocks.file({ type: 'document' }), 50)
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
