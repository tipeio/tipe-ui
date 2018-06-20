import { storiesOf } from '@storybook/vue'

import TipeCheckbox from '../../src/components/Checkbox'
import TipeCheckboxGroup from '../../src/components/CheckboxGroup'

const style = () => ({
  width: '200px'
})

storiesOf('Checkbox Group', module).add('default checkbox group', () => ({
  components: { TipeCheckbox, TipeCheckboxGroup },
  computed: { style },
  data() {
    return {
      options: [
        { label: 'Javascript', value: 'javascript', checked: true },
        { label: 'Python', value: 'python', checked: false }
      ]
    }
  },
  template: `
      <div :style="style"><tipe-checkbox-group
      name="Languages"
      :options="options"
    >
      <tipe-checkbox slot-scope="check">
        {{check.label}}
      </tipe-checkbox >
    </tipe-checkbox-group></div>
      `
}))
