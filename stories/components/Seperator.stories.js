import { storiesOf } from '@storybook/vue'

import TipeSeperator from '../../src/components/Seperator.vue'

storiesOf('Seperator', module).add('default', () => ({
  components: { TipeSeperator },
  template: '<tipe-seperator>😀 😎 👍 💯</tipe-seperator>'
}))
