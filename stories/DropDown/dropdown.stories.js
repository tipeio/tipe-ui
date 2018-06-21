import { storiesOf } from '@storybook/vue'

import TipeDropDown from '../../src/components/DropDown'

const style = () => ({
  width: '200px'
})

storiesOf('DropDown', module)
  .add('default', () => ({
    components: { TipeDropDown },
    computed: { style },
    template: `
        <tipe-drop-down name="firstName">
          <div slot="control">hello world</div>
          <div slot="panel">goodbye world</div>
        </tipe-drop-down>`
  }))
  .add('disabled', () => ({
    components: { TipeDropDown },
    computed: { style },
    template: `
        <tipe-drop-down name="firstName" :disabled="false">
          <div slot="control" slot-scope="props">{{props.disabled}}</div>
          <div slot="panel">goodbye world</div>
        </tipe-drop-down>`
  }))
