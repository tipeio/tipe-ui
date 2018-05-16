import { storiesOf } from '@storybook/vue'
import TipeSearch from '../../src/components/Search.vue'

storiesOf('Search', module).add('default', () => ({
  components: { TipeSearch },
  template: '<tipe-search />'
}))
