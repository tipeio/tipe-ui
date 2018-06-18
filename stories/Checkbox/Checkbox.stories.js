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
storiesOf('Checkbox', module)
  .add('default checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style, props },
    template: '<tipe-checkbox label="Name" />'
  }))
  .add('small checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style, props },
    template: '<tipe-checkbox label="Name" size="small" />'
  }))
  .add('large checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style, props },
    template: '<tipe-checkbox label="Name" size="large"/>'
  }))
  .add('success checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style, props },
    template: '<tipe-checkbox label="Name" status="success"/>'
  }))
  .add('warning checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style, props },
    template: '<tipe-checkbox label="Name" status="warning"/>'
  }))
  .add('error checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style, props },
    template: '<tipe-checkbox label="Name" status="error"/>'
  }))
