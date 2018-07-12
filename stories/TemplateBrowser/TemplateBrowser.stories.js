import { storiesOf } from '@storybook/vue'
import TipeTemplateBrowser from '@/components/TemplateBrowser'
import { mocks } from '@tipe/tipe-test-utils'

const templates = mocks.createManyMocks(
  () => mocks.file({ type: 'template' }),
  30
)

storiesOf('TemplateBrowser', module).add('default', () => ({
  components: { TipeTemplateBrowser },
  data() {
    return {
      templates
    }
  },
  template: `<tipe-template-browser :templates="templates"/>`
}))
