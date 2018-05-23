import { storiesOf } from '@storybook/vue'

import TipeSwitch from '../../src/components/Switch'

const style = () => ({
  width: '250px'
})
storiesOf('Tipe Switch', module).add('switch', () => ({
  components: { TipeSwitch },
  computed: { style },
  template: '<div :style="style"><tipe-switch label="File Sharing" /></div>'
}))
