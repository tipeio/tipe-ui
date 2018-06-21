import { storiesOf } from '@storybook/vue'

import TipeDropDown from '../../src/components/DropDown'
import TipeButton from '@/components/Button'

const style = () => ({
  width: '200px'
})

storiesOf('DropDown', module)
  .add('default', () => ({
    components: { TipeDropDown, TipeButton },
    computed: { style },
    template: `
      <tipe-drop-down name="firstName">
        <div slot="control"><tipe-button size="small">Click Me!</tipe-button></div>
        <div slot="panel">
          <ul>
            <li>option</li>
            <li>option</li>
            <li>option</li>
          </ul>
        </div>
      </tipe-drop-down>`
  }))
  .add('disabled', () => ({
    components: { TipeDropDown, TipeButton },
    computed: { style },
    template: `
      <tipe-drop-down name="firstName" disabled="true">
        <div slot="control"><tipe-button size="small" disabled>Click Me!</tipe-button></div>
        <div slot="panel">
          <ul>
            <li>option</li>
            <li>option</li>
            <li>option</li>
          </ul>
        </div>
      </tipe-drop-down>`
  }))
