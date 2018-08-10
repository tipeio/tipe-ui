import { storiesOf } from '@storybook/vue'
import { withKnobs, object } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeSelect from '../../src/components/Select'

const notes = `
#### :props
:options | { label: string, value: string }
#### @events
@change(value)
`

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeSelect },
      data() {
        return {
          style: { width: '300px' },
          options: object('options', [
            { label: 'Owner', value: 'owner' },
            { label: 'Admin', value: 'admin' },
            { label: 'Member', value: 'member' }
          ])
        }
      },
      methods: {
        change: () => {
          console.log('HELLO')
        }
      },
      template: `
        <div
          :style="style"
        >
          <tipe-select
            @change="change"
            :options="options"
          />
        </div>
      `
    }))
  )
