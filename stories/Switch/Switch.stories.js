import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeSwitch from '../../src/components/Switch'

const notes = `
#### :props
:label | string |
:name | string |
:value | boolean |
:status | status | '', success, warning, error
:disabled | boolean |
:waiting | boolean |

#### @events
@click($event)
@focus($event)
@blur($event)
@change($event)
`

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeSwitch },
      data() {
        return {
          style: { width: '250px' },
          label: text('label'),
          name: text('name'),
          value: boolean('value'),
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
        <div :style="style">
          <tipe-switch
            :label="label"
            :name="name"
            :value="value"
            :status="status"
            :disabled="disabled"
            :waiting="waiting"
            @click="click"
            @focus="focus"
            @blur="blur"
            @change="change"
          />
        </div>`
    }))
  )
