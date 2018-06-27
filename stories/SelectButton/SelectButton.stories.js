import { storiesOf } from '@storybook/vue'

import TipeSelect from '../../src/components/Select'

const options = () => [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' }
]
const style = () => ({
  width: '300px'
})
storiesOf('Select Button', module)
  .add('default', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button"/></div>'
  }))
  .add('with placeholder', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button" placeholder="Select a role..." /></div>'
  }))
  .add('default selected value', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" :defaultSelected="options[1]" type="button"" /></div>'
  }))
  .add('disabled', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button" :disabled="true" /></div>'
  }))
  .add('success', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button" color="success"/></div>'
  }))
  .add('danger', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select  :options="options" type="button" color="danger" /></div>'
  }))
  .add('warning', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button" color="warning"/></div>'
  }))
  .add('waiting', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button" :waiting="true"/></div>'
  }))
  .add('mini', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button" size="mini"/></div>'
  }))
  .add('small', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button" size="small"/></div>'
  }))
  .add('large', () => ({
    components: { TipeSelect },
    computed: { options, style },
    template:
      '<div :style="style"><tipe-select :options="options" type="button" size="large"/></div>'
  }))
  .add('no options', () => ({
    components: { TipeSelect },
    computed: { style },
    template:
      '<div :style="style"><tipe-select  type="button" size="large"/></div>'
  }))
