import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeDropDown from '../../src/components/DropDown'
import TipeButton from '@/components/Button'

const notes = `
#### :props
:disabled | boolean |
:waiting | boolean |
:tabIndex | number |
`

storiesOf('DropDown', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeDropDown, TipeButton },
      data() {
        return {
          disabled: boolean('disabled', false),
          waiting: boolean('waiting', false),
          tabIndex: text('tabIndex', 0)
        }
      },
      template: `
        <tipe-drop-down
          :disabled="disabled"
          :waiting="waiting"
          :tabIndex="tabIndex"
        >
          <div slot="control">
            <tipe-button size="small">Click Me!</tipe-button>
          </div>
          <div slot="panel">
            <ul>
              <li>option</li>
              <li>option</li>
              <li>option</li>
            </ul>
          </div>
        </tipe-drop-down>`
    }))
  )
