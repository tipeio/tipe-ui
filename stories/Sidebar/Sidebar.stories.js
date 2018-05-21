import { storiesOf } from '@storybook/vue'
import TipeSidebar from '../../src/components/Sidebar'

storiesOf('Sidebar', module).add('default', () => ({
  components: { TipeSidebar },
  computed: {
    styleObj: () => ({
      height: '300px'
    })
  },
  template: '<div :style="styleObj"><tipe-sidebar /></div>'
}))
