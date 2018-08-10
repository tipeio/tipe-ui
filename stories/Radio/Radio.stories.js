import { storiesOf } from '@storybook/vue'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeRadio from '../../src/components/Radio'
import { text } from '../../node_modules/@storybook/addon-knobs/dist/base'

const note = `
#### :props
:checked | boolean |
:size | string | mini, small, medium, large
:status | string | success, warning, error
:disabled | boolean |
:waiting | waiting |
:label | string |
:name | string |

@events
@click($event)
@focus($event)
@blur($event)
@change($event)
`

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(note)(() => ({
      components: { TipeRadio },
      computed: {
        style: { width: '200px' }
      },
      data() {
        return {
          checked: boolean('checked', false),
          size: select('size', ['mini', 'small', 'medium', 'large'], 'medium'),
          status: select('status', ['', 'success', 'warning', 'error'], ''),
          disabled: boolean('disabled', false),
          waiting: boolean('waiting', false),
          label: text('label', ''),
          name: text('name', '')
        }
      },
      methods: {
        click: action('click'),
        focus: action('focus'),
        blur: action('blur'),
        change: action('change')
      },
      template: `
        <tipe-radio
          @click="click"
          @focus="focus"
          @blur="blur"
          @change="change"
          :value="value"
          :checked="checked"
          :size="size"
          :status="status"
          :disabled="disabled"
          :waiting="waiting"
          :label="label"
          :name="language"
        />`
    }))
  )
