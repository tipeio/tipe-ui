import { storiesOf } from '@storybook/vue'
import TipeDocumentPage from '@/pages/document'
import documentMock from '@/mocks/Document'
import documentBlockMock from '@/mocks/DocumentBlock'
import blockOption from '@/mocks/BlockOption'
import userMock from '@/mocks/User'
import linkMock from '@/mocks/Link'
import navLinkMock from '@/mocks/NavLink'
import createManyMocks from '@/mocks/createManyMocks'

const user = userMock()
const navLinks = [
  navLinkMock({ icon: 'file', active: true }),
  navLinkMock({ icon: 'image' }),
  navLinkMock({ icon: 'layout' }),
  navLinkMock({ icon: 'settings' })
]

const blocks = [
  documentBlockMock({
    type: 'NUMBER',
    value: true,
    status: '',
    waiting: false,
    disabled: false
  }),
  documentBlockMock({
    type: 'NUMBER',
    value: true,
    status: 'success',
    waiting: false,
    disabled: false
  }),
  documentBlockMock({
    type: 'NUMBER',
    value: true,
    status: 'warning',
    waiting: false,
    disabled: false
  })
]

const breadcrumbLinks = createManyMocks(() => linkMock(), 3)

const document = documentMock({ blocks })

storiesOf('DocumentPage', module).add('default', () => ({
  components: { TipeDocumentPage },
  data() {
    return {
      styleObj: {
        height: '100%',
        width: '100%'
      },
      blockOptions: createManyMocks(blockOption, 3),
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
