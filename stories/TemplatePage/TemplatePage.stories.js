import { storiesOf } from '@storybook/vue'
import TipeTemplatePage from '@/pages/template'
import userMock from '@/mocks/User'
import fileMock from '@/mocks/File'
import navLinkMock from '@/mocks/NavLink'
import createManyMocks from '@/mocks/createManyMocks'

const user = userMock()
const templates = createManyMocks(() => fileMock({ type: 'template' }), 30)
const navLinks = [
  navLinkMock({ icon: 'file', active: true }),
  navLinkMock({ icon: 'image' }),
  navLinkMock({ icon: 'layout' }),
  navLinkMock({ icon: 'settings' })
]

storiesOf('Template Page', module).add('default', () => ({
  components: { TipeTemplatePage },
  data() {
    return {
      user,
      templates,
      navLinks
    }
  },
  template: `<tipe-template-page
      :user="user"
      :templates="templates"
      :navLinks="navLinks"
    />`
}))
