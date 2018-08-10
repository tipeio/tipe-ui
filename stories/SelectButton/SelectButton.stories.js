import { storiesOf } from '@storybook/vue'
import { withKnobs, object, select } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeSelect from '../../src/components/Select'

const options = [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' }
]

const notes = `
#### :props
:options
#### @events
@change(value)
`

storiesOf('Select Button', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeSelect },
      data() {
        return {
          style: { width: '300px' },
          options: object('options', options),
          defaultSelected: object('defaultSelected', options[0]),
          color: select(
            'color',
            ['primary', 'info', 'none', 'success', 'danger', 'warning'],
            'primary'
          )
        }
      },
      methods: {
        change: action('change')
      },
      template: `
        <div :style="style">
          <tipe-select
            @change="change"
            :options="options"
            :defaultSelected="defaultSelected"
            :color="color"
            type="button"
          />
        </div>`
    }))
  )
