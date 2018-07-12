import { storiesOf } from '@storybook/vue'
import TipeTemplatePage from '@/pages/template'
import { mocks } from '@tipe/tipe-test-utils'

const user = mocks.user()
const templates = mocks.createManyMocks(
  () => mocks.file({ type: 'template' }),
  30
)
const navLinks = [
  mocks.navLink({ icon: 'file', active: true }),
  mocks.navLink({ icon: 'image' }),
  mocks.navLink({ icon: 'layout' }),
  mocks.navLink({ icon: 'settings' })
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
