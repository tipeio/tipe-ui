import { storiesOf } from '@storybook/vue'
import TipeDocumentPage from '@/pages/document'
import documentBlockMock from '@/mocks/DocumentBlock'
import blockOption from '@/mocks/BlockOption'
import userMock from '@/mocks/User'
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
    type: 'BOOLEAN',
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
    type: 'SIMPLE_TEXT',
    value: true,
    status: 'warning',
    waiting: false,
    disabled: false
  }),
  documentBlockMock({
    value: true,
    status: 'error',
    waiting: false,
    disabled: false
  }),
  documentBlockMock({
    value: true,
    status: '',
    waiting: true,
    disabled: false
  }),
  documentBlockMock({
    value: true,
    status: '',
    waiting: false,
    disabled: true
  })
]

storiesOf('DocumentPage', module).add('default', () => ({
  components: { TipeDocumentPage },
  data() {
    return {
      styleObj: {
        height: '100%',
        width: '100%'
      },
      blockOptions: createManyMocks(blockOption, 3),
      blocks,
      user,
      navLinks
    }
  },
  template: `
    <div :style="styleObj">
      <tipe-document-page
        :block-options="blockOptions"
        :blocks="blocks"
        :user="user"
        :nav-links="navLinks"
      />
    </div>`
}))
