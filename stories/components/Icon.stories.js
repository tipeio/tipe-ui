import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import TipeIcon from '../../src/components/Icon.vue'

storiesOf('Icon', module).add('default', () => ({
  components: { TipeIcon },
  template: '<tipe-icon @click="action">😀 😎 👍 💯</tipe-icon>',
  methods: { action: action('clicked') }
}))
