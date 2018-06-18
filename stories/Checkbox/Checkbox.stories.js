import { storiesOf } from '@storybook/vue'

import TipeCheckbox from '../../src/components/Checkbox'

const style = () => ({
  width: '200px'
})

const props = () => ({
  label: 'Name',
  value: 'Olivia',
  status: 'success'
})
storiesOf('Checkbox', module).add('default checkbox', () => ({
  components: { TipeCheckbox },
  computed: { style, props },
  template: '<tipe-checkbox label="Name" />'
}))
