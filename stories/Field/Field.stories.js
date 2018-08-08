import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeField from '../../src/components/Field'
import TipeTextInput from '../../src/components/TextInput'

const notes = `
#### :props
:name | string |
:label | string |
:status | string | '', success, warning, error,
:successMessage | string |
:warningMessage | string |
:errorMessage | string |
#### @events
@click($event)
@focus($event)
@blur($event)
@change($event)
`

storiesOf('Field', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeField, TipeTextInput },
      data() {
        return {
          style: { width: '200px' },
          name: text('name', 'FirstName'),
          label: text('label', 'First Name'),
          status: select('status', ['', 'success', 'warning', 'error'], ''),
          successMessage: text('successMessage', 'good to go'),
          warningMessage: text('warningMessage', 'double check that'),
          errorMessage: text('errorMessage', 'something went wrong')
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
          <tipe-field
            @click="click"
            @focus="focus"
            @blur="blur"
            @change="change"
            :name="name"
            :label="label"
            :status="status"
            :successMessage="successMessage"
            :warningMessage="warningMessage"
            :errorMessage="errorMessage"
          >
            <tipe-text-input
              placeholder="What is your first name?"
            />
          </tipe-field>
        </div>`
    }))
  )
