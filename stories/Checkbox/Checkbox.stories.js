import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  select,
  number,
  boolean,
  object
} from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeCheckbox from '../../src/components/Checkbox'
import { text } from '../../node_modules/@storybook/addon-knobs/dist/vue'

const notes = `
#### :props
:value | string or [string] |
:name | string |
:label | string |
:size | string | mini, small, medium, large
:waiting | boolean |
:disabled | boolean |
:tabIndex | number
#### @events
@click($event)
@blur($event)
@focus($event)
@change($event)
`

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeCheckbox },
      data() {
        return {
          value: object('value', ['javascript']),
          name: text('name', 'javascript'),
          label: text('label', 'JavaScript'),
          size: select('size', ['mini', 'small', 'medium', 'large'], 'medium'),
          status: select('status', ['', 'success', 'warning', 'error'], ''),
          waiting: boolean('waiting'),
          disabled: boolean('disabled'),
          tabIndex: number('tabIndex', 0)
        }
      },
      methods: {
        click: action('click'),
        blur: action('blur'),
        focus: action('focus'),
        change: action('change')
      },
      template: `
      <tipe-checkbox
        @click="click"
        @blur="blur"
        @focus="focus"
        @change="change"
        :name="name"
        :value="value"
        :label="label"
        :size="size"
        :status="status"
        :waiting="waiting"
        :disabled="disabled"
        :tabIndex="tabIndex"
        :value="value"
      />`
    }))
  )
