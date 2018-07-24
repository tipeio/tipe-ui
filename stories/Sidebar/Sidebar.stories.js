import { storiesOf } from '@storybook/vue'
import TipeSidebar from '../../src/components/Sidebar'
import { mocks } from '@tipe/tipe-test-utils'

storiesOf('Sidebar', module).add('default', () => ({
  components: { TipeSidebar },
  data() {
    return {
      links: [
        mocks.navLink({ icon: 'files' }),
        mocks.navLink({ icon: 'media' }),
        mocks.navLink({ icon: 'template' }),
        mocks.navLink({ icon: 'gear' })
      ]
    }
  },
  computed: {
    styleObj: () => ({
      height: '500px'
    })
  },
  template: '<div :style="styleObj"><tipe-sidebar :links="links" /></div>'
}))
