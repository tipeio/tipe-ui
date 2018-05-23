import { storiesOf } from '@storybook/vue'

import TipeSwitch from '../../src/components/Switch'

storiesOf('Tipe Switch', module).add('switch', () => ({
  components: { TipeSwitch },
  template: '<tipe-switch text="File Sharing" />'
}))
