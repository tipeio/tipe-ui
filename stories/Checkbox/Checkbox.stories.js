import { storiesOf } from '@storybook/vue'

import TipeCheckbox from '../../src/components/Checkbox'

const style = () => ({
  width: '200px'
})

storiesOf('Checkbox', module)
  .add('default checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style },
    template: '<tipe-checkbox label="JavaScript" />'
  }))
  .add('small checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style },
    template: '<tipe-checkbox label="JavaScript" size="small" />'
  }))
  .add('large checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style },
    template: '<tipe-checkbox label="JavaScript" size="large"/>'
  }))
  .add('success checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style },
    template: '<tipe-checkbox label="JavaScript" status="success"/>'
  }))
  .add('warning checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style },
    template: '<tipe-checkbox label="JavaScript" status="warning"/>'
  }))
  .add('error checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style },
    template: '<tipe-checkbox label="JavaScript" status="error"/>'
  }))
  .add('waiting checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style },
    template: '<tipe-checkbox label="JavaScript" :waiting="true"/>'
  }))
  .add('disabled checkbox', () => ({
    components: { TipeCheckbox },
    computed: { style },
    template: '<tipe-checkbox label="JavaScript" :disabled="true"/>'
  }))
