import { storiesOf } from '@storybook/vue'
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeNumberInput from '@/components/NumberInput'
import { text } from '../../node_modules/@storybook/addon-knobs/dist/vue'

const notes = `
#### :props
:value | number |
:select | string | mini, small, medium, large
:min | number |
:max | number |
:step | number |

#### @events
@click($event)
@focus($event)
@blur($event)
@change($event)
`

storiesOf('NumberInput', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeNumberInput },
      data() {
        return {
          value: number('value', 3),
          placeholder: text('placeholder', 'Quantity'),
          size: select('size', ['mini', 'small', 'medium', 'large'], 'medium'),
          min: number('min', 0),
          max: number('max', 100),
          step: number('step', 1),
          status: select('status', ['', 'success', 'warning', 'error'], ''),
          disabled: boolean('disabled', false),
          waiting: boolean('waiting', false)
        }
      },
      methods: {
        click: action('click'),
        focus: action('focus'),
        blur: action('blur'),
        change: action('change')
      },
      template: `
        <tipe-number-input
          :value="value"
          :placeholder="placeholder"
          :size="size"
          :min="min"
          :max="max"
          :step="step"
          :status="status"
          :disabled="disabled"
          :waiting="waiting"
          @click="click"
          @focus="focus"
          @blur="blur"
          @change="change"
        />`
    }))
  )
