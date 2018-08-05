import { storiesOf } from '@storybook/vue'
import TipeTextInput from '@/components/TextInput'
import TipeField from '@/components/Field'
import TipeCheckbox from '@/components/Checkbox'
import TipeButton from '@/components/Button'

storiesOf('Forms', module).add('Example: Signin', () => ({
  components: { TipeTextInput, TipeField, TipeCheckbox, TipeButton },
  data() {
    return {
      formStyle: {
        width: '18rem'
      }
    }
  },
  template: `
    <form :style="formStyle">
      <tipe-field label="EMAIL OR USERNAME:">
        <tipe-text-input placeholder="example@company.io"/>
      </tipe-field>
      <tipe-field label="PASSWORD:">
        <tipe-text-input placeholder="password"/>
      </tipe-field>
      <tipe-field>
        <tipe-checkbox label="Remember me" name="a" />
      </tipe-field>
      <tipe-button size="full">LOGIN</tipe-button>
    </form>
  `
}))
