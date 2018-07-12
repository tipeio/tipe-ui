import { storiesOf } from '@storybook/vue'
import TipeSidebar from '../../src/components/Sidebar'
import { mocks } from '@tipe/tipe-test-utils'

storiesOf('Sidebar', module).add('default', () => ({
  components: { TipeSidebar },
  data() {
    return {
      links: [
        mocks.navLink({ icon: 'ic-document-square' }),
        mocks.navLink({ icon: 'ic-document-square' }),
        mocks.navLink({ icon: 'tipe-setting' }),
        mocks.navLink({ icon: 'ic-settings' })
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
