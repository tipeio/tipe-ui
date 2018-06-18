import { storiesOf } from '@storybook/vue'

import TipeCheckbox from '../../src/components/Checkbox'

const style = () => ({
  width: '200px'
})

const props = () => ({
  label: 'Name',
  placeholder: 'Type your name here',
  value: 'Olivia',
  status: 'success'
})
storiesOf('Checkbox', module).add('default checkbox', () => ({
  components: { TipeCheckbox },
  computed: { style, props },
  template:
    '<div :style="style"><tipe-text-input label="Name" placeholder="Type your name here" /></div>'
}))
