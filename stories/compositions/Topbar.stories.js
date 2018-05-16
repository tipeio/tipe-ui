import { storiesOf } from '@storybook/vue'
import TipeTopbar from '../../src/compositions/Topbar.vue'

storiesOf('Topbar', module).add('default', () => ({
  components: { TipeTopbar },
  template: '<tipe-topbar profileImageUrl="http://placekitten.com/200/200" />'
}))
