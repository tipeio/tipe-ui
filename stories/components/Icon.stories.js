import { storiesOf } from '@storybook/vue'

import TipeIcon from '../../src/components/Icon.vue'

storiesOf('Icon', module).add('default', () => ({
  components: { TipeIcon },
  computed: {
    style() {
      return {
        height: '1rem',
        width: '1rem'
      }
    }
  },
  template: '<tipe-icon :style="style" />'
}))
