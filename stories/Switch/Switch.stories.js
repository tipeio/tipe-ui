import { storiesOf } from '@storybook/vue'

import TipeSwitch from '../../src/components/Switch'

const style = () => ({
  width: '250px'
})
storiesOf('Switch', module)
  .add('default', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing"/></div>'
  }))
  .add('disabled', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :disabled="true"/></div>'
  }))
  .add('checked', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :value="true"/></div>'
  }))
