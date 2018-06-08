import { storiesOf } from '@storybook/vue'

import TipeSwitch from '../../src/components/Switch'

const style = () => ({
  width: '250px'
})
storiesOf('Switch', module).add('default', () => ({
  components: { TipeSwitch },
  computed: { style },
  template:
    '<div :style="style"><tipe-switch text="File Sharing" name="sharing"/></div>'
}))
