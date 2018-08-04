import { storiesOf } from '@storybook/vue'

import TipeProgress from '../../src/components/Progress'

storiesOf('Progress', module).add('default', () => ({
  components: { TipeProgress },
  template: '<tipe-progress value="65" />'
}))
