import { storiesOf } from '@storybook/vue'
import TipeTemplateBrowser from '@/components/TemplateBrowser'
import fileMock from '@/mocks/File'
import createManyMocks from '@/mocks/createManyMocks'

const templates = createManyMocks(() => fileMock({ type: 'template' }), 30)

storiesOf('TemplateBrowser', module).add('default', () => ({
  components: { TipeTemplateBrowser },
  data() {
    return {
      templates
    }
  },
  template: `<tipe-template-browser :templates="templates"/>`
}))
