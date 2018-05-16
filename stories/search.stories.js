import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import TipeSearch from '../src/components/Search.vue'

storiesOf('Search', module).add('default', () => ({
  components: { TipeSearch },
  template: '<tipe-search @click="action">😀 😎 👍 💯</tipe-search>',
  methods: { action: action('clicked') }
}))
