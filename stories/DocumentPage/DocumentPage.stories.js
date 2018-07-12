import { storiesOf } from '@storybook/vue'
import TipeDocumentPage from '@/pages/document'
import { mocks } from '@tipe/tipe-test-utils'

const user = mocks.user()
const navLinks = [
  mocks.navLink({ icon: 'file', active: true }),
  mocks.navLink({ icon: 'image' }),
  mocks.navLink({ icon: 'layout' }),
  mocks.navLink({ icon: 'settings' })
]

const blocks = [
  mocks.documentBlock({
    type: 'NUMBER',
    value: true,
    status: '',
    waiting: false,
    disabled: false
  }),
  mocks.documentBlock({
    type: 'NUMBER',
    value: true,
    status: 'success',
    waiting: false,
    disabled: false
  }),
  mocks.documentBlock({
    type: 'NUMBER',
    value: true,
    status: 'warning',
    waiting: false,
    disabled: false
  }),
  mocks.documentBlock({
    type: 'NUMBER',
    value: true,
    status: 'error',
    waiting: false,
    disabled: false
  })
]

const breadcrumbLinks = mocks.createManyMocks(() => mocks.link(), 3)

const document = mocks.document({ blocks })

storiesOf('DocumentPage', module).add('default', () => ({
  components: { TipeDocumentPage },
  data() {
    return {
      styleObj: {
        height: '100%',
        width: '100%'
      },
      blockOptions: mocks.createManyMocks(mocks.blockOption, 10),
      document,
      user,
      navLinks,
      breadcrumbLinks
    }
  },
  template: `
    <div :style="styleObj">
      <tipe-document-page
        :block-options="blockOptions"
        :document="document"
        :user="user"
        :nav-links="navLinks"
        :breadcrumb-links="breadcrumbLinks"
      />
    </div>`
}))
