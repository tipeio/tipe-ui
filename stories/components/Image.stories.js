import { storiesOf } from '@storybook/vue'

import TipeImage from '../../src/components/Image.vue'

storiesOf('Image', module).add('default', () => ({
  components: { TipeImage },
  template: '<tipe-image>😀 😎 👍 💯</tipe-image>'
}))
